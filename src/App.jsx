import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2 } from "lucide-react";
import "./App.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Products } from "./pages/Products";
import { Cooperation } from "./pages/Cooperation";
import { SeeAllClients } from "./pages/SeeAllClients";
import { SeeAllBrands } from "./pages/SeeAllBrands";

function App() {
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading / preparation
    const timer = setTimeout(() => {
      setInitialLoad(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {initialLoad && (
          <motion.div
            key="initial-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-gray-950 flex flex-col items-center justify-center overflow-hidden"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col items-center gap-8 relative z-10"
            >
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 bg-[#89a039] blur-2xl opacity-25 rounded-full animate-pulse scale-150" />
                <Loader2 className="w-15 h-12 text-[#89a039] animate-spin relative z-10" />
              </div>
              <div className="flex flex-col items-center gap-2.5">
                <div className="text-white font-black tracking-[0.3em] text-sm uppercase">
                  AFSC
                </div>
                {/* <div className="text-gray-500 font-bold tracking-[0.25em] text-[9px] uppercase">
                  Loading Experience
                </div> */}
              </div>
            </motion.div>

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#89a039]/5 blur-[120px]" />
              <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#89a039]/5 blur-[120px]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Home />
              </main>
            }
          />
          <Route
            path="/contact-us"
            element={
              <main>
                <Contact />
              </main>
            }
          />
          <Route
            path="/products"
            element={
              <main>
                <Products />
              </main>
            }
          />
          <Route
            path="/cooperation"
            element={
              <main>
                <Cooperation />
              </main>
            }
          />
          <Route
            path="/seeallclients"
            element={
              <main>
                <SeeAllClients />
              </main>
            }
          />
          <Route
            path="/seeallbrands"
            element={
              <main>
                <SeeAllBrands />
              </main>
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
