'use client';

import React from 'react';
import Link from 'next/link';
import { PhotoBackdrop } from '@/components/ui/PhotoBackdrop';
import { ArrowLeft, Cpu, Target, Award } from 'lucide-react';

export default function VisionPage() {
  return (
    <PhotoBackdrop
      src="/images/carousel2/ogha-combo-coin-card-1.jpg"
      alt=""
      className="min-h-screen py-10 px-4"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        <Link href="/about" className="inline-flex items-center space-x-1 text-xs font-bold text-white/80 hover:text-[#FFB200]">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to About Us</span>
        </Link>

        <div className="backdrop-blur-md bg-white/10 border border-white/15 rounded-2xl p-8 md:p-10 shadow-2xl space-y-6 text-white">
          <h1 className="text-3xl font-extrabold tracking-tight">Vision &amp; R&amp;D Capability</h1>

          <div className="text-xs md:text-sm text-gray-200 space-y-4 leading-relaxed border-t border-white/10 pt-4">
            <h3 className="font-bold text-lg text-[#FFB200]">Our Vision</h3>
            <p>
              To be the most admired company in the water purification industry across the globe —
              the first name that comes to mind for automation and vending solutions, trusted for
              Indian-made reliability at a global standard.
            </p>

            <h3 className="font-bold text-lg text-[#FFB200] pt-2">Our Mission</h3>
            <p>
              To deliver zero-defect, high-reliability electrical controllers and automated water
              vending technology to Indian water plant OEMs, contractors, and vending operators at
              direct factory prices.
            </p>

            <h3 className="font-bold text-lg text-[#FFB200] pt-2">In-House PCB &amp; Microcontroller R&amp;D</h3>
            <p>
              Unlike generic assembly units, Ogha Power Solutions develops its own firmware and PCB
              circuit designs in-house. This gives our panels superior immunity against high
              voltage spikes, lightning surges, and continuous pump motor inductive loads.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h4 className="font-bold text-sm text-[#FFB200]">RO Automation Innovation</h4>
                <p className="text-xs text-gray-300 mt-1">
                  Pioneering auto multi-port valve (AMPV) sequencing and integrated TDS monitors in
                  commercial control panels.
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <h4 className="font-bold text-sm text-[#FFB200]">Cashless Water ATMs</h4>
                <p className="text-xs text-gray-300 mt-1">
                  Engineered dynamic UPI QR modules for direct bank settlement without third-party
                  commission fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PhotoBackdrop>
  );
}
