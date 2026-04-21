import Navigation from '@/components/Navigation';
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
        <TriggerCards />
        <Testimonials />
        <WhoItIsFor />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
