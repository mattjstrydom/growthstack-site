import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';
import { absoluteUrl, jsonLd, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services | GrowthStack',
  description:
    'GrowthStack services for early-stage B2B startups: GTM foundation, HubSpot and RevOps, pipeline activation, and ongoing optimisation.',
  alternates: {
    canonical: absoluteUrl('/services'),
  },
  openGraph: {
    title: 'Services | GrowthStack',
    description:
      'GrowthStack services for early-stage B2B startups: GTM foundation, HubSpot and RevOps, pipeline activation, and ongoing optimisation.',
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
    title: 'Services | GrowthStack',
    description:
      'GrowthStack services for early-stage B2B startups: GTM foundation, HubSpot and RevOps, pipeline activation, and ongoing optimisation.',
    images: [absoluteUrl('/services/twitter-image')],
  },
};

export default function ServicesPage() {
  const faqItems = [
    {
      question: 'What service do most teams start with?',
      answer:
        'Most early-stage teams start with either a GTM foundation build or a HubSpot cleanup, depending on whether the bigger issue is missing structure or a messy existing system.',
    },
    {
      question: 'Can you help with HubSpot without managing outbound?',
      answer:
        'Yes. GrowthStack can work purely on HubSpot, lifecycle stages, pipeline design, workflows, and reporting without taking on outbound execution.',
    },
    {
      question: 'Do you offer ongoing support after the initial build?',
      answer:
        'Yes. Ongoing support can cover CRM hygiene, workflow refinement, reporting improvements, pipeline visibility, and activation support once the system is in place.',
    },
    {
      question: 'How do we know which service fits?',
      answer:
        'That is usually what the discovery call is for. We look at your current setup and recommend the shortest path to a usable commercial system.',
    },
  ];

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
    name: 'GTM Systems and RevOps Services',
    url: absoluteUrl('/services'),
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'Global',
    serviceType: [
      'GTM foundation',
      'HubSpot setup',
      'RevOps support',
      'Pipeline activation',
      'Workflow automation',
      'Reporting and optimisation',
    ],
    description:
      'GrowthStack services for early-stage B2B startups: GTM foundation, HubSpot and RevOps, pipeline activation, and ongoing optimisation.',
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
              style={{ fontSize: '0.72rem', color: '#F15A24', background: 'rgba(241,90,36,0.12)', padding: '6px 14px', border: '1px solid rgba(241,90,36,0.25)' }}
            >
              Services
            </div>
            <h1 className="font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)', maxWidth: '840px' }}>
              The systems behind repeatable pipeline, packaged for early-stage B2B teams.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)', maxWidth: '720px', lineHeight: 1.7 }}>
              GrowthStack helps founders move from scattered sales activity to a
              working GTM engine through CRM structure, HubSpot setup, workflow
              automation, reporting, and activation support.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '72px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                Core Offers
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>
                What we actually deliver
              </h2>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.7, maxWidth: '760px' }}>
                These offers are designed to solve the most common early-stage
                commercial problems: messy CRM structure, weak reporting, unclear
                pipeline ownership, and activation running outside the system.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
              {[
                {
                  title: 'GTM Foundation',
                  body: 'ICP definition, pipeline structure, lifecycle stages, reporting logic, and the commercial architecture behind repeatable pipeline.',
                  note: 'Best for teams moving from founder-led selling into a clearer operating model.',
                },
                {
                  title: 'HubSpot and RevOps',
                  body: 'HubSpot setup or cleanup, core properties, automations, routing, dashboards, and operational fixes that make the CRM usable.',
                  note: 'Best for teams with an underused or messy CRM that no one fully trusts.',
                },
                {
                  title: 'Pipeline Activation',
                  body: 'Outbound, enrichment, workflow-connected execution, and activation support layered onto a system that is already structured properly.',
                  note: 'Best for teams that need pipeline generation to live inside the CRM instead of outside it.',
                },
                {
                  title: 'Ongoing Optimisation',
                  body: 'Monthly support for CRM hygiene, conversion visibility, workflow refinement, reporting improvements, and GTM iteration.',
                  note: 'Best for teams that have the basics in place and want the system to keep improving.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="services-offer-card"
                  style={{
                    background: '#F7F8F7',
                    border: '1px solid #E2E5E2',
                    borderRadius: '18px',
                    padding: '24px',
                  }}
                >
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.75, marginBottom: '12px' }}>
                    {item.body}
                  </p>
                  <p style={{ fontSize: '0.86rem', color: '#8a8a8a', lineHeight: 1.6 }}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', fontSize: '0.95rem', color: '#555', lineHeight: 1.75 }}>
              Already have HubSpot live but messy? Start with <a href="/hubspot-cleanup" style={{ color: '#F15A24', textDecoration: 'none' }}>HubSpot Cleanup</a>.
            </div>
          </div>
        </section>

        <section style={{ background: '#F7F8F7', borderTop: '1px solid #E2E5E2', borderBottom: '1px solid #E2E5E2', padding: '72px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                Typical Problems
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A' }}>
                When teams usually bring us in
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                'HubSpot exists, but no one trusts the data',
                'Pipeline depends too much on the founder',
                'Workflows and handoffs are inconsistent',
                'Outbound and reporting sit outside the CRM',
              ].map((item) => (
                <div
                  key={item}
                  className="services-problem-card"
                  style={{
                    background: '#fff',
                    border: '1px solid #E2E5E2',
                    borderRadius: '16px',
                    padding: '20px',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: '#333',
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '72px 0' }}>
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                How To Buy
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>
                The usual starting points
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: 'Start with a foundation build',
                  body: 'For teams that need the CRM, workflow, and reporting layer fixed before adding more execution.',
                },
                {
                  title: 'Start with HubSpot cleanup',
                  body: 'For teams that already have motion but need cleaner structure, lifecycle logic, and better visibility.',
                },
                {
                  title: 'Add activation once the system is ready',
                  body: 'For teams that want outbound or workflow-driven pipeline generation on top of a usable setup.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="services-buy-card"
                  style={{
                    background: '#F7F8F7',
                    border: '1px solid #E2E5E2',
                    borderRadius: '16px',
                    padding: '22px',
                  }}
                >
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.7 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#FCFAF7', borderTop: '1px solid #ECE6DE', borderBottom: '1px solid #ECE6DE', padding: '72px 0' }}>
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
              Book a discovery call and we&apos;ll tell you whether you need a
              foundation build, HubSpot cleanup, activation support, or some
              combination of the three.
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
                boxShadow: '0 2px 12px rgba(241,90,36,0.35)',
              }}
              hoverStyle={{ background: '#D44E1E', boxShadow: '0 4px 20px rgba(241,90,36,0.45)' }}
            >
              Book a Discovery Call
            </BookDiscoveryButton>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 640px) {
          .services-offer-card,
          .services-problem-card,
          .services-buy-card {
            border-radius: 14px !important;
          }
        }
      `}</style>
    </>
  );
}
