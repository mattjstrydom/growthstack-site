'use client';

import { CardShell, Eyebrow } from './MarketingPrimitives';

/* Extracted from growthstackhq.com CSS:
   Offer section bg: white (#FFFFFF), cards bg: #0F1B2D
   Scope section bg: #F7F8F7 (section-panel), border top/bottom: 1px solid #E2E5E2
   Tools section bg: white
   Eyebrow: 0.72rem/700, #F15A24
   h2: clamp(1.875rem,3.5vw,3rem)/700, #1A1A1A
   Offer card: bg #0F1B2D, border rgba(255,255,255,0.07), radius 16px, padding 40px 36px
   Scope column: border-top 2px solid (yes: #F15A24, no: #E2E5E2)
   Tool pill: bg #FFFFFF, border 1px solid #E2E5E2, radius 9999px, padding 10px 20px
*/

const included = [
  'ICP definition workshop (60 min)',
  'Lead list — 300–500 verified contacts',
  'CRM setup or audit (HubSpot)',
  'Email deliverability infrastructure',
  'Email + LinkedIn sequences written & live',
  'Monthly lead refresh (Phase 2)',
  'Reply management + meeting booking',
  'Weekly metrics report — delivered, not a dashboard',
  'Monthly 30-min strategy call',
];

const notIncluded = [
  'LinkedIn content or personal branding',
  'Paid advertising or SEO',
  'Inbound lead handling',
  'Sales coaching or call review',
  'Guaranteed meeting counts',
  'Phase 2 without Phase 1 setup',
];

const tools = ['HubSpot', 'Instantly', 'Clay', 'Apollo', 'n8n', 'LinkedIn'];

export default function HowItWorks() {
  return (
    <>
      {/* ── How It Works / Offer ── white bg */}
      <section id="how-it-works" className="bg-white" style={{ padding: '80px 0' }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">

          <div className="mb-12">
            <div className="mb-3"><Eyebrow subtle>How It Works</Eyebrow></div>
            <h2
              className="font-bold text-[#1A1A1A]"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
            >
              Two phases. One motion.<br className="hidden sm:block" /> No loose tools to manage.
            </h2>
          </div>

          {/* Phase cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Phase 1 */}
            <CardShell dark>
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(241,90,36,0.08) 0%, transparent 70%)' }} />
              <div
                className="inline-block font-bold uppercase tracking-[0.1em] rounded-full mb-5"
                style={{ fontSize: '0.72rem', color: '#F15A24', border: '1px solid rgba(241,90,36,0.3)', background: 'rgba(241,90,36,0.1)', padding: '4px 12px' }}
              >
                Phase 1
              </div>
              <h3 className="font-semibold text-white mb-1" style={{ fontSize: 'clamp(1.1rem,2vw,1.375rem)', fontWeight: 600 }}>GTM Foundation</h3>
              <p className="mb-5" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>One-time setup &nbsp;·&nbsp; 10–15 business days</p>
              <p className="leading-[1.75] mb-6" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem' }}>
                We build your entire outbound system from scratch — ICP definition, verified lead list, CRM setup, email infrastructure, and sequences written and live. You get a working campaign before we hand anything over.
              </p>
              <div className="font-bold text-white" style={{ fontSize: '1.625rem', fontWeight: 700 }}>
                From $2,500 <span className="font-normal" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>one-time</span>
              </div>
            </CardShell>

            {/* Phase 2 */}
            <CardShell highlighted>
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(241,90,36,0.08) 0%, transparent 70%)' }} />
              <div
                className="inline-block font-bold uppercase tracking-[0.1em] rounded-full mb-5"
                style={{ fontSize: '0.72rem', color: '#F15A24', border: '1px solid rgba(241,90,36,0.3)', background: 'rgba(241,90,36,0.1)', padding: '4px 12px' }}
              >
                Phase 2
              </div>
              <h3 className="font-semibold text-white mb-1" style={{ fontSize: 'clamp(1.1rem,2vw,1.375rem)', fontWeight: 600 }}>Outbound Management</h3>
              <p className="mb-5" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>Monthly retainer &nbsp;·&nbsp; Ongoing</p>
              <p className="leading-[1.75] mb-6" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem' }}>
                We run your campaigns every month. New leads added, sequences optimised, replies handled, meetings booked. You get a clear weekly report. You run the calls. We do everything else.
              </p>
              <div className="font-bold text-white" style={{ fontSize: '1.625rem', fontWeight: 700 }}>
                From $1,500 <span className="font-normal" style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>/ month</span>
              </div>
            </CardShell>
          </div>

          <p style={{ fontSize: '0.9rem', color: '#4A4A4A' }}>
            Phase 1 → Phase 2 — most clients move from setup to ongoing management automatically.{' '}
            <a href="/how-it-works" style={{ color: '#F15A24' }} className="hover:underline">See full pricing →</a>
          </p>
        </div>
      </section>

      {/* ── Scope ── panel bg #F7F8F7 */}
      <section
        style={{
          background: '#F7F8F7',
          borderTop: '1px solid #E2E5E2',
          borderBottom: '1px solid #E2E5E2',
          padding: '80px 0',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <div className="mb-3"><Eyebrow subtle>Scope</Eyebrow></div>
            <h2 className="font-bold text-[#1A1A1A] mb-2" style={{ fontSize: 'clamp(1.875rem,3.5vw,3rem)', fontWeight: 700, lineHeight: 1.2 }}>
              What&apos;s included — and what isn&apos;t
            </h2>
            <p style={{ color: '#4A4A4A' }}>We&apos;re specific about scope because it&apos;s the only way to deliver consistent results.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {/* Included */}
            <div>
              <h4
                className="font-bold uppercase tracking-[0.08em] mb-4 pb-3"
                style={{ fontSize: '0.75rem', color: '#F15A24', borderBottom: '2px solid #F15A24' }}
              >
                ✓ &nbsp;Included
              </h4>
              <ul>
                {included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{ padding: '11px 0', borderBottom: '1px solid #E2E5E2', fontSize: '0.9375rem', color: '#1A1A1A' }}
                  >
                    <span
                      className="shrink-0 rounded-full flex items-center justify-center mt-0.5"
                      style={{ width: '20px', height: '20px', background: 'rgba(241,90,36,0.1)', color: '#F15A24', fontSize: '0.7rem', fontWeight: 700 }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not included */}
            <div>
              <h4
                className="font-bold uppercase tracking-[0.08em] mb-4 pb-3"
                style={{ fontSize: '0.75rem', color: '#888888', borderBottom: '2px solid #E2E5E2' }}
              >
                ✗ &nbsp;Not included
              </h4>
              <ul>
                {notIncluded.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3"
                    style={{ padding: '11px 0', borderBottom: '1px solid #E2E5E2', fontSize: '0.9375rem', color: '#4A4A4A' }}
                  >
                    <span
                      className="shrink-0 rounded-full flex items-center justify-center mt-0.5"
                      style={{ width: '20px', height: '20px', background: '#F7F8F7', border: '1px solid #E2E5E2', color: '#888', fontSize: '0.7rem' }}
                    >
                      ✗
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center mt-8 italic" style={{ color: '#888888', fontSize: '0.9rem' }}>We book the meeting. You run the call.</p>
        </div>
      </section>

      {/* ── Tool Stack ── white bg */}
      <section className="bg-white text-center" style={{ padding: '80px 0' }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="mb-3"><Eyebrow subtle>Tool Stack</Eyebrow></div>
          <h2 className="font-bold text-[#1A1A1A] mb-2" style={{ fontSize: 'clamp(1.875rem,3.5vw,3rem)', fontWeight: 700 }}>Built on tools that work</h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: '#4A4A4A' }}>The same modern GTM stack as the best in-house teams — built to last and not locked to us.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <div
                key={tool}
                className="flex items-center gap-2"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #E2E5E2',
                  borderRadius: '9999px',
                  padding: '10px 20px',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#1A1A1A',
                }}
              >
                <span className="rounded-full" style={{ width: '8px', height: '8px', background: '#F15A24', display: 'block', flexShrink: 0 }} />
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
