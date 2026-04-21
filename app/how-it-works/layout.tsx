import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'How It Works | GrowthStack',
  description:
    'See how GrowthStack builds GTM systems for early-stage B2B teams: HubSpot setup, pipeline structure, workflow automation, reporting, and pipeline activation.',
  alternates: {
    canonical: absoluteUrl('/how-it-works'),
  },
  openGraph: {
    title: 'How It Works | GrowthStack',
    description:
      'See how GrowthStack builds GTM systems for early-stage B2B teams: HubSpot setup, pipeline structure, workflow automation, reporting, and pipeline activation.',
    url: absoluteUrl('/how-it-works'),
  },
  twitter: {
    title: 'How It Works | GrowthStack',
    description:
      'See how GrowthStack builds GTM systems for early-stage B2B teams: HubSpot setup, pipeline structure, workflow automation, reporting, and pipeline activation.',
  },
};

export default function HowItWorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
