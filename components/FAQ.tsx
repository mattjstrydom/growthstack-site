'use client';

import { useState } from 'react';
import BookDiscoveryButton from './BookDiscoveryButton';
import {
  Eyebrow,
  primaryButtonHoverStyle,
  primaryButtonStyle,
} from './MarketingPrimitives';

const faqs = [
  {
    question: 'What does GrowthStack do?',
    answer:
      'GrowthStack helps early-stage B2B startups build the GTM and RevOps foundation behind repeatable pipeline. That includes HubSpot setup, pipeline design, lifecycle stages, workflow automation, reporting, and outbound activation.',
  },
  {
    question: 'Is GrowthStack an outbound agency or a RevOps partner?',
    answer:
      'We are closer to a GTM systems and RevOps partner. Outbound is one of the ways we help generate pipeline, but it sits inside a broader commercial system.',
  },
  {
    question: 'Do you only work in HubSpot?',
    answer:
      'HubSpot is our preferred CRM environment for early-stage teams because it gives founders a strong operational core. We also work with the surrounding tool stack that feeds and supports it.',
  },
  {
    question: 'Can you help if our HubSpot is already live but messy?',
    answer:
      'Yes. We can audit, clean up, and restructure an existing HubSpot setup so your pipeline, reporting, and automations reflect how the business actually sells.',
  },
  {
    question: 'Do you manage outbound too?',
    answer:
      'Yes. We can activate outbound once the right GTM and RevOps foundation is in place, so campaigns run inside a usable system instead of alongside one.',
  },
  {
    question: 'Who is GrowthStack best for?',
    answer:
      'Early-stage B2B startups that need clearer pipeline, cleaner systems, and a more repeatable go-to-market motion.',
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
        <p className="mt-3 leading-[1.75]" style={{ fontSize: '0.9875rem', color: '#4A4A4A' }}>
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
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
            <div className="mb-3">
              <Eyebrow subtle>FAQ</Eyebrow>
            </div>
            <h2 className="font-bold text-[#1A1A1A]" style={{ fontSize: 'clamp(1.875rem,3.5vw,3rem)', fontWeight: 700 }}>
              Common questions
            </h2>
          </div>

          <div className="max-w-3xl">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} {...faq} />
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden text-center"
        style={{ background: '#0F1B2D', padding: '100px 0' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(241,90,36,0.07) 0%, transparent 65%)' }} />
        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="mb-4">
            <Eyebrow subtle>Ready to start?</Eyebrow>
          </div>
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(1.875rem,3.5vw,3rem)', fontWeight: 700 }}>
            Turn sales chaos into a working GTM engine.
          </h2>
          <p className="mb-8 max-w-lg mx-auto leading-[1.75]" style={{ color: 'rgba(255,255,255,0.58)' }}>
            Book a discovery call and we&apos;ll look at your current GTM setup,
            HubSpot structure, pipeline flow, and where the biggest gaps are.
            You&apos;ll leave with a clearer view of what needs fixing first.
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
            No pitch deck. No generic audit. Just a useful working session.
          </p>
        </div>
      </section>
    </>
  );
}
