import Image from 'next/image';
import { testimonials, type Testimonial } from '@/lib/testimonials';
import { Eyebrow } from './MarketingPrimitives';

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <article
      className="testimonial-card"
      style={{
        background: '#FFFFFF',
        border: '1px solid #ECE6DE',
        borderRadius: '18px',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
        boxShadow: '0 12px 32px rgba(23, 32, 51, 0.04)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            border: '2px solid #F15A24',
          }}
        >
          <Image
            src={t.image}
            alt={`${t.name}, ${t.role} at ${t.company}`}
            width={56}
            height={56}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div>
          <div
            style={{
              fontWeight: 700,
              fontSize: '0.9375rem',
              color: '#1A1A1A',
              lineHeight: 1.2,
            }}
          >
            {t.name}
          </div>
          <div
            style={{
              fontSize: '0.8rem',
              color: '#F15A24',
              fontWeight: 600,
              marginTop: '2px',
            }}
          >
            {t.company}
          </div>
          <div style={{ fontSize: '0.75rem', color: '#888', marginTop: '1px' }}>
            {t.role}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '3px' }} aria-label={`${t.stars} out of 5 stars`}>
        {Array.from({ length: t.stars }).map((_, i) => (
          <svg key={i} viewBox="0 0 16 16" width="16" height="16" fill="#F15A24">
            <path d="M8 1l1.854 3.754L14 5.528l-3 2.926.708 4.128L8 10.354l-3.708 2.228L5 8.454 2 5.528l4.146-.774z" />
          </svg>
        ))}
      </div>

      <blockquote
        style={{
          fontSize: '0.9375rem',
          color: '#4A4A4A',
          lineHeight: 1.7,
          fontStyle: 'italic',
          margin: 0,
          flex: 1,
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {t.metrics.map((m, i) => (
          <span
            key={`${t.id}-${m.label}`}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: i === 0 ? 'rgba(241,90,36,0.07)' : '#F9F5EF',
              border: `1px solid ${i === 0 ? 'rgba(241,90,36,0.2)' : '#ECE6DE'}`,
              borderRadius: '8px',
              padding: '6px 10px',
              minWidth: '60px',
            }}
          >
            <span
              style={{
                fontSize: '0.875rem',
                fontWeight: 800,
                color: i === 0 ? '#F15A24' : '#1A1A1A',
                lineHeight: 1,
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {m.value}
            </span>
            <span
              style={{
                fontSize: '0.6rem',
                color: '#888',
                marginTop: '3px',
                fontWeight: 500,
                textAlign: 'center',
                lineHeight: 1.2,
              }}
            >
              {m.label}
            </span>
          </span>
        ))}
      </div>

      <div
        style={{
          fontSize: '0.72rem',
          color: '#B0B8C0',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          paddingTop: '4px',
          borderTop: '1px solid #F1ECE5',
        }}
      >
        <svg viewBox="0 0 16 16" width="11" height="11" fill="none" stroke="#C8D0D8" strokeWidth="1.5">
          <path d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5c0-2.485-2.015-4.5-4.5-4.5z" />
          <circle cx="8" cy="6" r="1.5" />
        </svg>
        {t.location}
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        background: '#FFFFFF',
        borderTop: '1px solid #ECE6DE',
        borderBottom: '1px solid #ECE6DE',
        padding: '80px 0 88px',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-4">
            <Eyebrow subtle>Results</Eyebrow>
          </div>
          <h2
            className="font-bold"
            style={{
              fontSize: 'clamp(1.875rem,3.5vw,3rem)',
              fontWeight: 700,
              color: '#1A1A1A',
              lineHeight: 1.2,
            }}
          >
            Founders building pipeline with GrowthStack
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              color: '#666',
              marginTop: '12px',
              maxWidth: '520px',
              margin: '12px auto 0',
              lineHeight: 1.65,
            }}
          >
            Real results from early-stage B2B founders across the US, UK, and East
            Africa.
          </p>
        </div>

        <div
          className="testimonial-stats"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {[
            { value: '9.2%', label: 'Average response rate' },
            { value: '10 days', label: 'To first live campaign' },
            { value: '3-4x', label: 'Lower cost than an SDR' },
          ].map(({ value, label }) => (
            <div
              key={label}
              style={{
                background: '#FFFCF8',
                padding: '22px 20px',
                textAlign: 'center',
                borderRadius: '16px',
                border: '1px solid #ECE6DE',
                boxShadow: '0 10px 28px rgba(23, 32, 51, 0.04)',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.5rem,3vw,2.25rem)',
                  fontWeight: 800,
                  color: '#F15A24',
                  fontVariantNumeric: 'tabular-nums',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {value}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 500 }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        <div
          className="testimonial-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
          }}
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(23, 32, 51, 0.1);
        }
        @media (max-width: 900px) {
          .testimonial-grid,
          .testimonial-stats {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .testimonial-grid,
          .testimonial-stats {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
