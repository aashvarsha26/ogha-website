'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="page-shell py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Link href="/" className="inline-flex items-center space-x-1 text-xs font-bold text-[#0B192C]">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="panel-card rounded-2xl p-8 md:p-10 shadow-md space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0B192C]">Cookie Policy</h1>
          <p className="text-gray-400 text-xs">Last updated: September 2026</p>

          <p>
            This website uses essential session cookies to enhance navigation, retain quote request form preferences, and measure website traffic via Google Analytics.
          </p>

          <h3 className="font-bold text-base text-[#0B192C] pt-2">Managing Cookies</h3>
          <p>
            You can clear or disable cookies at any time through your browser settings. Essential website functions and quote request forms will remain operational.
          </p>
        </div>
      </div>
    </div>
  );
}
