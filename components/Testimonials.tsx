import { Section, SectionHeading, StatBand } from './MarketingPrimitives';

/**
 * Note on structure: handoff.ai runs a results band, then a ratings row, then a
 * testimonial carousel with customer photos. Everything after the results band
 * needs named customers, which GrowthStack does not have. Rather than fake it,
 * this section keeps the metric band and replaces the carousel with the build
 * context behind each number. Add the carousel when there are real names to put
 * in it. (There are unused stock headshots in public/headshots/ from an earlier
 * attempt at this. Delete them.)
 */

// TODO(matt): each tile needs the missing context before this section is credible.
// Fill in `client` with company size, stage and category (e.g. "22-person Series A
// logistics SaaS, HubSpot Professional") and `period` with the real timeframe.
// A number without context reads as invented, even when it is true. If you cannot
// write the context for a tile, delete the tile rather than shipping the number.
const proofTiles = [
  {
    stat: '12% → 23%',
    label: 'Lead-to-opportunity conversion',
    client: 'B2B SaaS conference platform', // TODO(matt): add headcount + funding stage
    period: 'Measured over 60 days post-handover',
    body:
      'Rebuilt the full outbound motion: ICP definition, Clay enrichment, multi-channel sequences and CRM handoffs. Pipeline became measurable for the first time.',
  },
  {
    stat: '6 hrs → 22 min',
    label: 'Speed-to-lead',
    client: 'B2B SaaS team', // TODO(matt): add headcount + funding stage + HubSpot tier
    period: 'TODO(matt): measured over what period?',
    body:
      'Ownership rules, routing workflows and notification logic that had never been set up properly. Reps stopped arguing over who owned what.',
  },
  {
    stat: '40%+',
    label: 'Open rate at 20,000+ monthly touchpoints',
    client: 'TODO(matt): whose programme was this?',
    period: 'Sustained across months, not a single-week spike',
    body:
      'Signal-based outbound infrastructure with AI personalisation at volume, on properly authenticated sending domains.',
  },
] as const;

export default function Testimonials() {
  return (
    <Section tone="dark">
      <SectionHeading
        tone="dark"
        align="center"
        eyebrow="Proof"
        title={
          <>
            Built from 30+ outbound and RevOps
            <br className="hidden md:block" /> systems across B2B SaaS.
          </>
        }
        lede={
          <>
            GrowthStack does not have a long client list yet, and that is worth saying
            plainly. What it has is a track record of building these systems inside real
            companies.
          </>
        }
      />

      <StatBand
        items={proofTiles.map((tile) => ({ value: tile.stat, label: tile.label }))}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginTop: '20px',
        }}
      >
        {proofTiles.map((tile) => (
          <article
            key={tile.label}
            className="gs-card-dark"
            style={{ padding: '26px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}
          >
            <div
              style={{
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#ffffff',
                lineHeight: 1.45,
              }}
            >
              {tile.client}
            </div>
            <p
              style={{
                fontSize: '0.9375rem',
                color: 'rgba(255,255,255,0.66)',
                lineHeight: 1.7,
                margin: 0,
                flex: 1,
              }}
            >
              {tile.body}
            </p>
            <div
              style={{
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.38)',
                paddingTop: '12px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                lineHeight: 1.6,
              }}
            >
              {tile.period}. Client not named publicly.
            </div>
          </article>
        ))}
      </div>

      {/* TODO(matt): the strongest possible version of this line is a named reference.
          Ask the clients behind these numbers whether they will take a private call
          with a prospect, even under NDA, then say so here. */}
      <p
        style={{
          fontSize: '0.95rem',
          color: 'rgba(255,255,255,0.5)',
          lineHeight: 1.7,
          maxWidth: '640px',
          margin: '32px auto 0',
          textAlign: 'center',
        }}
      >
        Every number above came from a build we can walk you through step by step: what
        was broken, what changed, and why the number moved. Ask about any of them on the
        audit call.
      </p>
    </Section>
  );
}
