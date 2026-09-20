'use client';

import React from 'react';
import { Star, ShieldCheck, Cpu, Award, Building2, Wrench } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

export const TrustStrip: React.FC = () => {
  return (
    <section className="bg-[#0D1D35] text-white py-12 px-4 border-y-2 border-[#FFB200]">
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#FFB200] bg-[#FFB200]/10 px-3.5 py-1.5 rounded-full border border-[#FFB200]/20">
            Why Choose Ogha Power Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            India's Trusted Industrial B2B Manufacturer
          </h2>
          <p className="text-xs md:text-sm text-gray-300 max-w-xl mx-auto">
            Engineered in Hyderabad for extreme durablity across Tier 1, 2, and 3 Indian power &amp; water conditions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="bg-[#152B4D] border border-[#FFB200]/30 rounded-2xl p-4 hover:border-[#FFB200] transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#FFB200]/20 text-[#FFB200] flex items-center justify-center mb-2">
              <Star className="w-5 h-5 fill-[#FFB200]" />
            </div>
            <div className="text-lg font-black text-[#FFB200]">4.8 ★ / 5.0</div>
            <div className="text-xs text-gray-300 font-bold mt-0.5">IndiaMART Rating</div>
            <div className="text-[10px] text-amber-300 font-semibold mt-1">15 Verified Reviews</div>
          </div>

          <div className="bg-[#152B4D] border border-[#FFB200]/30 rounded-2xl p-4 hover:border-[#FFB200] transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#FFB200]/20 text-[#FFB200] flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5 text-[#FFB200]" />
            </div>
            <div className="text-lg font-black text-white">TrustSEAL</div>
            <div className="text-xs text-gray-300 font-bold mt-0.5">Verified Seller</div>
            <div className="text-[10px] text-emerald-400 font-semibold mt-1">GST & CIN Active</div>
          </div>

          <div className="bg-[#152B4D] border border-[#FFB200]/30 rounded-2xl p-4 hover:border-[#FFB200] transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#FFB200]/20 text-[#FFB200] flex items-center justify-center mb-2">
              <Cpu className="w-5 h-5 text-[#FFB200]" />
            </div>
            <div className="text-lg font-black text-white">In-House R&D</div>
            <div className="text-xs text-gray-300 font-bold mt-0.5">PCB & Embedded</div>
            <div className="text-[10px] text-gray-400 mt-1">Proprietary Logic</div>
          </div>

          <div className="bg-[#152B4D] border border-[#FFB200]/30 rounded-2xl p-4 hover:border-[#FFB200] transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#FFB200]/20 text-[#FFB200] flex items-center justify-center mb-2">
              <Building2 className="w-5 h-5 text-[#FFB200]" />
            </div>
            <div className="text-lg font-black text-white">20+ Team</div>
            <div className="text-xs text-gray-300 font-bold mt-0.5">Hyderabad Plant</div>
            <div className="text-[10px] text-gray-400 mt-1">Founded 2023</div>
          </div>

          <div className="bg-[#152B4D] border border-[#FFB200]/30 rounded-2xl p-4 hover:border-[#FFB200] transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#FFB200]/20 text-[#FFB200] flex items-center justify-center mb-2">
              <Wrench className="w-5 h-5 text-[#FFB200]" />
            </div>
            <div className="text-lg font-black text-white">Custom Builds</div>
            <div className="text-xs text-gray-300 font-bold mt-0.5">Up to 10,000 LPH</div>
            <div className="text-[10px] text-gray-400 mt-1">Tailored Panel Specs</div>
          </div>

          <div className="bg-[#152B4D] border border-[#FFB200]/30 rounded-2xl p-4 hover:border-[#FFB200] transition-colors">
            <div className="w-10 h-10 mx-auto rounded-xl bg-[#FFB200]/20 text-[#FFB200] flex items-center justify-center mb-2">
              <Award className="w-5 h-5 text-[#FFB200]" />
            </div>
            <div className="text-lg font-black text-[#FFB200]">{PRODUCTS.length}+ SKUs</div>
            <div className="text-xs text-gray-300 font-bold mt-0.5">In Active Stock</div>
            <div className="text-[10px] text-gray-400 mt-1">Direct Factory Rates</div>
          </div>
        </div>
      </div>
    </section>
  );
};
