import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { createMetadata, PAGES } from '@/lib/seo';

export const metadata: Metadata = createMetadata({
  path: PAGES.products,
  title: 'Products — RO Control Panels & Water Vending Machines',
  description:
    'Browse the full Ogha catalog: 29 factory-certified SKUs including SKY-series fully automatic RO control panels (500–6000 LPH), coin/card/UPI water vending machines, sensors and spares — with specifications and indicative pricing.',
  keywords: [
    'RO control panel catalog',
    'water vending machine models',
    'SKY RO panel 6000 LPH',
    'RO panel price list India',
  ],
});

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return children;
}
