'use client';

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

/**
 * Product image carousel (PRD 2): cycles through the official product photos
 * and the dimension/skid-cut-out diagram. Falls back to a single static image
 * when a product has no gallery (accessories).
 */
export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, alt }) => {
  const gallery = images.length > 0 ? images : [];
  const [index, setIndex] = useState(0);
  const count = gallery.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  if (count === 0) return null;

  return (
    <div className="space-y-3" role="region" aria-label={`${alt} image gallery`}>
      {/* Main image */}
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-white via-[#EDF2FA] to-[#C9D7EA] border border-[#1E3E62]/20">
        <Image
          key={gallery[index]}
          src={gallery[index]}
          alt={`${alt} — image ${index + 1} of ${count}`}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority={index === 0}
          className="object-contain p-4 transition-opacity duration-200"
        />

        {count > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-[#0D1D35]/70 p-2 text-white opacity-80 hover:bg-[#0D1D35] hover:opacity-100 transition-all cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-[#0D1D35]/70 p-2 text-white opacity-80 hover:bg-[#0D1D35] hover:opacity-100 transition-all cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <span className="absolute bottom-2 right-3 rounded-full bg-[#0D1D35]/70 px-2.5 py-0.5 text-[11px] font-bold text-white">
              {index + 1} / {count}
            </span>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {count > 1 && (
        <div className="grid grid-cols-4 gap-2" role="tablist" aria-label="Product images">
          {gallery.map((src, i) => (
            <button
              key={src}
              role="tab"
              aria-selected={i === index}
              aria-label={`Show image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg border-2 bg-white transition-all cursor-pointer ${
                i === index
                  ? 'border-[#FFB200] shadow-md'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <Image src={src} alt="" fill sizes="120px" className="object-contain p-1" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
