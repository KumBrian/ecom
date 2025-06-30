import { useQuery } from "@tanstack/react-query";

import { getFriendlyError } from "@/lib/errorHandler";
import { fetchProducts } from "@/api/products";

export const useProducts = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
    refetch,     
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return {
    products: products || [],
    isLoading,
    isError,
    error: isError ? getFriendlyError(error) : null,
    refetch,
  };
};