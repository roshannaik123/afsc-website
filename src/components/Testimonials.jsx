import React from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Executive Chef, The Taj",
    content: "Aditya Food Services has been our most reliable partner for over 5 years. Their dairy and frozen product quality is consistently superior.",
    rating: 5,
    initials: "RK"
  },
  {
    name: "Sarah D'Souza",
    role: "Owner, Bloom Cafe",
    content: "The variety they offer in dry pantry items is unmatched. Their delivery is always on time, which is critical for our operations.",
    rating: 5,
    initials: "SD"
  },
  {
    name: "Vikram Singh",
    role: "Procurement Manager, Marriott",
    content: "Excellent inventory management and competitive pricing. They truly are a one-stop solution for high-volume HORECA requirements.",
    rating: 5,
    initials: "VS"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.5em]"
          >
            TESTIMONIALS
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-gray-900 font-[Playfair_Display]"
          >
            Voices of Our <br />
            <span className="text-[#89a039]">Trusted Partners.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="bg-gray-50/50 p-10 rounded-[3rem] space-y-8 relative group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100"
            >
              <div className="flex justify-between items-start">
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, index) => (
                    <Star key={index} size={14} className="fill-[#89a039] text-[#89a039]" />
                  ))}
                </div>
                <Quote size={40} className="text-[#89a039]/10 group-hover:text-[#89a039]/20 transition-colors" />
              </div>

              <p className="text-gray-600 leading-relaxed font-medium italic">
                "{review.content}"
              </p>

              <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-[#89a039] flex items-center justify-center text-white font-black text-sm">
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-none mb-1">{review.name}</h4>
                  <p className="text-[10px] font-black text-[#89a039] uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
