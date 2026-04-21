'use client';

import { Eyebrow } from './MarketingPrimitives';

const greatFit = [
  'Have recently raised (pre-seed to Series A)',
  'Still running sales personally or just hired their first salesperson',
  'Need a working outbound motion, not another tool to manage',
  'Want meetings booked, not activity reports',
  'Cannot yet justify a full-time SDR hire ($5K-$7K/mo)',
];

const notAFit = [
  'You already have an established sales team running outbound',
  'You are pre-product and not yet ready to talk to customers',
  'Your business is B2C',
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
          padding: '80px 0',
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
              GrowthStack is for founders who...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="rounded-2xl"
              style={{
                background: '#FFFFFF',
                border: '1px solid #ECE2D4',
                padding: '28px 24px',
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
                Great fit
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
                padding: '28px 24px',
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

      <div style={{ background: '#FBF6EF', padding: '0 0 56px' }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div
            style={{
              background: 'linear-gradient(180deg, #fff7ee 0%, #ffffff 100%)',
              border: '1px solid #ECE2D4',
              borderRadius: '20px',
              padding: '36px 28px',
              textAlign: 'center',
              boxShadow: '0 18px 40px rgba(23, 32, 51, 0.05)',
            }}
          >
            <blockquote
              className="mx-auto max-w-2xl italic leading-[1.75] mb-3"
              style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: '#3E464F' }}
            >
              &ldquo;We&apos;ve run outbound campaigns for startups in the US, UK,
              and East Africa. B2B is B2B. The fundamentals work everywhere.&rdquo;
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
