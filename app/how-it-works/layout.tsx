import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'How It Works | GrowthStack',
  description:
    'See how GrowthStack builds your GTM foundation, launches outbound in 10 business days, and manages campaigns monthly.',
  alternates: {
    canonical: absoluteUrl('/how-it-works'),
  },
  openGraph: {
    title: 'How It Works | GrowthStack',
    description:
      'See how GrowthStack builds your GTM foundation, launches outbound in 10 business days, and manages campaigns monthly.',
    url: absoluteUrl('/how-it-works'),
  },
  twitter: {
    title: 'How It Works | GrowthStack',
    description:
      'See how GrowthStack builds your GTM foundation, launches outbound in 10 business days, and manages campaigns monthly.',
  },
};

export default function HowItWorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
