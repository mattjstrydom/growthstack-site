'use client';

import { CardShell, Eyebrow } from './MarketingPrimitives';

const included = [
  'ICP and GTM motion design',
  'HubSpot setup, cleanup, or audit',
  'Lifecycle stages, pipelines, and core properties',
  'Workflow automation and routing',
  'Dashboards and founder reporting',
  'Outbound workflow setup where it fits',
  'Lead enrichment and system integrations',
  'Weekly visibility on performance and bottlenecks',
  'Ongoing optimisation in Phase 2',
];

const notIncluded = [
  'Pure lead list vending with no systems work',
  'Paid advertising or SEO execution',
  'LinkedIn content or personal branding',
  'Sales coaching or call review',
  'Guaranteed meeting counts',
  'A monthly retainer without a proper foundation',
];

const tools = ['HubSpot', 'Clay', 'Apollo', 'Instantly', 'n8n', 'LinkedIn'];

export default function HowItWorks() {
  return (
    <>
      <section id="how-it-works" className="bg-white" style={{ padding: '72px 0' }}>
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="mb-3">
              <Eyebrow subtle>What We Build</Eyebrow>
            </div>
            <h2
              className="font-bold text-[#1A1A1A]"
              style={{ fontSize: 'clamp(1.875rem, 3.5vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
            >
              First we fix the system.
              <br className="hidden sm:block" /> Then we help it generate pipeline.
            </h2>
            <p className="mt-4 max-w-[700px]" style={{ color: '#4A4A4A', lineHeight: 1.75 }}>
              The problem usually is not one campaign. It is the lack of a system
              behind revenue. We build the CRM, pipeline, automation, reporting,
              and activation layer that early-stage teams need before growth becomes
              repeatable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 mb-6">
            <CardShell dark>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 80% 20%, rgba(241,90,36,0.08) 0%, transparent 70%)',
                }}
              />
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
                Phase 1
              </div>
              <h3
                className="font-semibold text-white mb-1"
                style={{ fontSize: 'clamp(1.1rem,2vw,1.375rem)', fontWeight: 600 }}
              >
                Foundation Build
              </h3>
              <p
                className="mb-5"
                style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}
              >
                One-time setup · 10-15 business days
              </p>
              <p
                className="leading-[1.75] mb-6"
                style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem' }}
              >
                We build the GTM and RevOps foundation: HubSpot structure, lifecycle
                stages, deal pipelines, core properties, workflows, reporting, and
                the commercial logic behind how your team should actually operate.
              </p>
              <div className="font-bold text-white" style={{ fontSize: '1.625rem', fontWeight: 700 }}>
                From $2,500{' '}
                <span
                  className="font-normal"
                  style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}
                >
                  one-time
                </span>
              </div>
            </CardShell>

            <CardShell highlighted>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 80% 20%, rgba(241,90,36,0.08) 0%, transparent 70%)',
                }}
              />
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
                Phase 2
              </div>
              <h3
                className="font-semibold text-white mb-1"
                style={{ fontSize: 'clamp(1.1rem,2vw,1.375rem)', fontWeight: 600 }}
              >
                Pipeline Activation
              </h3>
              <p
                className="mb-5"
                style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}
              >
                Monthly retainer · Ongoing
              </p>
              <p
                className="leading-[1.75] mb-6"
                style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9375rem' }}
              >
                Once the system is in place, we activate it. That can include
                outbound, lead enrichment, workflow refinement, reporting, and
                ongoing optimisation so pipeline generation lives inside a usable
                operating model.
              </p>
              <div className="font-bold text-white" style={{ fontSize: '1.625rem', fontWeight: 700 }}>
                From $1,500{' '}
                <span
                  className="font-normal"
                  style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}
                >
                  / month
                </span>
              </div>
            </CardShell>
          </div>

          <p style={{ fontSize: '0.9rem', color: '#4A4A4A' }}>
            Most clients move from foundation build into ongoing activation and
            optimisation.{' '}
            <a href="/how-it-works" style={{ color: '#F15A24' }} className="hover:underline">
              See full pricing →
            </a>
          </p>
        </div>
      </section>

      <section
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
              <Eyebrow subtle>Scope</Eyebrow>
            </div>
            <h2
              className="font-bold text-[#1A1A1A] mb-2"
              style={{ fontSize: 'clamp(1.875rem,3.5vw,3rem)', fontWeight: 700, lineHeight: 1.2 }}
            >
              What&apos;s included and what isn&apos;t
            </h2>
            <p style={{ color: '#4A4A4A' }}>
              We are specific about scope because GTM and RevOps work only adds value
              when ownership is clear.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4
                className="font-bold uppercase tracking-[0.08em] mb-4 pb-3"
                style={{ fontSize: '0.75rem', color: '#F15A24', borderBottom: '2px solid #F15A24' }}
              >
                Included
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
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="font-bold uppercase tracking-[0.08em] mb-4 pb-3"
                style={{ fontSize: '0.75rem', color: '#888888', borderBottom: '2px solid #E2E5E2' }}
              >
                Not included
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
                      -
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center mt-8 italic" style={{ color: '#888888', fontSize: '0.9rem' }}>
            We build the system first so execution has somewhere reliable to live.
          </p>
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
                <span
                  className="rounded-full"
                  style={{ width: '8px', height: '8px', background: '#F15A24', display: 'block', flexShrink: 0 }}
                />
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
