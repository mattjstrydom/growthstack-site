import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AuditCheckoutButton from '@/components/AuditCheckoutButton';
import { Eyebrow, Section, SectionHeading } from '@/components/MarketingPrimitives';
import { auditOffer } from '@/lib/audit-offer';
import { absoluteUrl, jsonLd, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: `${auditOffer.name} — ${auditOffer.priceDisplay} | GrowthStack`,
  description: `A structured review of your CRM, outbound motion and reporting, with a prioritised fix list. ${auditOffer.priceDisplay}, credited toward any build booked within ${auditOffer.creditWindowDays} days.`,
  alternates: { canonical: absoluteUrl('/audit') },
  openGraph: {
    title: `${auditOffer.name} — ${auditOffer.priceDisplay} | GrowthStack`,
    description: `A structured review of your CRM, outbound motion and reporting, with a prioritised fix list.`,
    url: absoluteUrl('/audit'),
  },
};

export default async function AuditPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout?: string }>;
}) {
  const { checkout } = await searchParams;
  const cancelled = checkout === 'cancelled';

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: auditOffer.name,
    provider: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
    url: absoluteUrl('/audit'),
    description:
      'A structured review of CRM structure, outbound motion and reporting for early-stage B2B teams, with a prioritised fix list and a 60-minute working session.',
    offers: {
      '@type': 'Offer',
      price: (auditOffer.expectedAmountMinor / 100).toFixed(2),
      priceCurrency: auditOffer.currency.toUpperCase(),
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '68px' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(productJsonLd) }}
        />

        <Section tone="light" width={900}>
          <div className="mb-7">
            <Eyebrow>{auditOffer.name}</Eyebrow>
          </div>

          <h1 className="gs-display-lg" style={{ color: '#16181D', marginBottom: '20px' }}>
            Find out what is actually broken, before you rebuild anything.
          </h1>

          <p className="gs-lede" style={{ marginBottom: '32px' }}>
            A structured review of your CRM, your outbound motion and your reporting,
            ending in a prioritised fix list and a scope for whatever build makes
            sense next. You get the findings whether or not you work with us
            afterwards.
          </p>

          {cancelled && (
            <div
              role="status"
              className="gs-card"
              style={{
                padding: '18px 20px',
                marginBottom: '28px',
                borderColor: 'rgba(241,90,36,0.4)',
                background: '#FDFAF6',
              }}
            >
              <p style={{ fontSize: '0.95rem', color: '#4A4A4A', margin: 0 }}>
                Checkout was cancelled and you have not been charged. Nothing is lost:
                start again below whenever you are ready.
              </p>
            </div>
          )}

          <div
            className="gs-card"
            style={{ padding: '32px 30px', display: 'grid', gap: '26px' }}
          >
            <div>
              <div
                className="font-display"
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3rem)',
                  fontWeight: 500,
                  color: '#16181D',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {auditOffer.priceDisplay}
                <span
                  style={{
                    fontSize: '1rem',
                    color: '#8A8A8A',
                    fontWeight: 400,
                    letterSpacing: 0,
                    marginLeft: '10px',
                  }}
                >
                  one-time
                </span>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#4A4A4A', marginTop: '12px' }}>
                {auditOffer.creditTerms} Turnaround is {auditOffer.turnaround}.
              </p>
            </div>

            <div style={{ display: 'grid', gap: '14px' }}>
              {auditOffer.deliverables.map((item) => (
                <div key={item} className="gs-rule-item">
                  <span style={{ fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.7 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid #E7E2DA', paddingTop: '24px' }}>
              <AuditCheckoutButton
                label={`Pay ${auditOffer.priceDisplay} and book the session`}
                utmContent="audit_page_primary"
              />
            </div>
          </div>

          <p style={{ fontSize: '0.95rem', color: '#4A4A4A', marginTop: '28px', lineHeight: 1.7 }}>
            Not ready to pay for a review? Ask for a{' '}
            <a
              href="mailto:hello@growthstackhq.com?subject=Free%20portal%20teardown&body=Company%3A%20%0AHubSpot%20portal%20or%20website%3A%20%0AWhat%20feels%20most%20broken%20right%20now%3A%20"
              style={{ color: '#F15A24', fontWeight: 500 }}
            >
              free 10-minute portal teardown
            </a>{' '}
            first. No meeting required.
          </p>
        </Section>

        <Section tone="sand" width={900}>
          <SectionHeading
            eyebrow="What happens next"
            title="Pay, book, then we get to work."
          />
          <div style={{ display: 'grid', gap: '18px' }}>
            {[
              [
                '01',
                'You pay and pick a time',
                'Stripe handles the payment, then the next screen puts our calendar in front of you so the working session is booked before you close the tab.',
              ],
              [
                '02',
                'We review the portal',
                'You grant read access. We map the current CRM structure, lifecycle stages, pipeline, workflows, outbound tooling and reporting before forming any opinion.',
              ],
              [
                '03',
                'You get the fix list',
                'A written, prioritised list of what is broken and what order to fix it in, plus a specific scope and price for the build if you want one. Yours either way.',
              ],
            ].map(([num, title, body]) => (
              <div key={num} className="gs-card" style={{ padding: '26px 24px' }}>
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: '#F15A24',
                    marginBottom: '10px',
                  }}
                >
                  {num}
                </div>
                <h3 className="gs-display-md" style={{ color: '#16181D', marginBottom: '10px' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.7, margin: 0 }}>
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
