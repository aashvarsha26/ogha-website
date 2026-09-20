'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { ProductFilter } from '@/components/ui/ProductFilter';
import { ShieldCheck, Cpu } from 'lucide-react';

export default function AllProductsPage() {
  const [filters, setFilters] = useState({
    category: 'all',
    capacity: 'all',
    controlType: 'all',
    paymentMode: 'all',
    searchQuery: '',
    sortBy: 'featured',
  });

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleReset = () => {
    setFilters({
      category: 'all',
      capacity: 'all',
      controlType: 'all',
      paymentMode: 'all',
      searchQuery: '',
      sortBy: 'featured',
    });
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Search Query
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.shortDescription.toLowerCase().includes(q);
        const matchesTag = product.tag.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesTag) return false;
      }

      // Control Type
      if (filters.controlType !== 'all') {
        if (product.controlType !== filters.controlType) return false;
      }

      // Capacity (LPH)
      if (filters.capacity !== 'all') {
        const targetCap = parseInt(filters.capacity, 10);
        if (filters.capacity === '500' && (product.capacityLph || 0) > 500) return false;
        if (filters.capacity === '1000' && product.capacityLph !== 1000) return false;
        if (filters.capacity === '2000' && product.capacityLph !== 2000) return false;
        if (filters.capacity === '4000' && (product.capacityLph || 0) < 4000) return false;
      }

      // Payment Mode
      if (filters.paymentMode !== 'all') {
        if (product.paymentMode !== filters.paymentMode) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      return b.reviewsCount - a.reviewsCount;
    });
  }, [filters]);

  return (
    <div className="page-shell py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Banner */}
        <div className="bg-[#0B192C] text-white rounded-2xl p-8 border-b-4 border-[#FFB200] shadow-md space-y-3">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded text-xs text-[#FFB200] font-bold">
            <Cpu className="w-4 h-4" />
            <span>Complete Factory Product Catalog</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Commercial RO Control Panels & Water Vending Machines
          </h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-2xl">
            Browse full specifications, plant capacities (LPH), control logic options, payment validator modes, and indicative pricing across all Ogha product lines.
          </p>
        </div>

        {/* Filter Controls Component */}
        <ProductFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
          totalResults={filteredProducts.length}
        />

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="panel-card rounded-2xl p-12 text-center space-y-4">
            <h3 className="text-xl font-bold text-[#0B192C]">No SKUs Match Your Selected Filters</h3>
            <p className="text-xs text-gray-500">
              Try adjusting your capacity range, control panel type, or search query.
            </p>
            <button
              onClick={handleReset}
              className="px-5 py-2.5 bg-[#FFB200] text-[#0B192C] font-bold text-xs rounded-lg hover:bg-[#E09D00] transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
