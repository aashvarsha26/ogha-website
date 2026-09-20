'use client';

import React from 'react';
import { Phone, FileText } from 'lucide-react';
import { useQuoteModal } from '@/context/QuoteModalContext';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
    <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.72 6.4L3.2 28.8l6.56-1.68a12.74 12.74 0 0 0 6.24 1.6h.004c7.056 0 12.796-5.74 12.796-12.8 0-3.42-1.332-6.636-3.752-9.052A12.7 12.7 0 0 0 16.004 3.2Zm0 23.356h-.004a10.62 10.62 0 0 1-5.408-1.48l-.388-.23-3.896 1 1.04-3.8-.252-.4a10.58 10.58 0 0 1-1.624-5.646c0-5.868 4.776-10.64 10.652-10.64 2.844 0 5.516 1.108 7.524 3.12a10.57 10.57 0 0 1 3.116 7.528c-.004 5.868-4.78 10.648-10.76 10.648Zm5.836-7.968c-.32-.16-1.892-.932-2.184-1.04-.292-.108-.504-.16-.716.16-.212.32-.824 1.04-1.008 1.252-.188.212-.368.24-.688.08-.32-.16-1.348-.496-2.568-1.584-.948-.848-1.588-1.892-1.776-2.212-.184-.32-.02-.496.14-.652.144-.144.32-.368.48-.552.16-.184.212-.32.32-.532.108-.212.056-.396-.028-.556-.084-.16-.716-1.728-.98-2.364-.258-.62-.52-.536-.716-.544l-.612-.012a1.17 1.17 0 0 0-.848.396c-.292.32-1.112 1.088-1.112 2.652s1.14 3.076 1.296 3.288c.16.212 2.24 3.42 5.428 4.796.758.328 1.352.524 1.812.668.764.244 1.456.212 2.004.128.608-.092 1.892-.772 2.16-1.52.268-.752.268-1.392.188-1.528-.08-.132-.292-.212-.612-.372Z" />
  </svg>
);

export const StickyMobileBar: React.FC = () => {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B192C] border-t border-[#1E3E62] p-2.5 sm:hidden shadow-2xl flex items-center justify-between gap-2">
      <a
        href="tel:+919052797900"
        className="flex-1 py-2.5 px-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors border border-white/10"
      >
        <Phone className="w-4 h-4 text-[#FFB200]" />
        <span>Call Sales</span>
      </a>

      <a
        href="https://wa.me/919052797900?text=Hi%20Ogha%20Team,%20I%20want%20to%20enquire%20about%20your%20RO%20panels/Water%20ATMs"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-xs"
      >
        <WhatsAppIcon className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={() => openQuoteModal()}
        className="flex-1 py-2.5 px-2 bg-[#FFB200] hover:bg-[#E09D00] text-[#0B192C] font-bold rounded-lg text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-md cursor-pointer"
      >
        <FileText className="w-4 h-4" />
        <span>Get Quote</span>
      </button>
    </div>
  );
};
