'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RESOURCES_ARTICLES } from '@/data/resources';
import { ArrowLeft, BookOpen, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useQuoteModal } from '@/context/QuoteModalContext';

export default function ResourceArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const { openQuoteModal } = useQuoteModal();

  const article = RESOURCES_ARTICLES.find((a) => a.slug === slug);
  if (!article) {
    notFound();
  }

  return (
    <div className="page-shell py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          href="/resources"
          className="inline-flex items-center space-x-1 text-xs font-bold text-[#0B192C] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Resources & Guides</span>
        </Link>

        <div className="panel-card rounded-2xl p-8 md:p-10 shadow-md space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded border border-amber-200">
              {article.category} • {article.readTime}
            </span>
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#0B192C] leading-tight">
              {article.title}
            </h1>
            <div className="text-xs text-gray-400">Published by Ogha Technical R&D Team • {article.date}</div>
          </div>

          <div className="border-t border-b border-gray-100 py-4 text-xs md:text-sm text-gray-700 space-y-4 leading-relaxed">
            <p className="font-medium text-[#0B192C] text-base">{article.excerpt}</p>

            <h3 className="font-bold text-lg text-[#0B192C] pt-2">Key Considerations When Sizing Control Panels</h3>
            <p>
              When specifying Reverse Osmosis (RO) control panels for commercial water treatment plants in India, matching the panel rating to high pressure pump (HPP) motor current and raw water pump (RWP) requirements is essential to prevent coil burnout and nuisance tripping.
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2 text-xs text-amber-900">
              <div className="font-bold flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4 text-[#FFB200]" />
                <span>Ogha Engineering Rule of Thumb:</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                <li>For plants up to 500 LPH: Select 1 HP relay-based semi-automatic or basic manual panels.</li>
                <li>For plants 1000 LPH – 2000 LPH: Upgrade to OGHA SKY 1:1 or Jal series with 4-digit LED TDS monitoring.</li>
                <li>For 4000 LPH – 6000 LPH: Use OGHA SKY 3:3 with AMPV auto-backwash interface.</li>
              </ul>
            </div>

            <p>
              For Water Vending Machine operators, upgrading from legacy cash-only coin acceptors to dynamic UPI QR code modules eliminates cash theft, reduces coin jam maintenance calls, and delivers funds directly into your bank account.
            </p>
          </div>

          <div className="bg-[#0B192C] text-white p-6 rounded-xl space-y-3 text-center">
            <h4 className="text-lg font-bold text-white">Need Custom Panel Specification Assistance?</h4>
            <p className="text-xs text-gray-300">
              Talk directly with Ogha Power Solutions electrical engineers for custom plant builds up to 10,000 LPH.
            </p>
            <button
              onClick={() => openQuoteModal(`Engineering Query: ${article.title}`)}
              className="px-6 py-2.5 bg-[#FFB200] hover:bg-[#E09D00] text-[#0B192C] font-extrabold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Consult an Ogha Engineer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
