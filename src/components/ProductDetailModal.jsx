import React from "react";
import { motion } from "motion/react";
import {
  Star,
  X,
  Package,
  ShieldCheck,
  Scale,
  Layers,
  Leaf,
  Hash,
  Folder,
  Clock,
  Globe,
  FileText,
} from "lucide-react";

export function ProductDetailModal({ product, onClose }) {
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gray-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-900 border border-gray-100 transition-colors shadow-sm"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: Product Image */}
          <div className="p-8 md:p-12 bg-gray-50 flex flex-col justify-center items-center">
            <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden bg-white shadow-[0_15px_40px_rgba(0,0,0,0.03)] border border-gray-100">
              <img
                src={product.images[0] || product.thumbnail}
                alt={product.title}
                className="w-full h-full object-contain p-4"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2.5 mt-4 overflow-x-auto py-1 max-w-full justify-center">
                {product.images.slice(0, 4).map((img, idx) => (
                  <div
                    key={idx}
                    className="w-16 h-16 rounded-xl border border-gray-200/60 bg-white p-1 overflow-hidden flex-shrink-0"
                  >
                    <img src={img} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Details */}
          <div className="p-8 md:p-12 flex flex-col gap-6">
            {/* Category & Brand */}
            {(product.hasRealCategory || product.hasRealBrand) && (
              <div className="flex items-center gap-2">
                {product.hasRealCategory && product.category && (
                  <span className="text-[9px] font-black text-[#89a039] tracking-[0.25em] uppercase bg-[#89a039]/10 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                )}
                {product.hasRealCategory && product.category && product.hasRealBrand && product.brand && (
                  <span className="text-gray-400 text-xs">•</span>
                )}
                {product.hasRealBrand && product.brand && (
                  <span className="text-gray-400 text-xs font-bold tracking-wider uppercase">
                    {product.brand}
                  </span>
                )}
              </div>
            )}

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-black font-[Playfair_Display] text-gray-900 leading-tight">
              {product.title}
            </h2>

            {/* Rating & Stock */}
            <div className="flex items-center gap-6">
              <div className="flex items-center text-amber-500 font-bold text-sm gap-1">
                <Star size={16} fill="currentColor" />
                <span>{product.rating}</span>
                <span className="text-gray-400 font-medium text-xs">/ 5.0</span>
              </div>
              <div className="w-[1px] h-4 bg-gray-200" />
              <div className={`text-xs font-black uppercase tracking-wider ${product.stock > 5 ? "text-emerald-600" : "text-amber-600"}`}>
                {product.stock > 5 ? `In Stock (${product.stock})` : "Low Stock"}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {product.description}
            </p>

            {/* Specs Grid */}
            {(() => {
              const specs = [];
              if (product.brand && product.hasRealBrand)
                specs.push({ label: "Brand", value: product.brand, icon: ShieldCheck });
              if (product.size)
                specs.push({ label: "Size / Weight", value: product.size, icon: Scale });
              if (product.type)
                specs.push({ label: "Type", value: product.type, icon: Layers });
              if (product.vegStatus)
                specs.push({ label: "Dietary", value: product.vegStatus, icon: Leaf });
              if (product.quantity)
                specs.push({ label: "Quantity", value: product.quantity, icon: Hash });
              if (product.category && product.hasRealCategory)
                specs.push({ label: "Category", value: product.category, icon: Folder });
              if (product.subCategory)
                specs.push({ label: "Sub Category", value: product.subCategory, icon: Folder });
              if (product.shelfLife)
                specs.push({ label: "Shelf Life", value: product.shelfLife, icon: Clock });
              if (product.country)
                specs.push({ label: "Country of Origin", value: product.country, icon: Globe });
              if (product.specification)
                specs.push({ label: "Specification", value: product.specification, icon: FileText });
              if (product.sku)
                specs.push({ label: "SKU ID", value: product.sku, icon: Package });

              if (specs.length === 0) return null;
              return (
                <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-100 py-5">
                  {specs.map((spec, idx) => {
                    const Icon = spec.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2.5">
                        <Icon size={16} className="text-[#89a039] shrink-0" />
                        <div className="text-xs">
                          <p className="text-gray-400 font-bold uppercase text-[8px] tracking-widest mb-0.5">
                            {spec.label}
                          </p>
                          <p className="text-gray-800 font-semibold">{spec.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
