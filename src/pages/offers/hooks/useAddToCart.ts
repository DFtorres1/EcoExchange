import { useMutation } from "@tanstack/react-query";
import api from "src/utils/api";

const postCart = async (cart: Cart) => {
  const { data } = await api.post("/resource/cart", cart);
  return data;
};

const useAddToCart = () => {
  return useMutation({
    mutationFn: (cart: Cart) => postCart(cart),
    onError: (err: any) => {
      console.log(err);
    },
  });
};

export default useAddToCart;
