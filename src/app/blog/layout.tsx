import type { Metadata } from 'next';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  path: '/blog',
  title: 'Blog',
  description:
    'Insights, guides and updates from Ogha Power Solutions on RO plant automation, water ATM technology and water-treatment engineering.',
  keywords: ['Ogha blog', 'RO plant guides', 'water ATM insights'],
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
