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
import { Eyebrow, Section, SectionHeading } from '@/components/MarketingPrimitives';
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
        <Section tone="light">
          <SectionHeading
            eyebrow="Common Starting Points"
            title="Where most teams actually begin"
            lede="Some teams need the full GTM foundation. Others already have HubSpot live and just need the messy parts cleaned up before they can scale motion on top of it."
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
              <article className="gs-card" style={{ padding: '30px 28px', height: '100%' }}>
                <Eyebrow>Build the system</Eyebrow>
                <h3 className="gs-display-md" style={{ color: '#16181D', margin: '16px 0 12px' }}>
                  GTM foundation and RevOps setup
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.7, marginBottom: '18px' }}>
                  Best for teams moving from founder-led selling into a clearer CRM,
                  pipeline, workflow, and reporting setup.
                </p>
                <div style={{ fontSize: '0.92rem', color: '#F15A24', fontWeight: 500 }}>
                  Explore services &rarr;
                </div>
              </article>
            </Link>

            <Link href="/hubspot-cleanup" style={{ textDecoration: 'none', color: 'inherit' }}>
              <article
                className="gs-card"
                style={{ padding: '30px 28px', height: '100%', borderColor: 'rgba(241,90,36,0.3)' }}
              >
                <Eyebrow>Clean up what exists</Eyebrow>
                <h3 className="gs-display-md" style={{ color: '#16181D', margin: '16px 0 12px' }}>
                  HubSpot cleanup for messy live portals
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.7, marginBottom: '18px' }}>
                  Best for teams that already have HubSpot, but the stages, data,
                  workflows, and reporting no longer reflect reality.
                </p>
                <div style={{ fontSize: '0.92rem', color: '#F15A24', fontWeight: 500 }}>
                  See HubSpot cleanup &rarr;
                </div>
              </article>
            </Link>
          </div>
        </Section>

        <TriggerCards />
        <Testimonials />
        <WhoItIsFor />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

