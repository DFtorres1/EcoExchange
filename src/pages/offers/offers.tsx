import { Button, Flex } from "antd";
import "./ProductTable.css";
import { useNavigate } from "react-router-dom";
import CartProduct from "../cart/CartProduct";
import useProductList from "./hooks/useProductsList";
import { useEffect, useState } from "react";
import { LoadingScreen } from "../utils/loadingScreen";
import { getDecodedToken } from "src/utils/functions";

const Ofertas = () => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState<Resource[] | undefined>([]);
  const { data: resourceList, isLoading: resourceLoading } = useProductList();
  const userRole = getDecodedToken().userRoles;

  useEffect(() => {
    resourceList && setProductList(resourceList.resource_list);
  }, [resourceList]);

  if (resourceLoading) return <LoadingScreen />;

  return (
    <div className="intercambios-container">
      <Flex
        style={{ width: "50vw", marginBottom: "20px" }}
        justify="space-between"
      >
        <h1 style={{ fontSize: "28px", color: "#125BD1", margin: "0" }}>
          Ofertas
        </h1>
        {(userRole === "ADMIN" || "MOD" || "DONOR") && (
          <Button
            type="primary"
            onClick={() => {
              navigate("/product");
            }}
          >
            Agregar producto
          </Button>
        )}
      </Flex>
      <div className="tabla-container">
        {productList && productList.length > 0
          ? productList?.map((myresource, index) => (
              <CartProduct
                key={index}
                resource={myresource}
                isInOffers={true}
              />
            ))
          : "Cargando"}
      </div>
    </div>
  );
};

export default Ofertas;
