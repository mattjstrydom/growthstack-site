import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About | GrowthStack',
  description:
    'GrowthStack is a GTM systems and RevOps partner for early-stage B2B startups, helping founders build HubSpot, pipeline, automation, reporting, and activation systems.',
  alternates: {
    canonical: absoluteUrl('/about'),
  },
  openGraph: {
    title: 'About | GrowthStack',
    description:
      'GrowthStack is a GTM systems and RevOps partner for early-stage B2B startups, helping founders build HubSpot, pipeline, automation, reporting, and activation systems.',
    url: absoluteUrl('/about'),
  },
  twitter: {
    title: 'About | GrowthStack',
    description:
      'GrowthStack is a GTM systems and RevOps partner for early-stage B2B startups, helping founders build HubSpot, pipeline, automation, reporting, and activation systems.',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '68px' }}>
        <section style={{ background: '#0F1B2D', padding: '80px 0 72px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8 max-w-[760px]">
            <div
              className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full mb-6"
              style={{ fontSize: '0.72rem', color: '#F15A24', background: 'rgba(241,90,36,0.12)', padding: '6px 14px', border: '1px solid rgba(241,90,36,0.25)' }}
            >
              Our Story
            </div>
            <h1
              className="font-bold text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem,4vw,3rem)', maxWidth: '760px' }}
            >
              We built GrowthStack because most early-stage teams do not just
              have a pipeline problem. They have a systems problem.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)', maxWidth: '680px', lineHeight: 1.7 }}>
              Messy HubSpot setups, unclear stages, founder-led follow-up, weak
              reporting, and disconnected outreach all create the same result:
              growth that is hard to trust and harder to scale.
            </p>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <div
                  className="font-bold uppercase tracking-[0.1em] mb-3"
                  style={{ fontSize: '0.72rem', color: '#F15A24' }}
                >
                  How We Got Here
                </div>
                <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.2 }}>
                  Practical GTM and RevOps lessons from real delivery
                </h2>
              </div>
              <div style={{ paddingTop: '4px' }}>
                <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                  We started by helping founders fix the operational gaps they had
                  been postponing: a neglected HubSpot portal, no real pipeline
                  structure, disconnected tools, manual follow-up, and outbound
                  activity happening outside the CRM.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                  Across different industries and geographies, the pattern was
                  consistent. Teams did not only need leads. They needed a
                  commercial system that made visibility, execution, and handoff
                  possible.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.8 }}>
                  GrowthStack is the productised version of that work: GTM systems,
                  HubSpot, RevOps, reporting, and activation built in a way that
                  early-stage teams can actually use.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: '#F7F8F7', borderTop: '1px solid #E2E5E2', borderBottom: '1px solid #E2E5E2', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div
                className="font-bold uppercase tracking-[0.1em] mb-3"
                style={{ fontSize: '0.72rem', color: '#F15A24' }}
              >
                What Makes Us Different
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A' }}>
                Three things we won&apos;t compromise on
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  title: 'We build the system before we push volume',
                  body: 'We start with CRM structure, pipeline logic, workflows, reporting, and ownership. Activation without that foundation usually creates more noise, not more signal.',
                },
                {
                  num: '02',
                  title: 'We stay practical and startup-specific',
                  body: 'This is not enterprise RevOps theatre. We build what an early-stage team actually needs to run cleaner handoffs, clearer reporting, and more reliable pipeline.',
                },
                {
                  num: '03',
                  title: 'Senior people do the work',
                  body: 'We keep the team small by design. Clients work directly with the people shaping the system, making decisions, and improving the motion over time.',
                },
              ].map(({ num, title, body }) => (
                <div
                  key={num}
                  style={{
                    background: '#fff',
                    border: '1px solid #E2E5E2',
                    borderRadius: '16px',
                    padding: '32px 28px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'rgba(241,90,36,0.2)',
                      marginBottom: '16px',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {num}
                  </div>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>{title}</h4>
                  <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.7 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 0' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div
                className="font-bold uppercase tracking-[0.1em] mb-3"
                style={{ fontSize: '0.72rem', color: '#F15A24' }}
              >
                The Team
              </div>
              <h2 style={{ fontSize: 'clamp(1.625rem,3vw,2.5rem)', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>
                Small, focused, and directly accountable
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#555', maxWidth: '680px' }}>
                When you work with GrowthStack, you work with the people designing
                the system, not a layer between strategy and execution.
              </p>
            </div>
            <div
              style={{
                maxWidth: '480px',
                background: '#F7F8F7',
                border: '1px solid #E2E5E2',
                borderRadius: '16px',
                padding: '32px',
              }}
            >
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  background: '#0F1B2D',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '16px',
                }}
              >
                GS
              </div>
              <h4 style={{ marginBottom: '4px', color: '#1A1A1A', fontWeight: 700, fontSize: '1.0625rem' }}>The GrowthStack Team</h4>
              <p style={{ fontSize: '0.875rem', color: '#F15A24', fontWeight: 500, marginBottom: '12px' }}>Founder-led GTM systems delivery</p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.7 }}>
                We work directly on HubSpot, pipelines, workflows, reporting, and
                activation, so the thinking and the implementation stay tightly
                connected.
              </p>
            </div>
          </div>
        </section>

        <section style={{ background: '#0F1B2D', padding: '80px 0', textAlign: 'center' }}>
          <div className="max-w-[640px] mx-auto px-6 lg:px-8">
            <div
              className="font-bold uppercase tracking-[0.1em] mb-4"
              style={{ fontSize: '0.72rem', color: '#F15A24' }}
            >
              Work With Us
            </div>
            <h2 style={{ fontSize: 'clamp(1.75rem,3.5vw,2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
              Want to see if we&apos;re a fit?
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.65)', marginBottom: '32px' }}>
              Book a 30-minute call. We&apos;ll look at your GTM setup, your CRM,
              and where the biggest operational gaps are.
            </p>
            <BookDiscoveryButton
              utmContent="about_cta"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold rounded-lg cursor-pointer"
              style={{
                background: '#F15A24',
                padding: '14px 36px',
                fontSize: '1.0625rem',
                fontWeight: 600,
                borderRadius: '8px',
                boxShadow: '0 2px 12px rgba(241,90,36,0.35)',
              }}
              hoverStyle={{ background: '#D44E1E', boxShadow: '0 4px 20px rgba(241,90,36,0.45)' }}
            >
              Book a Discovery Call →
            </BookDiscoveryButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
