import type { Metadata } from 'next';
import { RESOURCES_ARTICLES } from '@/data/resources';
import { createMetadata } from '@/lib/seo';

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = RESOURCES_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return createMetadata({
      path: `/resources/${slug}`,
      title: 'Article Not Found',
      description: 'This article could not be found in the Ogha resources library.',
    });
  }

  return createMetadata({
    path: `/resources/${slug}`,
    title: article.title,
    description: article.excerpt,
    keywords: [article.category, 'Ogha resources', 'water treatment guide'],
    type: 'article',
  });
}

export default function ResourceArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
