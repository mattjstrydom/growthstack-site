import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import { getStripe, requireEnv } from '@/lib/stripe';
import { upsertSubscriber } from '@/lib/sequenzy';

// Must run on Node: signature verification needs the raw body and Node crypto.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Stripe event destination.
 *
 * Contract with Stripe: return 2xx once we have safely recorded the event. If we
 * return non-2xx, Stripe retries. So the only things that may produce a non-2xx
 * here are a failed signature check (never retry-able, and a 400 is correct) and a
 * genuine inability to read the request. Downstream failures — Sequenzy being
 * down, for instance — are logged and swallowed, because retrying the whole event
 * to fix a CRM write would re-run every other side effect too.
 */
export async function POST(request: Request) {
  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const stripe = getStripe();
    const secret = requireEnv('STRIPE_WEBHOOK_SECRET');
    // Raw text, not request.json(): parsing first would break the signature.
    const payload = await request.text();
    event = await stripe.webhooks.constructEventAsync(payload, signature, secret);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[stripe-webhook] signature verification failed: ${message}`);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        await handleCheckoutCompleted(event.data.object, event.id);
        break;
      }

      case 'checkout.session.async_payment_succeeded': {
        // Delayed methods (e.g. bank debits) land here rather than on completed.
        await handleCheckoutCompleted(event.data.object, event.id);
        break;
      }

      case 'checkout.session.async_payment_failed': {
        const session = event.data.object;
        console.error(
          `[stripe-webhook] async payment failed session=${session.id} email=${session.customer_details?.email ?? 'unknown'}`
        );
        break;
      }

      case 'charge.refunded': {
        // Worth surfacing: a refund on the audit means the engagement is off, and
        // whatever downstream state was created needs undoing by hand for now.
        const charge = event.data.object;
        console.warn(`[stripe-webhook] refund recorded charge=${charge.id} amount=${charge.amount_refunded}`);
        break;
      }

      default:
        // Not an error. Stripe sends whatever the endpoint is subscribed to, and
        // subscribing broadly is fine as long as unknown types are a no-op.
        console.log(`[stripe-webhook] ignoring event type=${event.type}`);
    }
  } catch (error) {
    // Reached only on a programming error in a handler. Log it and still return
    // 200: a retry storm on a payment that already succeeded is worse than a
    // missed side effect we can replay from the Stripe dashboard.
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[stripe-webhook] handler threw for event=${event.id} type=${event.type}: ${message}`);
  }

  return NextResponse.json({ received: true });
}

async function handleCheckoutCompleted(
  session: Stripe.Checkout.Session,
  eventId: string
): Promise<void> {
  if (session.payment_status !== 'paid') {
    console.log(
      `[stripe-webhook] session=${session.id} completed but payment_status=${session.payment_status}, not fulfilling yet`
    );
    return;
  }

  const email = session.customer_details?.email;
  if (!email) {
    console.error(`[stripe-webhook] session=${session.id} has no customer email, cannot sync`);
    return;
  }

  const fields = readCustomFields(session);
  const fullName = session.customer_details?.name ?? '';
  const { firstName, lastName } = splitName(fullName);

  const amountMinor = session.amount_total ?? 0;
  const currency = (session.currency ?? 'usd').toUpperCase();

  // Sequenzy is an email/sequences platform, so the record is a subscriber with
  // tags and custom attributes rather than a CRM deal. Tags are what automations
  // key off, so they carry the meaning; attributes carry the detail.
  const result = await upsertSubscriber({
    email,
    firstName: firstName || undefined,
    lastName: lastName || undefined,
    tags: ['customer', 'gtm-audit-purchased'],
    customAttributes: {
      company: fields.company ?? '',
      website: fields.website ?? '',
      crm_state: fields.crm_state ?? '',
      audit_purchased_at: new Date(session.created * 1000).toISOString(),
      audit_amount: (amountMinor / 100).toFixed(2),
      audit_currency: currency,
      stripe_customer_id: typeof session.customer === 'string' ? session.customer : '',
      stripe_session_id: session.id,
      source: 'stripe_checkout',
    },
    // Merge so a Stripe retry, or a later form fill, cannot overwrite good data.
    duplicateStrategy: 'merge',
  });

  if (result.ok) {
    console.log(
      `[stripe-webhook] synced to Sequenzy event=${eventId} session=${session.id} ` +
        `subscriber=${result.subscriberId ?? 'unknown'} created=${result.created ?? false}`
    );
  } else {
    // Loud, and deliberately recoverable by hand: the Stripe dashboard has the
    // full session, so this can be replayed once Sequenzy is reachable.
    console.error(
      `[stripe-webhook] SEQUENZY SYNC FAILED — replay this event from the Stripe dashboard. ` +
        `event=${eventId} session=${session.id} reason=${result.error} retryable=${result.retryable}`
    );
  }

  // Extension point: anything else that should happen on a paid audit goes here.
  // Keep each side effect independently failable, and keep them all idempotent,
  // because Stripe will occasionally deliver the same event twice.
}

/** Flattens Checkout custom_fields into a plain object keyed by field key. */
function readCustomFields(session: Stripe.Checkout.Session): Record<string, string | undefined> {
  const out: Record<string, string | undefined> = {};
  for (const field of session.custom_fields ?? []) {
    switch (field.type) {
      case 'text':
        out[field.key] = field.text?.value ?? undefined;
        break;
      case 'numeric':
        out[field.key] = field.numeric?.value ?? undefined;
        break;
      case 'dropdown':
        out[field.key] = field.dropdown?.value ?? undefined;
        break;
    }
  }
  return out;
}

function splitName(full: string): { firstName: string; lastName: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: '', lastName: '' };
  if (parts.length === 1) return { firstName: parts[0], lastName: '' };
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') };
}
