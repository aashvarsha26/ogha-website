import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blog';
import { createMetadata } from '@/lib/seo';

interface Params {
  slug: string;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return createMetadata({
      path: `/blog/${slug}`,
      title: 'Article Not Found',
      description: 'This blog article could not be found.',
    });
  }

  return createMetadata({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, 'Ogha blog', 'RO control panel guide', 'water treatment blog India'],
    type: 'article',
  });
}

export default function BlogArticleLayout({ children }: { children: ReactNode }) {
  return children;
}
