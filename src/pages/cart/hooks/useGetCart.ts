import { useQuery } from "@tanstack/react-query";
import api from "src/utils/api";
import { cartQueryKey } from "src/utils/queryKeys";

const getCart = async (userId: number): Promise<Cart[]> => {
  const { data } = await api.get("/resource/cart", {
    params: { userId: userId },
  });
  return data;
};

const useGetCart = (userId: number): any => {
  return useQuery<Cart[]>({
    queryKey: cartQueryKey.details(),
    queryFn: (): Promise<Cart[]> => getCart(userId),
    staleTime: Infinity,
    notifyOnChangeProps: ["data", "error"],
  });
};

export default useGetCart;
