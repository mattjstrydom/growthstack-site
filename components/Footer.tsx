'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: '#0F1B2D',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        paddingTop: '64px',
        paddingBottom: '32px',
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div
          className="grid gap-12 mb-12 md:grid-cols-3"
          style={{}}
        >
          <div>
            <div className="flex items-center gap-[10px] font-bold text-white mb-3" style={{ fontSize: '1rem' }}>
              <div className="flex items-end gap-[3px]">
                <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '8px', display: 'block' }} />
                <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '13px', display: 'block' }} />
                <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '18px', display: 'block' }} />
              </div>
              GrowthStack
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
              GTM systems, HubSpot, and RevOps for early-stage B2B startups.
            </p>
          </div>

          <div>
            <h5
              className="font-bold uppercase tracking-[0.1em] mb-4"
              style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}
            >
              Navigation
            </h5>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Services', href: '/services' },
                { label: 'HubSpot & RevOps', href: '/hubspot-revops' },
                { label: 'HubSpot Cleanup', href: '/hubspot-cleanup' },
                { label: 'How It Works', href: '/how-it-works' },
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="transition-colors"
                  style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5
              className="font-bold uppercase tracking-[0.1em] mb-4"
              style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}
            >
              Contact
            </h5>
            <a
              href="mailto:hello@growthstackhq.com"
              className="transition-colors"
              style={{ fontSize: '0.9rem', color: '#F15A24' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f47340')}
              onMouseLeave={e => (e.currentTarget.style.color = '#F15A24')}
            >
              hello@growthstackhq.com
            </a>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.22)' }}
        >
          <p>&copy; 2026 GrowthStack. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="transition-colors hover:text-white/50">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-white/50">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
