'use client';

import BookDiscoveryButton from './BookDiscoveryButton';
import BeforeAfterSlider from './BeforeAfterSlider';
import {
  Eyebrow,
  primaryButtonHoverStyle,
  primaryButtonStyle,
} from './MarketingPrimitives';

/* Extracted from growthstackhq.com CSS:
   bg: #0F1B2D
   h1: clamp(2.5rem,5vw,4.5rem) / weight 700 / color #FFFFFF
   h1 em: color #F15A24
   sub: 1.125rem / rgba(255,255,255,0.7)
   glow: radial-gradient(circle, rgba(241,90,36,0.09) 0%, transparent 65%)
   padding: 160px 0 120px
   wave fill: #F7F8F7 (into pain/panel section)
*/

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#0F1B2D', paddingTop: '160px', paddingBottom: '0' }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 60% 40%, rgba(241,90,36,0.09) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8 pb-[120px]">
        <div className="max-w-[720px]">

          {/* Eyebrow badge */}
          <div className="mb-6">
            <Eyebrow>For B2B Startups That Just Raised</Eyebrow>
          </div>

          {/* h1 */}
          <h1
            className="font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700 }}
          >
            You raised.<br />
            <em className="not-italic" style={{ color: '#F15A24' }}>Now you need pipeline.</em>
          </h1>

          {/* Sub-text */}
          <p
            className="mb-8 leading-[1.75] max-w-[600px]"
            id="gs-what-we-do"
            style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)' }}
          >
            GrowthStack builds and runs done-for-you outbound for early-stage B2B startups. We set up your cold email and LinkedIn system, build your lead lists, and manage campaigns monthly — so founders book meetings without doing it themselves. From zero to live campaign in 10 business days, from $2,500.
          </p>
        </div>

        {/* Before / After slider — full container width */}
        <BeforeAfterSlider />

        <div className="max-w-[720px]">
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <BookDiscoveryButton
              utmContent="homepage_hero"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold rounded-lg cursor-pointer transition-all"
              style={primaryButtonStyle}
              hoverStyle={primaryButtonHoverStyle}
            >
              Book a Discovery Call
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </BookDiscoveryButton>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center font-semibold rounded-lg"
              style={{
                padding: '14px 36px',
                fontSize: '1.0625rem',
                fontWeight: 600,
                borderRadius: '8px',
                border: '2px solid rgba(255,255,255,0.3)',
                color: '#FFFFFF',
                transition: 'border-color 0.2s ease, color 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.color = '#FFFFFF'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#FFFFFF'; }}
            >
              See how it works
            </a>
          </div>

          {/* Proof line */}
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
            <strong style={{ color: 'rgba(255,255,255,0.75)' }}>Used by B2B founders</strong> in the US, UK, and East Africa to build their first reliable outbound motion.
          </p>
        </div>{/* /max-w-[720px] CTAs */}
      </div>{/* /max-w-[1100px] */}

      {/* Wave into panel section */}
      <div className="relative h-16 sm:h-20">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F7F8F7" />
        </svg>
      </div>
    </section>
  );
}
