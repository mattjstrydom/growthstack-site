import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BookDiscoveryButton from '@/components/BookDiscoveryButton';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About | GrowthStack',
  description: 'GrowthStack is a founder-led outbound agency for early-stage B2B startups. We build and run cold email and LinkedIn systems that book meetings.',
  alternates: {
    canonical: absoluteUrl('/about'),
  },
  openGraph: {
    title: 'About | GrowthStack',
    description: 'GrowthStack is a founder-led outbound agency for early-stage B2B startups. We build and run cold email and LinkedIn systems that book meetings.',
    url: absoluteUrl('/about'),
  },
  twitter: {
    title: 'About | GrowthStack',
    description: 'GrowthStack is a founder-led outbound agency for early-stage B2B startups. We build and run cold email and LinkedIn systems that book meetings.',
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '68px' }}>
        <section style={{ background: '#0F1B2D', padding: '80px 0 72px' }}>
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8 max-w-[720px]">
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
              We built GrowthStack because we&apos;ve seen what a broken GTM motion costs a founder.
            </h1>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.7 }}>
              Missed pipeline. Investor pressure. Months trying to run outbound between product meetings and fundraising. It&apos;s a familiar problem and it&apos;s entirely fixable.
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
                  Systematic lessons from real delivery
                </h2>
              </div>
              <div style={{ paddingTop: '4px' }}>
                <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                  We started doing this work the way most agencies do informally. Setting up HubSpot for a founder who&apos;d been putting it off for six months. Building a cold outbound system for a UK financial services company that had never done it before. Configuring Apollo for a luxury hospitality business in Tanzania trying to reach corporate buyers in Europe.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
                  Different industries, different geographies, same core problem: they had a good product and no reliable way to get in front of the right people.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#555', lineHeight: 1.8 }}>
                  GrowthStack is what happens when you systematise those lessons into a repeatable offer, one that starts fast, delivers results, and keeps running after the setup is done.
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
                  title: 'We build the foundation first',
                  body: "Every engagement starts with Phase 1 because campaigns built on weak foundations fail. Wrong ICP, unverified lists, poor deliverability: these aren't minor issues. They're the reason most cold outbound doesn't work.",
                },
                {
                  num: '02',
                  title: 'We work across geographies',
                  body: "Most outbound agencies operate in one market. We've run campaigns for B2B companies in the US, UK, and East Africa. If your buyers are in London and your company is in Nairobi, we understand both sides of that conversation.",
                },
                {
                  num: '03',
                  title: 'You get us, not a junior AM',
                  body: "We're a small team by design. Every client works directly with the people building and running their campaigns. That changes the speed of decisions, the quality of the copy, and the honesty of the reporting.",
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
                Small. Focused. Directly accountable.
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#555' }}>When you work with GrowthStack, you work with the people doing the work.</p>
            </div>
            <div
              style={{
                maxWidth: '440px',
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
              <p style={{ fontSize: '0.875rem', color: '#F15A24', fontWeight: 500, marginBottom: '12px' }}>Founder-led delivery</p>
              <p style={{ fontSize: '0.9375rem', color: '#555', lineHeight: 1.7 }}>
                Every campaign is built and run by senior people, not handed off to a junior account manager after the kickoff call.
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
              Book a 30-minute call. Honest conversation, no pitch deck.
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
