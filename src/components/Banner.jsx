import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import horecaImg from "../assets/horeca.png"; // <-- Uncomment this once the image is saved

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = React.useRef(null);
  const inView = useInView(ref);

  React.useEffect(() => {
    if (inView) {
      animate(count, value, { duration: 2 });
    }
  }, [inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const images = [
  {
    url: "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&q=80&w=2000",
    title: "ONE STOP SOLUTION",
    subtitle: "Aditya Food Services",
    description: "For All Kind of HORECA",
    buttonText: "CONTACT US",
    path: "/contact-us",
  },
  {
    url: "https://images.unsplash.com/photo-1503453776591-b4548af666a2?auto=format&fit=crop&q=80&w=2000",
    title: "PREMIUM QUALITY",
    subtitle: "Dairy & Frozen Products",
    description: "Directly from the best sources",
    buttonText: "EXPLORE PRODUCTS",
  },
  {
    url: "https://images.unsplash.com/photo-1630356090105-808ba2fe97f7?auto=format&fit=crop&q=80&w=2000", // <-- Change this to 'horecaImg' later
    title: "TRUSTED PARTNER",
    subtitle: "Serving Hotels & Cafes",
    description: "Quality assurance at every step",
    buttonText: "GET IN TOUCH",
    path: "/contact-us",
  },
];

export function Banner() {
  const navigate = useNavigate();
  // Fix for react-slick default export in some ESM environments
  const SlickSlider = Slider.default || Slider;
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
    customPaging: (i) => (
      <div className="w-3 h-3 mx-2 rounded-full bg-white/30 hover:bg-white/60 transition-all duration-300 mt-[-40px]" />
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden group"
    >
      <SlickSlider ref={sliderRef} {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="relative h-screen outline-none">
            {/* Background Image with Parallax effect */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
              style={{ backgroundImage: `url(${image.url})` }}
            />

            {/* Overlay - Clear for sharpness */}
            <div className="absolute inset-0 bg-black/30 transition-all duration-700" />

            {/* Content Container */}
            <div className="absolute inset-0 flex items-center px-6 md:px-20 lg:px-32 pt-20">
              <div className="w-full max-w-7xl mx-auto">
                {/* Text Content */}
                <div className="relative z-20 flex flex-col items-start text-left">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center space-x-3 mb-6"
                    >
                      <div className="w-12 h-[2px] bg-[#89a039]" />
                      <span className="text-[#89a039] font-bold tracking-[0.2em] uppercase text-sm">
                        Professional HORECA Solutions
                      </span>
                    </motion.div>

                    <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight font-[Playfair_Display] leading-tight text-white max-w-3xl">
                      {image.title.split("").map((char, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.05,
                            delay: 0.4 + i * 0.03,
                            ease: "easeIn",
                          }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-xl font-light"
                    >
                      {image.subtitle} — {image.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="flex flex-wrap items-center gap-6"
                    >
                      <motion.button
                        whileHover={{ scale: 1.02, backgroundColor: "#7a8f32" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-4 rounded-lg text-white text-lg font-bold shadow-lg transition-all duration-300 cursor-pointer"
                        style={{ backgroundColor: "#89a039" }}
                        onClick={() => {
                          if (image.path) {
                            navigate(image.path);
                            window.scrollTo(0, 0);
                          } else {
                            document
                              .getElementById("contact")
                              ?.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                      >
                        {image.buttonText}
                      </motion.button>

                      <motion.button
                        whileHover={{
                          scale: 1.02,
                          backgroundColor: "rgba(255,255,255,0.1)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="px-10 py-4 rounded-lg text-white text-lg font-bold border border-white/40 backdrop-blur-md transition-all duration-300 cursor-pointer"
                        onClick={() => {
                          navigate("/cooperation");
                          window.scrollTo(0, 0);
                        }}
                      >
                        Learn More
                      </motion.button>
                    </motion.div>

                    {/* Trust Indicators - Animated Counters */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 2 }}
                      className="mt-16 flex items-center space-x-12 border-t border-white/10 pt-10"
                    >
                      {[
                        { label: "Years Experience", value: 25, suffix: "+" },
                        { label: "Happy Clients", value: 500, suffix: "+" },
                        { label: "Premium Products", value: 1200, suffix: "+" },
                      ].map((stat, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-3xl font-black text-[#89a039] font-[Playfair_Display]">
                            <Counter value={stat.value} />
                            {stat.suffix}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mt-1 font-[Figtree]">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>

      {/* Carousel Navigation Arrows */}
      <div className="absolute bottom-12 right-12 flex space-x-4 z-30">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#89a039" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => sliderRef.current.slickPrev()}
          className="w-14 h-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all cursor-pointer hover:border-transparent"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#89a039" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => sliderRef.current.slickNext()}
          className="w-14 h-14 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all cursor-pointer hover:border-transparent"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}
