import type { Metadata } from 'next';
import { PRODUCTS } from '@/data/products';
import { createMetadata } from '@/lib/seo';

interface Params {
  category: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category } = await params;
  const products = PRODUCTS.filter((p) => p.categorySlug === category);

  if (products.length === 0) {
    return createMetadata({
      path: `/products/${category}`,
      title: 'Category Not Found',
      description: 'This product category could not be found in the Ogha Power Solutions catalog.',
    });
  }

  const categoryName = products[0].category;
  const title = `${categoryName} — ${products.length} Products`;

  return createMetadata({
    path: `/products/${category}`,
    title,
    description: `Browse Ogha ${categoryName.toLowerCase()} with full specifications, capacities and indicative factory-direct pricing. ${products.length} SKUs ready to ship from Hyderabad.`,
    keywords: [categoryName, `${categoryName} price India`, 'Ogha product category'],
  });
}

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
