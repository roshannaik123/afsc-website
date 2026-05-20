import React from "react";
import { motion } from "motion/react";
import { BadgePercent, Layers, ShieldCheck, ArrowRight } from "lucide-react";

const values = [
  {
    icon: <BadgePercent className="w-16 h-16" strokeWidth={1.2} />,
    title: "Best Prices",
    desc: "We offer the best products at very affordable prices, ensuring your business maintains healthy margins without compromising quality.",
    color: "#89a039",
  },
  {
    icon: <Layers className="w-16 h-16" strokeWidth={1.2} />,
    title: "Largest Inventory",
    desc: "Order from a new and updated inventory of over 10,000+ products from a single point. Your one-stop shop for everything culinary.",
    color: "#89a039",
  },
  {
    icon: <ShieldCheck className="w-16 h-16" strokeWidth={1.2} />,
    title: "Quality Assurance",
    desc: "We onboard vendors only after multiple rigorous checks on quality and supply capacity, guaranteeing excellence in every delivery.",
    color: "#89a039",
  },
];

export function ValueProps() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Heading */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-[#89a039] font-bold text-sm tracking-[0.3em] uppercase mb-6"
              >
                Our Core Values
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 font-[Playfair_Display] leading-[1.1] mb-8"
              >
                The foundation of our <br />
                <span className="text-[#89a039] italic">success.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 leading-relaxed text-lg max-w-md"
              >
                We believe in providing uncompromising quality and seamless service to empower your culinary business.
              </motion.p>
            </div>
          </div>

          {/* Right Column: Values List */}
          <div className="lg:w-2/3 flex flex-col">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
                className={`group relative flex flex-col sm:flex-row gap-8 items-start py-12 lg:py-16 ${
                  i !== values.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                {/* Icon Container */}
                <div className="relative z-10 text-[#89a039] bg-[#f4f7ea] p-6 rounded-[2rem] transition-all duration-500 group-hover:bg-[#89a039] group-hover:text-white group-hover:shadow-2xl group-hover:-translate-y-2 flex-shrink-0">
                  {item.icon}
                </div>

                <div className="space-y-4 relative z-10 flex-1 pt-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 font-[Playfair_Display] transition-colors group-hover:text-[#89a039]">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-base sm:text-lg max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
