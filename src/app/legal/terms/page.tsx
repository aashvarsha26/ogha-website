'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="page-shell py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Link href="/" className="inline-flex items-center space-x-1 text-xs font-bold text-[#0B192C]">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="panel-card rounded-2xl p-8 md:p-10 shadow-md space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0B192C]">Terms of Use</h1>
          <p className="text-gray-400 text-xs">Last updated: September 2026</p>

          <p>
            Welcome to oghapowersolutions.com, operated by Ogha Power Solutions Private Limited (CIN: U31900TG2023PTC169992).
          </p>

          <h3 className="font-bold text-base text-[#0B192C] pt-2">1. Product Pricing & Quotations</h3>
          <p>
            Prices listed on this website are indicative public factory prices. Final wholesale, volume discount, and dealer pricing are subject to explicit tax invoices and order confirmations issued by Ogha Power Solutions.
          </p>

          <h3 className="font-bold text-base text-[#0B192C] pt-2">2. Intellectual Property</h3>
          <p>
            All brand names, trademarks, OGHA SKY series schematics, product designs, and content are the property of Ogha Power Solutions Private Limited.
          </p>
        </div>
      </div>
    </div>
  );
}
