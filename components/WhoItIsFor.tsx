'use client';

import { Eyebrow } from './MarketingPrimitives';

const greatFit = [
  'Founder-led sales is still carrying too much of the pipeline',
  'HubSpot is underused, messy, or not set up properly',
  'The team needs better reporting and clearer pipeline visibility',
  'Outbound needs to exist inside a real system, not as a side project',
  'You are preparing for scale, handoff, or a more structured GTM motion',
];

const notAFit = [
  'You already have a mature RevOps function in-house',
  'You only want a pure lead-gen vendor with no systems work',
  'You are pre-product and still finding basic market demand',
  'You want strategy slides, not implementation',
];

export default function WhoItIsFor() {
  return (
    <>
      <section
        id="about"
        style={{
          background: '#FBF6EF',
          borderTop: '1px solid #ECE2D4',
          borderBottom: '1px solid #ECE2D4',
          padding: '72px 0',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-3">
              <Eyebrow subtle>Who It&apos;s For</Eyebrow>
            </div>
            <h2
              className="font-bold text-[#1A1A1A]"
              style={{
                fontSize: 'clamp(1.875rem,3.5vw,3rem)',
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              GrowthStack is for early-stage B2B teams with traction, pressure to
              grow, and a commercial system that still needs to be built properly.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            <div
              className="rounded-2xl"
              style={{
                background: '#FFFFFF',
                border: '1px solid #ECE2D4',
                padding: '24px 22px',
                boxShadow: '0 10px 28px rgba(23, 32, 51, 0.04)',
              }}
            >
              <h4
                className="font-bold uppercase tracking-[0.08em] mb-4 pb-3"
                style={{
                  fontSize: '0.75rem',
                  color: '#F15A24',
                  borderBottom: '2px solid #F15A24',
                }}
              >
                Good fit
              </h4>
              <ul>
                {greatFit.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #ECE2D4',
                      fontSize: '0.9375rem',
                      color: '#1A1A1A',
                    }}
                  >
                    <span
                      className="shrink-0 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        width: '20px',
                        height: '20px',
                        background: 'rgba(241,90,36,0.1)',
                        color: '#F15A24',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                      }}
                    >
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="rounded-2xl"
              style={{
                background: '#FFFFFF',
                border: '1px solid #ECE2D4',
                padding: '24px 22px',
                boxShadow: '0 10px 28px rgba(23, 32, 51, 0.04)',
              }}
            >
              <h4
                className="font-bold uppercase tracking-[0.08em] mb-4 pb-3"
                style={{
                  fontSize: '0.75rem',
                  color: '#888888',
                  borderBottom: '2px solid #ECE2D4',
                }}
              >
                Not a fit
              </h4>
              <ul>
                {notAFit.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{
                      padding: '12px 0',
                      borderBottom: '1px solid #ECE2D4',
                      fontSize: '0.9375rem',
                      color: '#4A4A4A',
                    }}
                  >
                    <span
                      className="shrink-0 rounded-full flex items-center justify-center mt-0.5"
                      style={{
                        width: '20px',
                        height: '20px',
                        background: '#F7F2EA',
                        border: '1px solid #ECE2D4',
                        color: '#888',
                        fontSize: '0.7rem',
                      }}
                    >
                      -
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: '#FBF6EF', padding: '0 0 48px' }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div
            style={{
              background: 'linear-gradient(180deg, #fff7ee 0%, #ffffff 100%)',
              border: '1px solid #ECE2D4',
              borderRadius: '20px',
              padding: '28px 22px',
              textAlign: 'center',
              boxShadow: '0 18px 40px rgba(23, 32, 51, 0.05)',
            }}
          >
            <blockquote
              className="mx-auto max-w-2xl italic leading-[1.75] mb-3"
              style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: '#3E464F' }}
            >
              &ldquo;The goal is not just more activity. It is a GTM system your
              team can trust, run, and grow on top of.&rdquo;
            </blockquote>
            <cite
              className="not-italic font-semibold"
              style={{ fontSize: '0.875rem', color: '#F15A24' }}
            >
              GrowthStack
            </cite>
          </div>
        </div>
      </div>
    </>
  );
}
