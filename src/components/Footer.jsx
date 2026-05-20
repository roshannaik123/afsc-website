import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.01] -skew-x-12 translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 pb-20 border-b border-white/5">
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-black tracking-tighter">
                ADITYA <span className="text-[#89a039]">FOODS.</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Empowering the HORECA industry with premium food solutions and
                reliable distribution since 2022.
              </p>
            </div>

            {/* Social Icons - Using SVGs for stability */}
            <div className="flex items-center space-x-4">
              {[
                {
                  name: "Facebook",
                  path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
                },
                {
                  name: "Instagram",
                  path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01",
                },
                {
                  name: "LinkedIn",
                  path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ y: -4, color: "#89a039" }}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.name === "Instagram" && (
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    )}
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#89a039]">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["About Us", "Our Products", "Clientele", "Supply Chain"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center group"
                    >
                      <span>{item}</span>
                      <ArrowUpRight
                        size={14}
                        className="ml-1 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all"
                      />
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#89a039]">
              Connect
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-[#89a039]">
                  <Phone size={16} />
                </div>
                <div className="text-sm">
                  <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-1">
                    Call Us
                  </p>
                  <p className="text-gray-300 font-medium">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-[#89a039]">
                  <Mail size={16} />
                </div>
                <div className="text-sm">
                  <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest mb-1">
                    Email Us
                  </p>
                  <p className="text-gray-300 font-medium">
                    contact@adityafoods.com
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#89a039]">
              HQ Office
            </h4>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-[#89a039]">
                <MapPin size={16} />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                123 Industrial Hub, <br />
                Near Electronic City, <br />
                Bangalore, KA 560100
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs font-medium">
            © {currentYear} All rights reserved.{" "}
            <span className="text-white font-bold">AG Solutions</span>
          </p>
          <div className="flex items-center space-x-8 text-[10px] font-black text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
