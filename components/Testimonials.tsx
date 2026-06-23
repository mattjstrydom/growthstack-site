import { Eyebrow } from './MarketingPrimitives';

const proofTiles = [
  {
    stat: '12% → 23%',
    label: 'Lead-to-opportunity conversion',
    body:
      'Rebuilt the full outbound motion for a B2B SaaS conference platform — ICP definition, Clay enrichment, multi-channel sequences, and CRM handoffs. Conversion improved in 60 days. Pipeline became measurable for the first time.',
  },
  {
    stat: '90%',
    label: 'Reduction in sales response time',
    body:
      'Automated lead routing and ownership assignment inside HubSpot. Reps stopped arguing over who owned what. Speed-to-lead dropped from 6 hours to 22 minutes.',
  },
  {
    stat: '40%+',
    label: 'Open rates at 20,000+ monthly touchpoints',
    body:
      'Signal-based outbound infrastructure with AI personalisation at scale. Not a one-week spike — sustained over multiple months across a high-volume outbound program.',
  },
] as const;

function ProofCard({
  stat,
  label,
  body,
}: (typeof proofTiles)[number]) {
  return (
    <article
      className="testimonial-card"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '18px',
        padding: '24px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
      }}
    >
      <div
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          color: '#F15A24',
          lineHeight: 1,
          letterSpacing: '-0.03em',
          fontStyle: 'italic',
        }}
      >
        {stat}
      </div>
      <div
        style={{
          fontSize: 'clamp(0.78rem, 1.3vw, 0.875rem)',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.45)',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          marginTop: '6px',
          lineHeight: 1.35,
        }}
      >
        {label}
      </div>
      <p
        style={{
          fontSize: '0.9375rem',
          color: 'rgba(255,255,255,0.7)',
          lineHeight: 1.7,
          margin: 0,
          flex: 1,
        }}
      >
        {body}
      </p>
      <div
        style={{
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.35)',
          paddingTop: '4px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          fontWeight: 600,
        }}
      >
        Methodology-backed build result
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        background: '#0F1B2D',
        borderTop: 'none',
        borderBottom: 'none',
        padding: '80px 0',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-4">
            <Eyebrow subtle>Proof</Eyebrow>
          </div>
          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(1.875rem,3.5vw,3rem)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
            }}
          >
            Built from 30+ outbound and RevOps systems across B2B SaaS.
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '12px',
              maxWidth: '700px',
              margin: '12px auto 0',
              lineHeight: 1.65,
            }}
          >
            GrowthStack doesn&apos;t have a long client list yet — that&apos;s honest.
            What it has is a track record of building these systems inside real
            companies, with real results that are specific enough to verify.
          </p>
        </div>

        <div
          className="testimonial-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {proofTiles.map((tile) => (
            <ProofCard key={tile.label} {...tile} />
          ))}
        </div>

        <p
          style={{
            fontSize: '0.95rem',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.7,
            maxWidth: '860px',
            margin: '28px auto 0',
            textAlign: 'center',
          }}
        >
          These numbers are real and methodology-based. If you want to understand
          how any of them were achieved, ask in the discovery call — the answer is
          in the system design, not the luck.
        </p>
      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(23, 32, 51, 0.1);
        }
        @media (max-width: 900px) {
          .testimonial-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonial-card {
            border-radius: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
