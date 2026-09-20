import React from 'react';
import { WhyOghaWheel } from '@/components/ui/WhyOghaWheel';
import { WHY_OGHA_FEATURES } from '@/data/whyOghaFeatures';

export default function WhyOghaPage() {
  return (
    <div className="page-shell text-[#1B365D]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: circular infographic (yellow pill removed per PRD 2) */}
          <div className="space-y-8">
            <WhyOghaWheel logoSrc="/ogha-logo.png" />
          </div>

          {/* Right: welcome heading + intro copy */}
          <div className="space-y-6">
            <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Welcome To{' '}
              <span className="text-[#FFB200] underline underline-offset-4">Ogha</span> Your
              Trusted Partner In Water Purification Technology..
            </h1>
            <p className="text-sm text-gray-500 md:text-base">
              We specialize in providing cutting-edge RO control panels and water vending
              machines that power a sustainable future.
            </p>
            <p className="text-sm text-gray-500 md:text-base">
              Around our logo you can see the twelve promises we make to every buyer — from
              warranty and service to delivery and running costs. Each one is explained below.
            </p>
          </div>
        </div>

        {/* --- THE 12 PROMISES, EXPLAINED --- */}
        <div className="mt-16">
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1B365D]/70">
              The 12 Ogha promises
            </span>
            <h2 className="text-2xl md:text-4xl font-black">
              What each promise means for you
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_OGHA_FEATURES.map(({ icon: Icon, label, description }, i) => (
              <div
                key={label}
                className="panel-card rounded-2xl p-6 space-y-3 flex flex-col"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1B365D] text-[#FFB200]">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#1B365D]/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold leading-snug">{label}</h3>
                <p className="text-xs text-gray-600 leading-relaxed flex-1">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
