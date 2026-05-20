import React from "react";
import { AnimatePresence } from "motion/react";
import {
  Loader2,
  ShoppingBag,
  Info,
  SlidersHorizontal,
  Search,
  X,
  Filter,
} from "lucide-react";

// Import hooks and subcomponents
import { useProductLogic } from "../hooks/useProductLogic";
import { ProductHero } from "../components/ProductHero";
import { ProductFilters } from "../components/ProductFilters";
import { ProductCard } from "../components/ProductCard";
import { ProductDetailModal } from "../components/ProductDetailModal";

export function Products() {
  const {
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    selectedVegStatus,
    setSelectedVegStatus,
    selectedTypes,
    setSelectedTypes,
    selectedBrands,
    setSelectedBrands,
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    activeProduct,
    setActiveProduct,
    ref,
    allProducts,
    vegCounts,
    typeCounts,
    brandCounts,
    sortedProducts,
    visibleCount,
    hasNextPage,
    activeFilterCount,
    isLoading,
    isError,
    refetch,
    noImageUrl,
  } = useProductLogic();

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-20">
      {/* Hero Header Section */}
      <ProductHero products={allProducts} />

      {/* Main Container: Flipkart Sidebar + Product Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-8 items-start mt-8">
        {/* Flipkart Filter Sidebar (Desktop) / Drawer (Mobile) */}
        <ProductFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedVegStatus={selectedVegStatus}
          setSelectedVegStatus={setSelectedVegStatus}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          vegCounts={vegCounts}
          typeCounts={typeCounts}
          brandCounts={brandCounts}
          isMobileOpen={isMobileFilterOpen}
          setIsMobileOpen={setIsMobileFilterOpen}
        />

        {/* Main Content Area */}
        <div className="flex-1 w-full">
          {/* Flipkart Style Top Bar */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-4 mb-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Left: Search & Count */}
            <div className="flex items-center gap-4 flex-1 max-w-md">
              <div className="relative flex-1">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Search size={16} />
                </span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200/80 focus:ring-2 focus:ring-[#89a039] focus:border-transparent text-xs text-gray-900 placeholder-gray-400 transition-all font-semibold outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {/* Right: Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase shadow-sm"
            >
              <Filter size={14} />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="bg-[#89a039] text-white text-[10px] px-1.5 py-0.5 rounded-full font-black">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          {/* Loading Initial State */}
          {isLoading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[2rem] border border-gray-100 p-5 space-y-4 animate-pulse"
                >
                  <div className="aspect-[4/3] bg-gray-200 rounded-2xl w-full" />
                  <div className="h-4 bg-gray-200 rounded w-1/3" />
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                  <div className="flex justify-between items-center pt-2">
                    <div className="h-6 bg-gray-200 rounded w-1/4" />
                    <div className="h-10 bg-gray-200 rounded-xl w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {isError && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <Info size={48} className="mx-auto text-red-500 mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Failed to Load Products
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                There was an error communicating with the product servers.
              </p>
              <button
                onClick={() => refetch()}
                className="bg-[#89a039] hover:bg-[#72852d] text-white px-6 py-3 rounded-xl font-semibold text-xs tracking-wider"
              >
                TRY AGAIN
              </button>
            </div>
          )}

          {/* Empty State */}
          {!isLoading && !isError && sortedProducts.length === 0 && (
            <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-black text-gray-900 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-400 text-sm max-w-xs mx-auto">
                We couldn't find any products matching your current criteria or
                search query.
              </p>
              <button
                onClick={() => {
                  setSelectedVegStatus([]);
                  setSelectedTypes([]);
                  setSelectedBrands([]);
                  setSearchQuery("");
                  setSortBy("default");
                }}
                className="mt-6 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-bold text-xs tracking-widest cursor-pointer"
              >
                RESET ALL FILTERS
              </button>
            </div>
          )}

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.slice(0, visibleCount).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setActiveProduct}
                noImageUrl={noImageUrl}
              />
            ))}
          </div>

          {/* Infinite Scroll Trigger */}
          {hasNextPage && (
            <div ref={ref} className="flex justify-center items-center py-16">
              <div className="flex items-center gap-2.5 text-gray-500 text-xs font-bold tracking-widest uppercase">
                <Loader2 className="animate-spin text-[#89a039]" size={18} />
                Loading delicious items...
              </div>
            </div>
          )}

          {!hasNextPage && sortedProducts.length > 0 && (
            <div className="text-center py-16 text-gray-400 text-xs font-semibold uppercase tracking-widest">
              ✦ You have seen all gourmet offerings ✦
            </div>
          )}
        </div>
      </div>

      {/* Quick View Detailed Modal */}
      <AnimatePresence>
        {activeProduct && (
          <ProductDetailModal
            product={activeProduct}
            onClose={() => setActiveProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
