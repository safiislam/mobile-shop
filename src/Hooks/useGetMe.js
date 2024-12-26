import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetMe = () => {
  const fetchProducts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/getMe`,
      {
        headers: { Authorization: localStorage.getItem("accessToken") },
      }
    );
    return data;
  };

  const {
    data: getMe,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["getMe"],
    queryFn: fetchProducts,
    keepPreviousData: true, // Optional: Keeps the previous data while refetching
  });

  return { getMe, isLoading, isError, error, refetch };
};

export default useGetMe;
