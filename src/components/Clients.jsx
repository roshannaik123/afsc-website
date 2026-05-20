import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Hotel, Landmark, Coffee, Award } from "lucide-react";
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

export function Clients() {
  const navigate = useNavigate();
  const { data: apiResponse, isLoading } = useClients();
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
  const clients = rawClients.map((client) => ({
    name: client.client_name,
    logo: client.client_image
      ? `${clientBaseUrl}${client.client_image}`
      : noImageUrl,
  }));

  // Determine clients to render - use fallback if no api clients returned
  const clientsToRender = clients.length > 0 ? clients : FALLBACK_CLIENTS;

  return (
    <section className="py-24 bg-gray-50/30 relative overflow-hidden">
      {/* Dynamic Inline CSS for Performance-optimized, Jitter-free Marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          gap: 2.5rem;
          animation: marquee 30s linear infinite;
        }
        .marquee-wrapper:hover .marquee-container {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="client-dot"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40L40 0"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#client-dot)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.5em]"
            >
              OUR NETWORK
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-gray-900 font-[Playfair_Display] leading-tight"
            >
              Trusted by the Industry's <br />
              <span className="text-[#89a039]">Leading Names.</span>
            </motion.h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/seeallclients");
              window.scrollTo(0, 0);
            }}
            className="group flex items-center space-x-4 bg-white border border-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold text-xs tracking-widest transition-all shadow-lg hover:shadow-xl hover:border-[#89a039]/20 cursor-pointer"
          >
            <span>SEE ALL CLIENTS</span>
            <ArrowRight size={16} className="text-[#89a039]" />
          </motion.button>
        </div>

        {/* Loading / Error States & Marquee Wrapper */}
        {isLoading ? (
          <div className="flex space-x-8 overflow-hidden py-8">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="flex flex-col justify-between min-w-[280px] max-w-[280px] h-[150px] bg-slate-100/50 p-4 rounded-3xl animate-pulse relative overflow-hidden"
              >
                <div className="h-full w-full bg-slate-200/50 rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative flex overflow-x-hidden w-full marquee-wrapper py-8">
            <div className="marquee-container items-center">
              {/* Double/Triple the clients for infinite effect */}
              {clientsToRender.length > 0 &&
                [
                  ...clientsToRender,
                  ...clientsToRender,
                  ...clientsToRender,
                ].map((client, i) => {
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center min-w-[280px] max-w-[280px] h-[200px] bg-transparent mx-6 transition-all duration-300 group cursor-pointer relative"
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-[100%] max-h-[100%] object-contain  group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = noImageUrl;
                        }}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
