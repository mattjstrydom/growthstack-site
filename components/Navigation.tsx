'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BookDiscoveryButton from './BookDiscoveryButton';
import {
  mobileButtonStyle,
  navButtonHoverStyle,
  navButtonStyle,
} from './MarketingPrimitives';

/* Header follows handoff.ai's technique: a fixed bar with a real backdrop-filter,
   so page content shows through faintly behind it. Handoff can run that bar dark
   because its hero is dark green; every GrowthStack hero is white, so the bar is
   white-translucent with ink text instead. Same effect, right contrast.

   Height is 68px and must stay 68px: every page except the home page sets
   `paddingTop: '68px'` on <main> to clear this bar. Changing it here clips the
   hero everywhere else. */

const NAV_HEIGHT = '68px';
const NAV_LINK_COLOR = 'rgba(22,24,29,0.66)';
const NAV_LINK_ACTIVE = '#16181D';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'HubSpot & RevOps', href: '/hubspot-revops' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const mobileLinks = [
  ...navLinks,
  { label: 'HubSpot Cleanup', href: '/hubspot-cleanup' },
];

/* The right-hand cluster is one quiet text link plus one solid pill, after the
   reference header. Contact plays the quiet link; it is still the same entry
   from navLinks, just placed on the right rather than dropped. */
const quietLink = { label: 'Contact', href: '/contact' };
const primaryLinks = navLinks.filter((link) => link.href !== quietLink.href);

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: 'rgba(255,255,255,0.78)',
        backdropFilter: 'saturate(160%) blur(14px)',
        WebkitBackdropFilter: 'saturate(160%) blur(14px)',
        borderBottom: '1px solid rgba(22,24,29,0.08)',
      }}
    >
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: NAV_HEIGHT }}>
          <Link
            href="/"
            className="flex items-center gap-[10px] shrink-0"
            style={{
              fontSize: '1.0625rem',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: '#16181D',
            }}
          >
            <div className="flex items-end gap-[3px]">
              <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '8px',  display: 'block' }} />
              <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '13px', display: 'block' }} />
              <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '18px', display: 'block' }} />
            </div>
            GrowthStack
          </Link>

          <div className="hidden lg:flex items-center gap-7 xl:gap-9">
            {primaryLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                aria-current={isActive(href) ? 'page' : undefined}
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  color: isActive(href) ? NAV_LINK_ACTIVE : NAV_LINK_COLOR,
                  transition: 'color 0.18s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = NAV_LINK_ACTIVE)}
                onMouseLeave={e => {
                  e.currentTarget.style.color = isActive(href) ? NAV_LINK_ACTIVE : NAV_LINK_COLOR;
                }}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6 shrink-0">
            <Link
              href={quietLink.href}
              aria-current={isActive(quietLink.href) ? 'page' : undefined}
              style={{
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: isActive(quietLink.href) ? NAV_LINK_ACTIVE : NAV_LINK_COLOR,
                transition: 'color 0.18s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = NAV_LINK_ACTIVE)}
              onMouseLeave={e => {
                e.currentTarget.style.color = isActive(quietLink.href)
                  ? NAV_LINK_ACTIVE
                  : NAV_LINK_COLOR;
              }}
            >
              {quietLink.label}
            </Link>

            <BookDiscoveryButton
              utmContent="nav_desktop"
              className="inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              style={navButtonStyle}
              hoverStyle={navButtonHoverStyle}
            >
              Book a GTM Audit
            </BookDiscoveryButton>
          </div>

          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <span className={`block rounded-sm transition-transform origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ width: '20px', height: '2px', background: '#16181D' }} />
            <span className={`block rounded-sm transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} style={{ width: '20px', height: '2px', background: '#16181D' }} />
            <span className={`block rounded-sm transition-transform origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ width: '20px', height: '2px', background: '#16181D' }} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden px-5 pb-5 pt-3"
          style={{ borderTop: '1px solid rgba(22,24,29,0.08)' }}
        >
          <div
            className="p-3"
            style={{
              background: '#FDFAF6',
              border: '1px solid rgba(22,24,29,0.08)',
              borderRadius: '12px',
            }}
          >
            <div className="flex flex-col">
              {mobileLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className="transition-colors px-3 py-3"
                  style={{
                    fontSize: '0.9375rem',
                    fontWeight: 500,
                    borderRadius: '10px',
                    color: isActive(href) ? NAV_LINK_ACTIVE : NAV_LINK_COLOR,
                    background: isActive(href) ? 'rgba(241,90,36,0.09)' : 'transparent',
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-3 px-1 pb-1">
              <BookDiscoveryButton
                utmContent="nav_mobile"
                className="inline-flex justify-center items-center w-full cursor-pointer"
                style={mobileButtonStyle}
                hoverStyle={navButtonHoverStyle}
              >
                Book a GTM Audit
              </BookDiscoveryButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
