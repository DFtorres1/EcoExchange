import { Flex } from "antd";
import CartProduct from "./CartProduct";
import useGetCart from "./hooks/useGetCart";
import { getDecodedToken } from "src/utils/functions";
import { LoadingScreen } from "../utils/loadingScreen";

const Cart = () => {
  const userId = getDecodedToken().userId;
  const { data: cartList, isLoading: cartLoading } = useGetCart(userId);

  if (cartLoading) return <LoadingScreen />;

  return (
    <Flex wrap="wrap" gap="large" align="stretch">
      {cartList?.map((cartProduct: Cart, index: number) => {
        console.log(cartProduct.resources);
        return cartProduct.resources ? (
          <CartProduct key={index} resource={cartProduct.resources} />
        ) : null;
      })}
    </Flex>
  );
};

export default Cart;
