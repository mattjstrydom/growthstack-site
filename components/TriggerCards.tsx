'use client';

/* ─── data ──────────────────────────────────────────────────────── */
const CARDS = [
  {
    icon: '⏳',
    problem: {
      headline: 'Been meaning to sort outbound for months.',
      detail: 'It keeps getting pushed by product, hiring, and investor calls.',
    },
    solution: {
      headline: 'Live in 10 business days.',
      detail: 'We handle the full setup — ICP, lists, infrastructure, copy — and hand you a running campaign.',
      metric: '10 days',
      metricLabel: 'to first send',
    },
  },
  {
    icon: '📉',
    problem: {
      headline: 'Tried cold email yourself. Low reply rates.',
      detail: 'Generic sequences, no deliverability setup, wrong ICP. It felt like shouting into a void.',
    },
    solution: {
      headline: '9.2% response rate. Proven playbook.',
      detail: 'Verified lists, warmed domains, and sequences written against a real ICP — not a template.',
      metric: '9.2%',
      metricLabel: 'avg. response rate',
    },
  },
  {
    icon: '💸',
    problem: {
      headline: 'An SDR hire costs $5–7K/month and takes 90 days to ramp.',
      detail: "You don't have the runway to wait three months to find out if it works.",
    },
    solution: {
      headline: 'From $1,500/month. Results immediately.',
      detail: 'No salary, no ramp time, no wrong hire. Phase 1 setup + Phase 2 retainer from day one.',
      metric: '$1,500',
      metricLabel: 'per month to start',
    },
  },
  {
    icon: '🔧',
    problem: {
      headline: 'Apollo, Instantly, HubSpot — they don\'t talk to each other.',
      detail: 'Tools bought, half-configured, none connected. No one knows what\'s actually working.',
    },
    solution: {
      headline: 'Integrated system that actually works.',
      detail: 'One connected stack: enrichment, sending, CRM sync, and reporting — all configured and running.',
      metric: '1 system',
      metricLabel: 'fully connected',
    },
  },
  {
    icon: '📊',
    problem: {
      headline: 'Just raised. Investors asking about pipeline.',
      detail: "You have three months before the next check-in. Outbound isn't optional anymore.",
    },
    solution: {
      headline: 'Pipeline built. Ready to present.',
      detail: 'Weekly metrics reports delivered straight to your inbox. Meetings on the calendar by month two.',
      metric: '~12',
      metricLabel: 'meetings/month avg.',
    },
  },
] as const;

/* ─── single card ───────────────────────────────────────────────── */
function TriggerCard({
  icon, problem, solution,
}: (typeof CARDS)[number]) {
  return (
    <div
      className="trigger-card"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderRadius: '14px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.07)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      {/* ── LEFT: problem ── */}
      <div
        style={{
          background: '#110d0d',
          padding: 'clamp(20px,3vw,28px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          borderRight: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* icon + headline */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <span
            style={{
              fontSize: '1.25rem',
              lineHeight: 1,
              flexShrink: 0,
              marginTop: '2px',
              filter: 'grayscale(0.3)',
            }}
          >
            {icon}
          </span>
          <p
            style={{
              fontSize: 'clamp(0.875rem,1.6vw,1rem)',
              fontWeight: 700,
              color: '#ff7070',
              lineHeight: 1.35,
              margin: 0,
            }}
          >
            {problem.headline}
          </p>
        </div>
        {/* detail */}
        <p
          style={{
            fontSize: 'clamp(0.78rem,1.3vw,0.875rem)',
            color: 'rgba(255,255,255,0.38)',
            lineHeight: 1.6,
            margin: 0,
            paddingLeft: '30px',
          }}
        >
          {problem.detail}
        </p>
      </div>

      {/* ── RIGHT: solution ── */}
      <div
        style={{
          background: '#091410',
          padding: 'clamp(20px,3vw,28px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {/* metric pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: '5px',
              background: 'rgba(74,222,128,0.1)',
              border: '1px solid rgba(74,222,128,0.2)',
              borderRadius: '9999px',
              padding: '3px 10px 3px 8px',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(0.85rem,1.6vw,1rem)',
                fontWeight: 800,
                color: '#4ade80',
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '-0.02em',
              }}
            >
              {solution.metric}
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                color: 'rgba(74,222,128,0.65)',
                fontWeight: 600,
                letterSpacing: '0.03em',
              }}
            >
              {solution.metricLabel}
            </span>
          </span>
        </div>

        {/* headline */}
        <p
          style={{
            fontSize: 'clamp(0.875rem,1.6vw,1rem)',
            fontWeight: 700,
            color: '#4ade80',
            lineHeight: 1.35,
            margin: 0,
          }}
        >
          {solution.headline}
        </p>

        {/* detail */}
        <p
          style={{
            fontSize: 'clamp(0.78rem,1.3vw,0.875rem)',
            color: 'rgba(255,255,255,0.38)',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {solution.detail}
        </p>
      </div>
    </div>
  );
}

/* ─── section ───────────────────────────────────────────────────── */
export default function TriggerCards() {
  return (
    <section
      id="how-it-works"
      style={{
        background: '#0F1B2D',
        padding: '80px 0 88px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">

        {/* ── heading ── */}
        <div className="mb-10">
          <div
            className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full mb-4"
            style={{
              fontSize: '0.72rem',
              color: '#F15A24',
              background: 'rgba(241,90,36,0.12)',
              padding: '5px 13px',
              border: '1px solid rgba(241,90,36,0.25)',
            }}
          >
            Sound Familiar?
          </div>
          <h2
            className="font-bold text-white"
            style={{
              fontSize: 'clamp(1.75rem,3.5vw,2.75rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              maxWidth: '640px',
            }}
          >
            Every founder hits the same wall.
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', marginTop: '12px', maxWidth: '520px', lineHeight: 1.65 }}>
            Here&apos;s what we hear on almost every discovery call — and what we do about it.
          </p>
        </div>

        {/* ── column headers ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
            marginBottom: '8px',
            paddingLeft: '4px',
            paddingRight: '4px',
          }}
        >
          <div
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(255,112,112,0.55)',
            }}
          >
            ✗ &nbsp;The problem
          </div>
          <div
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(74,222,128,0.55)',
            }}
          >
            ✓ &nbsp;GrowthStack solves it
          </div>
        </div>

        {/* ── cards ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {CARDS.map((card, i) => (
            <TriggerCard key={i} {...card} />
          ))}
        </div>
      </div>

      {/* hover lift effect — CSS only, no JS needed */}
      <style>{`
        .trigger-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.35);
        }
        @media (max-width: 640px) {
          .trigger-card {
            grid-template-columns: 1fr !important;
          }
          .trigger-card > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
        }
      `}</style>
    </section>
  );
}
