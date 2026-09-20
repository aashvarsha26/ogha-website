import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  path: '/dealer',
  title: 'Become a Dealer',
  description:
    'Join the Ogha National Partnership Program — 20–35% dealer margins, exclusive territory protection, custom panel branding and direct engineering support for water-treatment businesses across India.',
  keywords: ['RO panel dealership India', 'water ATM distributor', 'Ogha dealer program'],
});

export default function DealerLayout({ children }: { children: ReactNode }) {
  return children;
}
