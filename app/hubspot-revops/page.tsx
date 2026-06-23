import type { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';
import { absoluteUrl, jsonLd, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'HubSpot Setup & RevOps for Early-Stage B2B SaaS | GrowthStack',
  description:
    'GrowthStack sets up and rebuilds HubSpot for early-stage B2B teams — lifecycle stages, pipeline, workflows, reporting, and CRM cleanup. Fixed scope, 10-day delivery.',
  alternates: {
    canonical: absoluteUrl('/hubspot-revops'),
  },
  openGraph: {
    title: 'HubSpot Setup & RevOps for Early-Stage B2B SaaS | GrowthStack',
    description:
      'GrowthStack sets up and rebuilds HubSpot for early-stage B2B teams — lifecycle stages, pipeline, workflows, reporting, and CRM cleanup. Fixed scope, 10-day delivery.',
    url: absoluteUrl('/hubspot-revops'),
    images: [
      {
        url: absoluteUrl('/hubspot-revops/opengraph-image'),
        width: 1200,
        height: 630,
        alt: 'GrowthStack HubSpot and RevOps preview image',
      },
    ],
  },
  twitter: {
    title: 'HubSpot Setup & RevOps for Early-Stage B2B SaaS | GrowthStack',
    description:
      'GrowthStack sets up and rebuilds HubSpot for early-stage B2B teams — lifecycle stages, pipeline, workflows, reporting, and CRM cleanup. Fixed scope, 10-day delivery.',
    images: [absoluteUrl('/hubspot-revops/twitter-image')],
  },
};

const faqItems = [
  {
    question: 'Can you work in an existing HubSpot portal?',
    answer:
      'Yes. Most of the work starts in an existing portal. We audit what is there, decide what to keep, and rebuild the structural layer properly.',
  },
  {
    question: 'Do you handle the CRM only or the wider GTM system too?',
    answer:
      'Both. This page is HubSpot-specific, but the work usually overlaps with lifecycle design, outbound connection, routing, and reporting across the full stack.',
  },
];

export default function HubspotRevopsPage() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HubSpot Setup and RevOps Support',
    url: absoluteUrl('/hubspot-revops'),
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'Global',
    serviceType: [
      'HubSpot setup',
      'HubSpot cleanup',
      'Pipeline design',
      'Lifecycle stage design',
      'Workflow automation',
      'RevOps support',
    ],
    description:
      'GrowthStack sets up and rebuilds HubSpot for early-stage B2B teams — lifecycle stages, pipeline, workflows, reporting, and CRM cleanup. Fixed scope, 10-day delivery.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: absoluteUrl('/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'HubSpot & RevOps',
        item: absoluteUrl('/hubspot-revops'),
      },
    ],
  };

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '68px' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }}
        />
        <section style={{ background: '#ffffff url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e5e7eb\' fill-opacity=\'0.5\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', padding: '72px 0 64px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <div
              className="inline-flex items-center font-bold uppercase tracking-[0.1em] mb-6"
              style={{ fontSize: '0.72rem', color: '#F15A24', background: 'transparent', padding: '5px 13px', border: '1px dashed rgba(241,90,36,0.6)', borderRadius: '4px', letterSpacing: '0.1em', fontWeight: 600 }}
              >
                HubSpot and RevOps
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#fff',
                  borderRadius: '12px',
                  padding: '10px 14px',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <Image
                  src="/tool-logos/Hubspot.svg"
                  alt="HubSpot"
                  width={116}
                  height={28}
                  style={{ width: 'auto', height: '24px' }}
                />
              </div>
            </div>
            <h1 className="font-bold text-[#1a1a1a] mb-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)', maxWidth: '820px', lineHeight: 1.1 }}>
              HubSpot set up properly — not just switched on.
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#555555', maxWidth: '700px', lineHeight: 1.7 }}>
              Most early-stage B2B teams have HubSpot. Very few have it set up in a
              way that reflects how their revenue actually moves. We fix that — in
              10 days, with full documentation, and without an ongoing retainer to
              keep it working.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '72px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                Problem
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A' }}>
                What a broken HubSpot setup actually costs you.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
              {[
                {
                  title: 'Invisible pipeline',
                  body: "When lifecycle stages don't match the real funnel, you can't see conversion rates by stage. You can't tell where deals stall. You can't answer investor questions without manually pulling numbers from three places.",
                },
                {
                  title: 'Broken team trust',
                  body: "When reps don't trust the CRM, they stop using it. Deals get tracked in personal spreadsheets. Follow-up depends on memory. Ownership disputes slow everything down.",
                },
                {
                  title: 'Outbound disconnected from the system',
                  body: "When outbound lives outside HubSpot — replies in inboxes, statuses in spreadsheets, next steps in Slack — pipeline generated from outbound is invisible. You can't attribute it, report on it, or improve it.",
                },
              ].map((item) => (
                <div key={item.title} style={{ background: '#FDFAF6', border: '1px solid #E2E5E2', borderRadius: '18px', padding: '24px' }}>
                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.75 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#FDFAF6', borderTop: '1px solid #E2E5E2', borderBottom: '1px solid #E2E5E2', padding: '72px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                What We Fix
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A' }}>
                What a properly built HubSpot looks like.
              </h2>
            </div>
            <div style={{ overflowX: 'auto', background: '#fff', border: '1px solid #E2E5E2', borderRadius: '16px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '760px' }}>
                <tbody>
                  {[
                    ['Lifecycle stages no one uses consistently', 'Stages that match how revenue actually moves, with clear entry and exit criteria'],
                    ["Pipeline that doesn't reflect real deal flow", "Deal stages and properties the team actually updates — because they're useful"],
                    ['Duplicate and confusing properties', 'Clean property architecture supporting reporting and workflow logic'],
                    ['Workflows that surprise the team or do nothing', 'Automation that handles routing, handoffs, and tasks — transparently'],
                    ['Dashboards nobody trusts', 'Reporting that answers the questions leadership actually asks'],
                    ['Outbound disconnected from CRM', 'Outbound replies, statuses, and next steps flowing back into HubSpot automatically'],
                  ].map(([broken, fixed]) => (
                    <tr key={broken}>
                      <td style={{ width: '40%', padding: '18px 20px', borderBottom: '1px solid #E2E5E2', color: '#8A4A3B', fontWeight: 600 }}>{broken}</td>
                      <td style={{ padding: '18px 20px', borderBottom: '1px solid #E2E5E2', color: '#1A1A1A', lineHeight: 1.65 }}>{fixed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '72px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                Proof
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A' }}>
                Results from real builds.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
              {[
                {
                  stat: '90% reduction in sales response time',
                  body: 'Rebuilt lead routing and ownership assignment inside HubSpot for a B2B SaaS team. Speed-to-lead dropped from 6 hours to 22 minutes. The fix was structural — ownership rules, routing workflows, and notification logic that had never been set up properly.',
                },
                {
                  stat: '12% → 23% lead-to-opportunity conversion in 60 days',
                  body: 'Rebuilt the full GTM motion — ICP definition, CRM stage structure, outbound tooling, and CRM handoffs. Conversion improved because the system finally tracked and managed leads the way the funnel actually works.',
                },
              ].map((item) => (
                <div key={item.stat} style={{ background: '#FDFAF6', border: '1px solid #ECE6DE', borderRadius: '18px', padding: '24px' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#F15A24', lineHeight: 1.15, marginBottom: '12px' }}>{item.stat}</div>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.75 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#FDFAF6', borderTop: '1px solid #EAE4DB', borderBottom: '1px solid #EAE4DB', padding: '72px 0' }}>
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>
                Common questions about HubSpot and RevOps support
              </h2>
            </div>

            <div style={{ display: 'grid', gap: '18px' }}>
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #ECE6DE',
                    borderRadius: '16px',
                    padding: '22px',
                  }}
                >
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '10px' }}>
                    {item.question}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.75 }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#0F1B2D', padding: '72px 0', textAlign: 'center' }}>
          <div className="max-w-[640px] mx-auto px-6 lg:px-8">
            <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              See what's actually broken in your HubSpot.
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', marginBottom: '32px' }}>
              The audit starts with a structured review of your current portal —
              lifecycle stages, pipeline, properties, workflows, ownership, and
              reporting. You get a specific findings document and a prioritised fix
              list.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <BookDiscoveryButton
                utmContent="hubspot_revops_cta"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold rounded-lg cursor-pointer"
                style={{
                  background: '#F15A24',
                  padding: '14px 36px',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                boxShadow: '0 8px 24px rgba(15,27,45,0.16)',
              }}
              hoverStyle={{ background: '#D44E1E', boxShadow: '0 10px 28px rgba(15,27,45,0.2)' }}
              >
                Book a GTM Audit — $1,200
              </BookDiscoveryButton>
              <BookDiscoveryButton
                utmContent="hubspot_revops_discovery"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold rounded-lg cursor-pointer"
                style={{
                  background: 'transparent',
                  padding: '14px 36px',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                  border: '2px solid rgba(255,255,255,0.24)',
                  color: '#fff',
                }}
                hoverStyle={{ background: 'rgba(255,255,255,0.05)' }}
              >
                Book a free discovery call first
              </BookDiscoveryButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
