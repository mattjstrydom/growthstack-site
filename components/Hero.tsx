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
          'radial-gradient(circle at 62% 18%, rgba(241,90,36,0.12) 0%, transparent 30%), linear-gradient(180deg, #102033 0%, #16283d 62%, #f6efe6 100%)',
        paddingTop: '136px',
        paddingBottom: '0',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 60% 36%, rgba(255,255,255,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8 pb-[96px] sm:pb-[120px]">
        <div className="max-w-[760px]">
          <div className="mb-6">
            <Eyebrow>GTM Systems and RevOps for Early-Stage B2B</Eyebrow>
          </div>

          <h1
            className="font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 700 }}
          >
            From founder-led sales
            <br />
            <em className="not-italic" style={{ color: '#F15A24' }}>
              to a working GTM engine.
            </em>
          </h1>

          <p
            className="mb-5 leading-[1.75] max-w-[660px]"
            id="gs-what-we-do"
            style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.74)' }}
          >
            GrowthStack helps early-stage B2B startups set up HubSpot, structure
            pipeline, automate workflows, and activate outbound inside one working
            system.
          </p>

          <p
            className="mb-8 leading-[1.75] max-w-[640px]"
            style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.58)' }}
          >
            CRM, pipeline, automation, reporting, and outbound built for founders
            who need a system, not more scattered tools.
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
                border: '2px solid rgba(255,255,255,0.3)',
                color: '#FFFFFF',
                transition: 'border-color 0.2s ease, color 0.2s ease',
                cursor: 'pointer',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              See How It Works
            </Link>
          </div>

          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
            <strong style={{ color: 'rgba(255,255,255,0.84)' }}>
              Used by early-stage B2B teams
            </strong>{' '}
            building their first repeatable revenue motion.
          </p>
        </div>
      </div>

      <div className="relative h-16 sm:h-20">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#FCFAF7"
          />
        </svg>
      </div>
    </section>
  );
}
