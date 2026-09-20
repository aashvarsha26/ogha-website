'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { useQuoteModal } from '@/context/QuoteModalContext';
import { Check, Star, ArrowRight, FileText } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="bg-[#152B4D] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#FFB200] overflow-hidden flex flex-col justify-between group hover:-translate-y-1">
      {/* Product Photo — cool gradient panel blends the white photo bg away */}
      <div className="relative h-52 overflow-hidden border-b border-[#FFB200]/20 bg-gradient-to-br from-white via-[#EDF2FA] to-[#C9D7EA]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.9),transparent_55%)]" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4 mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2">
          <span className="text-[10px] font-extrabold uppercase bg-[#0D1D35]/90 text-white px-2.5 py-1 rounded shadow-xs backdrop-blur-sm">
            {product.subCategory || product.category}
          </span>
        </div>

        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between gap-2">
          <span className="text-[#1B365D] font-bold text-[11px] truncate bg-[#FFB200] px-2 py-0.5 rounded">
            {product.tag}
          </span>
          <div className="flex items-center space-x-1 bg-[#0D1D35]/90 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
            <Star className="w-3 h-3 text-[#FFB200] fill-[#FFB200]" />
            <span className="font-bold text-white text-[11px]">{product.rating}</span>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Link href={`/products/${product.categorySlug}/${product.slug}`}>
            <h3 className="font-extrabold text-base text-white hover:text-[#FFB200] transition-colors leading-snug">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-gray-300 mt-1.5 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>

          <div className="mt-3.5 space-y-1.5 border-t border-white/10 pt-3 text-xs">
            {product.specs.slice(0, 3).map((spec, idx) => (
              <div key={idx} className="flex items-center space-x-2 text-gray-300">
                <Check className="w-3.5 h-3.5 text-[#FFB200] shrink-0" />
                <span className="text-gray-400 font-medium">{spec.key}:</span>
                <span className="font-bold text-white truncate">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-3 border-t border-white/10">
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/products/${product.categorySlug}/${product.slug}`}
              className="py-2.5 px-3 rounded-lg border border-[#FFB200] text-[#FFB200] hover:bg-[#FFB200] hover:text-[#1B365D] font-bold text-xs transition-colors flex items-center justify-center space-x-1"
            >
              <span>Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={() => openQuoteModal(product.name)}
              className="py-2.5 px-3 rounded-lg bg-[#FFB200] hover:bg-[#E09D00] text-[#1B365D] font-black text-xs shadow-md transition-colors flex items-center justify-center space-x-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
