import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';
import { absoluteUrl, jsonLd, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'GTM & HubSpot RevOps Services for B2B SaaS Startups | GrowthStack',
  description:
    'GrowthStack builds HubSpot foundations, workflow automation, outbound infrastructure, and GTM systems for early-stage B2B teams. Fixed scope. 10-day delivery. You own everything.',
  alternates: {
    canonical: absoluteUrl('/services'),
  },
  openGraph: {
    title: 'GTM & HubSpot RevOps Services for B2B SaaS Startups | GrowthStack',
    description:
      'GrowthStack builds HubSpot foundations, workflow automation, outbound infrastructure, and GTM systems for early-stage B2B teams. Fixed scope. 10-day delivery. You own everything.',
    url: absoluteUrl('/services'),
    images: [
      {
        url: absoluteUrl('/services/opengraph-image'),
        width: 1200,
        height: 630,
        alt: 'GrowthStack services preview image',
      },
    ],
  },
  twitter: {
    title: 'GTM & HubSpot RevOps Services for B2B SaaS Startups | GrowthStack',
    description:
      'GrowthStack builds HubSpot foundations, workflow automation, outbound infrastructure, and GTM systems for early-stage B2B teams. Fixed scope. 10-day delivery. You own everything.',
    images: [absoluteUrl('/services/twitter-image')],
  },
};

const faqItems = [
  {
    question: 'What service do most teams start with?',
    answer:
      'Most teams start with either the GTM Audit or the GTM Foundation Build. The right starting point depends on whether the bigger issue is knowing what is broken or already knowing it needs to be rebuilt.',
  },
  {
    question: 'Can you help with HubSpot without rebuilding the full GTM motion?',
    answer:
      'Yes. HubSpot Cleanup & RevOps Rebuild is designed for teams whose main problem is the CRM layer rather than the entire outbound and activation stack.',
  },
  {
    question: 'Do you do implementation or only recommendations?',
    answer:
      'Implementation. Every offer is built around delivering working infrastructure in your tools, with documentation and handover included.',
  },
  {
    question: 'How do we know which service fits?',
    answer:
      'That is usually what the discovery call or audit is for. We look at the current setup and recommend the shortest path to a system your team can actually run.',
  },
];

const serviceCards = [
  {
    title: 'GTM Foundation Build',
    who: "Teams that are past founder-led selling but haven't formalised the system yet. The CRM exists but doesn't reflect how revenue moves. Follow-up is inconsistent. No one can tell you conversion rates by stage without pulling numbers manually.",
    items: [
      'HubSpot contact, company, and deal property architecture',
      'Lifecycle stage design matched to your actual funnel',
      'Pipeline setup with stage-specific exit criteria',
      'Lead ownership and routing rules',
      'Core dashboards: source-to-pipeline, stage conversion, deal velocity',
      'Workflow automation for routing, task creation, and handoffs',
      'Full documentation of everything built',
    ],
    outcome:
      'A CRM your team trusts, a pipeline they can act on, and reporting that answers the questions leadership actually asks.',
    delivery: '10 days from kickoff',
  },
  {
    title: 'HubSpot Cleanup & RevOps Rebuild',
    who: "Teams that already have HubSpot live but it's no longer working. Duplicate properties. Broken workflows. Lifecycle stages that haven't been touched since the original setup. Dashboards nobody looks at because nobody trusts them.",
    items: [
      'Full audit of current portal structure before any changes',
      'Property consolidation and archive of redundant fields',
      'Workflow audit — what stays, what gets fixed, what gets cut',
      'Lifecycle stage and pipeline rebuild to match current motion',
      'Reporting rebuild with dashboards that answer real questions',
      'Documentation of what changed and why',
    ],
    outcome:
      "A portal that reflects what's actually happening in the business — and guardrails so it stays clean.",
    delivery: '5–15 days depending on portal complexity',
  },
  {
    title: 'Outbound Infrastructure Build',
    who: "Teams that know outbound needs to happen properly but haven't been able to build it. You've tried some version of cold email. Results were underwhelming. You're not sure if the problem was the list, the copy, the tooling, or all three.",
    items: [
      'ICP definition and segmentation framework',
      'Clay enrichment workflow for signal-based lead building',
      'Apollo or Instantly sending infrastructure setup',
      'Multi-channel sequence architecture (email + LinkedIn where relevant)',
      'CRM integration so replies, statuses, and next steps flow back into HubSpot automatically',
      'Reporting to track open rate, reply rate, meetings booked, and pipeline generated',
      'Full documentation and handover',
    ],
    outcome:
      "A working outbound system that generates pipeline inside your CRM — not in someone's inbox.",
    delivery: '10–15 days from kickoff',
  },
  {
    title: 'GTM Audit',
    price: '$1,200',
    who: "Teams that aren't sure what to fix first. You know the commercial system has problems but you don't know whether the priority is the CRM, the outbound motion, the reporting, or all of it.",
    items: [
      'Review of current CRM structure, lifecycle stages, and pipeline',
      'Outbound motion audit — tooling, sequences, CRM connection',
      'Reporting and visibility assessment',
      'Prioritised fix list with clear sequencing',
      '60-minute working session to walk through findings',
    ],
    outcome:
      "A clear map of what's broken, what to fix first, and why — with specific scope for whatever build makes sense next.",
    note:
      'The audit fee applies as a credit toward any subsequent build engagement.',
  },
] as const;

export default function ServicesPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Services', item: absoluteUrl('/services') },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GTM & HubSpot RevOps Services',
    url: absoluteUrl('/services'),
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'Global',
    serviceType: [
      'GTM foundation build',
      'HubSpot cleanup',
      'RevOps rebuild',
      'Outbound infrastructure',
      'GTM audit',
    ],
    description:
      'GrowthStack builds HubSpot foundations, workflow automation, outbound infrastructure, and GTM systems for early-stage B2B teams. Fixed scope. 10-day delivery. You own everything.',
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

        <section style={{ background: '#0F1B2D', padding: '72px 0 64px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div
              className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full mb-6"
              style={{ fontSize: '0.72rem', color: '#F15A24', background: 'rgba(241,90,36,0.08)', padding: '5px 12px', border: '1px solid rgba(241,90,36,0.25)', letterSpacing: '0.08em' }}
            >
              Services
            </div>
            <h1 className="font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)', maxWidth: '840px' }}>
              The GTM system your team can actually run.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)', maxWidth: '720px', lineHeight: 1.7 }}>
              Not a strategy engagement. Not an ongoing retainer. A working
              commercial infrastructure — built, documented, and handed over in 10
              days.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '72px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                Service Blocks
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>
                Four ways to fix the system.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
              {serviceCards.map((item) => (
                <div
                  key={item.title}
                  className="services-offer-card"
                  style={{
                    background: '#FDFAF6',
                    border: '1px solid #E2E5E2',
                    borderRadius: '18px',
                    padding: '24px',
                  }}
                >
                  {'price' in item && item.price && (
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#F15A24', marginBottom: '10px' }}>
                      {item.price}
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '14px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.75, marginBottom: '14px' }}>
                    {item.who}
                  </p>
                  <div style={{ display: 'grid', gap: '10px', marginBottom: '14px' }}>
                    {item.items.map((bullet) => (
                      <div key={bullet} style={{ display: 'flex', gap: '10px', fontSize: '0.92rem', color: '#333', lineHeight: 1.65 }}>
                        <span style={{ color: '#F15A24', fontWeight: 700 }}>+</span>
                        {bullet}
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#1A1A1A', lineHeight: 1.7, marginBottom: '10px', fontWeight: 600 }}>
                    {item.outcome}
                  </p>
                  {'delivery' in item && item.delivery && (
                    <p style={{ fontSize: '0.86rem', color: '#8a8a8a', lineHeight: 1.6, marginBottom: 0 }}>
                      Delivery: {item.delivery}
                    </p>
                  )}
                  {'note' in item && item.note && (
                    <p style={{ fontSize: '0.86rem', color: '#8a8a8a', lineHeight: 1.6, marginBottom: 0 }}>
                      {item.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: '22px',
                background: '#FDFAF6',
                border: '1px solid #ECE6DE',
                borderRadius: '18px',
                padding: '22px',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '10px' }}>
                Already have HubSpot live?
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '10px' }}>
                Start with HubSpot cleanup instead of a broader rebuild
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.75, marginBottom: '14px' }}>
                If the portal is already there but the structure is messy, the faster
                path is usually cleanup: lifecycle stages, fields, workflows,
                reporting, and ownership logic made usable again.
              </p>
              <Link href="/hubspot-cleanup" style={{ color: '#F15A24', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>
                See HubSpot cleanup →
              </Link>
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
                Common questions about the services
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
              Need help deciding which service fits?
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', marginBottom: '32px' }}>
              Book a discovery call and we&apos;ll tell you whether you need a GTM
              audit, a foundation build, a HubSpot rebuild, or outbound
              infrastructure next.
            </p>
            <BookDiscoveryButton
              utmContent="services_cta"
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
              Book a Discovery Call
            </BookDiscoveryButton>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 640px) {
          .services-offer-card {
            border-radius: 14px !important;
          }
        }
      `}</style>
    </>
  );
}
