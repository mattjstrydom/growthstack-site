import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import TriggerCards from '@/components/TriggerCards';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import WhoItIsFor from '@/components/WhoItIsFor';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { absoluteUrl, jsonLd, siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'GTM Infrastructure for Early-Stage B2B | GrowthStack',
  description:
    "GrowthStack builds the GTM infrastructure early-stage B2B teams keep meaning to sort — HubSpot setup, pipeline architecture, Clay enrichment, and outbound systems. Fixed scope. You own everything.",
  alternates: {
    canonical: absoluteUrl('/'),
  },
  openGraph: {
    title: 'GTM Infrastructure for Early-Stage B2B | GrowthStack',
    description:
      "GrowthStack builds the GTM infrastructure early-stage B2B teams keep meaning to sort — HubSpot setup, pipeline architecture, Clay enrichment, and outbound systems. Fixed scope. You own everything.",
    url: absoluteUrl('/'),
  },
  twitter: {
    title: 'GTM Infrastructure for Early-Stage B2B | GrowthStack',
    description:
      "GrowthStack builds the GTM infrastructure early-stage B2B teams keep meaning to sort — HubSpot setup, pipeline architecture, Clay enrichment, and outbound systems. Fixed scope. You own everything.",
  },
};

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
    name: 'GTM Infrastructure for Early-Stage B2B',
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: 'Global',
    serviceType: [
      'HubSpot setup',
      'HubSpot RevOps',
      'Pipeline architecture',
      'Workflow automation',
      'Outbound systems',
    ],
    description:
      "GrowthStack builds the GTM infrastructure early-stage B2B teams keep meaning to sort — HubSpot setup, pipeline architecture, Clay enrichment, and outbound systems. Fixed scope. You own everything.",
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '1200',
      highPrice: '10000',
      offerCount: '4',
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does GrowthStack actually do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build and rebuild the GTM operating layer for early-stage B2B teams — HubSpot setup, workflow automation, lead routing, outbound infrastructure, and reporting. The output is a documented system your team owns and can run without us.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this an outbound agency or a RevOps partner?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Neither, exactly. We don't run outbound campaigns for you on an ongoing basis, and we're not a traditional RevOps consultant who gives you recommendations and leaves. We build and implement the system — then hand it over.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long does an engagement take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most GTM foundation builds are 10 days from kickoff to handover. HubSpot cleanups range from 5 to 15 days depending on the state of the portal. We scope everything before we start so there are no surprises.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you only work in HubSpot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "HubSpot is the primary CRM we build on. The surrounding stack — Clay, Apollo, Instantly, n8n — is flexible and chosen based on what fits the team's motion and budget.",
        },
      },
      {
        '@type': 'Question',
        name: 'What if our HubSpot is already live but a mess?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "That's one of the most common starting points. We audit what exists, identify what's worth keeping, and rebuild the structural layer properly rather than adding more on top of something broken.",
        },
      },
      {
        '@type': 'Question',
        name: 'How is pricing structured?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fixed scope, fixed price. No retainers unless you want ongoing support after the build. Pricing is detailed on the How It Works page.',
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
            background: '#FDFAF6',
            borderTop: '1px solid #EAE4DB',
            borderBottom: '1px solid #EAE4DB',
            padding: '72px 0',
          }}
        >
          <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
            <div className="mb-10">
              <div
                className="inline-flex items-center font-bold uppercase tracking-[0.1em] mb-3"
                style={{
                  fontSize: '0.72rem',
                  color: '#F15A24',
                  background: 'transparent',
                  padding: '5px 13px',
                  border: '1px dashed rgba(241,90,36,0.6)',
                  borderRadius: '4px',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
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

