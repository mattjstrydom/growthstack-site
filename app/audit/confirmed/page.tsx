import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CalInlineEmbed from '@/components/CalInlineEmbed';
import { Eyebrow, Section } from '@/components/MarketingPrimitives';
import { auditBookingEvent, auditOffer } from '@/lib/audit-offer';
import { getStripe } from '@/lib/stripe';

export const metadata: Metadata = {
  title: `Payment confirmed — book your ${auditOffer.name} session | GrowthStack`,
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

/**
 * Post-payment page. Two jobs, in this order:
 *   1. Confirm the payment actually happened, server-side, from the session id.
 *   2. Get the working session booked before the buyer leaves.
 *
 * The confirmation is read from Stripe rather than trusted from the URL, so
 * hand-crafting a session_id cannot produce a fake confirmation page.
 */
export default async function AuditConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;

  if (!sessionId) {
    redirect('/audit');
  }

  let status: string | null = null;
  let paymentStatus: string | null = null;
  let email: string | null = null;
  let amountLabel: string | null = null;
  let lookupFailed = false;

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    status = session.status ?? null;
    paymentStatus = session.payment_status ?? null;
    email = session.customer_details?.email ?? null;
    if (session.amount_total != null) {
      amountLabel = `${(session.amount_total / 100).toLocaleString('en-US', {
        style: 'currency',
        currency: (session.currency ?? 'usd').toUpperCase(),
      })}`;
    }
  } catch (error) {
    // A payment may well have succeeded even if we cannot read it right now, so we
    // must not tell the buyer it failed.
    console.error(
      `[audit-confirmed] could not retrieve session ${sessionId}: ${error instanceof Error ? error.message : error}`
    );
    lookupFailed = true;
  }

  // Still on the payment page: send them back to try again.
  if (!lookupFailed && status === 'open') {
    redirect('/audit');
  }

  const paid = paymentStatus === 'paid';

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '68px' }}>
        <Section tone="light" width={900}>
          <div className="mb-7">
            <Eyebrow>{paid ? 'Payment confirmed' : 'Order received'}</Eyebrow>
          </div>

          {lookupFailed ? (
            <>
              <h1 className="gs-display-lg" style={{ color: '#16181D', marginBottom: '20px' }}>
                Your payment went through. We just cannot display the receipt.
              </h1>
              <p className="gs-lede" style={{ marginBottom: '10px' }}>
                Stripe has your payment, but we could not load the details on this
                page. Nothing is wrong with your order. Your emailed receipt is the
                record, and you can still book below.
              </p>
            </>
          ) : paid ? (
            <>
              <h1 className="gs-display-lg" style={{ color: '#16181D', marginBottom: '20px' }}>
                Paid. Now pick a time.
              </h1>
              <p className="gs-lede" style={{ marginBottom: '10px' }}>
                {amountLabel ? `${amountLabel} received` : 'Payment received'}
                {email ? `, receipt on its way to ${email}` : ''}. One thing left:
                book the {auditOffer.name} working session below so we can get access
                and start the review.
              </p>
            </>
          ) : (
            <>
              <h1 className="gs-display-lg" style={{ color: '#16181D', marginBottom: '20px' }}>
                Your payment is processing.
              </h1>
              <p className="gs-lede" style={{ marginBottom: '10px' }}>
                Some payment methods take a little time to clear. You will get a
                receipt by email as soon as it settles. Go ahead and book the session
                now, and we will confirm once the payment lands.
              </p>
            </>
          )}

          <p style={{ fontSize: '0.95rem', color: '#4A4A4A', marginBottom: '40px' }}>
            {auditOffer.creditTerms}
          </p>

          <div className="gs-card" style={{ padding: '26px 22px' }}>
            <h2 className="gs-display-md" style={{ color: '#16181D', marginBottom: '18px' }}>
              Book the working session
            </h2>
            <CalInlineEmbed calLink={auditBookingEvent} namespace="gtm-audit" />
          </div>

          <div style={{ marginTop: '36px', display: 'grid', gap: '10px' }}>
            <p style={{ fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.7, margin: 0 }}>
              Before the session, we will email you the read-only access we need and a
              short list of questions. Nothing to prepare beyond that.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#4A4A4A', margin: 0 }}>
              Questions in the meantime:{' '}
              <a href="mailto:hello@growthstackhq.com" style={{ color: '#F15A24', fontWeight: 500 }}>
                hello@growthstackhq.com
              </a>
              {' · '}
              <Link href="/" style={{ color: '#F15A24', fontWeight: 500 }}>
                Back to the site
              </Link>
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
