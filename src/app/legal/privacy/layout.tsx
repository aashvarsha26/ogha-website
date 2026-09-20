import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createMetadata, PAGES } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  path: PAGES.privacy,
  title: 'Privacy Policy',
  description:
    'How Ogha Power Solutions collects, uses and protects your personal information when you enquire about RO control panels, water vending machines or dealership opportunities.',
  keywords: ['Ogha privacy policy', 'data protection India', 'Ogha Power Solutions legal'],
});

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return children;
}
