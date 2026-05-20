
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.5em]"
              >
                ABOUT US
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-6xl font-black text-gray-900 font-[Playfair_Display] leading-[1.1]"
              >
                Experience our <br />
                <span className="text-[#89a039]">Beautiful Store.</span>
              </motion.h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 leading-relaxed font-medium">
                Aditya Food Services Company, a partnership firm set up in
                Bangalore, is a one-stop solution for any HORECA buyer to cater
                to their requirements.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Products across Dairy, Frozen, and Ambient categories are
                available in most popular brands with us. We pride ourselves on
                reliability, quality, and an extensive distribution network that
                ensures your kitchen never stops.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center space-x-4 bg-gray-900 text-white px-10 py-5 rounded-full font-bold text-xs tracking-widest transition-all hover:bg-[#89a039] shadow-xl"
              >
                <span>READ MORE</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </motion.button>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#89a039"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">
                    Quick Contact
                  </p>
                  <p className="font-bold text-gray-900">+91 98765 43210</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=1200"
                alt="Our Store"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-gray-50 rounded-full -z-0" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 border-[20px] border-gray-50 rounded-full -z-0" />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/2 -right-8 lg:-right-16 translate-y-[-50%] z-20 bg-white p-8 rounded-[2rem] shadow-2xl hidden md:block max-w-[200px]"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-3 h-3 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-bold text-gray-900 leading-tight">
                  "The best distribution partner in Bangalore."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-[#89a039]/20 flex items-center justify-center font-black text-[10px] text-[#89a039]">
                    JD
                  </div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    Client Review
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
