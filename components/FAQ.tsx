'use client';

import { useState } from 'react';
import BookDiscoveryButton from './BookDiscoveryButton';
import {
  Eyebrow,
  primaryButtonHoverStyle,
  primaryButtonStyle,
} from './MarketingPrimitives';

/* Extracted from growthstackhq.com CSS:
   FAQ section bg: #F7F8F7 (section-panel), border top/bottom: 1px solid #E2E5E2
   FAQ item: padding 28px 0, border-bottom 1px solid #E2E5E2
   FAQ q: 1.0625rem / weight 600 / color #1A1A1A
   FAQ a: 0.9875rem / color #4A4A4A / line-height 1.75
   CTA section: bg #0F1B2D, padding 100px 0
   CTA h2: #FFFFFF / p: rgba(255,255,255,0.58) / note: rgba(255,255,255,0.28)
   CTA glow: radial-gradient(circle, rgba(241,90,36,0.07) 0%, transparent 65%)
*/

const faqs = [
  {
    question: 'What does GrowthStack do?',
    answer: 'GrowthStack builds and runs done-for-you outbound sales systems for early-stage B2B startups. We set up your cold email and LinkedIn outreach infrastructure, write the sequences, build your lead lists, and manage campaigns monthly — so you book meetings without doing it yourself.',
  },
  {
    question: 'How much does GrowthStack cost?',
    answer: 'The GTM Foundation — a one-time setup that gets your outbound system built and live — starts at $2,500. The Outbound Management monthly retainer starts at $1,500 per month.',
  },
  {
    question: 'How quickly can you get outbound running?',
    answer: 'The GTM Foundation is completed in 10 to 15 business days. That covers ICP definition, lead list building, email infrastructure, sequence writing, and the first campaign going live.',
  },
  {
    question: 'Who is GrowthStack for?',
    answer: "GrowthStack is built for B2B startup founders who have recently raised (pre-seed to Series A) and need a working outbound motion but can't yet justify a full-time SDR hire.",
  },
  {
    question: 'Is GrowthStack cheaper than hiring an SDR?',
    answer: "Yes. A fully loaded junior SDR in the US costs $7,000–$10,000 per month in year one. GrowthStack's setup plus retainer costs a fraction of that, with results starting in weeks rather than months.",
  },
  {
    question: 'Do I own the system you build?',
    answer: 'Yes. All sending domains, inboxes, CRM configurations, sequences, and contacts are built on your own accounts. If you end the engagement, you keep everything.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #E2E5E2', padding: '28px 0' }}>
      <button
        className="w-full flex items-center justify-between text-left gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-semibold transition-colors"
          style={{ fontSize: '1.0625rem', fontWeight: 600, color: open ? '#F15A24' : '#1A1A1A' }}
        >
          {question}
        </span>
        <span
          className="shrink-0 rounded-full flex items-center justify-center transition-transform"
          style={{
            width: '28px',
            height: '28px',
            border: `1.5px solid ${open ? '#F15A24' : '#E2E5E2'}`,
            transform: open ? 'rotate(45deg)' : 'none',
            flexShrink: 0,
          }}
        >
          <svg className="w-3 h-3" style={{ color: open ? '#F15A24' : '#888' }} viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="mt-3 leading-[1.75]" style={{ fontSize: '0.9875rem', color: '#4A4A4A' }}>{answer}</p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      {/* ── FAQ ── panel bg */}
      <section
        id="faq"
        style={{
          background: '#F7F8F7',
          borderTop: '1px solid #E2E5E2',
          borderBottom: '1px solid #E2E5E2',
          padding: '80px 0',
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <div className="mb-3"><Eyebrow subtle>FAQ</Eyebrow></div>
            <h2 className="font-bold text-[#1A1A1A]" style={{ fontSize: 'clamp(1.875rem,3.5vw,3rem)', fontWeight: 700 }}>Common questions</h2>
          </div>

          <div className="max-w-3xl">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── dark bg */}
      <section
        className="relative overflow-hidden text-center"
        style={{ background: '#0F1B2D', padding: '100px 0' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(241,90,36,0.07) 0%, transparent 65%)' }} />
        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="mb-4"><Eyebrow subtle>Ready to start?</Eyebrow></div>
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(1.875rem,3.5vw,3rem)', fontWeight: 700 }}>Outbound running by next week.</h2>
          <p className="mb-8 max-w-lg mx-auto leading-[1.75]" style={{ color: 'rgba(255,255,255,0.58)' }}>
            Book a 30-minute discovery call. We&apos;ll look at your ICP, your current setup, and tell you exactly what it takes to get your first campaign live — no obligation.
          </p>
          <BookDiscoveryButton
            utmContent="homepage_cta"
            className="inline-flex items-center gap-2 text-white font-semibold rounded-lg cursor-pointer transition-all"
            style={primaryButtonStyle}
            hoverStyle={primaryButtonHoverStyle}
          >
            Book a Discovery Call
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </BookDiscoveryButton>
          <p className="mt-4" style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.28)' }}>
            No pitch deck. No proposal until you ask. Just a useful conversation.
          </p>
        </div>
      </section>
    </>
  );
}
