import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { createMetadata, PAGES, SITE_NAME, SITE_URL } from '@/lib/seo';

interface Params {
  category: string;
  slug: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category, slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug && p.categorySlug === category);

  if (!product) {
    return createMetadata({
      path: `${PAGES.products}/${category}/${slug}`,
      title: 'Product Not Found',
      description: 'This product could not be found in the Ogha Power Solutions catalog.',
    });
  }

  const title = `${product.name} — ${product.tag}`;
  const description = `${product.shortDescription} Specs, features and factory-direct details from ${SITE_NAME}, Hyderabad.`;

  return createMetadata({
    path: `/products/${category}/${slug}`,
    title,
    description,
    keywords: [
      product.name,
      `${product.name} specifications`,
      `${product.tag} India`,
      'Ogha product specifications',
    ],
    image: product.image,
    type: 'website',
  });
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}

// Re-exported for sitemap/JSON-LD use elsewhere if needed.
export { SITE_URL };
