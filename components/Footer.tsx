'use client';

/* Extracted from growthstackhq.com CSS:
   bg: #0F1B2D, border-top: 1px solid rgba(255,255,255,0.07), padding: 64px 0 32px
   grid: 1.4fr 1fr 1fr, gap 48px
   logo: 1rem/700/white
   brand p: 0.875rem / rgba(255,255,255,0.4)
   col h5: 0.72rem/700/uppercase/tracking-[0.1em] / rgba(255,255,255,0.3)
   links: 0.9rem / rgba(255,255,255,0.55) → hover rgba(255,255,255,0.85)
   bottom: 0.8rem / rgba(255,255,255,0.22)
*/

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

        {/* Grid: brand | nav | contact */}
        <div className="grid sm:grid-cols-3 gap-12 mb-12" style={{ gridTemplateColumns: '1.4fr 1fr 1fr' }}>

          {/* Brand */}
          <div>
            <div className="flex items-center gap-[10px] font-bold text-white mb-3" style={{ fontSize: '1rem' }}>
              <div className="flex items-end gap-[3px]">
                <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '8px',  display: 'block' }} />
                <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '13px', display: 'block' }} />
                <span className="rounded-sm bg-[#F15A24]" style={{ width: '4px', height: '18px', display: 'block' }} />
              </div>
              GrowthStack
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
              Done-for-you outbound for early-stage B2B startups.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5
              className="font-bold uppercase tracking-[0.1em] mb-4"
              style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}
            >
              Navigation
            </h5>
            <div className="flex flex-col gap-3">
              {[
                { label: 'How It Works', href: '#how-it-works' },
                { label: 'About',        href: '#about' },
                { label: 'Blog',         href: '#blog' },
                { label: 'Contact',      href: '#contact' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="transition-colors"
                  style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
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

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.22)' }}
        >
          <p>© 2026 GrowthStack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white/50">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white/50">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
