import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetSingleProduct = (id) => {
  const fetchUsers = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/product/${id}`,
      {
        headers: { Authorization: localStorage.getItem("accessToken") },
      }
    );
    return data;
  };
  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchUsers,
  });
  return { product, refetch, isLoading };
};

export default useGetSingleProduct;
