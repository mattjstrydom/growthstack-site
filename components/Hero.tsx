'use client';

import BookDiscoveryButton from './BookDiscoveryButton';
import BeforeAfterSlider from './BeforeAfterSlider';
import Link from 'next/link';
import {
  Eyebrow,
  primaryButtonStyle,
  secondaryButtonHoverStyle,
  secondaryButtonStyle,
} from './MarketingPrimitives';

/**
 * Structure follows handoff.ai: centred headline with one accented phrase, a
 * short lede, a single primary action, then the product visual sitting under
 * the fold line rather than beside the copy. Palette stays GrowthStack.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#ffffff' }}>
      {/* Blueprint grid, faded out before it reaches the visual. */}
      <div
        aria-hidden
        className="gs-grid-bg gs-grid-fade absolute inset-0"
        style={{ pointerEvents: 'none' }}
      />
      {/* Warm bloom behind the headline. */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[560px]"
        style={{
          pointerEvents: 'none',
          background:
            'radial-gradient(52% 60% at 50% 8%, rgba(241,90,36,0.13) 0%, rgba(241,90,36,0) 72%)',
        }}
      />

      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8 pt-[128px] pb-0 text-center">
        <div className="gs-rise flex justify-center mb-7" style={{ ['--gs-delay' as string]: '0ms' }}>
          <Eyebrow>GTM Infrastructure for Early-Stage B2B</Eyebrow>
        </div>

        <h1
          className="gs-display-xl gs-rise mx-auto"
          style={{
            ['--gs-delay' as string]: '70ms',
            color: '#16181D',
            maxWidth: '20ch',
            marginBottom: '26px',
          }}
        >
          Your pipeline is still
          {/* Break only where there is room; on phones the natural wrap reads better. */}
          <br className="hidden md:inline" />{' '}
          <span style={{ color: '#F15A24' }}>living in the founder&apos;s head.</span>
        </h1>

        <p
          className="gs-lede gs-rise mx-auto"
          id="gs-what-we-do"
          style={{ ['--gs-delay' as string]: '140ms', maxWidth: '58ch', marginBottom: '14px' }}
        >
          You have HubSpot. You have Clay. You&apos;ve watched the tutorials. But deals
          are still tracked in someone&apos;s inbox, follow-up depends on who remembers,
          and no one can tell you what&apos;s in the pipeline without asking around.
        </p>

        <p
          className="gs-rise mx-auto"
          style={{
            ['--gs-delay' as string]: '190ms',
            maxWidth: '56ch',
            fontSize: '1rem',
            color: '#6B6B6B',
            marginBottom: '34px',
          }}
        >
          GrowthStack builds the operating layer that fixes it: CRM structure, workflow
          logic, outbound activation and reporting, in 10 days rather than 10 months.
        </p>

        {/* TODO(matt): swap this mailto for the real /teardown page once you have
            decided on a form backend. The mailto is a working interim so the free
            entry point exists without a half-built form. */}
        <div
          className="gs-rise flex flex-col sm:flex-row gap-3 justify-center items-center mb-5"
          style={{ ['--gs-delay' as string]: '240ms' }}
        >
          <a
            href="mailto:hello@growthstackhq.com?subject=Free%20portal%20teardown&body=Company%3A%20%0AHubSpot%20portal%20or%20website%3A%20%0AWhat%20feels%20most%20broken%20right%20now%3A%20"
            className="inline-flex items-center justify-center gap-2 cursor-pointer"
            style={{ ...primaryButtonStyle, textDecoration: 'none' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#D44E1E';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F15A24';
              e.currentTarget.style.transform = 'none';
            }}
          >
            Get a free portal teardown
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden>
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center"
            style={{ ...secondaryButtonStyle, textDecoration: 'none' }}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, {
                borderColor: secondaryButtonHoverStyle.borderColor as string,
                background: secondaryButtonHoverStyle.background as string,
              });
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(22,24,29,0.16)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            See how it works
          </Link>
        </div>

        <p
          className="gs-rise"
          style={{
            ['--gs-delay' as string]: '290ms',
            fontSize: '0.9375rem',
            color: '#6B6B6B',
            marginBottom: '10px',
          }}
        >
          A 10-minute recorded teardown of what is actually broken in your setup. No
          meeting required.
        </p>

        <p
          className="gs-rise"
          style={{ ['--gs-delay' as string]: '320ms', fontSize: '0.9375rem', marginBottom: '56px' }}
        >
          <BookDiscoveryButton
            utmContent="homepage_hero_audit"
            className="cursor-pointer"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              font: 'inherit',
              color: '#F15A24',
              fontWeight: 500,
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
            hoverStyle={{ color: '#D44E1E' }}
          >
            Ready to move? Book the GTM Audit, $1,200, credited to your build.
          </BookDiscoveryButton>
        </p>

        <div className="gs-rise" style={{ ['--gs-delay' as string]: '380ms' }}>
          <BeforeAfterSlider />
        </div>

        <p
          style={{
            fontSize: '0.875rem',
            color: '#8A8A8A',
            marginTop: '28px',
            paddingBottom: '80px',
          }}
        >
          <strong style={{ color: '#16181D', fontWeight: 600 }}>From $4,500.</strong>{' '}
          Fixed scope. 10-day delivery. Full handover. One build at a time.
        </p>
      </div>
    </section>
  );
}
