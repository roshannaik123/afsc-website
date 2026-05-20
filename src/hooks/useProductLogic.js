import { useState, useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useProducts } from "./useProducts";

export function useProductLogic() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Veg/Non Veg, Type, and Brand filters
  const [selectedVegStatus, setSelectedVegStatus] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const [activeProduct, setActiveProduct] = useState(null);

  // Debounce search query to prevent excessive API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 400);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  // Intersection Observer for Infinite Scroll
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  // Fetch AFSC B2B Products
  const { data: apiResponse, isLoading, isError, refetch } = useProducts();

  // Resolve image URLs
  const productImageConfig = apiResponse?.image_url?.find(
    (item) => item.image_for === "Product",
  );
  const noImageConfig = apiResponse?.image_url?.find(
    (item) => item.image_for === "No Image",
  );
  const productBaseUrl =
    productImageConfig?.image_url ||
    "https://afsc.in/afscapi/public/assets/images/product_images/";
  const noImageUrl =
    noImageConfig?.image_url ||
    "https://afsc.in/afscapi/public/assets/images/no_image.jpg";

  // Map API response to application product objects
  const allProducts = useMemo(() => {
    const rawProducts = apiResponse?.data || [];
    return rawProducts.map((p, idx) => {
      const thumbnail = p.product_image
        ? `${productBaseUrl}${encodeURIComponent(p.product_image)}`
        : noImageUrl;

      const hasRealBrand = !!(p.product_brand && p.product_brand.trim());
      const hasRealCategory = !!(
        p.product_category && p.product_category.trim()
      );

      const brand = hasRealBrand ? p.product_brand.trim() : "";
      const category = p.product_category
        ? p.product_category.trim()
        : p.product_type
          ? p.product_type.trim()
          : "";

      const rawName = p.product_name ? p.product_name.trim() : "Unknown Product";
      const descParts = [`Premium wholesale ${rawName}`];
      if (brand) {
        descParts.push(`by ${brand}`);
      }
      descParts.push(`for commercial kitchens and food service.`);
      if (p.product_size && p.product_size.trim()) {
        descParts.push(`Pack Size: ${p.product_size.trim()}.`);
      }
      if (p.product_veg && p.product_veg.trim()) {
        descParts.push(`Veg Status: ${p.product_veg.trim()}.`);
      }
      const description =
        (p.product_specification && p.product_specification.trim()) ||
        descParts.join(" ");

      const price = p.product_price ? parseFloat(p.product_price) : 0;

      // Hash name to keep deterministic mock reviews/discounts
      const hash = rawName
        .split("")
        .reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const discountPercentage = price > 0 ? (hash % 15) + 5 : 0;
      const rating = parseFloat((4.0 + (hash % 10) / 10).toFixed(1));
      const stock = (hash % 45) + 5;

      return {
        id: idx + 1,
        title: rawName,
        brand,
        price,
        discountPercentage,
        rating,
        stock,
        category,
        description,
        thumbnail,
        images: [thumbnail],
        sku: `AFSC-${(p.product_type || "GEN").substring(0, 3).toUpperCase()}-${idx + 1000}`,
        shippingInformation: "",
        returnPolicy: "",
        warrantyInformation: "",
        vegStatus: p.product_veg ? p.product_veg.trim() : "",
        size: p.product_size ? p.product_size.trim() : "",
        quantity: p.product_quantity ? p.product_quantity.trim() : "",
        country: p.product_country ? p.product_country.trim() : "",
        shelfLife: p.product_self_life ? p.product_self_life.trim() : "",
        subCategory: p.product_sub_category
          ? p.product_sub_category.trim()
          : "",
        specification: p.product_specification
          ? p.product_specification.trim()
          : "",
        type: p.product_type ? p.product_type.trim() : "",
        hasRealBrand,
        hasRealCategory,
      };
    });
  }, [apiResponse?.data, productBaseUrl, noImageUrl]);

  // Base filtered products (only search query applied) to compute facet counts
  const searchMatchedProducts = useMemo(() => {
    return allProducts.filter((product) => {
      if (debouncedSearch) {
        const query = debouncedSearch.toLowerCase();
        const nameMatch = product.title.toLowerCase().includes(query);
        const brandMatch = product.brand.toLowerCase().includes(query);
        const categoryMatch = product.category.toLowerCase().includes(query);
        return nameMatch || brandMatch || categoryMatch;
      }
      return true;
    });
  }, [allProducts, debouncedSearch]);

  // Veg/Non Veg counts based on search results
  const vegCounts = useMemo(() => {
    let veg = 0;
    let nonVeg = 0;
    searchMatchedProducts.forEach((p) => {
      const v = p.vegStatus ? p.vegStatus.toLowerCase().trim() : "";
      if (v === "veg") veg++;
      else if (v === "non veg" || v === "non-veg" || v === "nonveg") nonVeg++;
    });
    return { Veg: veg, "Non Veg": nonVeg };
  }, [searchMatchedProducts]);

  // Type counts based on search results
  const typeCounts = useMemo(() => {
    const counts = {};
    searchMatchedProducts.forEach((p) => {
      if (p.type) {
        const t = p.type.trim();
        counts[t] = (counts[t] || 0) + 1;
      }
    });
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [searchMatchedProducts]);

  // Brand counts based on search results
  const brandCounts = useMemo(() => {
    const counts = {};
    searchMatchedProducts.forEach((p) => {
      if (p.brand) {
        const b = p.brand.trim();
        counts[b] = (counts[b] || 0) + 1;
      }
    });
    return Object.entries(counts)
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count);
  }, [searchMatchedProducts]);

  // Client-side Filtering
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // 1. Search filter
      if (debouncedSearch) {
        const query = debouncedSearch.toLowerCase();
        const nameMatch = product.title.toLowerCase().includes(query);
        const brandMatch = product.brand.toLowerCase().includes(query);
        const categoryMatch = product.category.toLowerCase().includes(query);
        if (!nameMatch && !brandMatch && !categoryMatch) return false;
      }

      // 2. Veg status filter
      if (selectedVegStatus.length > 0) {
        const v = product.vegStatus
          ? product.vegStatus.toLowerCase().trim()
          : "";
        const matchesVeg = selectedVegStatus.some((status) => {
          const s = status.toLowerCase();
          if (s === "veg") return v === "veg";
          if (s === "non veg")
            return v === "non veg" || v === "non-veg" || v === "nonveg";
          return false;
        });
        if (!matchesVeg) return false;
      }

      // 3. Type filter
      if (selectedTypes.length > 0) {
        if (!selectedTypes.includes(product.type)) return false;
      }

      // 4. Brand filter
      if (selectedBrands.length > 0) {
        if (!selectedBrands.includes(product.brand)) return false;
      }

      return true;
    });
  }, [
    allProducts,
    debouncedSearch,
    selectedVegStatus,
    selectedTypes,
    selectedBrands,
  ]);

  // Client-side Sorting
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "discount")
        return b.discountPercentage - a.discountPercentage;
      return 0; // Default ordering
    });
  }, [filteredProducts, sortBy]);

  // Local Pagination State
  const [visibleCount, setVisibleCount] = useState(24);

  // Reset pagination count when any filter changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisibleCount(24);
  }, [
    debouncedSearch,
    selectedVegStatus,
    selectedTypes,
    selectedBrands,
    sortBy,
  ]);

  const hasNextPage = visibleCount < sortedProducts.length;

  // Trigger loading next page when scrolling near bottom
  useEffect(() => {
    if (inView && hasNextPage) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisibleCount((prev) => prev + 24);
    }
  }, [inView, hasNextPage]);

  // Calculate active filter count for mobile badge
  let activeFilterCount = 0;
  if (searchQuery !== "") activeFilterCount++;
  if (selectedVegStatus.length > 0)
    activeFilterCount += selectedVegStatus.length;
  if (selectedTypes.length > 0) activeFilterCount += selectedTypes.length;
  if (selectedBrands.length > 0) activeFilterCount += selectedBrands.length;

  return {
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    selectedVegStatus,
    setSelectedVegStatus,
    selectedTypes,
    setSelectedTypes,
    selectedBrands,
    setSelectedBrands,
    isMobileFilterOpen,
    setIsMobileFilterOpen,
    activeProduct,
    setActiveProduct,
    ref,
    allProducts,
    vegCounts,
    typeCounts,
    brandCounts,
    sortedProducts,
    visibleCount,
    hasNextPage,
    activeFilterCount,
    isLoading,
    isError,
    refetch,
    noImageUrl,
  };
}
