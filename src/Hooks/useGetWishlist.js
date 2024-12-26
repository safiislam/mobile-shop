import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetWishlist = () => {
  const fetchProducts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/wishlist`,
      {
        headers: { Authorization: localStorage.getItem("accessToken") },
      }
    );
    return data;
  };

  const {
    data: wishlist,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["wishlist"],
    queryFn: fetchProducts,
    keepPreviousData: true, // Optional: Keeps the previous data while refetching
  });

  return { wishlist, isLoading, isError, error, refetch };
};

export default useGetWishlist;
