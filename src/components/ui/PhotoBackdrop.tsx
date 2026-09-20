'use client';

import React from 'react';
import Image from 'next/image';

interface PhotoBackdropProps {
  /** Path under /public, e.g. /images/products/ro-sky-6000.jpg */
  src: string;
  /** Alt text for the backdrop photo */
  alt: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * A dark navy section whose background is a blurred, dimmed product photo.
 * Content sits above it in a glassy card.
 */
export const PhotoBackdrop: React.FC<PhotoBackdropProps> = ({
  src,
  alt,
  children,
  className = '',
}) => {
  return (
    <section className={`relative overflow-hidden bg-[#0D1D35] ${className}`}>
      {/* Blurred product photo backdrop */}
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          priority
          className="object-cover scale-110 blur-2xl opacity-45"
          aria-hidden="true"
        />
        {/* Navy dim + gold ambient glow on top of the photo */}
        <div className="absolute inset-0 bg-[#0D1D35]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_80%_0%,rgba(255,178,0,0.12),transparent_60%)]" />
      </div>

      <div className="relative">{children}</div>
    </section>
  );
};
