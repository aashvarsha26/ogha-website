'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, Play, Download, BookOpen, ArrowRight } from 'lucide-react';
import { RESOURCES_ARTICLES } from '@/data/resources';

export default function ResourcesPage() {
  return (
    <div className="page-shell py-10 px-4 space-y-10">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Banner */}
        <div className="bg-[#0B192C] text-white rounded-2xl p-8 border-b-4 border-[#FFB200] shadow-md space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FFB200] bg-[#FFB200]/10 px-3 py-1 rounded">
            Knowledge Base & Technical Downloads
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Ogha Resources, Buyer Guides & Technical Library
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-2xl">
            Sizing guides, payment gateway integration tutorials, video walkthroughs, and downloadable PDF product catalogs.
          </p>
        </div>

        {/* Spec Sheet PDF Download Hub */}
        <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center space-x-2 text-[#0B192C]">
            <Download className="w-5 h-5 text-[#FFB200]" />
            <h2 className="text-lg font-bold">PDF Spec Sheets & Product Catalogs</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                  Catalog PDF
                </span>
                <h3 className="font-bold text-[#0B192C] mt-2">Full 29-SKU Product Catalog</h3>
                <p className="text-[11px] text-gray-500 mt-1">Complete technical brochure & pricing guide.</p>
              </div>
              <a
                href="/products"
                className="py-2 bg-[#0B192C] text-white font-bold text-[11px] rounded text-center hover:bg-[#1E3E62] transition-colors"
              >
                Download Catalog PDF
              </a>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase text-blue-700 bg-blue-100 px-2 py-0.5 rounded">
                  Spec Sheet
                </span>
                <h3 className="font-bold text-[#0B192C] mt-2">OGHA SKY Series Manual</h3>
                <p className="text-[11px] text-gray-500 mt-1">AMPV wiring diagrams & TDS calibration settings.</p>
              </div>
              <a
                href="/products/ro-control-panels"
                className="py-2 bg-[#0B192C] text-white font-bold text-[11px] rounded text-center hover:bg-[#1E3E62] transition-colors"
              >
                Download SKY Manual
              </a>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Setup Guide
                </span>
                <h3 className="font-bold text-[#0B192C] mt-2">Water ATM UPI Integration</h3>
                <p className="text-[11px] text-gray-500 mt-1">Dynamic QR bank settlement setup guide.</p>
              </div>
              <a
                href="/products/water-vending-machines"
                className="py-2 bg-[#0B192C] text-white font-bold text-[11px] rounded text-center hover:bg-[#1E3E62] transition-colors"
              >
                Download UPI Guide
              </a>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                  Spares Index
                </span>
                <h3 className="font-bold text-[#0B192C] mt-2">Sensors & Accessories Datasheet</h3>
                <p className="text-[11px] text-gray-500 mt-1">Flow meter specs & solenoid valve pinouts.</p>
              </div>
              <a
                href="/products/accessories"
                className="py-2 bg-[#0B192C] text-white font-bold text-[11px] rounded text-center hover:bg-[#1E3E62] transition-colors"
              >
                Download Spares Specs
              </a>
            </div>
          </div>
        </div>

        {/* Guides & Blog Cards */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0B192C]">Technical Buying Guides & Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RESOURCES_ARTICLES.map((article) => (
              <Link
                key={article.slug}
                href={`/resources/${article.slug}`}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-gray-500">
                    <span className="font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-bold text-base text-[#0B192C] group-hover:text-[#1E3E62] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">{article.excerpt}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0B192C] group-hover:text-[#FFB200]">
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
