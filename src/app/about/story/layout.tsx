import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  path: '/about/story',
  title: 'Our Story',
  description:
    'Founded in 2023 by two electrical & embedded-systems engineers in Kamala Nagar, ECIL, Hyderabad — how Ogha grew from custom PCB logic boards to a full industrial water-automation product line.',
  keywords: ['Ogha story', 'RO panel startup Hyderabad', 'water automation journey India'],
});

export default function StoryLayout({ children }: { children: ReactNode }) {
  return children;
}
