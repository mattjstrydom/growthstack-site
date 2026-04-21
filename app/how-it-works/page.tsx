'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';

const foundationSteps = [
  { day: 'D1', label: 'Kickoff', title: 'GTM and CRM Audit', body: 'We review your current motion, HubSpot setup, funnel stages, reporting gaps, and where execution is breaking down. The goal is to understand the commercial system before changing anything.' },
  { day: 'D2', label: 'Structure', title: 'Pipeline and Lifecycle Design', body: 'We define the pipeline stages, lifecycle logic, ownership points, and core properties your team needs so the CRM reflects how revenue actually moves.' },
  { day: 'D3', label: 'HubSpot', title: 'HubSpot Setup or Cleanup', body: 'Deal stages, contact properties, views, and workflows are configured or cleaned up. Manual updates are reduced, reporting becomes usable, and the system starts behaving like a real operating layer.' },
  { day: 'D4', label: 'Workflow', title: 'Automation and Routing', body: 'Lead flow, assignment logic, follow-up triggers, and internal handoffs are structured so the team is not relying on memory and ad hoc admin work.' },
  { day: 'D6', label: 'Activation', title: 'Pipeline Activation Setup', body: 'Where it makes sense, we connect enrichment, outbound workflows, and supporting tools into the CRM so activation happens inside the system rather than outside it.' },
  { day: 'D10', label: 'Live', title: 'Foundation Go-Live', body: 'The commercial foundation is live, documented, and usable. Dashboards, ownership, and next actions are clear. From here we move into activation and optimisation if needed.' },
];

const activationSteps = [
  { day: 'W1', label: 'Ongoing', title: 'Pipeline Activation', body: 'We run the next layer of execution inside the system: outbound, enrichment, testing, follow-up structure, and the operational support needed to keep pipeline moving cleanly.' },
  { day: 'Daily', label: 'Ongoing', title: 'Workflow Monitoring', body: 'We monitor what is breaking, where leads are stalling, and whether CRM hygiene, routing, and reporting still reflect the motion as it evolves.' },
  { day: 'Mon', label: 'Weekly', title: 'Founder Reporting', body: 'You get visibility on pipeline health, operational bottlenecks, and what is changing. The reporting is designed to support decisions, not produce vanity dashboards.' },
  { day: 'EOM', label: 'Monthly', title: 'Optimisation Review', body: 'We review conversion points, system friction, and new experiments. This is where the GTM engine improves over time instead of staying frozen after setup.' },
];

const pricingTiers = [
  {
    name: 'Foundation',
    for: 'Early-stage teams fixing the core system',
    setup: '$2,500',
    monthly: '$1,500',
    featured: false,
    utmContent: 'hiw_pricing_foundation',
    features: [
      { text: 'GTM and CRM audit', included: true },
      { text: 'HubSpot setup or cleanup', included: true },
      { text: 'Lifecycle stages and pipeline design', included: true },
      { text: 'Core workflow automation', included: true },
      { text: 'Reporting and dashboards', included: true },
      { text: 'Activation planning', included: true },
      { text: 'Ongoing optimisation support', included: false },
      { text: 'Outbound activation', included: false },
    ],
  },
  {
    name: 'Build + Activate',
    for: 'Teams that need the system and pipeline layer',
    setup: '$3,500',
    monthly: '$2,000',
    featured: true,
    badge: 'Most Popular',
    utmContent: 'hiw_pricing_build_activate',
    features: [
      { text: 'GTM and CRM audit', included: true },
      { text: 'HubSpot setup or cleanup', included: true },
      { text: 'Lifecycle stages and pipeline design', included: true },
      { text: 'Core workflow automation', included: true },
      { text: 'Reporting and dashboards', included: true },
      { text: 'Outbound activation setup', included: true },
      { text: 'Ongoing optimisation support', included: true },
      { text: 'Monthly founder review', included: true },
    ],
  },
  {
    name: 'Operator',
    for: 'Teams needing broader GTM systems support',
    setup: '$4,500',
    monthly: '$3,000',
    featured: false,
    utmContent: 'hiw_pricing_operator',
    features: [
      { text: 'Multi-motion GTM audit', included: true },
      { text: 'Deeper HubSpot architecture support', included: true },
      { text: 'Lifecycle and pipeline refinement', included: true },
      { text: 'Workflow and routing redesign', included: true },
      { text: 'Reporting and dashboard support', included: true },
      { text: 'Activation across multiple workflows', included: true },
      { text: 'Ongoing optimisation support', included: true },
      { text: 'Embedded monthly operating rhythm', included: true },
    ],
  },
] as const;

function TimelineStep({ day, label, title, body, dark }: { day: string; label: string; title: string; body: string; dark?: boolean }) {
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
        <section style={{ background: '#0F1B2D', padding: '80px 0 72px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div
              className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full mb-6"
              style={{ fontSize: '0.72rem', color: '#F15A24', background: 'rgba(241,90,36,0.12)', padding: '6px 14px', border: '1px solid rgba(241,90,36,0.25)' }}
            >
              The Process
            </div>
            <h1 className="font-bold text-white leading-tight mb-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
              Build the GTM system first.
              <br />
              Then activate pipeline on top of it.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.7 }}>
              Here&apos;s what happens when you work with GrowthStack: how we fix
              the commercial system, where HubSpot fits, how activation is layered
              in, and what ongoing support looks like.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-2" style={{ fontSize: '0.72rem', color: '#F15A24' }}>Phase 1</div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>Foundation Build</h2>
              <p style={{ fontSize: '1.0625rem', color: '#555', lineHeight: 1.7, maxWidth: '760px' }}>
                A one-time build delivered in 10 to 15 business days. HubSpot
                setup or cleanup, pipeline structure, lifecycle stages, workflow
                automation, reporting, and the GTM operating logic your team needs
                before execution becomes repeatable.
              </p>
            </div>
            <div style={{ maxWidth: '760px' }}>
              {foundationSteps.map((step) => (
                <TimelineStep key={step.day} {...step} />
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#F7F8F7', borderTop: '1px solid #E2E5E2', borderBottom: '1px solid #E2E5E2', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div className="font-bold uppercase tracking-[0.1em] mb-2" style={{ fontSize: '0.72rem', color: '#F15A24' }}>Phase 2</div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>Pipeline Activation and Optimisation</h2>
              <p style={{ fontSize: '1.0625rem', color: '#555', lineHeight: 1.7, maxWidth: '760px' }}>
                Monthly support from $1,500. Once the foundation is usable, we help
                it generate and support pipeline through activation, monitoring, and
                ongoing operational improvement.
              </p>
            </div>
            <div style={{ maxWidth: '760px', marginBottom: '32px' }}>
              {activationSteps.map((step) => (
                <TimelineStep key={step.day} {...step} />
              ))}
            </div>
            <div
              style={{
                maxWidth: '760px',
                background: '#0F1B2D',
                borderRadius: '12px',
                padding: '22px 28px',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 600,
                fontSize: '1rem',
              }}
            >
              Primary KPI: a cleaner, more usable pipeline system that supports
              better decisions and more reliable commercial execution.
            </div>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>Pricing</div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>Simple, predictable pricing</h2>
              <p style={{ fontSize: '1.0625rem', color: '#555', maxWidth: '720px', margin: '0 auto' }}>
                One setup fee for the foundation. One monthly retainer if you want
                us to keep improving and activating the system.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {pricingTiers.map((tier) => (
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
                  {'badge' in tier && tier.badge && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#F15A24',
                        color: '#fff',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        padding: '4px 14px',
                        borderRadius: '9999px',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
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
                  <div style={{ fontSize: '0.8rem', color: tier.featured ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', marginBottom: '16px' }}>Foundation Build (one-time)</div>

                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: tier.featured ? '#fff' : '#1A1A1A' }}>{tier.monthly}</span>
                    <span style={{ fontSize: '1rem', color: tier.featured ? 'rgba(255,255,255,0.4)' : '#555' }}>/mo</span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: tier.featured ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', marginBottom: '24px' }}>Ongoing support</div>

                  <div style={{ flex: 1, marginBottom: '24px' }}>
                    {tier.features.map((feature) => (
                      <div key={feature.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderBottom: `1px solid ${tier.featured ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)'}` }}>
                        <span style={{ color: feature.included ? '#F15A24' : (tier.featured ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'), fontWeight: 700, fontSize: '0.875rem', width: '16px', flexShrink: 0 }}>
                          {feature.included ? '+' : '-'}
                        </span>
                        <span style={{ fontSize: '0.875rem', color: feature.included ? (tier.featured ? 'rgba(255,255,255,0.85)' : '#333') : (tier.featured ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.35)') }}>
                          {feature.text}
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

            <div style={{ maxWidth: '720px' }}>
              {[
                'Ongoing support works best after the foundation is properly built or cleaned up first.',
                'Support can include HubSpot optimisation, reporting refinement, workflow improvements, and activation support.',
                'Compared with assembling this internally, GrowthStack gives early-stage teams a faster path to a usable commercial system.',
              ].map((note, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'flex-start',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    fontSize: '0.875rem',
                    color: '#555',
                  }}
                >
                  <span style={{ color: '#F15A24', fontWeight: 700, flexShrink: 0 }}>*</span>
                  {note}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#0F1B2D', padding: '80px 0', textAlign: 'center' }}>
          <div className="max-w-[640px] mx-auto px-6 lg:px-8">
            <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Ready to build your GTM engine?
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', marginBottom: '32px' }}>
              Book a 30-minute call. We&apos;ll review your GTM setup, current CRM,
              and what needs fixing first.
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
