'use client';

import type { CSSProperties } from 'react';
import Link from 'next/link';

/* Flat ink surface (no glow — the glow belongs to content sections, not the
   footer), hairline rules, and the same small-caps label treatment used by
   Eyebrow. Type comes down to system sizes: 0.7rem caps headings, 0.9rem links.
   Layout, links and the bottom bar are unchanged. */

const LABEL_STYLE: CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 600,
  letterSpacing: '0.14em',
  color: 'rgba(255,255,255,0.35)',
  marginBottom: '18px',
};

const LINK_COLOR = 'rgba(255,255,255,0.55)';
const LINK_HOVER = 'rgba(255,255,255,0.85)';

const footerLinks = [
  { label: 'Services', href: '/services' },
  { label: 'HubSpot & RevOps', href: '/hubspot-revops' },
  { label: 'HubSpot Cleanup', href: '/hubspot-cleanup' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="gs-dark-flat"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: '72px',
        paddingBottom: '32px',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="grid gap-12 mb-12 md:grid-cols-3">
          <div>
            <div
              className="flex items-center gap-[10px] text-white mb-4"
              style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '-0.01em' }}
            >
              <div className="flex items-end gap-[3px]">
                <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '8px', display: 'block' }} />
                <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '13px', display: 'block' }} />
                <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '18px', display: 'block' }} />
              </div>
              GrowthStack
            </div>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
              GTM infrastructure for early-stage B2B teams. Built, documented, and handed over — not managed indefinitely.
            </p>
          </div>

          <div>
            <h5 className="uppercase" style={LABEL_STYLE}>
              Navigation
            </h5>
            <div className="flex flex-col gap-3">
              {footerLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="transition-colors"
                  style={{ fontSize: '0.9rem', color: LINK_COLOR }}
                  onMouseEnter={e => (e.currentTarget.style.color = LINK_HOVER)}
                  onMouseLeave={e => (e.currentTarget.style.color = LINK_COLOR)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="uppercase" style={LABEL_STYLE}>
              Contact
            </h5>
            <a
              href="mailto:hello@growthstackhq.com"
              className="transition-colors"
              style={{ fontSize: '0.9rem', color: '#FF9264' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#FF9264')}
            >
              hello@growthstackhq.com
            </a>
            {/* TODO(matt): add your name, your city, and a LinkedIn link here. Every
                page of this site should be able to answer "who is this?" without the
                visitor having to click through to /about. */}
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginTop: '16px' }}>
              Built and run by [YOUR NAME], [CITY].{' '}
              <a
                href="https://www.linkedin.com/in/YOUR-PROFILE"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: LINK_COLOR, textDecoration: 'underline' }}
                onMouseEnter={e => (e.currentTarget.style.color = LINK_HOVER)}
                onMouseLeave={e => (e.currentTarget.style.color = LINK_COLOR)}
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.35)',
          }}
        >
          <p style={{ margin: 0 }}>&copy; 2026 GrowthStack. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy-policy"
              className="transition-colors"
              style={{ color: LINK_COLOR }}
              onMouseEnter={e => (e.currentTarget.style.color = LINK_HOVER)}
              onMouseLeave={e => (e.currentTarget.style.color = LINK_COLOR)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="transition-colors"
              style={{ color: LINK_COLOR }}
              onMouseEnter={e => (e.currentTarget.style.color = LINK_HOVER)}
              onMouseLeave={e => (e.currentTarget.style.color = LINK_COLOR)}
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
