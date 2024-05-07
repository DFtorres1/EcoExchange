import { Card, Flex, Typography } from "antd";
import { useEffect, useState } from "react";

const CartProduct = ({ product }: { product: Product }) => {
  const [isMobile, setIsMobile] = useState(false);

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
      <Flex
        justify="space-evenly"
        vertical={!isMobile ? false : true}
      >
        <img
          alt="avatar"
          src={product.imagen}
          style={{ display: "block", maxWidth: "150px", maxHeight: "150px" }}
        />
        <Flex
          vertical
          align="flex-end"
          justify="space-between"
          style={{ padding: 32 }}
        >
          <Typography.Title level={3}>{product.nombre}</Typography.Title>
          <Typography>{product.descripcion}</Typography>
        </Flex>
      </Flex>
    </Card>
  );
};

export default CartProduct;
