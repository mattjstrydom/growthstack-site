'use client';

import { Eyebrow, Section, SectionHeading } from './MarketingPrimitives';

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
    <article
      className="gs-card"
      style={{
        padding: '30px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
      }}
    >
      <Eyebrow>{label}</Eyebrow>
      <h3 className="gs-display-md" style={{ color: '#16181D', margin: 0 }}>
        {title}
      </h3>
      <p
        style={{
          fontSize: '0.95rem',
          color: '#4A4A4A',
          lineHeight: 1.7,
          margin: 0,
          flex: 1,
        }}
      >
        {body}
      </p>
      <p
        style={{
          fontSize: '0.875rem',
          color: '#8A8A8A',
          lineHeight: 1.7,
          margin: 0,
          paddingTop: '14px',
          borderTop: '1px solid #E7E2DA',
        }}
      >
        {note}
      </p>
    </article>
  );
}

export default function TriggerCards() {
  return (
    <Section tone="sand">
      {/* TODO: Change 8 references the old CRM trust / Founder load table rows, which no longer exist after the homepage section rewrite. */}
      <SectionHeading
        eyebrow="Recognition"
        title={<>If any of this sounds familiar, you&apos;re in the right place.</>}
      />

      <div
        className="gs-rise"
        style={{
          ['--gs-delay' as string]: '80ms',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {recognitionItems.map((item) => (
          <p
            key={item}
            className="gs-rule-item"
            style={{
              margin: 0,
              fontSize: '0.95rem',
              color: '#4A4A4A',
              lineHeight: 1.7,
            }}
          >
            {item}
          </p>
        ))}
      </div>

      <p
        style={{
          marginTop: '32px',
          marginBottom: '0',
          fontSize: '1rem',
          fontWeight: 500,
          color: '#16181D',
          lineHeight: 1.7,
        }}
      >
        This is the exact problem GrowthStack was built for.
      </p>

      <div style={{ marginTop: '88px' }}>
        <SectionHeading
          eyebrow="What We Build"
          title="One operating layer. Everything connected."
          lede={
            <>
              Most early-stage B2B teams aren&apos;t short on tools. They&apos;re short
              on a system that makes those tools work together. GrowthStack builds
              that system — and hands it back to you fully documented, fully yours.
            </>
          }
        />

        <div
          className="gs-rise"
          style={{
            ['--gs-delay' as string]: '80ms',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {cards.map((card) => (
            <TriggerCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </Section>
  );
}
