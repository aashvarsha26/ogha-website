import type { Metadata } from 'next';

/** Canonical production origin — change if the domain changes. */
export const SITE_URL = 'https://oghapowersolutions.com';

export const SITE_NAME = 'Ogha Power Solutions';

export const DEFAULT_OG_IMAGE = '/og-image.png'; // 1200x630 branded card

export const PAGES = {
  home: '/',
  about: '/about',
  story: '/about/story',
  vision: '/about/vision',
  whyOgha: '/about/why-ogha',
  dealer: '/dealer',
  contact: '/contact',
  products: '/products',
  resources: '/resources',
  blog: '/blog',
  privacy: '/legal/privacy',
  terms: '/legal/terms',
  cookies: '/legal/cookies',
} as const;

interface CreateMetadataOptions {
  /** Path of the page, e.g. "/about". Combined with SITE_URL as metadataBase. */
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  /** Absolute or root-relative OG image; defaults to the branded card. */
  image?: string;
  /** Page type — website for hubs, article for guides. */
  type?: 'website' | 'article';
}

/**
 * Builds a complete Metadata object with Open Graph + Twitter card tags for a page.
 * Pages that import this stay server components, so the tags are always in the
 * initial HTML response (fully crawlable, no JS required).
 */
export function createMetadata({
  path,
  title,
  description,
  keywords,
  image,
  type = 'website',
}: CreateMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const isCustomImage = Boolean(image);
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const fullTitle = path === PAGES.home ? title : `${title} | ${SITE_NAME}`;

  return {
    // Absolute title: deterministic single brand suffix on every page, immune
    // to root-template quirks across static and generateMetadata routes.
    title: { absolute: fullTitle },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      locale: 'en_IN',
      images: isCustomImage
        ? [{ url: ogImage, alt: title }]
        : [{ url: ogImage, width: 1200, height: 630, alt: `${SITE_NAME} — ${title}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
