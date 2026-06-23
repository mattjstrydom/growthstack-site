'use client';

import { Eyebrow } from './MarketingPrimitives';

export default function WhoItIsFor() {
  return (
    <>
      <section
        id="about"
        style={{
          background: '#FDFAF6',
          borderTop: '1px solid #EAE4DB',
          borderBottom: '1px solid #EAE4DB',
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
              This works for a specific kind of team.
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
              <p style={{ fontSize: '0.9375rem', color: '#1A1A1A', lineHeight: 1.75, margin: 0 }}>
                You&apos;re post-seed or at Series A. You have product-market signal
                and some customers, but the commercial system is still informal.
                Founder-led sales is carrying too much. You know outbound needs to
                happen properly but haven&apos;t had the bandwidth to build it.
                HubSpot is either not set up right or set up by someone who&apos;s no
                longer there. You want to own the system — not pay a retainer for
                someone to run it for you indefinitely.
              </p>
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
              <p style={{ fontSize: '0.9375rem', color: '#4A4A4A', lineHeight: 1.75, margin: 0 }}>
                You&apos;re still finding your first customers. You have a mature
                RevOps function in-house. You want strategy slides and
                recommendations, not implementation. You&apos;re looking for a pure
                lead-gen vendor who runs outbound campaigns for you with no systems
                work involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ background: '#FDFAF6', padding: '0 0 48px' }}>
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
              &ldquo;The goal isn&apos;t more activity. It&apos;s a GTM system your team can
              trust, measure, and actually run.&rdquo;
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
