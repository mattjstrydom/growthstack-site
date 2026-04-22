'use client';

import Link from 'next/link';
import { CardShell, Eyebrow } from './MarketingPrimitives';

const tools = [
  {
    name: 'HubSpot',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none" aria-hidden="true">
        <circle cx="14" cy="18" r="6" stroke="#FF7A59" strokeWidth="2.8" />
        <circle cx="24.5" cy="8.5" r="3.5" fill="#FF7A59" />
        <path d="M18.5 13.5l3.6-3.1M20 19h7M9.5 23.5L6 27" stroke="#FF7A59" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    ),
    wordmark: 'HubSpot',
    wordmarkStyle: { color: '#1A1A1A', fontWeight: 700, letterSpacing: '-0.03em' },
  },
  {
    name: 'Clay',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none" aria-hidden="true">
        <rect x="5" y="5" width="10" height="10" rx="5" fill="#F59E0B" />
        <rect x="17" y="5" width="10" height="10" rx="5" fill="#111827" />
        <rect x="5" y="17" width="10" height="10" rx="5" fill="#111827" />
        <rect x="17" y="17" width="10" height="10" rx="5" fill="#F59E0B" />
      </svg>
    ),
    wordmark: 'Clay',
    wordmarkStyle: { color: '#111827', fontWeight: 700, letterSpacing: '-0.03em' },
  },
  {
    name: 'Apollo',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="11" stroke="#6D5EFC" strokeWidth="2.6" />
        <path d="M16 8l5.5 13h-3.4l-1.1-2.8h-6L10 21H6.7L12.2 8h3.8zm-.1 4.2l-1.9 4.8h3.8l-1.9-4.8z" fill="#6D5EFC" />
      </svg>
    ),
    wordmark: 'Apollo',
    wordmarkStyle: { color: '#2A225F', fontWeight: 700, letterSpacing: '-0.03em' },
  },
  {
    name: 'Instantly',
    icon: (
      <svg viewBox="0 0 32 32" width="22" height="22" fill="none" aria-hidden="true">
        <path d="M17 4L8 18h6l-1 10 9-14h-6l1-10z" fill="#22C55E" />
      </svg>
    ),
    wordmark: 'instantly',
    wordmarkStyle: { color: '#0F172A', fontWeight: 700, letterSpacing: '-0.03em' },
  },
  {
    name: 'n8n',
    icon: (
      <svg viewBox="0 0 32 32" width="28" height="20" fill="none" aria-hidden="true">
        <circle cx="7" cy="16" r="4" fill="#EA580C" />
        <circle cx="16" cy="10" r="4" fill="#EA580C" />
        <circle cx="25" cy="16" r="4" fill="#EA580C" />
        <path d="M10.4 14l2.4-1.7M19.2 12.3L21.6 14" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    wordmark: 'n8n',
    wordmarkStyle: { color: '#111827', fontWeight: 800, letterSpacing: '-0.05em' },
  },
] as const;

export default function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="bg-white" style={{ padding: '72px 0' }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-3">
              <Eyebrow subtle>How It Works</Eyebrow>
            </div>
            <h2
              className="font-bold text-[#1A1A1A]"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
            >
              We fix the system first.
              <br className="hidden sm:block" /> Then we help it support pipeline.
            </h2>
            <p className="mt-4 max-w-[700px]" style={{ color: '#4A4A4A', lineHeight: 1.75 }}>
              The homepage only shows the high-level path. The dedicated page covers
              the full process, timeline, and pricing in detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-8">
            <CardShell dark>
              <div
                className="inline-block font-bold uppercase tracking-[0.1em] rounded-full mb-5"
                style={{
                  fontSize: '0.72rem',
                  color: '#F15A24',
                  border: '1px solid rgba(241,90,36,0.3)',
                  background: 'rgba(241,90,36,0.1)',
                  padding: '4px 12px',
                }}
              >
                Step 1
              </div>
              <h3
                className="font-semibold text-white mb-1"
                style={{ fontSize: 'clamp(1.1rem,2vw,1.375rem)', fontWeight: 600 }}
              >
                Audit the motion
              </h3>
              <p
                className="mb-5"
                style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}
              >
                Find what is actually broken
              </p>
              <p
                className="leading-[1.75]"
                style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem' }}
              >
                We review the CRM, funnel stages, ownership, workflow gaps, and
                reporting issues before changing structure.
              </p>
            </CardShell>

            <CardShell highlighted>
              <div
                className="inline-block font-bold uppercase tracking-[0.1em] rounded-full mb-5"
                style={{
                  fontSize: '0.72rem',
                  color: '#F15A24',
                  border: '1px solid rgba(241,90,36,0.3)',
                  background: 'rgba(241,90,36,0.1)',
                  padding: '4px 12px',
                }}
              >
                Step 2
              </div>
              <h3
                className="font-semibold text-white mb-1"
                style={{ fontSize: 'clamp(1.1rem,2vw,1.375rem)', fontWeight: 600 }}
              >
                Build the system
              </h3>
              <p
                className="mb-5"
                style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}
              >
                HubSpot, pipelines, and workflows
              </p>
              <p
                className="leading-[1.75]"
                style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem' }}
              >
                We clean up or build the operating layer so the CRM, handoffs,
                lifecycle logic, and reporting all work together.
              </p>
            </CardShell>

            <CardShell>
              <div
                className="inline-block font-bold uppercase tracking-[0.1em] rounded-full mb-5"
                style={{
                  fontSize: '0.72rem',
                  color: '#F15A24',
                  border: '1px solid rgba(241,90,36,0.22)',
                  background: 'rgba(241,90,36,0.08)',
                  padding: '4px 12px',
                }}
              >
                Step 3
              </div>
              <h3
                className="font-semibold text-[#1A1A1A] mb-1"
                style={{ fontSize: 'clamp(1.1rem,2vw,1.375rem)', fontWeight: 600 }}
              >
                Activate and improve
              </h3>
              <p
                className="mb-5"
                style={{ fontSize: '0.85rem', color: 'rgba(26,26,26,0.45)' }}
              >
                Add execution on top of a usable base
              </p>
              <p
                className="leading-[1.75]"
                style={{ color: '#555', fontSize: '0.9375rem' }}
              >
                Once the system is live, we help it support outbound, enrichment,
                workflow refinement, and ongoing optimisation where it fits.
              </p>
            </CardShell>
          </div>

          <div
            className="rounded-2xl"
            style={{
              background: '#F7F8F7',
              border: '1px solid #E2E5E2',
              padding: '24px',
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div style={{ maxWidth: '700px' }}>
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: '#F15A24',
                    marginBottom: '8px',
                  }}
                >
                  Full timeline and pricing
                </div>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#555', lineHeight: 1.7 }}>
                  If you want the detailed breakdown of phases, pricing, and what
                  happens after kickoff, go to the dedicated page.
                </p>
              </div>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center font-semibold rounded-lg"
                style={{
                  padding: '12px 22px',
                  fontSize: '0.95rem',
                  borderRadius: '10px',
                  background: '#0F1B2D',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                View Full Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-center" style={{ padding: '72px 0' }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="mb-3">
            <Eyebrow subtle>Tool Stack</Eyebrow>
          </div>
          <h2
            className="font-bold text-[#1A1A1A] mb-2"
            style={{ fontSize: 'clamp(1.875rem,3.5vw,3rem)', fontWeight: 700 }}
          >
            Built on tools that work together
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: '#4A4A4A' }}>
            HubSpot is the operational core, supported by the modern GTM stack around
            it. Nothing is built to lock you into us.
          </p>
          <div className="tool-logo-grid">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="tool-logo-card"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E5E2',
                  borderRadius: '18px',
                  padding: '18px 20px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    minHeight: '28px',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {tool.icon}
                  </span>
                  <span
                    style={{
                      fontSize: '1.05rem',
                      lineHeight: 1,
                      ...tool.wordmarkStyle,
                    }}
                  >
                    {tool.wordmark}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .tool-logo-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }
        .tool-logo-card {
          box-shadow: 0 10px 24px rgba(23, 32, 51, 0.04);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .tool-logo-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(23, 32, 51, 0.08);
          border-color: #D8DEDA !important;
        }
        @media (max-width: 960px) {
          .tool-logo-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .tool-logo-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
          .tool-logo-card {
            border-radius: 14px !important;
            padding: 16px 14px !important;
          }
        }
      `}</style>
    </>
  );
}
