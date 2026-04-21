'use client';

import { Eyebrow } from './MarketingPrimitives';

const CARDS = [
  {
    icon: 'Hourglass',
    problem: {
      headline: 'Been meaning to sort outbound for months.',
      detail: 'It keeps getting pushed by product, hiring, and investor calls.',
    },
    solution: {
      headline: 'Live in 10 business days.',
      detail:
        'We handle the full setup: ICP, lists, infrastructure, copy, and launch.',
      metric: '10 days',
      metricLabel: 'to first send',
    },
  },
  {
    icon: 'Replies',
    problem: {
      headline: 'Tried cold email yourself. Low reply rates.',
      detail:
        'Generic sequences, no deliverability setup, wrong ICP. It felt like shouting into a void.',
    },
    solution: {
      headline: '9.2% response rate. Proven playbook.',
      detail:
        'Verified lists, warmed domains, and sequences written against a real ICP.',
      metric: '9.2%',
      metricLabel: 'avg. response rate',
    },
  },
  {
    icon: 'Cost',
    problem: {
      headline: 'An SDR hire costs $5K-$7K/month and takes 90 days to ramp.',
      detail:
        "You do not have the runway to wait three months to find out if it works.",
    },
    solution: {
      headline: 'From $1,500/month. Results immediately.',
      detail:
        'No salary, no ramp time, no wrong hire. Setup plus retainer from day one.',
      metric: '$1,500',
      metricLabel: 'per month to start',
    },
  },
  {
    icon: 'Stack',
    problem: {
      headline: "Apollo, Instantly, HubSpot: they do not talk to each other.",
      detail:
        'Tools bought, half-configured, none connected. No one knows what is actually working.',
    },
    solution: {
      headline: 'Integrated system that actually works.',
      detail:
        'One connected stack: enrichment, sending, CRM sync, and reporting.',
      metric: '1 system',
      metricLabel: 'fully connected',
    },
  },
  {
    icon: 'Pipeline',
    problem: {
      headline: 'Just raised. Investors are already asking about pipeline.',
      detail:
        'You have three months before the next check-in. Outbound is not optional anymore.',
    },
    solution: {
      headline: 'Pipeline built. Ready to present.',
      detail:
        'Weekly metrics reports delivered to your inbox. Meetings on the calendar by month two.',
      metric: '~12',
      metricLabel: 'meetings/month avg.',
    },
  },
] as const;

function TriggerCard({
  icon,
  problem,
  solution,
}: (typeof CARDS)[number]) {
  return (
    <div
      className="trigger-card"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderRadius: '18px',
        overflow: 'hidden',
        border: '1px solid #eadfd5',
        background: '#FFFFFF',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(180deg, #fff7f3 0%, #fffdfa 100%)',
          padding: 'clamp(20px,3vw,28px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          borderRight: '1px solid #eadfd5',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <span
            style={{
              fontSize: '0.75rem',
              lineHeight: 1,
              flexShrink: 0,
              marginTop: '2px',
              color: '#b86b60',
              border: '1px solid #efdbd1',
              background: '#ffffff',
              padding: '7px 8px',
              borderRadius: '9999px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {icon}
          </span>
          <p
            style={{
              fontSize: 'clamp(0.875rem,1.6vw,1rem)',
              fontWeight: 700,
              color: '#7e3d34',
              lineHeight: 1.35,
              margin: 0,
            }}
          >
            {problem.headline}
          </p>
        </div>
        <p
          style={{
            fontSize: 'clamp(0.78rem,1.3vw,0.875rem)',
            color: '#716960',
            lineHeight: 1.6,
            margin: 0,
            paddingLeft: '58px',
          }}
        >
          {problem.detail}
        </p>
      </div>

      <div
        style={{
          background: 'linear-gradient(180deg, #f4fbf7 0%, #ffffff 100%)',
          padding: 'clamp(20px,3vw,28px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: '5px',
              background: 'rgba(45,143,102,0.08)',
              border: '1px solid rgba(45,143,102,0.18)',
              borderRadius: '9999px',
              padding: '4px 10px 4px 8px',
            }}
          >
            <span
              style={{
                fontSize: 'clamp(0.85rem,1.6vw,1rem)',
                fontWeight: 800,
                color: '#2d8f66',
                fontVariantNumeric: 'tabular-nums',
                letterSpacing: '-0.02em',
              }}
            >
              {solution.metric}
            </span>
            <span
              style={{
                fontSize: '0.65rem',
                color: 'rgba(45,143,102,0.72)',
                fontWeight: 600,
                letterSpacing: '0.03em',
              }}
            >
              {solution.metricLabel}
            </span>
          </span>
        </div>

        <p
          style={{
            fontSize: 'clamp(0.875rem,1.6vw,1rem)',
            fontWeight: 700,
            color: '#1f6c4d',
            lineHeight: 1.35,
            margin: 0,
          }}
        >
          {solution.headline}
        </p>

        <p
          style={{
            fontSize: 'clamp(0.78rem,1.3vw,0.875rem)',
            color: '#58645d',
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

export default function TriggerCards() {
  return (
    <section
      id="how-it-works"
      style={{
        background: '#FCFAF7',
        padding: '80px 0 88px',
        borderTop: '1px solid #ECE6DE',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <div className="mb-4">
            <Eyebrow subtle>Sound Familiar?</Eyebrow>
          </div>
          <h2
            className="font-bold text-[#172033]"
            style={{
              fontSize: 'clamp(1.75rem,3.5vw,2.75rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              maxWidth: '640px',
            }}
          >
            Every founder hits the same wall.
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#5C5852',
              marginTop: '12px',
              maxWidth: '520px',
              lineHeight: 1.65,
            }}
          >
            Here&apos;s what we hear on almost every discovery call and what we do
            about it.
          </p>
        </div>

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
              color: '#b86b60',
            }}
          >
            The problem
          </div>
          <div
            style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#2d8f66',
            }}
          >
            GrowthStack solves it
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {CARDS.map((card) => (
            <TriggerCard key={card.problem.headline} {...card} />
          ))}
        </div>
      </div>

      <style>{`
        .trigger-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(23, 32, 51, 0.08);
        }
        @media (max-width: 640px) {
          .trigger-card {
            grid-template-columns: 1fr !important;
          }
          .trigger-card > div:first-child {
            border-right: none !important;
            border-bottom: 1px solid #eadfd5;
          }
        }
      `}</style>
    </section>
  );
}
