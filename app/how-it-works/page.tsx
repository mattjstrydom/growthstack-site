'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';

const phase1Steps = [
  { day: 'D1', label: 'Kickoff', title: 'ICP Workshop', body: '60-minute session defining your ideal customer profile: industry, company size, stage, geography, and buying triggers. We also define what a qualified meeting looks like so we\'re measuring the right thing from day one.' },
  { day: 'D2', label: 'Data', title: 'Lead List Build', body: '300–500 contacts sourced, enriched, and validated against your ICP. Every contact has a verified email, LinkedIn URL, company size, and funding stage. No raw exports — every contact reviewed before import.' },
  { day: 'D3', label: 'CRM', title: 'CRM Configuration', body: 'HubSpot set up or audited. Deal stages, contact properties, and pipeline view configured. Outbound activity syncs automatically — no manual CRM updates required from you.' },
  { day: 'D4', label: 'Infra', title: 'Email Infrastructure', body: 'Sending domains authenticated (SPF, DKIM, DMARC), inbox warmup initiated, rotation configured. Your emails land in inboxes, not spam folders. Domain health monitored throughout.' },
  { day: 'D6', label: 'Copy', title: 'Sequences Written', body: 'Email and LinkedIn copy drafted, reviewed with you, approved. Personalised first lines for every contact. A/B subject line variants. No generic templates — written against your specific ICP and pain points.' },
  { day: 'D10', label: 'Live', title: 'Campaign Launch', body: 'First sends deployed. Open rate, reply rate, and deliverability baseline captured. Handoff document prepared. Phase 2 begins if continuing — and most clients do.' },
];

const phase2Steps = [
  { day: 'W1', label: 'Monthly', title: 'Lead Refresh', body: '200–300 new contacts sourced, enriched, and validated. Funding trigger contacts added when relevant — newly funded companies in your target segment are prioritised.' },
  { day: 'Daily', label: 'Ongoing', title: 'Reply Management', body: 'All inbound replies monitored and handled within 1 business day. Positive replies converted to confirmed calendar bookings. "Not now" replies flagged for 90-day follow-up sequence.' },
  { day: 'Mon', label: 'Weekly', title: 'Metrics Report', body: 'Delivered every Monday. Contacts added, emails sent, open rate, reply rate, meetings booked. Cumulative tracking so you can see trends. No dashboard to log into.' },
  { day: 'EOM', label: 'Monthly', title: 'Strategy Call', body: '30-minute review of the previous month. ICP refinements, new target segments, messaging pivots, next month\'s priorities. Direct access to the people running your campaigns.' },
];

const pricingTiers = [
  {
    name: 'Starter',
    for: 'Pre-seed · email only',
    setup: '$2,500',
    monthly: '$1,500',
    featured: false,
    utmContent: 'hiw_pricing_starter',
    features: [
      { text: 'ICP definition workshop', included: true },
      { text: '300 verified contacts (setup)', included: true },
      { text: 'Email sequences', included: true },
      { text: 'LinkedIn sequences', included: false },
      { text: 'Reply management', included: false },
      { text: '200 contacts/mo refresh', included: true },
      { text: 'CRM setup & maintenance', included: true },
      { text: 'Weekly report + monthly call', included: true },
    ],
  },
  {
    name: 'Growth',
    for: 'Seed stage · email + LinkedIn',
    setup: '$3,500',
    monthly: '$2,000',
    featured: true,
    badge: 'Most Popular',
    utmContent: 'hiw_pricing_growth',
    features: [
      { text: 'ICP definition workshop', included: true },
      { text: '400 verified contacts (setup)', included: true },
      { text: 'Email sequences', included: true },
      { text: 'LinkedIn sequences', included: true },
      { text: 'Reply management', included: true },
      { text: '250 contacts/mo refresh', included: true },
      { text: 'CRM setup & maintenance', included: true },
      { text: 'Weekly report + monthly call', included: true },
    ],
  },
  {
    name: 'Scale',
    for: 'Series A · 2 ICPs',
    setup: '$4,500',
    monthly: '$3,000',
    featured: false,
    utmContent: 'hiw_pricing_scale',
    features: [
      { text: 'ICP workshop × 2', included: true },
      { text: '500 verified contacts (setup)', included: true },
      { text: 'Email sequences', included: true },
      { text: 'LinkedIn sequences', included: true },
      { text: 'Reply management', included: true },
      { text: '300 contacts/mo refresh', included: true },
      { text: 'CRM setup & maintenance', included: true },
      { text: 'Weekly report + monthly call', included: true },
    ],
  },
];

function TimelineStep({ day, label, title, body, dark }: { day: string; label: string; title: string; body: string; dark?: boolean }) {
  return (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
      <div style={{ flexShrink: 0, textAlign: 'center', width: '60px' }}>
        <div
          style={{
            width: '44px', height: '44px',
            background: '#F15A24',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.7rem', fontWeight: 800, color: '#fff',
            margin: '0 auto 4px',
          }}
        >
          {day}
        </div>
        <span style={{ fontSize: '0.72rem', color: dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', fontWeight: 500 }}>{label}</span>
      </div>
      <div style={{ flex: 1, paddingTop: '8px', paddingBottom: '32px', borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'}`, marginBottom: '4px' }}>
        <h4 style={{ fontSize: '1.0625rem', fontWeight: 700, color: dark ? '#fff' : '#1A1A1A', marginBottom: '8px' }}>{title}</h4>
        <p style={{ fontSize: '0.9375rem', color: dark ? 'rgba(255,255,255,0.65)' : '#555', lineHeight: 1.7, margin: 0 }}>{body}</p>
      </div>
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '68px' }}>

        {/* Hero */}
        <section style={{ background: '#0F1B2D', padding: '80px 0 72px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div
              className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full mb-6"
              style={{ fontSize: '0.72rem', color: '#F15A24', background: 'rgba(241,90,36,0.12)', padding: '6px 14px', border: '1px solid rgba(241,90,36,0.25)' }}
            >
              The Process
            </div>
            <h1 className="font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              From zero to live campaign<br />in 10 business days.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.7 }}>
              Here&apos;s exactly what happens when you work with GrowthStack — what we do, what you do, what you get, and when.
            </p>
          </div>
        </section>

        {/* Phase 1 */}
        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-2" style={{ fontSize: '0.72rem', color: '#F15A24' }}>Phase 1</div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>GTM Foundation</h2>
              <p style={{ fontSize: '1.0625rem', color: '#555', lineHeight: 1.7, maxWidth: '680px' }}>
                A one-time outbound setup delivered in 10 to 15 business days. ICP definition, 300–500 verified contacts, HubSpot CRM setup, email deliverability infrastructure, and cold email and LinkedIn sequences written and live — from $2,500.
              </p>
            </div>
            <div style={{ maxWidth: '680px' }}>
              {phase1Steps.map(s => <TimelineStep key={s.day} {...s} />)}
            </div>
          </div>
        </section>

        {/* Phase 2 */}
        <section style={{ background: '#F7F8F7', borderTop: '1px solid #E2E5E2', borderBottom: '1px solid #E2E5E2', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-2" style={{ fontSize: '0.72rem', color: '#F15A24' }}>Phase 2</div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>Outbound Management</h2>
              <p style={{ fontSize: '1.0625rem', color: '#555', lineHeight: 1.7 }}>
                Monthly retainer · Ongoing · From $1,500/mo<br />
                Once the foundation is built, we run everything. Every month, without you thinking about it.
              </p>
            </div>
            <div style={{ maxWidth: '680px', marginBottom: '32px' }}>
              {phase2Steps.map(s => <TimelineStep key={s.day} {...s} />)}
            </div>
            <div
              style={{
                maxWidth: '680px',
                background: '#0F1B2D',
                borderRadius: '12px',
                padding: '22px 28px',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 600,
                fontSize: '1rem',
              }}
            >
              Primary KPI: qualified meetings booked per month. Everything else is a leading indicator.
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>Pricing</div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>Simple, predictable pricing</h2>
              <p style={{ fontSize: '1.0625rem', color: '#555' }}>One setup fee. One monthly retainer. No credits, no per-seat fees, no surprises.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {pricingTiers.map(tier => (
                <div
                  key={tier.name}
                  style={{
                    position: 'relative',
                    background: tier.featured ? '#0F1B2D' : '#fff',
                    border: tier.featured ? 'none' : '1px solid #E2E5E2',
                    borderRadius: '16px',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {tier.badge && (
                    <div
                      style={{
                        position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                        background: '#F15A24', color: '#fff', fontSize: '0.72rem', fontWeight: 700,
                        padding: '4px 14px', borderRadius: '9999px', letterSpacing: '0.06em', textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tier.badge}
                    </div>
                  )}
                  <div style={{ fontSize: '1.125rem', fontWeight: 700, color: tier.featured ? '#fff' : '#1A1A1A', marginBottom: '4px' }}>{tier.name}</div>
                  <div style={{ fontSize: '0.8rem', color: tier.featured ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)', marginBottom: '20px' }}>{tier.for}</div>

                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: tier.featured ? '#fff' : '#1A1A1A' }}>{tier.setup}</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: tier.featured ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', marginBottom: '16px' }}>Phase 1 setup (one-time)</div>

                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: tier.featured ? '#fff' : '#1A1A1A' }}>{tier.monthly}</span>
                    <span style={{ fontSize: '1rem', color: tier.featured ? 'rgba(255,255,255,0.4)' : '#555' }}>/mo</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: tier.featured ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', marginBottom: '24px' }}>Phase 2 retainer</div>

                  <div style={{ flex: 1, marginBottom: '24px' }}>
                    {tier.features.map(f => (
                      <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: `1px solid ${tier.featured ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)'}` }}>
                        <span style={{ color: f.included ? '#F15A24' : (tier.featured ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'), fontWeight: 700, fontSize: '0.875rem', width: '16px', flexShrink: 0 }}>
                          {f.included ? '✓' : '—'}
                        </span>
                        <span style={{ fontSize: '0.875rem', color: f.included ? (tier.featured ? 'rgba(255,255,255,0.85)' : '#333') : (tier.featured ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.35)') }}>
                          {f.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <BookDiscoveryButton
                    utmContent={tier.utmContent}
                    style={{
                      width: '100%',
                      padding: '12px 24px',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      borderRadius: '8px',
                      background: tier.featured ? '#F15A24' : 'transparent',
                      color: tier.featured ? '#fff' : '#F15A24',
                      border: tier.featured ? 'none' : '2px solid #F15A24',
                      boxShadow: tier.featured ? '0 2px 12px rgba(241,90,36,0.35)' : 'none',
                    }}
                    hoverStyle={tier.featured ? { background: '#D44E1E' } : { background: 'rgba(241,90,36,0.06)' }}
                  >
                    {tier.featured ? 'Book a Discovery Call' : 'Get Started'}
                  </BookDiscoveryButton>
                </div>
              ))}
            </div>

            <div style={{ maxWidth: '600px' }}>
              {[
                "Phase 2 requires Phase 1. We don't run campaigns built on someone else's foundation.",
                'Minimum Phase 2 commitment: 2 months. After that, month-to-month.',
                "For context: a part-time SDR costs $4,000–6,000/month and takes 90 days to ramp. We start in a week.",
              ].map((note, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex', gap: '10px', alignItems: 'flex-start',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    fontSize: '0.875rem', color: '#555',
                  }}
                >
                  <span style={{ color: '#F15A24', fontWeight: 700, flexShrink: 0 }}>*</span>
                  {note}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#0F1B2D', padding: '80px 0', textAlign: 'center' }}>
          <div className="max-w-[640px] mx-auto px-6 lg:px-8">
            <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Ready to build your first outbound system?
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', marginBottom: '32px' }}>
              Book a 30-minute call. We&apos;ll review your ICP, current stack, and growth goals — then tell you honestly if we&apos;re the right fit.
            </p>
            <BookDiscoveryButton
              utmContent="hiw_bottom_cta"
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
    </>
  );
}
