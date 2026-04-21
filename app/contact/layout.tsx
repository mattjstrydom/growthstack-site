import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact | GrowthStack',
  description:
    'Contact GrowthStack to discuss your outbound setup, GTM foundation, or monthly campaign management.',
  alternates: {
    canonical: absoluteUrl('/contact'),
  },
  openGraph: {
    title: 'Contact | GrowthStack',
    description:
      'Contact GrowthStack to discuss your outbound setup, GTM foundation, or monthly campaign management.',
    url: absoluteUrl('/contact'),
  },
  twitter: {
    title: 'Contact | GrowthStack',
    description:
      'Contact GrowthStack to discuss your outbound setup, GTM foundation, or monthly campaign management.',
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
