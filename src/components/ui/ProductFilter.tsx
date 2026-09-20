'use client';

import React from 'react';
import { Filter, RotateCcw, SlidersHorizontal } from 'lucide-react';

interface FilterState {
  category: string;
  capacity: string;
  controlType: string;
  paymentMode: string;
  searchQuery: string;
  sortBy: string;
}

interface ProductFilterProps {
  filters: FilterState;
  onFilterChange: (newFilters: Partial<FilterState>) => void;
  onReset: () => void;
  totalResults: number;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  filters,
  onFilterChange,
  onReset,
  totalResults,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-3">
        <div className="flex items-center space-x-2">
          <SlidersHorizontal className="w-4 h-4 text-[#0B192C]" />
          <h3 className="font-bold text-sm text-[#0B192C]">Catalog Filters & Sort</h3>
          <span className="text-xs text-gray-400">({totalResults} SKUs found)</span>
        </div>

        <button
          onClick={onReset}
          className="text-xs text-gray-500 hover:text-[#0B192C] font-semibold flex items-center space-x-1 hover:underline cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Filters</span>
        </button>
      </div>

      {/* Filter Row 1: Search & Sort */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="md:col-span-2">
          <input
            type="text"
            placeholder="Search by SKU name, capacity (e.g. 2000 LPH), or feature..."
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            className="w-full px-3.5 py-2 text-xs rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] outline-none text-[#0F172A]"
          />
        </div>

        <div>
          <select
            value={filters.sortBy}
            onChange={(e) => onFilterChange({ sortBy: e.target.value })}
            className="w-full px-3.5 py-2 text-xs rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FFB200] focus:border-[#0B192C] outline-none bg-white text-[#0F172A] font-semibold"
          >
            <option value="featured">Sort: Recommended</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Filter Chips: Control Type */}
      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5">
          RO Control Panel Type
        </label>
        <div className="flex flex-wrap gap-1.5 text-xs">
          {[
            { id: 'all', label: 'All Types' },
            { id: 'manual', label: 'Manual RO' },
            { id: 'semi-auto', label: 'Semi-Automatic' },
            { id: 'fully-auto', label: 'Fully Automatic (SKY Series)' },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => onFilterChange({ controlType: type.id })}
              className={`px-3 py-1.5 rounded-lg border font-semibold transition-colors cursor-pointer ${
                filters.controlType === type.id
                  ? 'bg-[#0B192C] text-[#FFB200] border-[#0B192C]'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Chips: Plant Capacity (LPH) */}
      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5">
          Plant Capacity (LPH)
        </label>
        <div className="flex flex-wrap gap-1.5 text-xs">
          {[
            { id: 'all', label: 'All Capacities' },
            { id: '500', label: '≤ 500 LPH' },
            { id: '1000', label: '1000 LPH' },
            { id: '2000', label: '2000 LPH' },
            { id: '4000', label: '4000+ LPH' },
          ].map((cap) => (
            <button
              key={cap.id}
              onClick={() => onFilterChange({ capacity: cap.id })}
              className={`px-3 py-1.5 rounded-lg border font-semibold transition-colors cursor-pointer ${
                filters.capacity === cap.id
                  ? 'bg-[#0B192C] text-[#FFB200] border-[#0B192C]'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {cap.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Chips: Payment Mode (Water ATMs) */}
      <div>
        <label className="block text-[11px] font-bold text-gray-500 uppercase mb-1.5">
          Water ATM Payment Method
        </label>
        <div className="flex flex-wrap gap-1.5 text-xs">
          {[
            { id: 'all', label: 'All Payment Modes' },
            { id: 'coin', label: 'Coin Operated' },
            { id: 'card', label: 'RFID Smart Card' },
            { id: 'upi', label: 'Dynamic UPI QR' },
            { id: 'combo', label: 'Combo (Multi-Payment)' },
          ].map((mode) => (
            <button
              key={mode.id}
              onClick={() => onFilterChange({ paymentMode: mode.id })}
              className={`px-3 py-1.5 rounded-lg border font-semibold transition-colors cursor-pointer ${
                filters.paymentMode === mode.id
                  ? 'bg-[#FFB200] text-[#0B192C] border-[#FFB200]'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
              }`}
            >
              {mode.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
