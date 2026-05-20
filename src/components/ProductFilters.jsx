import React, { useState } from "react";
import { 
  Search, 
  X, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  RotateCcw,
  Filter
} from "lucide-react";

export function ProductFilters({
  searchQuery,
  setSearchQuery,
  selectedVegStatus = [],
  setSelectedVegStatus,
  selectedTypes = [],
  setSelectedTypes,
  selectedBrands = [],
  setSelectedBrands,
  vegCounts = { Veg: 0, "Non Veg": 0 },
  typeCounts = [],
  brandCounts = [],
  isMobileOpen,
  setIsMobileOpen,
}) {
  const [typeSearch, setTypeSearch] = useState("");
  const [brandSearch, setBrandSearch] = useState("");

  // Accordion open states
  const [openSections, setOpenSections] = useState({
    veg: true,
    type: true,
    brand: true,
  });

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleClearAll = () => {
    setSelectedVegStatus([]);
    setSelectedTypes([]);
    setSelectedBrands([]);
    setSearchQuery("");
  };

  const hasActiveFilters = 
    selectedVegStatus.length > 0 || 
    selectedTypes.length > 0 || 
    selectedBrands.length > 0 || 
    searchQuery !== "";

  const toggleVegStatus = (status) => {
    if (selectedVegStatus.includes(status)) {
      setSelectedVegStatus(selectedVegStatus.filter(s => s !== status));
    } else {
      setSelectedVegStatus([...selectedVegStatus, status]);
    }
  };

  const toggleType = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const filteredTypes = typeCounts.filter(tc =>
    tc.name.toLowerCase().includes(typeSearch.toLowerCase())
  );

  const filteredBrands = brandCounts.filter(bc =>
    bc.name.toLowerCase().includes(brandSearch.toLowerCase())
  );

  const filterContent = (
    <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden flex flex-col h-full">
      {/* Filter Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-[#89a039]" />
          <span className="font-black text-gray-900 text-sm tracking-wider uppercase">Filters</span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={handleClearAll}
            className="flex items-center gap-1 text-xs font-bold text-[#89a039] hover:text-[#72852d] transition-colors uppercase tracking-wider bg-[#89a039]/10 px-2.5 py-1 rounded-lg cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>Clear All</span>
          </button>
        )}
        {setIsMobileOpen && (
          <button 
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Filter Sections Container */}
      <div className="flex-1 overflow-y-auto custom-scrollbar divide-y divide-gray-100">
        
        {/* 1. VEG / NON VEG */}
        <div className="p-4">
          <button 
            onClick={() => toggleSection('veg')}
            className="w-full flex items-center justify-between text-xs font-black text-gray-800 uppercase tracking-wider mb-3 group cursor-pointer outline-none"
          >
            <span>Veg / Non Veg</span>
            {openSections.veg ? <ChevronUp size={16} className="text-gray-400 group-hover:text-gray-600" /> : <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600" />}
          </button>

          {openSections.veg && (
            <div className="space-y-2 pt-1">
              {[
                { name: "Veg", count: vegCounts.Veg || 0 },
                { name: "Non Veg", count: vegCounts["Non Veg"] || 0 },
              ].map((opt) => {
                const isSelected = selectedVegStatus.includes(opt.name);
                return (
                  <label
                    key={opt.name}
                    onClick={() => toggleVegStatus(opt.name)}
                    className="flex items-center justify-between text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer py-1"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isSelected ? "bg-[#89a039] border-[#89a039] text-white" : "border-gray-300 bg-white"}`}>
                        {isSelected && <Check size={12} />}
                      </div>
                      <span>{opt.name}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-bold bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                      ({opt.count})
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* 2. TYPE */}
        <div className="p-4">
          <button 
            onClick={() => toggleSection('type')}
            className="w-full flex items-center justify-between text-xs font-black text-gray-800 uppercase tracking-wider mb-3 group cursor-pointer outline-none"
          >
            <span>Type</span>
            {openSections.type ? <ChevronUp size={16} className="text-gray-400 group-hover:text-gray-600" /> : <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600" />}
          </button>

          {openSections.type && (
            <div className="space-y-3 pt-1">
              {/* Type Search (Only show if there are more than 6 types) */}
              {typeCounts.length > 6 && (
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                    <Search size={13} />
                  </span>
                  <input
                    type="text"
                    value={typeSearch}
                    onChange={(e) => setTypeSearch(e.target.value)}
                    placeholder="Search type..."
                    className="w-full pl-8 pr-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#89a039] focus:border-[#89a039]"
                  />
                  {typeSearch && (
                    <button onClick={() => setTypeSearch("")} className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400 hover:text-gray-600">
                      <X size={12} />
                    </button>
                  )}
                </div>
              )}

              {/* Type list */}
              <div className="max-h-48 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {filteredTypes.map((tc) => {
                  const isSelected = selectedTypes.includes(tc.name);
                  return (
                    <label
                      key={tc.name}
                      onClick={() => toggleType(tc.name)}
                      className="flex items-center justify-between text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer py-1"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isSelected ? "bg-[#89a039] border-[#89a039] text-white" : "border-gray-300 bg-white"}`}>
                          {isSelected && <Check size={12} />}
                        </div>
                        <span className="capitalize">{tc.name}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
                        ({tc.count})
                      </span>
                    </label>
                  );
                })}
                {filteredTypes.length === 0 && (
                  <div className="text-xs text-gray-400 py-2 text-center">No types found</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* 3. BRAND */}
        <div className="p-4">
          <button 
            onClick={() => toggleSection('brand')}
            className="w-full flex items-center justify-between text-xs font-black text-gray-800 uppercase tracking-wider mb-3 group cursor-pointer outline-none"
          >
            <span>Brand</span>
            {openSections.brand ? <ChevronUp size={16} className="text-gray-400 group-hover:text-gray-600" /> : <ChevronDown size={16} className="text-gray-400 group-hover:text-gray-600" />}
          </button>

          {openSections.brand && (
            <div className="space-y-3 pt-1">
              {/* Brand Search */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-gray-400">
                  <Search size={13} />
                </span>
                <input
                  type="text"
                  value={brandSearch}
                  onChange={(e) => setBrandSearch(e.target.value)}
                  placeholder="Search brand..."
                  className="w-full pl-8 pr-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#89a039] focus:border-[#89a039]"
                />
                {brandSearch && (
                  <button onClick={() => setBrandSearch("")} className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-gray-400 hover:text-gray-600">
                    <X size={12} />
                  </button>
                )}
              </div>

              {/* Brand list */}
              <div className="max-h-48 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
                {filteredBrands.map((bc) => {
                  const isSelected = selectedBrands.includes(bc.name);
                  return (
                    <label
                      key={bc.name}
                      onClick={() => toggleBrand(bc.name)}
                      className="flex items-center justify-between text-xs font-semibold text-gray-600 hover:text-gray-900 cursor-pointer py-1"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isSelected ? "bg-[#89a039] border-[#89a039] text-white" : "border-gray-300 bg-white"}`}>
                          {isSelected && <Check size={12} />}
                        </div>
                        <span className="truncate max-w-[120px]">{bc.name}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 font-bold bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100 shrink-0">
                        ({bc.count})
                      </span>
                    </label>
                  );
                })}
                {filteredBrands.length === 0 && (
                  <div className="text-xs text-gray-400 py-2 text-center">No brands found</div>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[280px] shrink-0 sticky top-28 self-start">
        {filterContent}
      </aside>

      {/* Mobile Drawer Backdrop & Panel */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
          />
          {/* Panel */}
          <div className="fixed inset-y-0 left-0 w-full max-w-[300px] bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-out transform translate-x-0">
            {filterContent}
          </div>
        </div>
      )}
    </>
  );
}
