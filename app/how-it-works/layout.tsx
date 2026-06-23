import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'How GrowthStack Works: GTM System Build in 10 Days | GrowthStack',
  description:
    'GrowthStack builds GTM infrastructure for early-stage B2B teams in 10 days. Fixed scope, fixed price, full handover. See the full process, timeline, and pricing.',
  alternates: {
    canonical: absoluteUrl('/how-it-works'),
  },
  openGraph: {
    title: 'How GrowthStack Works: GTM System Build in 10 Days | GrowthStack',
    description:
      'GrowthStack builds GTM infrastructure for early-stage B2B teams in 10 days. Fixed scope, fixed price, full handover. See the full process, timeline, and pricing.',
    url: absoluteUrl('/how-it-works'),
  },
  twitter: {
    title: 'How GrowthStack Works: GTM System Build in 10 Days | GrowthStack',
    description:
      'GrowthStack builds GTM infrastructure for early-stage B2B teams in 10 days. Fixed scope, fixed price, full handover. See the full process, timeline, and pricing.',
  },
};

export default function HowItWorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
