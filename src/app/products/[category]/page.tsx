'use client';

import React, { useState, useMemo, use } from 'react';
import { notFound } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { ProductFilter } from '@/components/ui/ProductFilter';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const categorySlug = resolvedParams.category;

  const categoryInfo = CATEGORIES.find((c) => c.slug === categorySlug);
  if (!categoryInfo) {
    notFound();
  }

  const categoryProducts = PRODUCTS.filter((p) => p.categorySlug === categorySlug);

  const [filters, setFilters] = useState({
    category: categorySlug,
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
      category: categorySlug,
      capacity: 'all',
      controlType: 'all',
      paymentMode: 'all',
      searchQuery: '',
      sortBy: 'featured',
    });
  };

  const filteredProducts = useMemo(() => {
    return categoryProducts.filter((product) => {
      if (filters.searchQuery) {
        const q = filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.shortDescription.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc) return false;
      }
      if (filters.controlType !== 'all' && product.controlType !== filters.controlType) {
        return false;
      }
      if (filters.capacity !== 'all') {
        if (filters.capacity === '500' && (product.capacityLph || 0) > 500) return false;
        if (filters.capacity === '1000' && product.capacityLph !== 1000) return false;
        if (filters.capacity === '2000' && product.capacityLph !== 2000) return false;
        if (filters.capacity === '4000' && (product.capacityLph || 0) < 4000) return false;
      }
      if (filters.paymentMode !== 'all' && product.paymentMode !== filters.paymentMode) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'rating') return b.rating - a.rating;
      return b.reviewsCount - a.reviewsCount;
    });
  }, [categoryProducts, filters]);

  return (
    <div className="page-shell py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Category Header */}
        <div className="bg-[#0B192C] text-white rounded-2xl p-8 border-b-4 border-[#FFB200] shadow-md space-y-2">
          <h1 className="text-3xl font-extrabold text-white">{categoryInfo.name}</h1>
          <p className="text-xs md:text-sm text-gray-300 max-w-2xl">{categoryInfo.description}</p>
        </div>

        {/* Filter Controls */}
        <ProductFilter
          filters={filters}
          onFilterChange={handleFilterChange}
          onReset={handleReset}
          totalResults={filteredProducts.length}
        />

        {/* Grid */}
        {filteredProducts.length === 0 ? (
          <div className="panel-card rounded-2xl p-12 text-center space-y-3">
            <h3 className="text-lg font-bold text-[#0B192C]">No SKUs Found in {categoryInfo.name}</h3>
            <p className="text-xs text-gray-500">Try clearing active filters to see all category items.</p>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-[#FFB200] text-[#0B192C] font-bold text-xs rounded-lg"
            >
              Reset Filters
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
