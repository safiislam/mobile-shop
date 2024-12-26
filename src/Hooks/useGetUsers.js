import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetUsers = () => {
  const fetchUsers = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/users`,
      {
        headers: { Authorization: localStorage.getItem("accessToken") },
      }
    );
    return data;
  };
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  return { users, refetch, isLoading };
};

export default useGetUsers;
