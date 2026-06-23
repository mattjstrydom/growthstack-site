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
    question: 'What does GrowthStack actually do?',
    answer:
      'We build and rebuild the GTM operating layer for early-stage B2B teams — HubSpot setup, workflow automation, lead routing, outbound infrastructure, and reporting. The output is a documented system your team owns and can run without us.',
  },
  {
    question: 'Is this an outbound agency or a RevOps partner?',
    answer:
      "Neither, exactly. We don't run outbound campaigns for you on an ongoing basis, and we're not a traditional RevOps consultant who gives you recommendations and leaves. We build and implement the system — then hand it over. Think infrastructure contractor, not agency retainer.",
  },
  {
    question: 'How long does an engagement take?',
    answer:
      'Most GTM foundation builds are 10 days from kickoff to handover. HubSpot cleanups range from 5 to 15 days depending on the state of the portal. We scope everything before we start so there are no surprises.',
  },
  {
    question: 'Do you only work in HubSpot?',
    answer:
      "HubSpot is the primary CRM we build on. The surrounding stack — Clay, Apollo, Instantly, n8n — is flexible and chosen based on what fits the team's motion and budget.",
  },
  {
    question: 'What if our HubSpot is already live but a mess?',
    answer:
      "That's one of the most common starting points. We audit what exists, identify what's worth keeping, and rebuild the structural layer properly rather than adding more on top of something broken.",
  },
  {
    question: 'How is pricing structured?',
    answer:
      'Fixed scope, fixed price. No retainers unless you want ongoing support after the build. Pricing is detailed on the How It Works page.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid #E2E5E2', padding: '22px 0' }}>
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
          padding: '72px 0',
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
        style={{ background: '#0F1B2D', padding: '80px 0' }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(241,90,36,0.07) 0%, transparent 65%)' }} />
        <div className="relative max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="mb-4">
            <Eyebrow subtle>Ready to start?</Eyebrow>
          </div>
          <h2 className="font-bold text-white mb-4" style={{ fontSize: 'clamp(1.875rem,3.5vw,3rem)', fontWeight: 700 }}>
            Ready to sort it properly?
          </h2>
          <p className="mb-8 max-w-lg mx-auto leading-[1.75]" style={{ color: 'rgba(255,255,255,0.58)' }}>
            Book a discovery call. We&apos;ll look at your current CRM setup,
            pipeline flow, outbound motion, and reporting. You&apos;ll leave the call
            with a clear view of what needs fixing first — whether you work with
            GrowthStack or not.
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
            No pitch deck. No generic audit report. Just a useful 45-minute working session.
          </p>
        </div>
      </section>
    </>
  );
}
