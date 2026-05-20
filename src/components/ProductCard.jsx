import { motion } from "motion/react";
import { Eye, ArrowRight } from "lucide-react";

export function ProductCard({ product, onViewDetails, noImageUrl }) {
  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);
  console.log("ProductCard Rendered:", product);
  const isNonVeg = product.vegStatus?.toLowerCase().includes("non");
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-[2rem] border border-gray-100 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(137,160,57,0.08)] transition-all duration-500 relative flex flex-col group"
    >
      {/* Image Wrap */}
      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-50 mb-5 relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          onError={(e) => {
            if (noImageUrl && e.currentTarget.src !== noImageUrl) {
              e.currentTarget.src = noImageUrl;
            }
          }}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.discountPercentage > 5 && (
            <span className="bg-[#89a039] text-white text-[9px] font-black px-2.5 py-1 rounded-full tracking-wider shadow-sm">
              -{Math.round(product.discountPercentage)}% OFF
            </span>
          )}
          {product.stock <= 5 && (
            <span className="bg-amber-500 text-white text-[9px] font-black px-2.5 py-1 rounded-full tracking-wider shadow-sm">
              LOW STOCK
            </span>
          )}
        </div>
        {product.category && (
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-gray-800 text-[8px] font-black px-2.5 py-1 rounded-full tracking-wider uppercase border border-gray-100">
            {product.category}
          </span>
        )}

        {/* {product.vegStatus && (
          <div
            className={`absolute bottom-3 right-3 w-6 h-6 flex items-center justify-center text-xs font-black border-2
      ${
        isNonVeg
          ? "bg-red-100 border-red-500 text-red-600"
          : "bg-green-100 border-green-500 text-green-600"
      }`}
          >
            {isNonVeg ? "]" : "["}
          </div>
        )} */}

        {/* Hover Eye Overlay */}
        <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 backdrop-blur-[2px]">
          <button
            onClick={() => onViewDetails(product)}
            className="bg-white text-gray-900 p-3 rounded-full hover:bg-[#89a039] hover:text-white transition-colors duration-300 shadow-xl"
          >
            <Eye size={20} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          {product.brand ? (
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {product.brand}
            </span>
          ) : (
            <span />
          )}
          {product.vegStatus && (
            <div
              className={`flex items-center justify-center border-l-2 border-r-2 border-t-2 border-b-2 px-2 py-1 text-xs font-black gap-1 ${
                isNonVeg
                  ? "border-red-600 text-red-600"
                  : "border-green-600 text-green-600"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  isNonVeg ? "bg-red-600" : "bg-green-600"
                }`}
              />
            </div>
          )}
        </div>

        <h3 className="text-gray-950 font-bold text-base line-clamp-1 mb-2 group-hover:text-[#89a039] transition-colors">
          {product.title}
        </h3>

        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-6 flex-1">
          {product.description}
        </p>

        <div className="border-t border-gray-100 pt-4 flex items-end justify-between mt-auto w-full">
          <div className="flex flex-col">
            {product.price > 0 && (
              <>
                {product.discountPercentage > 5 && (
                  <span className="text-gray-400 text-[10px] line-through font-medium">
                    ₹{originalPrice}
                  </span>
                )}
                <span className="text-gray-900 font-extrabold text-lg leading-tight">
                  ₹ {product.price.toFixed(2)}
                </span>
              </>
            )}
          </div>

          <button
            onClick={() => onViewDetails(product)}
            className="flex items-center space-x-2 bg-gray-950 text-white px-4.5 py-2.5 rounded-xl font-bold text-[10px] tracking-wider hover:bg-[#89a039] hover:shadow-lg hover:shadow-[#89a039]/20 transition-all duration-300"
          >
            <span>VIEW DETAILS</span>
            <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
