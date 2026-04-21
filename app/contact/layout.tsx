import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact | GrowthStack',
  description:
    'Contact GrowthStack to discuss HubSpot setup, GTM systems, RevOps support, pipeline design, and activation for early-stage B2B teams.',
  alternates: {
    canonical: absoluteUrl('/contact'),
  },
  openGraph: {
    title: 'Contact | GrowthStack',
    description:
      'Contact GrowthStack to discuss HubSpot setup, GTM systems, RevOps support, pipeline design, and activation for early-stage B2B teams.',
    url: absoluteUrl('/contact'),
  },
  twitter: {
    title: 'Contact | GrowthStack',
    description:
      'Contact GrowthStack to discuss HubSpot setup, GTM systems, RevOps support, pipeline design, and activation for early-stage B2B teams.',
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
