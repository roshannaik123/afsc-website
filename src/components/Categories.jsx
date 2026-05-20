import React, { useMemo } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

const CATEGORIES = [
  {
    title: "DAIRY PRODUCTS",
    description:
      "Premium milk, cheese, butter and professional dairy solutions.",
    productName: "Cheese Cubes",
    fallback:
      "https://images.unsplash.com/photo-1550583760-586910d04419?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "DRY PRODUCTS",
    description:
      "High-quality grains, spices, oils, and essential dry pantry items.",
    productName: "Aromat Seasoning Powder",
    fallback:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "FROZEN PRODUCTS",
    description:
      "Premium frozen vegetables, appetizers, and temperature-controlled goods.",
    productName: "Cheese Triangles Corn",
    fallback:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
  },
];

export function Categories() {
  const { data: apiResponse, isLoading } = useProducts();

  const productBaseUrl = useMemo(() => {
    const cfg = apiResponse?.image_url?.find((i) => i.image_for === "Product");
    return (
      cfg?.image_url ||
      "https://afsc.in/afscapi/public/assets/images/product_images/"
    );
  }, [apiResponse]);

  // Find each category's designated product image by name
  const resolvedImages = useMemo(() => {
    const rawProducts = apiResponse?.data || [];
    return CATEGORIES.map((cat) => {
      const match = rawProducts.find(
        (p) =>
          p.product_name &&
          p.product_name
            .toLowerCase()
            .includes(cat.productName.toLowerCase()) &&
          p.product_image &&
          p.product_image.trim() !== "",
      );
      return match
        ? `${productBaseUrl}${encodeURIComponent(match.product_image.trim())}`
        : null;
    });
  }, [apiResponse, productBaseUrl]);

  return (
    <section id="products" className="py-24 bg-[#fafaf9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.5em] mb-4"
            >
              THE COLLECTION
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 font-[Playfair_Display] leading-[1.1] tracking-tight"
            >
              Gourmet <br />
              <span className="text-[#89a039]">Selection.</span>
            </motion.h2>
          </div>

          <Link to="/products">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, backgroundColor: "#89a039" }}
              className="group flex items-center space-x-4 bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-xs tracking-widest transition-all shadow-2xl h-fit"
            >
              <span>DISCOVER ALL</span>
              <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 transition-all" />
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>

        {/* Loading skeletons */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex flex-col animate-pulse">
                <div className="aspect-[4/3] rounded-[2rem] bg-gray-200 mb-8" />
                <div className="px-2 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/4" />
                  <div className="h-7 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3-Column Cards */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {CATEGORIES.map((cat, index) => {
              const imgSrc = resolvedImages[index] || cat.fallback;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer flex flex-col"
                >
                  <Link to="/products">
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 shadow-sm">
                      <img
                        src={imgSrc}
                        alt={cat.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        onError={(e) => {
                          if (e.currentTarget.src !== cat.fallback) {
                            e.currentTarget.src = cat.fallback;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-bold text-[#89a039] text-sm shadow-sm">
                        0{index + 1}
                      </div>
                    </div>
                  </Link>

                  <div className="px-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-[2px] bg-[#89a039] transition-all duration-500 group-hover:w-16" />
                      <span className="text-[#89a039] font-bold text-xs tracking-[0.2em] uppercase">
                        Category
                      </span>
                    </div>

                    <h3 className="text-3xl font-black text-gray-900 mb-4 font-[Playfair_Display] transition-colors group-hover:text-[#89a039]">
                      {cat.title}
                    </h3>

                    <p className="text-gray-500 leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    <Link
                      to="/products"
                      className="flex items-center space-x-3 text-gray-900 font-bold text-xs tracking-widest hover:text-[#89a039] transition-colors"
                    >
                      <span>EXPLORE PRODUCTS</span>
                      <div className="w-8 h-[1px] bg-gray-300 group-hover:bg-[#89a039] group-hover:w-12 transition-all" />
                      <ArrowRight
                        size={16}
                        className="text-gray-400 group-hover:text-[#89a039] transition-colors"
                      />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
