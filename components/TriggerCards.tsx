'use client';

import { Eyebrow } from './MarketingPrimitives';

const recognitionItems = [
  "Your CRM has lifecycle stages that nobody uses correctly — including you.",
  "Outbound is happening, but it's not connected to anything. Replies land in inboxes. Nothing updates in HubSpot.",
  "You've been meaning to properly set up HubSpot for two quarters.",
  "Your last hire built their own spreadsheet within a week because they didn't trust the CRM.",
  "You can't tell an investor how many qualified opportunities are in the pipeline right now without pulling numbers from three different places.",
  "You know what a good outbound motion looks like. You just haven't had time to build it.",
];

const cards = [
  {
    label: '01',
    title: 'GTM Foundation & HubSpot Setup',
    body:
      'Lifecycle stages that match how your revenue actually moves. Deal pipelines the team will actually use. Contact and company properties that support real reporting. Ownership rules so leads do not fall through the gaps. Built from scratch or rebuilt properly from what exists.',
    note:
      'Best for: Teams moving from founder-led selling who need a CRM they can actually trust.',
  },
  {
    label: '02',
    title: 'Workflow Automation & Lead Routing',
    body:
      'Qualification, routing, handoffs, and follow-up running automatically — so the team stops managing process and starts closing. Clay enrichment and signal-based triggers feeding into HubSpot. Outbound replies flowing back into the CRM instead of dying in inboxes.',
    note:
      'Best for: Teams with a working product and some pipeline who need the motion to become repeatable.',
  },
  {
    label: '03',
    title: 'HubSpot Cleanup & RevOps Rebuild',
    body:
      "If your HubSpot is live but nobody trusts it — duplicate properties, broken workflows, stages that don't reflect reality, dashboards nobody looks at — we rebuild it into something the team can actually run on.",
    note:
      'Best for: Post-seed teams who inherited a messy portal and need it working before they scale on top of it.',
  },
] as const;

function TriggerCard({
  label,
  title,
  body,
  note,
}: (typeof cards)[number]) {
  return (
    <div
      className="trigger-card"
      style={{
        borderRadius: '18px',
        border: '1px solid #eadfd5',
        background: '#FFFFFF',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        padding: 'clamp(20px,3vw,28px)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignSelf: 'flex-start',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#F15A24',
            border: '1px solid rgba(241,90,36,0.18)',
            background: 'rgba(241,90,36,0.08)',
            padding: '6px 10px',
            borderRadius: '9999px',
          }}
        >
          {label}
        </span>
        <h3
          style={{
            fontSize: 'clamp(1rem,1.8vw,1.2rem)',
            fontWeight: 700,
            color: '#1A1A1A',
            lineHeight: 1.35,
            margin: 0,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '0.9375rem',
            color: '#5C5852',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {body}
        </p>
        <p style={{ fontSize: '0.86rem', color: '#8A847D', lineHeight: 1.6, margin: 0 }}>
          {note}
        </p>
      </div>
    </div>
  );
}

export default function TriggerCards() {
  return (
    <section
      style={{
        background: '#FDFAF6',
        padding: '72px 0 80px',
        borderTop: '1px solid #EAE4DB',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        {/* TODO: Change 8 references the old CRM trust / Founder load table rows, which no longer exist after the homepage section rewrite. */}
        <div className="mb-10">
          <div className="mb-4">
            <Eyebrow subtle>Recognition</Eyebrow>
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
            If any of this sounds familiar, you&apos;re in the right place.
          </h2>
        </div>

        <div className="recognition-grid" style={{ display: 'grid', gap: '12px', marginBottom: '18px' }}>
          {recognitionItems.map((item) => (
            <div
              key={item}
              style={{
                background: '#FFFFFF',
                border: '1px solid #ECE6DE',
                borderRadius: '16px',
                padding: '18px 20px',
                fontSize: '0.95rem',
                color: '#5C5852',
                lineHeight: 1.65,
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <p style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '44px' }}>
          This is the exact problem GrowthStack was built for.
        </p>

        <div className="mb-10">
          <div className="mb-4">
            <Eyebrow subtle>What We Build</Eyebrow>
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
            One operating layer. Everything connected.
          </h2>
          <p
            style={{
              fontSize: '1rem',
              color: '#5C5852',
              marginTop: '12px',
              maxWidth: '700px',
              lineHeight: 1.65,
            }}
          >
            Most early-stage B2B teams aren&apos;t short on tools. They&apos;re short on a
            system that makes those tools work together. GrowthStack builds that
            system — and hands it back to you fully documented, fully yours.
          </p>
        </div>

        <div
          className="trigger-cards-grid"
          style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {cards.map((card) => (
            <TriggerCard key={card.title} {...card} />
          ))}
        </div>
      </div>

      <style>{`
        .trigger-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 38px rgba(23, 32, 51, 0.08);
        }
        @media (max-width: 900px) {
          .trigger-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .trigger-card {
            border-radius: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
