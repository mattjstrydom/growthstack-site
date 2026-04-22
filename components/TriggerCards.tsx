'use client';

import { Eyebrow } from './MarketingPrimitives';

const CARDS = [
  {
    eyebrow: 'CRM trust',
    problem: {
      headline: 'HubSpot exists, but no one trusts it.',
      detail:
        'Properties are inconsistent, stages are messy, and reporting does not reflect what is actually happening.',
    },
    solution: {
      headline: 'Clean CRM structure founders can finally use.',
      detail:
        'We set up lifecycle stages, contact and deal properties, dashboards, and workflows that reflect the real motion.',
      metric: '1 source',
      metricLabel: 'of truth',
    },
  },
  {
    eyebrow: 'Founder load',
    problem: {
      headline: 'Sales still lives in the founder’s head.',
      detail:
        'Follow-up, qualification, handoffs, and next steps depend too much on memory and manual effort.',
    },
    solution: {
      headline: 'A repeatable process the team can actually run.',
      detail:
        'We document the flow, automate routine steps, and turn ad hoc selling into an operational system.',
      metric: 'Clear',
      metricLabel: 'handoffs',
    },
  },
  {
    eyebrow: 'Tool sprawl',
    problem: {
      headline: 'The team has tools, not a system.',
      detail:
        'HubSpot, Apollo, Clay, LinkedIn, inboxes, and spreadsheets exist, but they do not work together.',
    },
    solution: {
      headline: 'Connected GTM infrastructure.',
      detail:
        'We connect the stack so enrichment, outreach, CRM updates, and reporting all feed one workflow.',
      metric: 'Connected',
      metricLabel: 'stack',
    },
  },
  {
    eyebrow: 'Visibility',
    problem: {
      headline: 'Investors want pipeline visibility.',
      detail:
        'But conversion stages, funnel reporting, and commercial metrics are still fuzzy or missing.',
    },
    solution: {
      headline: 'Reporting that shows what is actually moving.',
      detail:
        'Dashboards, pipeline views, and tracking built for founders who need signal, not more status updates.',
      metric: 'Weekly',
      metricLabel: 'clarity',
    },
  },
  {
    eyebrow: 'Pipeline',
    problem: {
      headline: 'Outbound is happening in fragments.',
      detail:
        'Campaigns, replies, and follow-up live outside the CRM, so pipeline generation never becomes a real motion.',
    },
    solution: {
      headline: 'Outbound inside a usable GTM system.',
      detail:
        'We activate outbound where it fits, with workflows, reporting, and ownership already in place.',
      metric: 'Repeatable',
      metricLabel: 'pipeline',
    },
  },
] as const;

function TriggerCard({
  eyebrow,
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
        <span
          style={{
            display: 'inline-flex',
            alignSelf: 'flex-start',
            fontSize: '0.67rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#b86b60',
            border: '1px solid #efdbd1',
            background: '#ffffff',
            padding: '6px 9px',
            borderRadius: '9999px',
          }}
        >
          {eyebrow}
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
        <p
          style={{
            fontSize: 'clamp(0.78rem,1.3vw,0.875rem)',
            color: '#716960',
            lineHeight: 1.6,
            margin: 0,
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
      style={{
        background: '#FCFAF7',
        padding: '72px 0 80px',
        borderTop: '1px solid #ECE6DE',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <div className="mb-4">
            <Eyebrow subtle>What Founders Are Really Dealing With</Eyebrow>
          </div>
          <h2
            className="font-bold text-[#172033]"
            style={{
              fontSize: 'clamp(1.75rem,3.5vw,2.75rem)',
              fontWeight: 700,
              lineHeight: 1.2,
              maxWidth: '720px',
            }}
          >
            Most early-stage teams do not need another tool. They need their
            commercial system to work.
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#5C5852',
              marginTop: '12px',
              maxWidth: '620px',
              lineHeight: 1.65,
            }}
          >
            GrowthStack turns scattered sales activity into a GTM engine you can
            actually run, measure, and improve.
          </p>
        </div>

        <div
          className="trigger-card-headings"
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
            What is broken
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
            What GrowthStack builds
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
          .trigger-card-headings {
            display: none !important;
          }
          .trigger-card {
            grid-template-columns: 1fr !important;
            border-radius: 14px !important;
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
