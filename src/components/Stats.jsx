import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Handle '3k+' specifically
  const isK = value.toString().includes("k");
  const numericValue = isK ? parseFloat(value) * 1000 : parseInt(value);

  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: 2000,
  });

  const displayValue = useTransform(springValue, (current) => {
    if (isK) {
      return (current / 1000).toFixed(0) + "k" + suffix;
    }
    return Math.floor(current).toLocaleString() + suffix;
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, springValue, numericValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

const stats = [
  { label: "MANUFACTURE", value: "100", suffix: "+" },
  { label: "CLIENTS", value: "500", suffix: "+" },
  { label: "BRANDS", value: "120", suffix: "+" },
  { label: "PRODUCTS", value: "3", suffix: "k+" },
];

export function Stats() {
  return (
    <section className="py-32 bg-gray-950 relative overflow-hidden">
      {/* Decorative Architectural Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border-[40px] border-white/[0.02] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16 lg:gap-24">
          {/* Left: Intro Text */}
          <div className="w-full lg:w-1/3 space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.5em]"
            >
              OUR IMPACT
            </motion.h2>
            <h3 className="text-4xl font-black text-white font-[Playfair_Display] leading-tight">
              A Legacy of <br />
              <span className="text-[#89a039]">Consistent Growth.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quantifying our commitment to excellence through the scale of our
              operations and the trust of our partners.
            </p>
          </div>

          {/* Right: Stats Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="relative bg-white/[0.03] backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/5 group hover:border-[#89a039]/30 transition-all duration-500"
              >
                <div className="absolute top-6 right-8 text-8xl font-black text-white/[0.02] group-hover:text-[#89a039]/5 transition-colors duration-500 font-[Playfair_Display] select-none pointer-events-none">
                  0{i + 1}
                </div>

                <div className="relative z-10 space-y-2">
                  <div className="text-5xl font-black text-white font-[Playfair_Display] tracking-tighter group-hover:text-[#89a039] transition-colors duration-500">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.3em]">
                    {stat.label}
                  </div>
                  <div className="w-8 h-[2px] bg-[#89a039]/20 group-hover:w-16 group-hover:bg-[#89a039] transition-all duration-500 pt-0.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
