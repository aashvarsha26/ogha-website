'use client';

import React from 'react';
import Link from 'next/link';
import { PhotoBackdrop } from '@/components/ui/PhotoBackdrop';
import { ArrowLeft, Building2, CheckCircle2 } from 'lucide-react';

export default function OurStoryPage() {
  return (
    <PhotoBackdrop
      src="/images/carousel2/ogha-sky-3-3-6000-lph-1.jpg"
      alt=""
      className="min-h-screen py-10 px-4"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <Link href="/about" className="inline-flex items-center space-x-1 text-xs font-bold text-white/80 hover:text-[#FFB200]">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to About Us</span>
        </Link>

        <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-8 md:p-10 shadow-2xl space-y-6 text-white">
          <h1 className="text-3xl font-extrabold tracking-tight">
            The Story of Ogha Power Solutions
          </h1>

          <div className="text-xs md:text-sm text-gray-200 space-y-4 leading-relaxed border-t border-white/10 pt-4">
            <p>
              Ogha Power Solutions Private Limited was founded to bridge a critical gap in India’s
              commercial RO plant ecosystem: existing control panels suffered high failure rates
              due to grid voltage fluctuations and poor surge protection.
            </p>
            <p>
              Starting as a 5-person engineering design unit, Ogha designed robust PCB controllers
              with auto-voltage cutoffs, relay protection, and digital TDS meters. Within 3 years,
              the company expanded to a 20+ member team with a dedicated manufacturing plant in
              Kamala Nagar, ECIL, Hyderabad.
            </p>
            <p>
              Today, Ogha manufactures 29 SKUs across commercial RO control panels (manual,
              semi-automatic, and OGHA SKY fully-automatic series) and Water Vending Machines
              (coin, RFID card, and dynamic UPI QR ATMs).
            </p>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
              <h4 className="font-bold text-[#FFB200]">Official Corporate Identifiers:</h4>
              <ul className="space-y-1 text-xs text-gray-300">
                <li>
                  • <strong className="text-white">Legal Name:</strong> Ogha Power Solutions Private
                  Limited
                </li>
                <li>
                  • <strong className="text-white">CIN:</strong> U31900TG2023PTC169992
                </li>
                <li>
                  • <strong className="text-white">GSTIN:</strong> 36AADCO9795Q1Z9
                </li>
                <li>
                  • <strong className="text-white">Director &amp; CEO:</strong> K. Siddiramulu
                </li>
                <li>
                  • <strong className="text-white">Registered Address:</strong> 1-7-170/5, 1st, 2nd and 3rd Floors, Beside
                  More Super market, Kamala
                  Nagar, ECIL, Hyderabad, Telangana 500062
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PhotoBackdrop>
  );
}
