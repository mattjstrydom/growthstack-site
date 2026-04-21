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

/* Extracted from growthstackhq.com CSS:
   --nav-bg: rgba(15,27,45,0.96)
   --nav-border: rgba(255,255,255,0.07)
   --nav-link-color: rgba(255,255,255,0.65)
   --nav-link-hover: #FFFFFF
   height: 68px, logo font 1.1rem/700, links 0.875rem/500
*/

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

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{
        background: 'rgba(15,27,45,0.96)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-[1180px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '68px' }}>
          <Link
            href="/"
            className="flex items-center gap-[10px] font-bold text-white shrink-0"
            style={{ fontSize: '1.1rem' }}
          >
            <div className="flex items-end gap-[3px]">
              <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '8px',  display: 'block' }} />
              <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '13px', display: 'block' }} />
              <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '18px', display: 'block' }} />
            </div>
            GrowthStack
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: isActive(href) ? '#FFFFFF' : 'rgba(255,255,255,0.65)',
                  transition: 'color 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.color = isActive(href) ? '#FFFFFF' : 'rgba(255,255,255,0.65)')}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block shrink-0">
            <BookDiscoveryButton
              utmContent="nav_desktop"
              className="inline-flex items-center gap-2 text-white font-semibold rounded-lg transition-colors cursor-pointer"
              style={navButtonStyle}
              hoverStyle={navButtonHoverStyle}
            />
          </div>

          <button
            className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <span className={`block bg-white rounded-sm transition-transform origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ width: '20px', height: '2px' }} />
            <span className={`block bg-white rounded-sm transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} style={{ width: '20px', height: '2px' }} />
            <span className={`block bg-white rounded-sm transition-transform origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ width: '20px', height: '2px' }} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden px-5 pb-5 pt-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div
            className="rounded-2xl p-3"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div className="flex flex-col">
              {mobileLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="transition-colors rounded-xl px-3 py-3"
                  style={{
                    fontSize: '0.95rem',
                    color: isActive(href) ? '#FFFFFF' : 'rgba(255,255,255,0.7)',
                    background: isActive(href) ? 'rgba(255,255,255,0.06)' : 'transparent',
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
                className="inline-flex justify-center items-center w-full text-white font-semibold rounded-lg cursor-pointer"
                style={mobileButtonStyle}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
