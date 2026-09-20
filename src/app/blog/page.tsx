import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blog';
import { ArrowRight, Newspaper } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="page-shell text-[#1B365D]">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFB200] bg-[#1B365D] px-4 py-1.5 rounded-full">
            Blog
          </span>
          <h1 className="mt-6 text-3xl md:text-4xl font-black tracking-tight text-[#0B192C]">
            Insights &amp; updates
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500">
            Buying guides and engineering notes from the Ogha R&amp;D team on RO plant
            automation, water ATM technology and plant economics.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group panel-card rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-center space-x-2 text-[11px] font-bold">
                <Newspaper className="w-4 h-4 text-[#FFB200]" />
                <span className="uppercase tracking-wide text-[#1B365D] bg-[#FFB200]/10 border border-[#FFB200]/30 rounded-full px-3 py-1">
                  {post.category}
                </span>
              </div>
              <h2 className="mt-4 text-base font-extrabold text-[#0B192C] leading-snug group-hover:text-[#1B365D]">
                {post.title}
              </h2>
              <p className="mt-3 text-xs text-gray-600 leading-relaxed line-clamp-4 flex-1">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between text-[11px] text-gray-400">
                <span>
                  {post.date} • {post.readTime}
                </span>
                <span className="inline-flex items-center space-x-1 font-bold text-[#1B365D] group-hover:text-[#FFB200]">
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {BLOG_POSTS.length === 0 && (
          <p className="mt-12 text-center text-sm text-gray-500">
            Articles are on the way. Check back soon.
          </p>
        )}
      </div>
    </div>
  );
}
