/**
 * Single source of truth for the GTM Audit offer.
 *
 * The price used to be hard-coded in five places, which is how "$1,200" ended up
 * attached to two different products on two different pages. Anything that shows
 * the price, the name, or the terms reads it from here.
 *
 * The authoritative *charged* amount lives in Stripe, on the Price object
 * referenced by STRIPE_AUDIT_PRICE_ID. `priceDisplay` below is presentation only.
 * If you change the price in Stripe, change it here too — and the runtime check in
 * app/api/checkout/route.ts will warn you in the server logs if the two drift.
 */
export const auditOffer = {
  name: 'GTM Audit',
  priceDisplay: '$1,200',
  /** Minor units, USD. Used only to sanity-check against the Stripe Price. */
  expectedAmountMinor: 120000,
  currency: 'usd',
  turnaround: '1 week',
  creditWindowDays: 30,
  deliverables: [
    'Review of current CRM structure, lifecycle stages, and pipeline',
    'Outbound motion audit: tooling, sequences, CRM connection',
    'Reporting and visibility assessment',
    'Prioritised fix list with clear sequencing',
    '60-minute working session to walk through findings',
  ],
  creditTerms:
    'The audit fee applies as a credit toward any build engagement booked within 30 days.',
} as const;

/** Where the buyer books the working session, after paying. */
export const auditBookingEvent =
  process.env.NEXT_PUBLIC_CAL_AUDIT_EVENT ?? 'growthstackhq/gtm-audit';
