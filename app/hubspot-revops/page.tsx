import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';
import { absoluteUrl, jsonLd, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'HubSpot & RevOps | GrowthStack',
  description:
    'HubSpot setup, cleanup, pipeline design, workflow automation, and RevOps support for early-stage B2B startups.',
  alternates: {
    canonical: absoluteUrl('/hubspot-revops'),
  },
  openGraph: {
    title: 'HubSpot & RevOps | GrowthStack',
    description:
      'HubSpot setup, cleanup, pipeline design, workflow automation, and RevOps support for early-stage B2B startups.',
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
    title: 'HubSpot & RevOps | GrowthStack',
    description:
      'HubSpot setup, cleanup, pipeline design, workflow automation, and RevOps support for early-stage B2B startups.',
    images: [absoluteUrl('/hubspot-revops/twitter-image')],
  },
};

export default function HubspotRevopsPage() {
  const faqItems = [
    {
      question: 'Can you work in an existing HubSpot portal?',
      answer:
        'Yes. GrowthStack can audit, clean up, and restructure an existing HubSpot setup so your pipeline, reporting, and workflows reflect how the team actually sells.',
    },
    {
      question: 'Do you only help with HubSpot, or do you handle the surrounding system too?',
      answer:
        'We work on the broader GTM system as well: lifecycle stages, pipeline design, workflow automation, reporting, routing, and activation support where it fits.',
    },
    {
      question: 'Is this only for larger teams?',
      answer:
        'No. This is designed for early-stage B2B teams that need a cleaner commercial system before adding more complexity, headcount, or volume.',
    },
    {
      question: 'Do you manage outbound too?',
      answer:
        'Yes. Outbound can be activated once the CRM and workflow foundation are in place, so campaigns run inside a usable system instead of alongside one.',
    },
  ];

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
      'HubSpot setup, cleanup, pipeline design, workflow automation, and RevOps support for early-stage B2B startups.',
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
        <section style={{ background: '#0F1B2D', padding: '80px 0 72px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div
              className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full mb-6"
              style={{ fontSize: '0.72rem', color: '#F15A24', background: 'rgba(241,90,36,0.12)', padding: '6px 14px', border: '1px solid rgba(241,90,36,0.25)' }}
            >
              HubSpot and RevOps
            </div>
            <h1 className="font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)', maxWidth: '820px' }}>
              HubSpot setup and RevOps support for startups that need a cleaner
              commercial system.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)', maxWidth: '700px', lineHeight: 1.7 }}>
              GrowthStack helps early-stage B2B teams clean up HubSpot, structure
              pipeline, automate workflows, improve reporting, and create a system
              that can actually support growth.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                  What We Do
                </div>
                <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2, marginBottom: '14px' }}>
                  We turn HubSpot from a partial setup into a usable operating layer.
                </h2>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8 }}>
                Most early-stage teams have some combination of the right tools and
                the wrong structure. Contact data is inconsistent, stages do not
                reflect reality, workflows are patchy, and founders still do too
                much manually. We fix that.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.75, marginTop: '14px' }}>
                If your main problem is a messy live portal rather than a broader
                systems build, start with <a href="/hubspot-cleanup" style={{ color: '#F15A24', textDecoration: 'none' }}>HubSpot Cleanup</a>.
              </p>
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
                  Typical outcomes
                </div>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {[
                    'A cleaner HubSpot structure with usable properties and views',
                    'Lifecycle stages and deal pipelines the team can actually follow',
                    'Workflow automation that reduces manual updates and missed handoffs',
                    'Reporting founders can use to see what is really happening',
                    'A system ready for outbound or other activation layers',
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
                Services
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A' }}>
                Where we usually help
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'HubSpot setup or cleanup',
                  body: 'Portal structure, properties, views, permissions, and basic hygiene fixed so the CRM becomes usable.',
                },
                {
                  title: 'Pipeline and lifecycle design',
                  body: 'Deal stages, lifecycle stages, and ownership logic built around how the team actually sells.',
                },
                {
                  title: 'Automation and routing',
                  body: 'Lead assignment, follow-up triggers, and workflow automation to reduce manual admin and dropped handoffs.',
                },
                {
                  title: 'Reporting and activation support',
                  body: 'Dashboards, visibility, and the operational layer needed before outbound or other pipeline motions scale.',
                },
              ].map((item) => (
                <div key={item.title} style={{ background: '#fff', border: '1px solid #E2E5E2', borderRadius: '16px', padding: '24px' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                Best Fit
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>
                This is usually a fit if...
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div style={{ background: '#F7F8F7', border: '1px solid #E2E5E2', borderRadius: '16px', padding: '28px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '14px' }}>
                  Good fit
                </div>
                {[
                  'Your HubSpot exists but no one fully trusts it',
                  'Founder-led follow-up still drives too much of the motion',
                  'Reporting is weak or inconsistent',
                  'You need cleaner structure before adding more execution',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '10px', padding: '10px 0', borderBottom: '1px solid #E2E5E2', fontSize: '0.9375rem', color: '#333' }}>
                    <span style={{ color: '#F15A24', fontWeight: 700 }}>+</span>
                    {item}
                  </div>
                ))}
              </div>
              <div style={{ background: '#F7F8F7', border: '1px solid #E2E5E2', borderRadius: '16px', padding: '28px' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#888', marginBottom: '14px' }}>
                  Not a fit
                </div>
                {[
                  'You already have a mature RevOps team in place',
                  'You only want a lead-gen vendor with no systems ownership',
                  'You are still pre-product and not ready for system design',
                  'You want strategy slides without implementation',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '10px', padding: '10px 0', borderBottom: '1px solid #E2E5E2', fontSize: '0.9375rem', color: '#555' }}>
                    <span style={{ color: '#888', fontWeight: 700 }}>-</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: '#FCFAF7', borderTop: '1px solid #ECE6DE', borderBottom: '1px solid #ECE6DE', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                Related Reading
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>
                Practical guides on HubSpot and RevOps
              </h2>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.7, maxWidth: '700px' }}>
                If you are evaluating whether your current setup needs cleanup or a
                broader rebuild, start with these guides.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  href: '/blog/hubspot-setup-checklist-startups',
                  category: 'HubSpot',
                  title: 'HubSpot Setup Checklist for Early-Stage B2B Startups',
                  body: 'A practical checklist covering lifecycle stages, pipelines, properties, workflows, and reporting.',
                },
                {
                  href: '/blog/hubspot-lifecycle-stages-b2b-startups',
                  category: 'RevOps',
                  title: 'How to Define HubSpot Lifecycle Stages for B2B Startups',
                  body: 'A clear guide to structuring lifecycle stages so routing, ownership, and reporting all make sense.',
                },
                {
                  href: '/blog/revenue-infrastructure',
                  category: 'Infrastructure',
                  title: 'Why Revenue Infrastructure Matters Before You Scale',
                  body: 'A broader piece on why systems, not disconnected tactics, are what make pipeline repeatable.',
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <article
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #ECE6DE',
                      borderRadius: '16px',
                      padding: '24px',
                      height: '100%',
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                    className="hubspot-reading-card"
                  >
                    <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '14px' }}>
                      {item.category}
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.45, marginBottom: '12px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: '#555', lineHeight: 1.7 }}>
                      {item.body}
                    </p>
                  </article>
                </Link>
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
                Common questions about HubSpot and RevOps support
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
          </div>
        </section>

        <section style={{ background: '#0F1B2D', padding: '80px 0', textAlign: 'center' }}>
          <div className="max-w-[640px] mx-auto px-6 lg:px-8">
            <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Need help cleaning up HubSpot or fixing your GTM system?
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', marginBottom: '32px' }}>
              Book a discovery call and we&apos;ll look at your current setup, where
              the biggest operational gaps are, and what should be fixed first.
            </p>
            <BookDiscoveryButton
              utmContent="hubspot_revops_cta"
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
              Book a Discovery Call →
            </BookDiscoveryButton>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        .hubspot-reading-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(23, 32, 51, 0.08);
        }
      `}</style>
    </>
  );
}
