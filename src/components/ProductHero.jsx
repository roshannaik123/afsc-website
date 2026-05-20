import React from "react";
import { motion } from "motion/react";

export function ProductHero() {
  return (
    <section className="relative bg-gray-950 text-white overflow-hidden mb-12">
      {/* Static background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1600')",
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-24 sm:py-32">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.5em] block mb-4"
        >
          AFSC MARKETPLACE
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-4xl sm:text-6xl font-black font-[Playfair_Display] leading-none mb-6"
        >
          Gourmet <br />
          <span className="text-[#89a039]">Selection.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed"
        >
          Explore our curated, top-grade selection of professional food supplies,
          kitchen essentials, and organic delicacies — tailored for commercial
          culinary experts.
        </motion.p>
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
    </section>
  );
}
