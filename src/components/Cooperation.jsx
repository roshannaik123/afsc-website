import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckCircle2,
  Warehouse,
  Users2,
  TrendingUp,
  ShieldCheck,
  Activity,
  Milk,
  Apple,
  UtensilsCrossed,
  Flame,
  FlameKindling,
  Fish,
  Soup,
  Droplet,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

export function Cooperation() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const { data: apiResponse } = useProducts();

  const productBaseUrl = useMemo(() => {
    const cfg = apiResponse?.image_url?.find((i) => i.image_for === "Product");
    return (
      cfg?.image_url ||
      "https://afsc.in/afscapi/public/assets/images/product_images/"
    );
  }, [apiResponse]);

  const reasons = [
    {
      title: "Innovative Product Distribution",
      desc: "We are constantly in search of innovative products to cater to our clientele and have also taken the distribution for Sankalp / Daivya Aahar brands in past few months understanding that manpower and cost control is very essential in these times.",
      icon: TrendingUp,
    },
    {
      title: "Customized Client Recipes",
      desc: "We partner with small manufacturers to customize products with clients' recipes like we do with Foodpanda as well as Swiggy.",
      icon: Users2,
    },
    {
      title: "Dedicated Warehousing & Cold Chain",
      desc: "We have our own cold room and warehouse to manage and deliver our clients' requirements on a day to day basis.",
      icon: Warehouse,
    },
    {
      title: "Outsourced Storage & Direct Imports",
      desc: "Have also an outsourced cold storage to manage our green peas and sweet corn requirements as also our own Basa which we Import from Vietnam.",
      icon: Activity,
    },
    {
      title: "Premium Supermarket Supplies",
      desc: "With the current situation of Covid, we restarted the supplies to MT and premium supermarkets with brands like Mother Dairy/ Jain Farms & Baramathi Agro since march 2020.",
      icon: ShieldCheck,
    },
    {
      title: "Compliance & Statutory Excellence",
      desc: "Ably assisted by a strong team of professionals our vision is be a strong and successful supply chain partner with esteemed clients. We do have all statutory requirements in place for operating a business in distribution.",
      icon: CheckCircle2,
    },
  ];

  const categories = [
    {
      name: "Dairy Indian & Imported",
      icon: Milk,
      searchTerm: "Cheese",
      fallback:
        "https://images.unsplash.com/photo-1550583760-586910d04419?auto=format&fit=crop&q=80&w=800",
      desc: "Premium grade milk, unsalted butter, artisanal cheeses (parmesan, mozzarella, cheddar), professional gourmet cooking creams, and temperature-controlled dairy solutions for luxury dining establishments.",
      items: [
        "Artisanal Cheese",
        "Unsalted Butter",
        "Whipped Creams",
        "Imported Cheddar",
        "Gourmet Yogurts",
        "Amul & Mother Dairy Solutions",
      ],
    },
    {
      name: "Frozen Raw Vegetables & Fruits",
      icon: Apple,
      searchTerm: "Sweet Corn",
      fallback:
        "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800",
      desc: "Quick-frozen premium sweet corn, tender green peas, sliced bell peppers, wild blueberries, strawberries, and tropical mango pulp harvested at peak ripeness.",
      items: [
        "American Sweet Corn",
        "Premium Green Peas",
        "Wild Blueberries",
        "Sliced Bell Peppers",
        "Exotic Mango Pulp",
        "IQF Mixed Veggies",
      ],
    },
    {
      name: "Frozen Veg Snacks",
      icon: FlameKindling,
      searchTerm: "Spring Roll",
      fallback:
        "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800",
      desc: "Crispy french fries, luxury potato wedges, cocktail spring rolls, authentic falafels, jalapeno cheese poppers, and quick-serve appetisers for busy commercial kitchens.",
      items: [
        "Golden French Fries",
        "Potato Wedges",
        "Veg Spring Rolls",
        "Jalapeno Poppers",
        "Crispy Onion Rings",
        "Cheese Corn Nuggets",
      ],
    },
    {
      name: "Frozen Raw Chicken, Snacks & Cold Cuts",
      icon: UtensilsCrossed,
      searchTerm: "Chicken",
      fallback:
        "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=800",
      desc: "Tender chicken breasts, wholesale franks, gourmet chicken sausages, premium smoked salami, cured cold cuts, and heat-and-serve chicken snacks.",
      items: [
        "Chicken Sausages",
        "Smoked Salami",
        "Breast Fillets",
        "Chicken Nuggets",
        "Cocktail Meatballs",
        "Premium Chicken Franks",
      ],
    },
    {
      name: "Frozen Raw Mutton & Snacks",
      icon: Flame,
      searchTerm: "Mutton",
      fallback:
        "https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&q=80&w=800",
      desc: "Carefully sourced tender mutton cubes, finely minced lamb meat, premium mutton seekh kebabs, lamb burger patties, and tender loin chops.",
      items: [
        "Tender Lamb Cubes",
        "Minced Mutton",
        "Seekh Kebabs",
        "Lamb Burger Patties",
        "Mutton Chops",
        "Traditional Koftas",
      ],
    },
    {
      name: "Frozen Seafood Raw & Snacks",
      icon: Fish,
      searchTerm: "Basa",
      fallback:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=800",
      desc: "Imported Vietnamese Basa fillets, giant tiger prawns, premium crab sticks, tender squid rings, salmon steaks, and tempura battered fish snacks.",
      items: [
        "Imported Vietnamese Basa",
        "Tiger Prawns",
        "Premium Crab Sticks",
        "Squid Calamari",
        "Salmon Steaks",
        "Fish Finger Snacks",
      ],
    },
    {
      name: "Gourmet Foods & Global Cuisines",
      icon: Soup,
      searchTerm: "Aromat",
      fallback:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
      desc: "Extra virgin olive oils, authentic arborio risotto rice, premium bronze-cut durum wheat pasta, authentic soy sauces, sriracha, thai curry pastes, and sushi-grade nori sheets.",
      items: [
        "Extra Virgin Olive Oil",
        "Arborio Risotto Rice",
        "Durum Wheat Pasta",
        "Thai Curry Paste",
        "Sushi Nori Sheets",
        "Japanese Wasabi",
      ],
    },
    {
      name: "Marinades, Gravies, Pastes & Sauces",
      icon: Droplet,
      searchTerm: "Sauce",
      fallback:
        "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&q=80&w=800",
      desc: "Custom BBQ marinades, traditional simmer gravies, quick pizza-pasta base sauces, professional mocktail syrups, organic fruit crushes, and premium seasoning sprinklers.",
      items: [
        "Custom BBQ Marinade",
        "Indian Simmer Gravies",
        "Pizza Pasta Sauces",
        "Mocktail Syrups",
        "Fruit Crushes",
        "Premium Sprinklers",
      ],
    },
  ];

  // Resolve each category's image from the API by searching for its searchTerm
  const resolvedImages = useMemo(() => {
    const rawProducts = apiResponse?.data || [];
    return categories.map((cat) => {
      const match = rawProducts.find(
        (p) =>
          p.product_name &&
          p.product_name.toLowerCase().includes(cat.searchTerm.toLowerCase()) &&
          p.product_image &&
          p.product_image.trim() !== "",
      );
      return match
        ? `${productBaseUrl}${encodeURIComponent(match.product_image.trim())}`
        : cat.fallback;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiResponse, productBaseUrl]);

  return (
    <section
      id="cooperation"
      className="py-32 bg-gray-50 overflow-hidden relative border-t border-gray-100"
    >
      {/* Decorative top gradient accent */}
      <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#89a039]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Why Choose Us Section */}
        <div className="mb-28">
          <div className="flex flex-col mb-16">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.5em] mb-4"
            >
              OUR PARTNERSHIPS
            </motion.span>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-6xl font-black text-gray-900 font-[Playfair_Display] leading-[1.1] tracking-tight"
              >
                Why Choose <br />
                <span className="text-[#89a039]">Aditya Foods?</span>
              </motion.h2>
              <p className="text-gray-500 text-sm max-w-md leading-relaxed font-semibold">
                An established supply chain and distribution network backed by
                premium infrastructure, customized solutions, and statutory
                compliance.
              </p>
            </div>
          </div>

          {/* Elegant Grid for Reasons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_50px_rgba(137,160,57,0.08)] transition-all duration-500 flex flex-col group justify-between"
                >
                  <div className="space-y-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 shadow-lg"
                      style={{ backgroundColor: "#89a039" }}
                    >
                      <Icon size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 font-[Playfair_Display] group-hover:text-[#89a039] transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Association Callout Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-950 text-white rounded-[3rem] p-8 sm:p-12 lg:p-16 mb-32 relative overflow-hidden shadow-2xl"
        >
          {/* Accent decoration */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200')",
            }}
          />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#89a039] rounded-full mix-blend-screen opacity-10 blur-[80px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-6 max-w-2xl">
              <span className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.4em] block">
                MUTUAL VALUE CREATION
              </span>
              <h3 className="text-3xl sm:text-5xl font-black font-[Playfair_Display] leading-tight">
                Let's explore mutual <br />
                <span className="text-[#89a039]">possibilities.</span>
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                We will be keen to explore possibilities to associate with your
                esteemed organisation and add value mutually in this dynamic
                market.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#89a039" }}
              onClick={() => navigate("/contact-us")}
              className="group flex items-center space-x-4 bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-xs tracking-widest transition-all shadow-xl hover:text-white flex-shrink-0"
            >
              <span>DISCUSS COOPERATION</span>
              <div className="w-8 h-[1px] bg-gray-900 group-hover:bg-white group-hover:w-12 transition-all" />
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>

        {/* What We Do Section - Redesigned into a Luxury Interactive Showcase */}
        <div>
          <div className="flex flex-col mb-16 text-center md:text-left">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.5em] mb-4"
            >
              OUR SERVICE ABILITIES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl font-black text-gray-900 font-[Playfair_Display] tracking-tight leading-none"
            >
              What We Do.
            </motion.h2>
            <p className="text-gray-500 text-sm mt-6 max-w-2xl leading-relaxed">
              We operate as top-tier Dairy, Frozen & Gourmet Food distributors
              in the city of Bangalore, handling a comprehensive range of
              temperature-controlled foods under strict hygiene standards.
            </p>
          </div>

          {/* Interactive Split Showcase Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Selector Menu (5 Columns) */}
            <div className="lg:col-span-5 space-y-3.5">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-4">
                Select Food Category
              </span>
              {categories.map((cat, idx) => {
                const isActive = activeTab === idx;
                const Icon = cat.icon;
                return (
                  <button
                    key={idx}
                    onMouseEnter={() => setActiveTab(idx)}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full flex items-center justify-between text-left p-5 rounded-[2rem] border transition-all duration-300 relative group cursor-pointer ${
                      isActive
                        ? "bg-[#89a039] border-[#89a039] text-white shadow-xl shadow-[#89a039]/15 translate-x-2"
                        : "bg-white border-gray-100 hover:border-[#89a039]/30 text-gray-800 hover:bg-gray-50/50"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <span
                        className={`text-[10px] font-bold ${isActive ? "text-white/60" : "text-gray-400"} font-mono`}
                      >
                        0{idx + 1}
                      </span>
                      <div
                        className={`p-2.5 rounded-xl transition-colors ${isActive ? "bg-white/10 text-white" : "bg-gray-50 text-[#89a039] group-hover:bg-white"}`}
                      >
                        <Icon size={18} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold tracking-tight line-clamp-1">
                        {cat.name}
                      </span>
                    </div>
                    <ArrowRight
                      size={14}
                      className={`transition-all duration-300 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Dynamic Preview Window (7 Columns) */}
            <div className="lg:col-span-7 h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="bg-white rounded-[3rem] border border-gray-100 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.015)] relative overflow-hidden flex flex-col justify-between min-h-[500px]"
                >
                  {/* Absolute Decorative Background Number */}
                  <span className="absolute -top-12 -right-8 text-[12rem] sm:text-[16rem] font-black text-gray-50 select-none pointer-events-none font-serif leading-none opacity-40">
                    0{activeTab + 1}
                  </span>

                  <div className="relative z-10 space-y-6">
                    {/* Header Pill */}
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-[#89a039]" />
                      <span className="text-[10px] font-black text-[#89a039] uppercase tracking-[0.25em]">
                        PREMIUM DISTRIBUTOR
                      </span>
                    </div>

                    {/* Image Box */}
                    <div className="aspect-[2.2/1] w-full rounded-2xl overflow-hidden bg-gray-50 shadow-inner relative group/img">
                      <img
                        src={resolvedImages[activeTab]}
                        alt={categories[activeTab].name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                        onError={(e) => {
                          if (
                            e.currentTarget.src !==
                            categories[activeTab].fallback
                          ) {
                            e.currentTarget.src =
                              categories[activeTab].fallback;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                      <h4 className="absolute bottom-4 left-5 text-white font-black text-lg sm:text-2xl font-[Playfair_Display]">
                        {categories[activeTab].name}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-2xl">
                      {categories[activeTab].desc}
                    </p>
                  </div>

                  {/* bottom CTA */}
                  <div className="border-t border-gray-100 pt-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                    <p className="text-[10px] text-gray-400 font-medium">
                      All products fully compliant with FSSAI standards.
                    </p>
                    <button
                      onClick={() => navigate("/contact-us")}
                      className="flex items-center space-x-2 bg-gray-950 text-white px-5 py-3 rounded-full font-bold text-[10px] tracking-wider hover:bg-[#89a039] transition-all duration-300"
                    >
                      <span>SEND BULK INQUIRY</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
