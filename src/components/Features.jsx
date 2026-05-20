import React from "react";
import { motion } from "motion/react";
import { PackageCheck, Truck, ShieldCheck, Headphones } from "lucide-react";

const featureData = [
  {
    icon: <PackageCheck className="w-8 h-8" />,
    title: "One Stop Solution",
    desc: "Complete procurement solutions tailored for the HORECA industry.",
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Reliable Delivery",
    desc: "Efficient and timely deliveries aligned with your schedule.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Trusted Quality",
    desc: "Consistently delivering excellence with high client retention.",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Dedicated Support",
    desc: "Our team is always available to assist and support your needs.",
  },
];

export function Features() {
  return (
    <section className="relative bg-[#fafaf9] py-24">
      {/* Decorative background element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#89a039]/5 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#89a039]/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[#89a039] font-semibold"
          >
            <span className="w-8 h-[2px] bg-[#89a039]/50" />
            Why Choose Us
            <span className="w-8 h-[2px] bg-[#89a039]/50" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Delivering Excellence for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#89a039] to-[#6b7d2c]">
              HORECA Businesses
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed"
          >
            We provide reliable sourcing, seamless logistics, and dedicated
            support to help your business operate efficiently and scale
            seamlessly.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 text-center transition-all duration-500 hover:-translate-y-2 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_-15px_rgba(137,160,57,0.2)] border border-gray-100"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-[#89a039]/0 via-[#89a039] to-[#89a039]/0 transition-all duration-500 group-hover:w-3/4 opacity-0 group-hover:opacity-100 rounded-t-3xl" />

              {/* Icon */}
              <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#89a039]/5 text-[#89a039] transition-all duration-500 group-hover:bg-[#89a039] group-hover:text-white group-hover:shadow-[0_10px_20px_-10px_rgba(137,160,57,0.5)] group-hover:scale-110">
                {/* Decorative background circle */}
                <div className="absolute inset-0 rounded-2xl bg-[#89a039]/10 scale-0 transition-transform duration-500 group-hover:scale-150 opacity-0 group-hover:opacity-20" />
                <div className="relative z-10 transition-transform duration-500 group-hover:rotate-6">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                {feature.desc}
              </p>

              {/* Bottom Decorative Element */}
              <div className="mt-8 flex justify-center items-center gap-1.5 opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <div className="h-1.5 w-1.5 rounded-full bg-[#89a039]" />
                <div className="h-1.5 w-6 rounded-full bg-[#89a039]/40" />
                <div className="h-1.5 w-1.5 rounded-full bg-[#89a039]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
