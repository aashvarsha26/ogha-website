'use client';

import React from 'react';
import { DealerForm } from '@/components/ui/DealerForm';
import { Building2, HelpCircle } from 'lucide-react';

export default function DealerPage() {
  return (
    <div className="page-shell py-10 px-4 space-y-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Hero */}
        <div className="bg-[#0B192C] text-white rounded-2xl p-8 border-b-4 border-[#FFB200] shadow-md space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FFB200] bg-[#FFB200]/10 px-3.5 py-1.5 rounded-full border border-[#FFB200]/30">
            Ogha National Partnership Program
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Become an Authorized Ogha Regional Dealer
          </h1>
          <p className="text-xs md:text-base text-gray-300 max-w-2xl leading-relaxed">
            Expand your water treatment business with India’s most reliable RO control panel & Water ATM manufacturer. Direct factory pricing, protected margins, and custom panel branding.
          </p>
        </div>

        {/* Application Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <DealerForm />
          </div>

          {/* Right Column: Coverage & FAQ */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B192C] text-white p-6 rounded-2xl border border-[#1E3E62] space-y-4">
              <h3 className="text-lg font-bold text-[#FFB200]">Current Coverage & Footprint</h3>
              <p className="text-xs text-gray-300">
                Ogha Power Solutions supplies control panels across 15+ states in India with strong presence in Telangana, Andhra Pradesh, Karnataka, Maharashtra, and Tamil Nadu.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="text-gray-300">Active Dealers & Stockists:</span>
                  <span className="font-bold text-[#FFB200]">45+ Partners</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                  <span className="text-gray-300">Commercial Panels Shipped:</span>
                  <span className="font-bold text-white">12,000+ Units</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Water ATMs Deployed:</span>
                  <span className="font-bold text-emerald-400">1,500+ Machines</span>
                </div>
              </div>
            </div>

            {/* Dealer FAQ */}
            <div className="panel-card p-6 rounded-2xl space-y-4">
              <div className="flex items-center space-x-2 text-[#0B192C]">
                <HelpCircle className="w-5 h-5 text-[#FFB200]" />
                <h3 className="text-base font-bold">Dealer FAQ</h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <h4 className="font-bold text-[#0B192C]">What is the Minimum Order Quantity (MOQ)?</h4>
                  <p className="text-gray-600 mt-0.5">
                    For starter dealers, MOQ is just 5 units across any mix of RO panels or Water ATMs.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0B192C]">How are replacement warranty claims handled?</h4>
                  <p className="text-gray-600 mt-0.5">
                    We provide direct component replacement warranty. Spares are dispatched within 24 hours from Hyderabad.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#0B192C]">Can we order custom capacity panels?</h4>
                  <p className="text-gray-600 mt-0.5">
                    Yes! Our in-house R&D team can build custom logic panels up to 10,000 LPH with custom switch features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
