import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Search,
  Landmark,
  Award,
  ShieldCheck,
  CheckCircle2,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useClients } from "../hooks/useClients";

const FALLBACK_CLIENTS = [
  {
    name: "The Taj Hotels",
    logo: "https://afsc.in/afscapi/public/assets/images/client_images/Tajsats.png",
  },
  {
    name: "Marriott International",
    logo: "https://afsc.in/afscapi/public/assets/images/client_images/JW_Marriott.png",
  },
  {
    name: "Swiggy India",
    logo: "https://afsc.in/afscapi/public/assets/images/client_images/Swiggy.png",
  },
  {
    name: "Samosa Singh",
    logo: "https://afsc.in/afscapi/public/assets/images/client_images/samosa_singh.png",
  },
];

export function SeeAllClients() {
  const navigate = useNavigate();
  const { data: apiResponse, isLoading, isError } = useClients();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extract raw clients and base URL from the response payload
  const rawClients = apiResponse?.data || [];
  const clientImageConfig = apiResponse?.image_url?.find(
    (item) => item.image_for === "Client",
  );
  const noImageConfig = apiResponse?.image_url?.find(
    (item) => item.image_for === "No Image",
  );
  const clientBaseUrl =
    clientImageConfig?.image_url ||
    "https://afsc.in/afscapi/public/assets/images/client_images/";
  const noImageUrl =
    noImageConfig?.image_url ||
    "https://afsc.in/afscapi/public/assets/images/no_image.jpg";

  // Map clients to names and resolved logo URLs
  const clients = useMemo(() => {
    const list = rawClients.map((client) => {
      const name = client.client_name || "Gourmet Partner";
      return {
        name,
        logo: client.client_image
          ? `${clientBaseUrl}${client.client_image}`
          : noImageUrl,
      };
    });

    return list.length > 0 ? list : FALLBACK_CLIENTS;
  }, [rawClients, clientBaseUrl, noImageUrl]);

  // Filter clients based on search query
  const filteredClients = useMemo(() => {
    return clients.filter((client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [clients, searchQuery]);

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-20">
      {/* Editorial Banner */}
      <section className="relative bg-gray-950 text-white py-24 overflow-hidden mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/80 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 group text-xs font-black tracking-widest uppercase cursor-pointer"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>BACK TO HOME</span>
          </button>

          <span className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.5em] block mb-4">
            OUR CLIENT NETWORK
          </span>
          <h1 className="text-4xl sm:text-6xl font-black font-[Playfair_Display] leading-none mb-6">
            Partners in <br />
            <span className="text-[#89a039]">Gastronomy.</span>
          </h1>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed">
            Supplying India's most prestigious luxury hotels, global food
            networks, and high-volume commercial kitchens with consistent
            premium ingredients.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Search and Stats bar */}
        <div className="bg-white rounded-2xl border border-gray-200/80 p-4 mb-10 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search clients..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200/80 focus:ring-2 focus:ring-[#89a039] focus:border-transparent text-xs text-gray-900 placeholder-gray-400 transition-all font-semibold outline-none"
            />
          </div>

          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 flex items-center gap-2">
            <span>NETWORK COUNT:</span>
            <span className="text-[#89a039] font-black text-sm">
              {filteredClients.length}
            </span>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[2rem] border border-gray-100 p-6 h-44 flex flex-col justify-between animate-pulse"
              >
                <div className="w-full h-20 bg-gray-100 rounded-2xl" />
                <div className="w-3/4 h-3 bg-gray-200 rounded mx-auto mt-4" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <Info size={48} className="mx-auto text-red-500 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Failed to Load Network
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              There was an error loading our client network from server.
            </p>
          </div>
        )}

        {/* Clients Grid */}
        {!isLoading && !isError && (
          <>
            {filteredClients.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm">
                <Info size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-black text-gray-900 mb-2">
                  No Partners Found
                </h3>
                <p className="text-gray-400 text-sm max-w-xs mx-auto">
                  We couldn't find any partners matching "{searchQuery}".
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredClients.map((client, idx) => (
                    <motion.div
                      key={client.name}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.25 }}
                      whileHover={{ y: -6 }}
                      className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.003)] hover:shadow-[0_15px_40px_rgba(137,160,57,0.06)] hover:border-[#89a039]/30 transition-all duration-300 flex flex-col justify-between items-center group min-h-[180px]"
                    >
                      <div className="flex-1 flex items-center justify-center p-4 w-full h-24 overflow-hidden relative">
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="max-h-full max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = noImageUrl;
                          }}
                        />
                      </div>

                      <div className="w-full border-t border-gray-50 pt-3 text-center mt-3">
                        <h3 className="text-xs font-black text-gray-900 truncate tracking-wide">
                          {client.name}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
