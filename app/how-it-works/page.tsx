'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';
import { absoluteUrl, jsonLd } from '@/lib/site';

const processSteps = [
  {
    day: 'Call',
    label: 'Before',
    title: 'Discovery call (before we start)',
    body: "We spend 45 minutes looking at your current setup together — CRM structure, pipeline, outbound motion, and reporting. You leave with a clear picture of what's broken and a specific scope for the build. No pitch. No generic recommendations.",
  },
  {
    day: 'D1–2',
    label: 'Audit',
    title: 'Audit (Days 1–2)',
    body: 'Before we change anything, we map everything. Current HubSpot properties, lifecycle stages, workflows, ownership rules, and reporting. Current outbound tooling and CRM connection. Where the gaps are and what order to fix them in.',
  },
  {
    day: 'D3–8',
    label: 'Build',
    title: 'Build (Days 3–8)',
    body: "We build the system to the agreed scope. Daily async updates so you know what's happening. You're available for questions and approvals — but not managing the build.",
  },
  {
    day: 'D9–10',
    label: 'Handover',
    title: 'Handover (Days 9–10)',
    body: 'Full walkthrough of everything built. Documentation delivered. Team trained on how to use and maintain the system. No surprises, no dependency on GrowthStack to keep it running.',
  },
] as const;

function TimelineStep({ day, label, title, body }: (typeof processSteps)[number]) {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ flexShrink: 0, textAlign: 'center', width: '60px' }}>
        <div
          style={{
            width: '44px',
            height: '44px',
            background: '#F15A24',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem',
            fontWeight: 800,
            color: '#fff',
            margin: '0 auto 4px',
          }}
        >
          {day}
        </div>
        <span style={{ fontSize: '0.72rem', color: 'rgba(0,0,0,0.4)', fontWeight: 500 }}>{label}</span>
      </div>
      <div style={{ flex: 1, paddingTop: '8px', paddingBottom: '32px', borderBottom: '1px solid rgba(0,0,0,0.07)', marginBottom: '4px' }}>
        <h4 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>{title}</h4>
        <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.7, margin: 0 }}>{body}</p>
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
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
        name: 'How It Works',
        item: absoluteUrl('/how-it-works'),
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
        <section style={{ background: '#0F1B2D', padding: '80px 0 72px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div
              className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full mb-6"
              style={{ fontSize: '0.72rem', color: '#F15A24', background: 'rgba(241,90,36,0.08)', padding: '5px 12px', border: '1px solid rgba(241,90,36,0.25)', letterSpacing: '0.08em' }}
            >
              The Process
            </div>
            <h1 className="font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Fixed scope. 10 days. You own everything at the end.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)', maxWidth: '760px', lineHeight: 1.7 }}>
              No retainers. No ongoing dependencies. No black box. You get a fully
              documented GTM system, a team that knows how to use it, and a clear
              handover so GrowthStack doesn't need to be involved to keep it
              working.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-2" style={{ fontSize: '0.72rem', color: '#F15A24' }}>Process</div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>The process, step by step.</h2>
            </div>
            <div style={{ maxWidth: '760px' }}>
              {processSteps.map((step) => (
                <TimelineStep key={step.title} {...step} />
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#F7F8F7', borderTop: '1px solid #E2E5E2', borderBottom: '1px solid #E2E5E2', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>Pricing</div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>Transparent pricing. Fixed scope.</h2>
              <p style={{ fontSize: '1.0625rem', color: '#555', maxWidth: '780px', margin: '0 auto', lineHeight: 1.7 }}>
                Every engagement is fixed scope and fixed price. We agree on exactly
                what gets built before we start — no scope creep, no monthly
                retainer that grows indefinitely.
              </p>
            </div>

            <div style={{ overflowX: 'auto', background: '#fff', border: '1px solid #E2E5E2', borderRadius: '16px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '720px' }}>
                <thead>
                  <tr>
                    {['Engagement', 'Scope', 'Price'].map((item) => (
                      <th key={item} style={{ textAlign: 'left', padding: '18px 20px', fontSize: '0.8rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F15A24', borderBottom: '1px solid #E2E5E2' }}>
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['GTM Audit', '60-min working session + written findings and fix roadmap', '$1,200'],
                    ['GTM Foundation Build', 'HubSpot structure, lifecycle stages, pipeline, routing, reporting, documentation', '$4,500'],
                    ['Full GTM + Outbound Build', 'Foundation build + Clay enrichment, sending infrastructure, CRM-connected sequences', '$7,500'],
                    ['Complete GTM System', 'Full stack: CRM, outbound, automation, AI personalisation, full reporting layer', '$10,000'],
                  ].map(([engagement, scope, price]) => (
                    <tr key={engagement}>
                      <td style={{ padding: '18px 20px', borderBottom: '1px solid #E2E5E2', fontWeight: 700, color: '#1A1A1A' }}>{engagement}</td>
                      <td style={{ padding: '18px 20px', borderBottom: '1px solid #E2E5E2', color: '#555', lineHeight: 1.65 }}>{scope}</td>
                      <td style={{ padding: '18px 20px', borderBottom: '1px solid #E2E5E2', color: '#1A1A1A', fontWeight: 700 }}>{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p style={{ marginTop: '18px', fontSize: '0.92rem', color: '#555' }}>
              The $1,200 audit fee credits toward any build engagement booked within 30 days.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[900px] mx-auto px-6 lg:px-8">
            <div className="mb-8">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>Ownership</div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>Everything we build is yours.</h2>
            </div>
            <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.8 }}>
              Every property, workflow, sequence, dashboard, and document we build
              sits in your tools, under your accounts. There's no GrowthStack layer
              sitting between you and your system. If you stop working with us
              tomorrow, the system keeps running. That's the point.
            </p>
          </div>
        </section>

        <section style={{ background: '#0F1B2D', padding: '80px 0', textAlign: 'center' }}>
          <div className="max-w-[640px] mx-auto px-6 lg:px-8">
            <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Start with the audit.
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', marginBottom: '32px' }}>
              The $1,200 audit is the lowest-risk way to start. You get a specific
              map of what's broken and what to fix first — whether you continue
              with GrowthStack or handle it internally.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <BookDiscoveryButton
                utmContent="hiw_bottom_cta"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold rounded-lg cursor-pointer"
                style={{
                  background: '#F15A24',
                  padding: '14px 36px',
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  borderRadius: '8px',
                boxShadow: '0 6px 28px rgba(241,90,36,0.5)',
              }}
              hoverStyle={{ background: '#D44E1E', boxShadow: '0 8px 36px rgba(241,90,36,0.65)' }}
              >
                Book a GTM Audit
              </BookDiscoveryButton>
              <BookDiscoveryButton
                utmContent="hiw_bottom_discovery"
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
                Book a Discovery Call (no obligation)
              </BookDiscoveryButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
