import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../api/brandService";
export function useBrands() {
  return useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    refetchOnWindowFocus: false, // Avoid unnecessary refetching on focus
  });
}
