'use client';

/* Extracted from growthstackhq.com CSS:
   Section bg: #F7F8F7 (section-panel), border top/bottom: 1px solid #E2E5E2
   Fit cards: bg #FFFFFF, border 1px solid #E2E5E2, radius 16px, padding 24px
   Fit col header: 0.75rem/700, yes border-top 2px solid #F15A24, no border-top 2px solid #E2E5E2
   Fit items: 0.9375rem, padding 12px 0, border-bottom 1px solid #E2E5E2
   Yes icons: 20px circle, rgba(241,90,36,0.1) bg
   Proof banner: bg #0F1B2D, blockquote color rgba(255,255,255,0.7)
*/

const greatFit = [
  'Have recently raised (pre-seed to Series A)',
  'Still running sales personally or just hired their first salesperson',
  'Need a working outbound motion, not another tool to manage',
  'Want meetings booked, not activity reports',
  "Can't yet justify a full-time SDR hire ($5,000–7,000/mo)",
];

const notAFit = [
  'You already have an established sales team running outbound',
  "You're pre-product and not yet ready to talk to customers",
  'Your business is B2C',
];

export default function WhoItIsFor() {
  return (
    <>
      {/* ── Who It's For ── panel bg */}
      <section
        id="about"
        style={{
          background: '#F7F8F7',
          borderTop: '1px solid #E2E5E2',
          borderBottom: '1px solid #E2E5E2',
          padding: '80px 0',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="font-bold uppercase tracking-[0.1em] mb-3" style={{ fontSize: '0.72rem', color: '#F15A24' }}>Who It&apos;s For</div>
            <h2 className="font-bold text-[#1A1A1A]" style={{ fontSize: 'clamp(1.875rem,3.5vw,3rem)', fontWeight: 700, lineHeight: 1.2 }}>
              GrowthStack is for founders who...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Great fit */}
            <div
              className="rounded-2xl"
              style={{ background: '#FFFFFF', border: '1px solid #E2E5E2', padding: '28px 24px' }}
            >
              <h4
                className="font-bold uppercase tracking-[0.08em] mb-4 pb-3"
                style={{ fontSize: '0.75rem', color: '#F15A24', borderBottom: '2px solid #F15A24' }}
              >
                ✓ &nbsp;Great fit
              </h4>
              <ul>
                {greatFit.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{ padding: '12px 0', borderBottom: '1px solid #E2E5E2', fontSize: '0.9375rem', color: '#1A1A1A' }}
                  >
                    <span
                      className="shrink-0 rounded-full flex items-center justify-center mt-0.5"
                      style={{ width: '20px', height: '20px', background: 'rgba(241,90,36,0.1)', color: '#F15A24', fontSize: '0.7rem', fontWeight: 700 }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not a fit */}
            <div
              className="rounded-2xl"
              style={{ background: '#FFFFFF', border: '1px solid #E2E5E2', padding: '28px 24px' }}
            >
              <h4
                className="font-bold uppercase tracking-[0.08em] mb-4 pb-3"
                style={{ fontSize: '0.75rem', color: '#888888', borderBottom: '2px solid #E2E5E2' }}
              >
                ✗ &nbsp;Not a fit
              </h4>
              <ul>
                {notAFit.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{ padding: '12px 0', borderBottom: '1px solid #E2E5E2', fontSize: '0.9375rem', color: '#4A4A4A' }}
                  >
                    <span
                      className="shrink-0 rounded-full flex items-center justify-center mt-0.5"
                      style={{ width: '20px', height: '20px', background: '#F7F8F7', border: '1px solid #E2E5E2', color: '#888', fontSize: '0.7rem' }}
                    >
                      ✗
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Proof banner ── dark */}
      <div style={{ background: '#0F1B2D', padding: '56px 0' }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
          <blockquote
            className="mx-auto max-w-2xl italic leading-[1.75] mb-3"
            style={{ fontSize: 'clamp(1rem,2vw,1.25rem)', color: 'rgba(255,255,255,0.7)' }}
          >
            &ldquo;We&apos;ve run outbound campaigns for startups in the US, UK, and East Africa. B2B is B2B — the fundamentals work everywhere.&rdquo;
          </blockquote>
          <cite className="not-italic font-semibold" style={{ fontSize: '0.875rem', color: '#F15A24' }}>— GrowthStack</cite>
        </div>
      </div>
    </>
  );
}
