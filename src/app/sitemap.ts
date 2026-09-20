import type { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products';
import { RESOURCES_ARTICLES } from '@/data/resources';
import { BLOG_POSTS } from '@/data/blog';
import { SITE_URL, PAGES } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = Object.values(PAGES).map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === PAGES.home ? 'weekly' : 'monthly',
    priority: path === PAGES.home ? 1 : 0.7,
  }));

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${SITE_URL}/products/${p.categorySlug}/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const categorySlugs = [...new Set(PRODUCTS.map((p) => p.categorySlug))];
  const categoryPages: MetadataRoute.Sitemap = categorySlugs.map((slug) => ({
    url: `${SITE_URL}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = RESOURCES_ARTICLES.map((a) => ({
    url: `${SITE_URL}/resources/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticPages, ...categoryPages, ...productPages, ...articlePages, ...blogPages];
}
