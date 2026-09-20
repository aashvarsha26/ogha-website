'use client';

import React from 'react';
import { ProductSpec } from '@/data/products';

interface SpecTableProps {
  specs: ProductSpec[];
  title?: string;
}

export const SpecTable: React.FC<SpecTableProps> = ({ specs, title = 'Technical Specifications' }) => {
  return (
    <div className="bg-white rounded-xl shadow-xs border border-gray-200 overflow-hidden">
      {title && (
        <div className="bg-[#0B192C] text-white px-5 py-3.5 border-b border-[#1E3E62] flex items-center justify-between">
          <h3 className="font-bold text-sm text-white tracking-wide uppercase">{title}</h3>
          <span className="text-[11px] text-[#FFB200] font-semibold">Factory Certified</span>
        </div>
      )}
      <div className="divide-y divide-gray-100 text-xs">
        {specs.map((spec, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 sm:grid-cols-3 p-3.5 ${
              index % 2 === 0 ? 'bg-gray-50/70' : 'bg-white'
            }`}
          >
            <div className="font-bold text-[#0B192C] sm:col-span-1 flex items-center">
              {spec.key}
            </div>
            <div className="text-gray-700 sm:col-span-2 font-medium mt-0.5 sm:mt-0">
              {spec.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
