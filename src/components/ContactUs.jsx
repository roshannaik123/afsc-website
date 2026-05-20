import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Star } from "lucide-react";
import heroImg from "../assets/contact-banner.png";

export function ContactUs() {
  return (
    <section className="relative bg-white" id="contact">
      {/* Banner */}
      <div
        className="relative py-32 md:py-48 overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gray-950/80" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white font-[Playfair_Display] tracking-tight uppercase"
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="w-16 h-1 bg-[#89a039] mx-auto mt-6"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.5em]"
              >
                REACH OUT TO US
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-black text-gray-900 font-[Playfair_Display] leading-tight"
              >
                We love to meet <br />
                <span className="text-gray-400">new people.</span>
              </motion.h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-[#89a039]/10 flex items-center justify-center flex-shrink-0 text-gray-400 group-hover:text-[#89a039] transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900">
                      India
                    </h4>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">
                      <Star
                        size={10}
                        className="text-[#89a039] fill-[#89a039]"
                      />
                      <span>4.4 (51)</span>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Aditya Food Services Company,
                    <br />
                    Infront of COTTAGE LOAF STREET,
                    <br />
                    Byrathi Village, 46/4, Hobli,
                    <br />
                    near Shobha super market, Rammana Layout,
                    <br />
                    Kanakashree Layout, Bidarahalli,
                    <br />
                    Bengaluru, Karnataka 560077
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-[#89a039]/10 flex items-center justify-center flex-shrink-0 text-gray-400 group-hover:text-[#89a039] transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 mb-2">
                    Phone
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    +91 8861999800
                    <br />
                    +91 9008133113
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-[#89a039]/10 flex items-center justify-center flex-shrink-0 text-gray-400 group-hover:text-[#89a039] transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.2em] text-gray-900 mb-2">
                    Email
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    info@adityafoodservices.com
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-full h-64 bg-gray-100 rounded-2xl overflow-hidden mt-12 relative border border-gray-200"
            >
              <iframe
                title="Aditya Food Services Map"
                src="https://maps.google.com/maps?q=Aditya%20Food%20Services%20Company,%20Bengaluru&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 h-fit"
          >
            <h3 className="text-2xl font-black text-gray-900 font-[Playfair_Display] mb-8">
              Leave Message
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#89a039] focus:ring-1 focus:ring-[#89a039] transition-all text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="mobile"
                  className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2"
                >
                  Mobile No
                </label>
                <input
                  type="tel"
                  id="mobile"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#89a039] focus:ring-1 focus:ring-[#89a039] transition-all text-sm"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#89a039] focus:ring-1 focus:ring-[#89a039] transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-[#89a039] focus:ring-1 focus:ring-[#89a039] transition-all text-sm resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#89a039] hover:bg-[#7a8f33] text-white text-sm font-bold tracking-widest uppercase rounded-xl transition-colors duration-300 shadow-[0_8px_20px_rgba(137,160,57,0.2)] hover:shadow-[0_12px_25px_rgba(137,160,57,0.3)]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
