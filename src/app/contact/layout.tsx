import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createMetadata } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  path: '/contact',
  title: 'Contact Us',
  description:
    'Contact Ogha Power Solutions in Kamala Nagar, ECIL, Hyderabad for quotes, dealer applications, custom RO panel builds up to 10,000 LPH, spare parts and technical support. Phone +91 9052 797 900.',
  keywords: ['contact Ogha', 'RO panel supplier Hyderabad contact', 'water ATM support India'],
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
