'use client';

import BookDiscoveryButton from './BookDiscoveryButton';
import {
  Section,
  SectionHeading,
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

/* Native <details> accordion: no state, no JS, keyboard accessible for free.
   The default marker is removed and replaced with a cross that rotates to an
   "x" when the row is open. */
const accordionCss = `
.gs-faq-item > summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px 0;
}
.gs-faq-item > summary::-webkit-details-marker { display: none; }
.gs-faq-item > summary::marker { content: ''; }
.gs-faq-item > summary:focus-visible {
  outline: 2px solid #F15A24;
  outline-offset: 4px;
  border-radius: 6px;
}
.gs-faq-q {
  font-size: 1.0625rem;
  font-weight: 500;
  color: #16181D;
  line-height: 1.45;
  transition: color 0.2s ease;
}
.gs-faq-item > summary:hover .gs-faq-q { color: #F15A24; }
.gs-faq-item[open] > summary .gs-faq-q { color: #F15A24; }
.gs-faq-sign {
  position: relative;
  flex: none;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #E7E2DA;
  color: #8A8A8A;
  transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}
.gs-faq-sign::before,
.gs-faq-sign::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  background: currentColor;
  border-radius: 1px;
}
.gs-faq-sign::before {
  width: 11px;
  height: 1.5px;
  transform: translate(-50%, -50%);
}
.gs-faq-sign::after {
  width: 1.5px;
  height: 11px;
  transform: translate(-50%, -50%);
}
.gs-faq-item[open] .gs-faq-sign {
  transform: rotate(45deg);
  border-color: #F15A24;
  color: #F15A24;
}
.gs-faq-answer {
  font-size: 0.95rem;
  color: #4A4A4A;
  line-height: 1.7;
  margin: 0;
  padding: 0 0 22px;
  max-width: 62ch;
}
@media (prefers-reduced-motion: reduce) {
  .gs-faq-sign { transition: none; }
}
`;

export default function FAQ() {
  return (
    <>
      <Section id="faq" tone="sand">
        <SectionHeading eyebrow="FAQ" title="Common questions" />

        <style dangerouslySetInnerHTML={{ __html: accordionCss }} />

        <div
          className="gs-card gs-rise"
          style={{
            maxWidth: '760px',
            padding: '6px 28px',
            ['--gs-delay' as string]: '80ms',
          }}
        >
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="gs-faq-item"
              style={{
                borderBottom:
                  index === faqs.length - 1 ? 'none' : '1px solid #E7E2DA',
              }}
            >
              <summary>
                <span className="gs-faq-q">{faq.question}</span>
                <span className="gs-faq-sign" aria-hidden />
              </summary>
              <p className="gs-faq-answer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <div style={{ textAlign: 'center' }}>
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Ready to start?"
            title="Ready to sort it properly?"
            lede={
              <>
                Book a discovery call. We&apos;ll look at your current CRM setup,
                pipeline flow, outbound motion, and reporting. You&apos;ll leave the call
                with a clear view of what needs fixing first — whether you work with
                GrowthStack or not.
              </>
            }
          />

          <BookDiscoveryButton
            utmContent="homepage_cta"
            className="inline-flex items-center gap-2 cursor-pointer"
            style={primaryButtonStyle}
            hoverStyle={primaryButtonHoverStyle}
          >
            Book a Discovery Call
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </BookDiscoveryButton>

          <p
            style={{
              marginTop: '18px',
              fontSize: '0.8rem',
              color: 'rgba(255,255,255,0.38)',
              lineHeight: 1.7,
            }}
          >
            No pitch deck. No generic audit report. Just a useful 45-minute working session.
          </p>
        </div>
      </Section>
    </>
  );
}
