import { Button, Card, Flex, Typography } from "antd";
import { useEffect, useState } from "react";
import useAddToCart from "../offers/hooks/useAddToCart";
import { getDecodedToken } from "src/utils/functions";

const CartProduct = ({
  resource,
  isInOffers,
}: {
  resource: Resource;
  isInOffers?: boolean;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const { mutate: addToCart, error: errorCart } = useAddToCart();
  const userId = getDecodedToken().userId;

  const handleAddToCart = () => {
    const newCart: Cart = {
      resourceId: resource.resourceId,
      userId: userId,
    };

    console.log(newCart);

    addToCart(newCart);
  };

  useEffect(() => {
    console.log(errorCart)
  },[errorCart])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 850px)");
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Card
      hoverable
      style={{
        minWidth: "10vw",
        width: !isMobile ? "33vw" : "100%",
        maxHeight: "300px",
      }}
      styles={{ body: { padding: 0, overflow: "hidden" } }}
    >
      <Flex justify="space-evenly" vertical={!isMobile ? false : true}>
        {resource.images ? (
          <img
            alt="avatar"
            src={resource.images[0]}
            style={{ display: "block", maxWidth: "150px", maxHeight: "150px" }}
          />
        ) : null}
        <Flex
          vertical
          align="flex-end"
          justify="space-between"
          style={{ padding: 32 }}
        >
          <Typography.Title level={3}>{resource.resourceName}</Typography.Title>
          <Typography>{String(resource.price)}</Typography>
        </Flex>
      </Flex>
      {isInOffers ? (
        <Button onClick={handleAddToCart}>Añadir al carrito</Button>
      ) : null}
    </Card>
  );
};

export default CartProduct;
