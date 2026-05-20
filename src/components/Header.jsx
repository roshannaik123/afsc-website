import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [sidebarOpen]);
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavClick = (item) => {
    setSidebarOpen(false);
    if (item.path) {
      navigate(item.path);
      window.scrollTo(0, 0);
    } else {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(item.id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.getElementById(item.id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Product", path: "/products" },
    { name: "Cooperation", path: "/cooperation" },
    { name: "Contact Us", path: "/contact-us" },
  ];
  const isActive = (item) => {
    if (item.path) {
      return location.pathname === item.path;
    }
    // "Home" is active if on the root path
    if (item.id === "home" && location.pathname === "/") {
      return true;
    }
    return false;
  };
  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-white/95 shadow-[0_15px_50px_-10px_rgba(0,0,0,0.3)] backdrop-blur-md border-[#89a039]/30"
            : "bg-white/90 border-gray-200/50 shadow-[0_4px_25px_rgba(0,0,0,0.15)]"
        }`}
      >
        {/* Decorative thin line at the very bottom of header */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#89a039]/30 to-transparent shadow-[0_1px_10px_rgba(137,160,57,0.2)]" />
        <div className="w-full mx-auto px-6 sm:px-10 lg:px-20 2xl:px-32 py-3 lg:py-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-center relative">
            {/* Logo - Left (using the requested image URL) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer shrink-0"
              onClick={() => handleNavClick({ id: "home" })}
            >
              <img
                src="https://afsc.in/assets/images/logo-black.png"
                alt="AFS Logo"
                className="h-14 sm:h-16 md:h-16 lg:h-18 w-auto object-contain"
              />
            </motion.div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-start md:pl-[10px] space-x-2 lg:space-x-6 flex-nowrap relative z-50">
              {navItems.map((item) => {
                const active = isActive(item);
                return (
                  <button
                    key={item.id || item.path}
                    onClick={() => handleNavClick(item)}
                    className={`nav-link relative cursor-pointer outline-none whitespace-nowrap font-[Playfair_Display] transition-colors duration-300 ${
                      active
                        ? "text-[#89a039] font-bold"
                        : "text-gray-700 hover:text-[#89a039]"
                    }`}
                  >
                    {item.name}
                    {active && (
                      <motion.div
                        layoutId="active-nav-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#89a039]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>
            {/* Right Side Items (Toggle) */}
            <div className="flex items-center justify-end space-x-2 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSidebarOpen(true)}
                className="p-2 sm:p-3 text-gray-700 hover:text-[#89a039] transition-colors cursor-pointer bg-gray-50 rounded-full shadow-sm hover:shadow-md border border-gray-100"
              >
                <Menu className="w-5 h-5 sm:w-7 sm:h-7" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>
      {/* Right Sidebar Overlay & Drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm cursor-pointer"
            />
            {/* Right Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.1)] z-50 flex flex-col overflow-hidden"
            >
              {/* Sidebar Background Accent */}
              <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                  <pattern
                    id="grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              {/* Sidebar Header (using AFS Logo) */}
              <div className="flex items-center justify-between p-8 border-b border-gray-50 relative z-10">
                <img
                  src="https://afsc.in/assets/images/logo-black.png"
                  alt="AFS Logo"
                  className="h-10 w-auto object-contain"
                />
                <motion.button
                  whileHover={{
                    rotate: 180,
                    backgroundColor: "#fef2f2",
                    color: "#ef4444",
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSidebarOpen(false)}
                  className="w-12 h-12 flex items-center justify-center text-gray-400 bg-gray-50 rounded-full transition-all duration-500 cursor-pointer"
                >
                  <X size={24} />
                </motion.button>
              </div>
              {/* Navigation Items */}
              <div className="flex-1 p-8 space-y-4 overflow-y-auto relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">
                  Menu Navigation
                </p>
                {navItems.map((item, i) => {
                  const active = isActive(item);
                  return (
                    <motion.button
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.3 + i * 0.1,
                        type: "spring",
                        stiffness: 100,
                      }}
                      key={item.id || item.path}
                      onClick={() => handleNavClick(item)}
                      className="group w-full flex items-center justify-between text-left py-4 border-b border-gray-50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center space-x-6">
                        <span
                          className={`text-2xl font-bold transition-all duration-300 font-[Playfair_Display] ${
                            active
                              ? "text-[#89a039] translate-x-2"
                              : "text-gray-800 group-hover:text-[#89a039] group-hover:translate-x-2"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                      <div
                        className={`transition-opacity ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#89a039"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
              {/* Contact & Social Section */}
              <div className="p-8 space-y-8 bg-gray-50 relative z-10 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      General Enquiries
                    </p>
                    <p className="text-xs font-black text-gray-800 font-[Figtree] hover:text-[#89a039] transition-colors cursor-pointer">
                      info@afsc.in
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Call Us
                    </p>
                    <p className="text-xs font-black text-gray-800 font-[Figtree] hover:text-[#89a039] transition-colors cursor-pointer">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center space-x-6">
                    {[
                      {
                        name: "Facebook",
                        svg: (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        ),
                      },
                      {
                        name: "Instagram",
                        svg: (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        ),
                      },
                      {
                        name: "LinkedIn",
                        svg: (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        ),
                      },
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{ scale: 1.2, color: "#89a039" }}
                        className="text-gray-400 hover:text-[#89a039] transition-all duration-300"
                      >
                        {social.svg}
                      </motion.a>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">
                      © {new Date().getFullYear()} AFS Company
                    </p>
                    <p className="text-[8px] font-medium text-gray-300 uppercase tracking-[0.2em] mt-1">
                      All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
