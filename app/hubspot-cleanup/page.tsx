import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';
import { absoluteUrl, jsonLd, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'HubSpot Cleanup | GrowthStack',
  description:
    'HubSpot cleanup for early-stage B2B startups: fix messy lifecycle stages, pipeline structure, workflows, reporting, and CRM hygiene.',
  alternates: {
    canonical: absoluteUrl('/hubspot-cleanup'),
  },
  openGraph: {
    title: 'HubSpot Cleanup | GrowthStack',
    description:
      'HubSpot cleanup for early-stage B2B startups: fix messy lifecycle stages, pipeline structure, workflows, reporting, and CRM hygiene.',
    url: absoluteUrl('/hubspot-cleanup'),
    images: [
      {
        url: absoluteUrl('/hubspot-cleanup/opengraph-image'),
        width: 1200,
        height: 630,
        alt: 'HubSpot Cleanup | GrowthStack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HubSpot Cleanup | GrowthStack',
    description:
      'HubSpot cleanup for early-stage B2B startups: fix messy lifecycle stages, pipeline structure, workflows, reporting, and CRM hygiene.',
    images: [absoluteUrl('/hubspot-cleanup/twitter-image')],
  },
};

export default function HubspotCleanupPage() {
  const faqItems = [
    {
      question: 'What does a HubSpot cleanup usually include?',
      answer:
        'A cleanup usually includes reviewing lifecycle stages, deal pipelines, core properties, workflow logic, reporting views, ownership rules, and CRM hygiene problems that make the portal hard to trust.',
    },
    {
      question: 'Can you clean up HubSpot without replacing our whole setup?',
      answer:
        'Yes. The goal is usually to simplify and repair what is already there, not rebuild everything from scratch unless the current setup is fundamentally broken.',
    },
    {
      question: 'Who is HubSpot cleanup best for?',
      answer:
        'It is best for early-stage teams that already have a live CRM but know the structure is messy, reporting is weak, or workflows are creating more confusion than clarity.',
    },
  ];

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'HubSpot Cleanup', item: absoluteUrl('/hubspot-cleanup') },
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HubSpot Cleanup',
    url: absoluteUrl('/hubspot-cleanup'),
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'Global',
    serviceType: [
      'HubSpot cleanup',
      'Lifecycle stage cleanup',
      'Pipeline cleanup',
      'Workflow cleanup',
      'CRM reporting cleanup',
    ],
    description:
      'HubSpot cleanup for early-stage B2B startups: fix messy lifecycle stages, pipeline structure, workflows, reporting, and CRM hygiene.',
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

        <section style={{ background: '#0F1B2D', padding: '80px 0 72px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <div
                className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full"
                style={{ fontSize: '0.72rem', color: '#F15A24', background: 'rgba(241,90,36,0.12)', padding: '6px 14px', border: '1px solid rgba(241,90,36,0.25)' }}
              >
                HubSpot Cleanup
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
            <h1 className="font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)', maxWidth: '840px' }}>
              Clean up the HubSpot you already have before you add more motion on top of it.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)', maxWidth: '720px', lineHeight: 1.7 }}>
              If your portal is messy, reporting is unreliable, and the team is
              still working around the CRM instead of through it, start here.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                  Typical Signs
                </div>
                <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2, marginBottom: '14px' }}>
                  You probably need HubSpot cleanup if...
                </h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {[
                    'No one fully trusts the CRM data',
                    'Lifecycle stages or deal stages are inconsistent',
                    'Reporting does not reflect what the team thinks is happening',
                    'Workflows feel brittle or confusing',
                    'Founders are still doing too much manually outside the portal',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '10px', fontSize: '0.96rem', color: '#333', lineHeight: 1.7 }}>
                      <span style={{ color: '#F15A24', fontWeight: 700 }}>+</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  background: '#F7F8F7',
                  border: '1px solid #E2E5E2',
                  borderRadius: '18px',
                  padding: '28px',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '14px' }}>
                  What gets fixed
                </div>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {[
                    'Lifecycle stages and deal pipelines',
                    'Key properties and field sprawl',
                    'Views, dashboards, and reporting logic',
                    'Workflow automation and routing rules',
                    'Ownership and handoff structure',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '10px', fontSize: '0.9375rem', color: '#333', lineHeight: 1.7 }}>
                      <span style={{ color: '#F15A24', fontWeight: 700 }}>+</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: '#F7F8F7', borderTop: '1px solid #E2E5E2', borderBottom: '1px solid #E2E5E2', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                The Outcome
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A' }}>
                What a good cleanup gives you
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'A CRM the team can actually use',
                  body: 'Clear stages, cleaner data, and simpler workflows make the portal operational again.',
                },
                {
                  title: 'Reporting founders can trust',
                  body: 'Dashboards and views reflect the real motion instead of a partially maintained version of it.',
                },
                {
                  title: 'A cleaner base for activation',
                  body: 'Once the CRM works properly, outbound and other pipeline motions can live inside the system instead of around it.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: '#fff',
                    border: '1px solid #E2E5E2',
                    borderRadius: '16px',
                    padding: '24px',
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

        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                FAQ
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>
                Common questions about HubSpot cleanup
              </h2>
            </div>

            <div style={{ display: 'grid', gap: '18px' }}>
              {faqItems.map((item) => (
                <div
                  key={item.question}
                  style={{
                    background: '#F7F8F7',
                    border: '1px solid #E2E5E2',
                    borderRadius: '16px',
                    padding: '24px',
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

            <div style={{ marginTop: '30px', fontSize: '0.95rem', color: '#555', lineHeight: 1.75 }}>
              Need broader support too? See <Link href="/hubspot-revops" style={{ color: '#F15A24', textDecoration: 'none' }}>HubSpot &amp; RevOps</Link> or the full <Link href="/services" style={{ color: '#F15A24', textDecoration: 'none' }}>services page</Link>.
            </div>
          </div>
        </section>

        <section style={{ background: '#0F1B2D', padding: '80px 0', textAlign: 'center' }}>
          <div className="max-w-[640px] mx-auto px-6 lg:px-8">
            <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Want to fix the CRM before you scale the motion?
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', marginBottom: '32px' }}>
              Book a discovery call and we&apos;ll tell you whether your next move
              should be a cleanup, a rebuild, or a broader GTM systems engagement.
            </p>
            <BookDiscoveryButton
              utmContent="hubspot_cleanup_cta"
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
    </>
  );
}
