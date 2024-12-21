import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetProducts = (filters) => {
  const fetchProducts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/product`,
      {
        params: filters, // Pass the filters directly to the params
      }
    );
    return data;
  };

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products", filters],
    queryFn: fetchProducts,
    keepPreviousData: true, // Optional: Keeps the previous data while refetching
  });

  return { products, isLoading, isError, error };
};

export default useGetProducts;
