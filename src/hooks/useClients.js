import { useQuery } from "@tanstack/react-query";
import { getClients } from "../api/clientService";

export function useClients() {
  return useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    refetchOnWindowFocus: false, // Avoid unnecessary refetching on focus
  });
}
