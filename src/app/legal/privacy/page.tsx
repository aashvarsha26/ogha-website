'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="page-shell py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Link href="/" className="inline-flex items-center space-x-1 text-xs font-bold text-[#0B192C]">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="panel-card rounded-2xl p-8 md:p-10 shadow-md space-y-4 text-xs md:text-sm text-gray-700 leading-relaxed">
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#0B192C]">Privacy Policy</h1>
          <p className="text-gray-400 text-xs">Last updated: September 2026</p>

          <p>
            Ogha Power Solutions Private Limited ("Ogha", "we", "us") respects your privacy and is committed to protecting personal and business information submitted on oghapowersolutions.com.
          </p>

          <h3 className="font-bold text-base text-[#0B192C] pt-2">1. Information We Collect</h3>
          <p>
            We collect contact information (name, phone number, email address, company name, territory, and product requirements) submitted through our Quote Request, Dealer Application, and Contact forms to fulfill B2B inquiries and product quotes.
          </p>

          <h3 className="font-bold text-base text-[#0B192C] pt-2">2. How We Use Information</h3>
          <p>
            Submitted information is strictly used for direct B2B communication, price quote generation, dealer application processing, and technical support. We do not sell or rent customer contact data to third parties.
          </p>

          <h3 className="font-bold text-base text-[#0B192C] pt-2">3. Contact Us</h3>
          <p>
            If you have questions regarding this Privacy Policy, email support@oghapowersolutions.com or call +91 9052 797 900.
          </p>
        </div>
      </div>
    </div>
  );
}
