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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does GrowthStack do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GrowthStack builds and runs done-for-you outbound sales systems for early-stage B2B startups. We set up your cold email and LinkedIn outreach infrastructure, write the sequences, build your lead lists, and manage campaigns monthly so you book meetings without doing it yourself.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does GrowthStack cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The GTM Foundation starts at $2,500 as a one-time setup. The Outbound Management monthly retainer starts at $1,500 per month.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly can you get outbound running?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The GTM Foundation is completed in 10 to 15 business days. That includes ICP definition, lead list building, email infrastructure, sequence writing, and the first campaign going live.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who is GrowthStack for?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "GrowthStack is built for B2B startup founders who have recently raised, from pre-seed to Series A, and need a working outbound motion but cannot yet justify a full-time SDR hire.",
        },
      },
      {
        '@type': 'Question',
        name: 'Do I own the system you build?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All sending domains, inboxes, CRM configurations, sequences, and contacts are built on your own accounts. If you end the engagement, you keep everything.',
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
