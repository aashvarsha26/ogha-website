import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createMetadata, PAGES } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  path: PAGES.about,
  title: 'About Us',
  description:
    'From a two-engineer R&D bench in ECIL, Hyderabad to a 20+ member manufacturer serving water OEMs across India — the story, vision and credibility behind Ogha Power Solutions.',
  keywords: ['Ogha Power Solutions about', 'RO panel manufacturer Hyderabad', 'water ATM company India'],
});

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
