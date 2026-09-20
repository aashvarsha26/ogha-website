import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  path: '/resources',
  title: 'Resources & Buyer Guides',
  description:
    'Technical library from the Ogha R&D team: RO control panel LPH sizing guides, coin vs card vs UPI water ATM ROI comparisons, and AMPV automation explainers.',
  keywords: ['RO panel sizing guide', 'water ATM ROI', 'AMPV automation', 'water treatment guides India'],
});

export default function ResourcesLayout({ children }: { children: ReactNode }) {
  return children;
}
