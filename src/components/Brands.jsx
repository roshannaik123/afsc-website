import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useBrands } from "../hooks/useBrands";
const FALLBACK_BRANDS = [
  {
    name: "Hershey's",
    logo: "https://afsc.in/afscapi/public/assets/images/brand_images/hersheys.png",
  },
  {
    name: "Knorr",
    logo: "https://afsc.in/afscapi/public/assets/images/brand_images/knorr.png",
  },
  {
    name: "Monin",
    logo: "https://afsc.in/afscapi/public/assets/images/brand_images/monin.png",
  },
  {
    name: "Nutella",
    logo: "https://afsc.in/afscapi/public/assets/images/brand_images/nutella.png",
  },
];
export function Brands() {
  const navigate = useNavigate();
  const { data: apiResponse, isLoading } = useBrands();
  // API data
  const rawBrands = apiResponse?.data || [];
  // Image configs
  const brandImageConfig = apiResponse?.image_url?.find(
    (item) => item.image_for === "Brand",
  );
  const noImageConfig = apiResponse?.image_url?.find(
    (item) => item.image_for === "No Image",
  );
  const brandBaseUrl =
    brandImageConfig?.image_url ||
    "https://afsc.in/afscapi/public/assets/images/brand_images/";
  const noImageUrl =
    noImageConfig?.image_url ||
    "https://afsc.in/afscapi/public/assets/images/no_image.jpg";
  // Map brands to names and resolved logo URLs
  const brands = rawBrands.map((brand) => ({
    name: brand.brand_name,
    logo:
      brand.brand_logo &&
      !brand.brand_logo.startsWith(".") &&
      brand.brand_logo !== "null"
        ? `${brandBaseUrl}${brand.brand_logo}`
        : noImageUrl,
  }));
  // Determine brands to render - use fallback if no api brands returned
  const brandsToRender = brands.length > 0 ? brands : FALLBACK_BRANDS;
  return (
    <section className="py-24 bg-gray-50/30 relative overflow-hidden">
      {/* Dynamic Inline CSS for Performance-optimized, Jitter-free Marquee */}
      <style>{`
        @keyframes brandMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .brand-marquee-container {
          display: flex;
          width: max-content;
          gap: 2.5rem;
          animation: brandMarquee 100s linear infinite;
        }
        .brand-marquee-wrapper:hover .brand-marquee-container {
          animation-play-state: paused;
        }
      `}</style>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="brand-dot"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40L40 0"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#brand-dot)" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.5em]"
            >
              TRUSTED PARTNERS
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-gray-900 font-[Playfair_Display] leading-tight"
            >
              Premium Brands <br />
              <span className="text-[#89a039]">We Distribute.</span>
            </motion.h3>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/seeallbrands");
              window.scrollTo(0, 0);
            }}
            className="group flex items-center space-x-4 bg-white border border-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold text-xs tracking-widest transition-all shadow-lg hover:shadow-xl hover:border-[#89a039]/20 cursor-pointer"
          >
            <span>DISCOVER ALL</span>
            <ArrowRight size={16} className="text-[#89a039]" />
          </motion.button>
        </div>
        {/* Loading / Error States & Marquee Wrapper */}
        {isLoading ? (
          <div className="flex space-x-8 overflow-hidden py-8">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="flex flex-col justify-between min-w-[280px] max-w-[280px] h-[150px] bg-slate-100/50 p-4 rounded-3xl animate-pulse relative overflow-hidden"
              >
                <div className="h-full w-full bg-slate-200/50 rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative flex overflow-x-hidden w-full brand-marquee-wrapper py-8">
            <div className="brand-marquee-container items-center">
              {/* Double/Triple the brands for infinite effect */}
              {brandsToRender.length > 0 &&
                [...brandsToRender, ...brandsToRender, ...brandsToRender].map(
                  (brand, i) => {
                    return (
                      <div
                        key={i}
                        className="flex flex-col items-center justify-center min-w-[280px] max-w-[280px] h-[200px] bg-transparent mx-6 transition-all duration-300 group cursor-pointer relative"
                      >
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="max-w-[100%] max-h-[100%] object-contain group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = noImageUrl;
                          }}
                        />
                      </div>
                    );
                  },
                )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
