import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productService";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 10 * 60 * 1000, // Caching for 10 minutes (large dataset)
    refetchOnWindowFocus: false,
  });
}
