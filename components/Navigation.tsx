'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'HubSpot & RevOps', href: '/hubspot-revops' },
  { label: 'About',        href: '/about' },
  { label: 'Blog',         href: '/blog' },
  { label: 'Contact',      href: '/contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{
        background: 'rgba(15,27,45,0.96)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '68px' }}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-[10px] font-bold text-white" style={{ fontSize: '1.1rem' }}>
            <div className="flex items-end gap-[3px]">
              <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '8px',  display: 'block' }} />
              <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '13px', display: 'block' }} />
              <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '18px', display: 'block' }} />
            </div>
            GrowthStack
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s ease' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#FFFFFF')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <BookDiscoveryButton
              utmContent="nav_desktop"
              className="inline-flex items-center gap-2 text-white font-semibold rounded-lg transition-colors cursor-pointer"
              style={navButtonStyle}
              hoverStyle={navButtonHoverStyle}
            />
          </div>

          {/* Burger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`block bg-white rounded-sm transition-transform origin-center ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} style={{ width: '20px', height: '2px' }} />
            <span className={`block bg-white rounded-sm transition-opacity ${mobileOpen ? 'opacity-0' : ''}`} style={{ width: '20px', height: '2px' }} />
            <span className={`block bg-white rounded-sm transition-transform origin-center ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} style={{ width: '20px', height: '2px' }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="transition-colors"
              style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)' }}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
          <BookDiscoveryButton
            utmContent="nav_mobile"
            className="inline-flex justify-center items-center text-white font-semibold rounded-lg cursor-pointer mt-2"
            style={mobileButtonStyle}
          />
        </div>
      )}
    </nav>
  );
}
