'use client';

import { Section, SectionHeading } from './MarketingPrimitives';

/**
 * Fit / not-fit contrast is carried by the left rule colour and a small caps
 * label, not by tick and cross glyphs. Same card shell as the rest of the site.
 */
export default function WhoItIsFor() {
  return (
    <Section id="about" tone="sand">
      <SectionHeading
        eyebrow="Who It's For"
        title="This works for a specific kind of team."
      />

      <div
        className="grid md:grid-cols-2 gs-rise"
        style={{ gap: '20px', ['--gs-delay' as string]: '80ms' }}
      >
        <article className="gs-card" style={{ padding: '30px 28px' }}>
          <div
            className="uppercase"
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: '#F15A24',
              marginBottom: '18px',
            }}
          >
            Good fit
          </div>
          <div className="gs-rule-item">
            <p
              style={{
                fontSize: '0.95rem',
                color: '#4A4A4A',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              You&apos;re post-seed or at Series A. You have product-market signal
              and some customers, but the commercial system is still informal.
              Founder-led sales is carrying too much. You know outbound needs to
              happen properly but haven&apos;t had the bandwidth to build it.
              HubSpot is either not set up right or set up by someone who&apos;s no
              longer there. You want to own the system — not pay a retainer for
              someone to run it for you indefinitely.
            </p>
          </div>
        </article>

        <article className="gs-card" style={{ padding: '30px 28px' }}>
          <div
            className="uppercase"
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              color: '#8A8A8A',
              marginBottom: '18px',
            }}
          >
            Not a fit
          </div>
          <div className="gs-rule-item" style={{ borderLeftColor: '#E7E2DA' }}>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#4A4A4A',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              You&apos;re still finding your first customers. You have a mature
              RevOps function in-house. You want strategy slides and
              recommendations, not implementation. You&apos;re looking for a pure
              lead-gen vendor who runs outbound campaigns for you with no systems
              work involved.
            </p>
          </div>
        </article>
      </div>

      <div
        className="gs-rule-item"
        style={{ marginTop: '44px', paddingTop: '4px', paddingBottom: '4px' }}
      >
        <blockquote
          className="font-display"
          style={{
            fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
            lineHeight: 1.45,
            letterSpacing: '-0.015em',
            color: '#16181D',
            margin: 0,
            maxWidth: '640px',
          }}
        >
          &ldquo;The goal isn&apos;t more activity. It&apos;s a GTM system your team can
          trust, measure, and actually run.&rdquo;
        </blockquote>
        <cite
          className="uppercase"
          style={{
            display: 'block',
            marginTop: '14px',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: '#F15A24',
            fontStyle: 'normal',
          }}
        >
          GrowthStack
        </cite>
      </div>
    </Section>
  );
}
