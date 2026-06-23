import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';
import { absoluteUrl, jsonLd } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About GrowthStack — GTM Infrastructure for Early-Stage B2B Teams',
  description:
    'GrowthStack is a GTM infrastructure practice built for early-stage B2B teams. Founded by a marketing operations specialist with 30+ outbound and RevOps builds across B2B SaaS.',
  alternates: {
    canonical: absoluteUrl('/about'),
  },
  openGraph: {
    title: 'About GrowthStack — GTM Infrastructure for Early-Stage B2B Teams',
    description:
      'GrowthStack is a GTM infrastructure practice built for early-stage B2B teams. Founded by a marketing operations specialist with 30+ outbound and RevOps builds across B2B SaaS.',
    url: absoluteUrl('/about'),
  },
  twitter: {
    title: 'About GrowthStack — GTM Infrastructure for Early-Stage B2B Teams',
    description:
      'GrowthStack is a GTM infrastructure practice built for early-stage B2B teams. Founded by a marketing operations specialist with 30+ outbound and RevOps builds across B2B SaaS.',
  },
};

export default function AboutPage() {
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
        name: 'About',
        item: absoluteUrl('/about'),
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
        <section style={{ background: '#ffffff url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e5e7eb\' fill-opacity=\'0.5\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")', padding: '80px 0 72px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8 max-w-[760px]">
            <div
              className="inline-flex items-center font-bold uppercase tracking-[0.1em] mb-6"
              style={{ fontSize: '0.72rem', color: '#F15A24', background: 'transparent', padding: '5px 13px', border: '1px dashed rgba(241,90,36,0.6)', borderRadius: '4px', letterSpacing: '0.1em', fontWeight: 600 }}
            >
              About
            </div>
            <h1
              className="font-bold text-[#1a1a1a] mb-5"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)', maxWidth: '760px' }}
            >
              GrowthStack is not a consulting firm.
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#555555', maxWidth: '760px', lineHeight: 1.7 }}>
              It's a GTM infrastructure practice. The difference is in what gets
              delivered — not recommendations, but working systems. Built,
              documented, and handed over so they run without us.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div
                  className="font-bold uppercase tracking-[0.1em] mb-3"
                  style={{ fontSize: '0.72rem', color: '#F15A24' }}
                >
                  Founder
                </div>
                <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2 }}>
                  Built by someone who's been inside these systems.
                </h2>
              </div>
              <div style={{ paddingTop: '4px' }}>
                <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                  GrowthStack was founded by a marketing operations and revenue
                  infrastructure specialist who has spent years building the exact
                  systems early-stage B2B teams need but rarely have — HubSpot
                  architecture, outbound infrastructure, Clay enrichment pipelines,
                  CRM automation, and reporting that actually works.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                  The practice is built on 30+ complete outbound and RevOps system
                  builds across B2B SaaS companies, with results that are specific
                  and verifiable: 12% to 23% lead-to-opportunity conversion in 60
                  days. 90% reduction in sales response time. 40%+ open rates
                  sustained at 20,000+ monthly outbound touchpoints.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.8 }}>
                  The positioning is simple: most early-stage B2B teams have tools.
                  They don't have a system. GrowthStack builds the system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: '#FDFAF6', borderTop: '1px solid #E2E5E2', borderBottom: '1px solid #E2E5E2', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div
              style={{
                background: '#fff',
                border: '1px solid #E2E5E2',
                borderRadius: '18px',
                padding: '28px',
                marginBottom: '40px',
              }}
            >
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8, margin: 0 }}>
                There's a gap in how early-stage B2B teams access infrastructure
                expertise. Agencies run campaigns. Consultants give recommendations.
                Neither builds the operating layer and hands it over. That's the
                gap GrowthStack fills.
              </p>
            </div>

            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>
                Stack
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>
                The stack we build on.
              </h2>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.7, maxWidth: '760px' }}>
                Every engagement is built on tools chosen for reliability,
                interoperability, and your team's ability to run them after
                handover. Nothing is built to lock you in to GrowthStack or to
                anything else.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {[
                ['CRM', 'HubSpot (primary)'],
                ['Enrichment & lead building', 'Clay'],
                ['Outbound sending', 'Apollo, Instantly'],
                ['Workflow automation', 'n8n, HubSpot workflows'],
                ['AI personalisation', 'OpenAI via Clay and n8n'],
                ['Reporting', 'HubSpot dashboards, Google Looker Studio where needed'],
              ].map(([label, value]) => (
                <div key={label} style={{ background: '#fff', border: '1px solid #E2E5E2', borderRadius: '16px', padding: '22px' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '10px' }}>
                    {label}
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#1A1A1A', lineHeight: 1.65, margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div
                className="font-bold uppercase tracking-[0.1em] mb-3"
                style={{ fontSize: '0.72rem', color: '#F15A24' }}
              >
                Principles
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A' }}>
                How GrowthStack works.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  title: "Build, don't advise.",
                  body: 'Every engagement ends with a working system in your tools, under your accounts. Not a slide deck. Not a set of recommendations. A documented, functional GTM infrastructure your team can run.',
                },
                {
                  num: '02',
                  title: 'Fixed scope, no surprises.',
                  body: "Scope and price are agreed before work starts. There's no scope creep conversation at the end. If something changes during the build that affects scope, we flag it before acting on it.",
                },
                {
                  num: '03',
                  title: 'You own everything.',
                  body: "No proprietary layer, no dependency, no lock-in. Every workflow, property, sequence, and dashboard belongs to you. GrowthStack's value is in what we build, not in holding the keys to it afterward.",
                },
              ].map(({ num, title, body }) => (
                <div
                  key={num}
                  style={{
                    background: '#FDFAF6',
                    border: '1px solid #E2E5E2',
                    borderRadius: '16px',
                    padding: '32px 28px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'rgba(241,90,36,0.2)',
                      marginBottom: '16px',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {num}
                  </div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>{title}</h4>
                  <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.7 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#0F1B2D', padding: '80px 0', textAlign: 'center' }}>
          <div className="max-w-[640px] mx-auto px-6 lg:px-8">
            <div
              className="font-bold uppercase tracking-[0.1em] mb-4"
              style={{ fontSize: '0.72rem', color: '#F15A24' }}
            >
              Work with GrowthStack
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Work with GrowthStack.
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', marginBottom: '32px' }}>
              Start with a discovery call. We'll look at your current setup and
              tell you honestly whether GrowthStack is the right fit — and if so,
              what the scope and timeline look like.
            </p>
            <BookDiscoveryButton
              utmContent="about_cta"
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
    </>
  );
}
