import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  path: '/about/vision',
  title: 'Vision & R&D',
  description:
    'Ogha’s vision to become the most admired water-purification technology company, and the in-house PCB, firmware and UPI-payments R&D capability behind every product.',
  keywords: ['Ogha vision', 'RO panel R&D', 'water ATM firmware development'],
});

export default function VisionLayout({ children }: { children: ReactNode }) {
  return children;
}
