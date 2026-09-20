import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  path: '/about/why-ogha',
  title: 'Why Ogha',
  description:
    'The 12 Ogha promises — 12-month warranty, premium quality, Make in India engineering, 24/7 service, easy installation and more — behind India’s trusted RO control panels and water ATMs.',
  keywords: ['why choose Ogha', 'RO panel warranty India', 'Make in India water ATM'],
});

export default function WhyOghaLayout({ children }: { children: ReactNode }) {
  return children;
}
