'use client';

import React from 'react';
import Image from 'next/image';
import { WHY_OGHA_FEATURES } from '@/data/whyOghaFeatures';

interface WhyOghaWheelProps {
  /** e.g. "/ogha-logo.png" */
  logoSrc: string;
}

/**
 * Circular 12-feature infographic: Ogha logo at the center, feature chips
 * arranged around the ring — mirrors the reference "Why Ogha" artwork.
 */
export const WhyOghaWheel: React.FC<WhyOghaWheelProps> = ({ logoSrc }) => {
  // Start at 12 o'clock, step 30° clockwise around the ring.
  const angleOffset = -90;
  const step = 360 / WHY_OGHA_FEATURES.length;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] select-none">
      {/* Light-blue disc */}
      <div className="absolute inset-0 rounded-full bg-[#BDD7F2]" />

      {/* Feature chips around the ring */}
      {WHY_OGHA_FEATURES.map((feature, i) => {
        const angle = (angleOffset + i * step) * (Math.PI / 180);
        // Fixed precision so server/client floats match exactly (avoids hydration mismatch).
        const x = (50 + 42 * Math.cos(angle)).toFixed(3);
        const y = (50 + 42 * Math.sin(angle)).toFixed(3);
        const Icon = feature.icon;

        return (
          <div
            key={feature.label}
            className="absolute z-10 flex w-[76px] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md">
              <Icon className="h-5 w-5 text-[#0D1D35]" strokeWidth={2.2} />
            </div>
            <span className="mt-1 text-[11px] leading-tight font-bold text-[#1B365D]">
              {feature.label}
            </span>
          </div>
        );
      })}

      {/* Center medallion — #003C7B matches the official logo PNG's own background so it blends seamlessly */}
      <div className="absolute left-1/2 top-1/2 z-20 flex h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#003C7B]">
        <div className="relative h-[62%] w-[62%]">
          <Image
            src={logoSrc}
            alt="Ogha Power Solutions"
            fill
            sizes="(max-width: 768px) 120px, 160px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
