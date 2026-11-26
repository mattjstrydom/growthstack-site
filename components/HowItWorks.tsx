'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Eyebrow,
  Section,
  SectionHeading,
  primaryButtonStyle,
} from './MarketingPrimitives';

const tools = [
  {
    name: 'HubSpot',
    src: '/tool-logos/Hubspot.svg',
    width: 116,
    height: 28,
  },
  {
    name: 'Clay',
    src: '/tool-logos/Clay.png',
    width: 88,
    height: 28,
  },
  {
    name: 'Apollo',
    src: '/tool-logos/Apollo.svg',
    width: 108,
    height: 28,
  },
  {
    name: 'Instantly',
    src: '/tool-logos/Instantly.svg',
    width: 120,
    height: 28,
  },
  {
    name: 'n8n',
    src: '/tool-logos/N8N.svg',
    width: 86,
    height: 28,
  },
] as const;

const steps = [
  {
    label: 'Step 1',
    title: 'Audit the motion (Days 1–2)',
    body: (
      <>
        Before we touch anything, we map what actually exists: CRM structure,
        funnel stages, workflow logic, ownership gaps, and reporting blind
        spots. Most teams are surprised by what they find. We&apos;re not.
      </>
    ),
  },
  {
    label: 'Step 2',
    title: 'Build the system (Days 3–8)',
    body: (
      <>
        We rebuild the operating layer — HubSpot structure, lifecycle logic,
        workflow automation, and CRM-connected outbound — so everything works
        together instead of around each other.
      </>
    ),
  },
  {
    label: 'Step 3',
    title: 'Handover and activate (Days 9–10)',
    body: (
      <>
        You get a fully documented system with clear ownership rules, a working
        reporting setup, and a team that knows how to use it. No dependency on
        us to keep it running.
      </>
    ),
  },
] as const;

export default function HowItWorks() {
  return (
    <>
      <Section id="how-it-works" tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="How It Works"
          title="From broken to working in 10 days."
          lede="Full timeline, scope, and pricing on the dedicated page."
        />

        <div
          className="gs-rise"
          style={{
            ['--gs-delay' as string]: '80ms',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {steps.map((step) => (
            <article
              key={step.label}
              className="gs-card-dark"
              style={{
                padding: '30px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <Eyebrow subtle>{step.label}</Eyebrow>
              <h3
                className="gs-display-md"
                style={{ color: '#ffffff', margin: 0 }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.9375rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.66)',
                }}
              >
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <div
          className="gs-card-dark"
          style={{
            marginTop: '24px',
            padding: '28px 30px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <Eyebrow subtle>Full timeline and pricing</Eyebrow>
            <p
              style={{
                margin: '12px 0 0',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.66)',
              }}
            >
              If you want the detailed breakdown of phases, pricing, and what
              happens after kickoff, go to the dedicated page.
            </p>
          </div>
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center"
            style={{
              ...primaryButtonStyle,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#D44E1E';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#F15A24';
              e.currentTarget.style.transform = 'none';
            }}
          >
            View Full Process →
          </Link>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          align="center"
          eyebrow="Tool Stack"
          title="Built on tools that work together"
          lede="HubSpot is the operational core, supported by the modern GTM stack around it. Nothing is built to lock you into us."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '20px',
          }}
        >
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="gs-card"
              style={{
                padding: '22px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '76px',
              }}
            >
              <Image
                src={tool.src}
                alt={tool.name}
                width={tool.width}
                height={tool.height}
                style={{
                  width: 'auto',
                  height: '28px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
