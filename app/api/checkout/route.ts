import { NextResponse } from 'next/server';
import { auditOffer } from '@/lib/audit-offer';
import { getStripe, requireEnv, siteOrigin } from '@/lib/stripe';

export const runtime = 'nodejs';
// Never cached: every call must mint a fresh Checkout Session.
export const dynamic = 'force-dynamic';

/**
 * Creates a Stripe Checkout Session for the GTM Audit and returns its URL.
 *
 * The client posts here and then redirects. We deliberately do not accept a price,
 * an amount, or a product id from the request body: the only thing the caller can
 * influence is the prefilled email. Everything that determines what gets charged is
 * read server-side from STRIPE_AUDIT_PRICE_ID.
 */
export async function POST(request: Request) {
  try {
    const stripe = getStripe();
    const priceId = requireEnv('STRIPE_AUDIT_PRICE_ID');
    const origin = siteOrigin();

    // Optional prefill only. Anything else in the body is ignored on purpose.
    let prefillEmail: string | undefined;
    try {
      const body = (await request.json()) as { email?: unknown };
      if (typeof body.email === 'string' && body.email.includes('@')) {
        prefillEmail = body.email.trim().slice(0, 320);
      }
    } catch {
      // No body, or not JSON. Fine — email is optional.
    }

    // Sanity-check the Stripe Price against what the site advertises. This is the
    // guard against the failure mode that already bit this site once: a price
    // changing in one place and not the other. It warns rather than blocks, so a
    // deliberate price change does not take checkout down.
    try {
      const price = await stripe.prices.retrieve(priceId);
      if (
        price.unit_amount !== auditOffer.expectedAmountMinor ||
        price.currency !== auditOffer.currency
      ) {
        console.warn(
          `[checkout] price drift: Stripe has ${price.unit_amount} ${price.currency}, ` +
            `lib/audit-offer.ts advertises ${auditOffer.expectedAmountMinor} ${auditOffer.currency}. ` +
            `The customer is charged the Stripe amount. Update audit-offer.ts.`
        );
      }
    } catch (error) {
      console.warn(
        `[checkout] could not verify price ${priceId}: ${error instanceof Error ? error.message : error}`
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],

      customer_email: prefillEmail,
      // Always create a real Customer rather than a guest, so repeat buyers and the
      // eventual build invoice attach to one record.
      customer_creation: 'always',

      // Required for invoicing and for any future tax calculation.
      billing_address_collection: 'required',

      // B2B buyers need a document for expenses. Without this they get a receipt,
      // which finance teams routinely reject.
      invoice_creation: {
        enabled: true,
        invoice_data: {
          description: `${auditOffer.name} — structured review of CRM, outbound motion and reporting, with a prioritised fix list.`,
          footer: auditOffer.creditTerms,
          metadata: { product: 'gtm_audit' },
        },
      },

      // Up to three fields, 255 chars each (Stripe limit). These are the three
      // things needed to scope the audit before the working session.
      custom_fields: [
        {
          key: 'company',
          label: { type: 'custom', custom: 'Company name' },
          type: 'text',
          text: { maximum_length: 120 },
        },
        {
          key: 'website',
          label: { type: 'custom', custom: 'Company website' },
          type: 'text',
          text: { maximum_length: 200 },
        },
        {
          key: 'crm_state',
          label: { type: 'custom', custom: 'Current CRM' },
          type: 'dropdown',
          dropdown: {
            options: [
              { label: 'HubSpot Starter', value: 'hubspot_starter' },
              { label: 'HubSpot Professional', value: 'hubspot_professional' },
              { label: 'HubSpot Enterprise', value: 'hubspot_enterprise' },
              { label: 'Another CRM', value: 'other_crm' },
              { label: 'Spreadsheets, no CRM yet', value: 'spreadsheets' },
            ],
          },
        },
      ],

      // Tax is off by default and switched on with one env var. Whether this
      // business has to collect sales tax on a consulting engagement depends on
      // state nexus rules and is not a decision that belongs in code. Read
      // docs/STRIPE-CHECKOUT.md before flipping it.
      automatic_tax: { enabled: process.env.STRIPE_AUTOMATIC_TAX === 'true' },

      submit_type: 'pay',
      custom_text: {
        submit: {
          message: `After payment you will pick a time for the ${auditOffer.name} working session on the next screen.`,
        },
      },

      metadata: {
        product: 'gtm_audit',
        source: 'growthstackhq.com',
      },

      success_url: `${origin}/audit/confirmed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/audit?checkout=cancelled`,
    });

    if (!session.url) {
      throw new Error('Stripe returned a session without a URL');
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[checkout] failed to create session: ${message}`);
    // Deliberately generic to the client: server error text can leak configuration.
    return NextResponse.json(
      { error: 'Could not start checkout. Please try again or email hello@growthstackhq.com.' },
      { status: 500 }
    );
  }
}
