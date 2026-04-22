import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import TriggerCards from '@/components/TriggerCards';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import WhoItIsFor from '@/components/WhoItIsFor';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { jsonLd, siteConfig } from '@/lib/site';

export default function Home() {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GTM Systems and RevOps for Early-Stage B2B Startups',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'Global',
    serviceType: [
      'HubSpot setup',
      'RevOps support',
      'Pipeline design',
      'Workflow automation',
      'Outbound activation',
    ],
    description:
      'GrowthStack helps early-stage B2B startups build the systems behind repeatable pipeline: HubSpot setup, CRM design, reporting, automation, and outbound activation.',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does GrowthStack do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GrowthStack helps early-stage B2B startups build the GTM and RevOps foundation behind repeatable pipeline. That includes HubSpot setup, pipeline design, lifecycle stages, workflow automation, reporting, and outbound activation.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does GrowthStack cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Foundation Build starts at $2,500 as a one-time setup. Pipeline Activation support starts at $1,500 per month.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can you build the foundation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Foundation Build is completed in 10 to 15 business days. That includes HubSpot setup or cleanup, pipeline structure, key workflows, reporting, and the commercial system needed before activation.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is GrowthStack for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GrowthStack is built for early-stage B2B startups that need clearer pipeline, cleaner systems, and a more repeatable go-to-market motion.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you manage outbound too?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. GrowthStack can activate outbound once the right GTM and RevOps foundation is in place, so campaigns run inside a usable system instead of alongside one.',
        },
      },
    ],
  };

  return (
    <>
      <Navigation />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(faqJsonLd) }}
        />
        <Hero />
        <HowItWorks />
        <section
          style={{
            background: '#FCFAF7',
            borderTop: '1px solid #ECE6DE',
            borderBottom: '1px solid #ECE6DE',
            padding: '72px 0',
          }}
        >
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div
                className="inline-flex items-center font-bold uppercase tracking-[0.1em] rounded-full mb-3"
                style={{
                  fontSize: '0.72rem',
                  color: '#F15A24',
                  background: 'rgba(241,90,36,0.08)',
                  padding: '6px 14px',
                  border: '1px solid rgba(241,90,36,0.18)',
                }}
              >
                Common Starting Points
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.625rem,3vw,2.5rem)',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  marginBottom: '12px',
                }}
              >
                Where most teams actually begin
              </h2>
              <p style={{ fontSize: '1rem', color: '#555', lineHeight: 1.75, maxWidth: '760px' }}>
                Some teams need the full GTM foundation. Others already have HubSpot
                live and just need the messy parts cleaned up before they can scale
                motion on top of it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
                <article
                  style={{
                    background: '#fff',
                    border: '1px solid #ECE6DE',
                    borderRadius: '18px',
                    padding: '24px',
                    height: '100%',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '12px' }}>
                    Build the system
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '10px' }}>
                    GTM foundation and RevOps setup
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.75, marginBottom: '16px' }}>
                    Best for teams moving from founder-led selling into a clearer CRM,
                    pipeline, workflow, and reporting setup.
                  </p>
                  <div style={{ fontSize: '0.92rem', color: '#1A1A1A', fontWeight: 600 }}>
                    Explore services →
                  </div>
                </article>
              </Link>

              <Link href="/hubspot-cleanup" style={{ textDecoration: 'none', color: 'inherit' }}>
                <article
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(241,90,36,0.24)',
                    borderRadius: '18px',
                    padding: '24px',
                    height: '100%',
                    boxShadow: '0 12px 30px rgba(23, 32, 51, 0.05)',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#F15A24', marginBottom: '12px' }}>
                    Clean up what exists
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '10px' }}>
                    HubSpot cleanup for messy live portals
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.75, marginBottom: '16px' }}>
                    Best for teams that already have HubSpot, but the stages, data,
                    workflows, and reporting no longer reflect reality.
                  </p>
                  <div style={{ fontSize: '0.92rem', color: '#1A1A1A', fontWeight: 600 }}>
                    See HubSpot cleanup →
                  </div>
                </article>
              </Link>
            </div>
          </div>
        </section>
        <TriggerCards />
        <Testimonials />
        <WhoItIsFor />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
