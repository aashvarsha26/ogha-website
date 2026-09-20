import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createMetadata, PAGES } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  path: PAGES.terms,
  title: 'Terms & Conditions',
  description:
    'Terms of sale, warranty coverage, indicative pricing policy and website usage terms for Ogha Power Solutions RO control panels and water vending machines.',
  keywords: ['Ogha terms and conditions', 'RO panel warranty terms', 'Ogha legal'],
});

export default function TermsLayout({ children }: { children: ReactNode }) {
  return children;
}
