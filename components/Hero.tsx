'use client';

import BookDiscoveryButton from './BookDiscoveryButton';
import BeforeAfterSlider from './BeforeAfterSlider';
import Link from 'next/link';
import {
  Eyebrow,
  primaryButtonHoverStyle,
  primaryButtonStyle,
} from './MarketingPrimitives';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          '#ffffff url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23e5e7eb\' fill-opacity=\'0.5\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        paddingTop: '136px',
        paddingBottom: '0',
      }}
    >
      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8 pb-[96px] sm:pb-[120px]">
        <div className="max-w-[760px]">
          <div className="mb-6">
            <Eyebrow>GTM Infrastructure for Early-Stage B2B</Eyebrow>
          </div>

          <h1
            className="font-extrabold text-[#1a1a1a] mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.02em' }}
          >
            Your pipeline is still
            <br />
            <em className="not-italic" style={{ color: '#F15A24' }}>
              living in the founder&apos;s head.
            </em>
          </h1>

          <p
            className="mb-5 leading-[1.75] max-w-[660px]"
            id="gs-what-we-do"
            style={{ fontSize: 'clamp(1.15rem,2.2vw,1.4rem)', color: '#555555', lineHeight: 1.65 }}
          >
            You have HubSpot. You have Clay. You&apos;ve watched the tutorials. But
            deals are still tracked in someone&apos;s inbox, follow-up depends on who
            remembers, and no one can tell you what&apos;s actually in the pipeline
            without asking around.
          </p>

          <p
            className="mb-8 leading-[1.75] max-w-[640px]"
            style={{ fontSize: '1rem', color: '#555555' }}
          >
            GrowthStack builds the operating layer that fixes that — CRM
            structure, workflow logic, outbound activation, and reporting — in 10
            days, not 10 months.
          </p>
        </div>

        <BeforeAfterSlider />

        <div className="max-w-[720px]">
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <BookDiscoveryButton
              utmContent="homepage_hero"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold rounded-lg cursor-pointer transition-all"
              style={primaryButtonStyle}
              hoverStyle={primaryButtonHoverStyle}
            >
              Book a Discovery Call
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </BookDiscoveryButton>

            <Link
              href="/how-it-works"
              className="inline-flex items-center justify-center font-semibold rounded-lg"
              style={{
                padding: '14px 36px',
                fontSize: '1.0625rem',
                fontWeight: 600,
                borderRadius: '8px',
                border: '2px solid rgba(26,26,26,0.3)',
                color: '#1a1a1a',
                transition: 'border-color 0.2s ease, color 0.2s ease',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(26,26,26,0.65)';
                e.currentTarget.style.color = '#1a1a1a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(26,26,26,0.3)';
                e.currentTarget.style.color = '#1a1a1a';
              }}
            >
              See How It Works
            </Link>
          </div>

          <p style={{ fontSize: '0.875rem', color: '#666666' }}>
            <strong style={{ color: '#1a1a1a' }}>
              Fixed scope.
            </strong>{' '}
            10-day delivery. Full handover at the end.
          </p>
        </div>
      </div>

      <div className="relative h-16 sm:h-20">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
