import { Flex, Typography } from "antd";
import { useCart } from "src/App";
import CartProduct from "./CartProduct";
import { useEffect } from "react";

const Cart = () => {
  const cartHandler = useCart();

  useEffect(() => {
    console.log(cartHandler?.cart);
  }, [cartHandler]);

  return (
    cartHandler?.cart &&
    (cartHandler?.cart.length > 0 ? (
      <Flex wrap="wrap" gap="large" align="stretch">
        {cartHandler.cart.map((cartProduct) => (
          <CartProduct key={cartProduct.id} product={cartProduct}></CartProduct>
        ))}
      </Flex>
    ) : (
      <Typography.Title style={{color: "aliceblue"}} level={3}>
        No hay productos en el carrito
      </Typography.Title>
    ))
  );
};

export default Cart;
