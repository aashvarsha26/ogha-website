'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blog';
import { ArrowLeft, PenLine } from 'lucide-react';
import { useQuoteModal } from '@/context/QuoteModalContext';

export default function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const { openQuoteModal } = useQuoteModal();

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="page-shell py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-1 text-xs font-bold text-[#0B192C] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        <div className="panel-card rounded-2xl p-6 md:p-10 shadow-md space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200">
              {post.category} • {post.readTime}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#0B192C] leading-tight">
              {post.title}
            </h1>
            <div className="text-xs text-gray-400">
              Published by Ogha Technical R&amp;D Team • {post.date}
            </div>
          </div>

          <div className="border-t border-b border-gray-100 py-6 space-y-5 leading-relaxed">
            {post.sections.map((section, i) => (
              <section key={i} className="space-y-3">
                {section.heading && (
                  <h2 className="font-bold text-lg md:text-xl text-[#0B192C] pt-2">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-sm text-gray-700">
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                    {section.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="bg-[#0B192C] text-white p-6 rounded-xl space-y-3 text-center">
            <h4 className="text-lg font-bold text-white">Not sure which tier fits your plant?</h4>
            <p className="text-xs text-gray-300">
              Tell us your LPH and duty cycle — our engineers will size the right panel for you at
              no cost.
            </p>
            <button
              onClick={() => openQuoteModal(`Blog enquiry: ${post.title}`)}
              className="px-6 py-2.5 bg-[#FFB200] hover:bg-[#E09D00] text-[#0B192C] font-extrabold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Ask an Ogha Engineer
            </button>
          </div>

          <p className="text-[11px] text-gray-400 flex items-center space-x-1.5">
            <PenLine className="w-3.5 h-3.5" />
            <span>Article text is managed in src/data/blog.ts — edit it there to update this page.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
