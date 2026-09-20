'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import { SpecTable } from '@/components/ui/SpecTable';
import { ProductCard } from '@/components/ui/ProductCard';
import { ProductGallery } from '@/components/ui/ProductGallery';
import { useQuoteModal } from '@/context/QuoteModalContext';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Download,
  PhoneCall,
  MessageSquare,
  ArrowLeft,
} from 'lucide-react';

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const resolvedParams = use(params);
  const { category, slug } = resolvedParams;
  const { openQuoteModal } = useQuoteModal();

  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="page-shell py-8 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumb / Back Link */}
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <Link href="/products" className="hover:text-[#0B192C]">
            Products
          </Link>
          <span>/</span>
          <Link href={`/products/${product.categorySlug}`} className="hover:text-[#0B192C]">
            {product.category}
          </Link>
          <span>/</span>
          <span className="font-bold text-[#0B192C]">{product.name}</span>
        </div>

        {/* Main Product Hero Grid */}
        <div className="panel-card rounded-2xl shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8">
          {/* Left Column: Product Image Carousel (PRD 2) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <ProductGallery images={product.gallery ?? [product.image]} alt={product.name} />

            <div className="flex items-center justify-between text-xs">
              <span className="rounded bg-[#FFB200] px-2.5 py-1 font-bold text-[#0B192C]">
                {product.tag}
              </span>
              <span className="flex items-center gap-1 font-bold text-[#0B192C]">
                {product.rating}
                <span className="font-bold text-[#FFB200]">★</span>
              </span>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200 space-y-3 text-xs">
              <div className="flex items-center space-x-2 text-amber-900 font-bold">
                <ShieldCheck className="w-4 h-4 text-[#FFB200]" />
                <span>Ogha Direct Factory Guarantee</span>
              </div>
              <ul className="space-y-1.5 text-gray-700 text-[11px]">
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% In-House PCB & Microcontroller R&D</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>GST Invoice & IndiaMART TrustSEAL Verification</span>
                </li>
                <li className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Same-Day Dispatch for In-Stock SKUs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Title, Price, Description, CTAs */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-bold text-[#0B192C] uppercase bg-gray-100 px-2.5 py-1 rounded">
                  {product.category}
                </span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs font-semibold text-gray-500">
                  {product.subCategory || 'Industrial Series'}
                </span>
              </div>

              <h1 className="text-2xl md:text-3xl font-extrabold text-[#0B192C]">
                {product.name}
              </h1>

              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Quote CTA (prices removed per PRD 2) */}
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs md:text-sm text-gray-600 font-medium">
                  Contact us for the best factory price on this unit.
                </span>

                <button
                  onClick={() => openQuoteModal(product.name)}
                  className="px-6 py-3 bg-[#FFB200] hover:bg-[#E09D00] text-[#0B192C] font-extrabold text-sm rounded-xl shadow-md transition-all flex items-center space-x-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  <span>Get Best Factory Quote</span>
                </button>
              </div>

              {/* PDF Spec Download & Quick Contact */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => openQuoteModal(`Spec Sheet Request: ${product.name}`)}
                  className="px-4 py-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-[#0B192C] font-bold text-xs rounded-lg transition-colors flex items-center space-x-2"
                >
                  <Download className="w-4 h-4 text-[#FFB200]" />
                  <span>Download Spec Sheet (PDF)</span>
                </button>

                <a
                  href={`https://wa.me/919052797900?text=Hi%20Ogha,%20I%20want%20price%20and%20specs%20for%20${encodeURIComponent(
                    product.name
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Feature Bullets */}
            <div className="border-t border-gray-200 pt-5 space-y-3">
              <h3 className="font-bold text-sm text-[#0B192C] uppercase tracking-wide">
                Key Features & Capabilities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications Table Section */}
        <div className="space-y-4">
          <SpecTable specs={product.specs} title={`Detailed Specifications — ${product.name}`} />
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="text-xl font-bold text-[#0B192C]">
                Related Products in {product.category}
              </h3>
              <Link
                href={`/products/${product.categorySlug}`}
                className="text-xs font-bold text-[#0B192C] hover:underline"
              >
                View Category Catalog →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
