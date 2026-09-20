import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createMetadata, PAGES } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  path: PAGES.cookies,
  title: 'Cookie Policy',
  description:
    'How Ogha Power Solutions uses cookies and similar technologies on oghapowersolutions.com to improve your browsing and enquiry experience.',
  keywords: ['Ogha cookie policy', 'website cookies India'],
});

export default function CookiesLayout({ children }: { children: ReactNode }) {
  return children;
}
