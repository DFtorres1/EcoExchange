import { Button, Card, Layout, Menu } from "antd";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { FaExchangeAlt } from "react-icons/fa";
import { IoHomeSharp, IoPeople } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { removeSessionToken } from "src/utils/functions";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  child?: String;
};

interface LayoutProps {
  children?: ReactNode;
}

const items: MenuItem[] = [
  {
    label: "Home",
    key: "1",
    icon: <IoHomeSharp />,
    child: "/",
  },
  {
    label: "Ofertas",
    key: "2",
    icon: <BiSolidOffer />,
    child: "/offers",
  },
  {
    label: "Intercambios",
    key: "3",
    icon: <FaExchangeAlt />,
    child: "/exchanges",
  },
  {
    label: "Nuestros aliados",
    key: "4",
    icon: <IoPeople />,
    child: "/allies",
  },
];

export const PageLayout: FC<LayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [currentPath, setCurrentPath] = useState<String>();

  const navigate = useNavigate();

  useEffect(() => {
    currentPath != undefined ? navigate(`${currentPath}`) : null;
  }, [currentPath]);

  const handleCurrentPath = (value: String) => {
    const item = items.find((item) => item.key == value);
    setCurrentPath(item?.child);
  };

  const handleLogout = () => {
    removeSessionToken();
    navigate("/login");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          paddingLeft: "40",
          background: "#006400",
          color: "aliceblue",
          fontSize: "30px",
          height: "9vh",
        }}
      >
        <div
          style={{
            height: "70px",
            width: "300px",
            backgroundImage: `url("./EcoExLogo.png")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{ background: "#733C07" }}
        >
          <Menu
            style={{ fontSize: "16px", background: "#733C07" }}
            theme="dark"
            mode="inline"
            items={items}
            onSelect={(value) => handleCurrentPath(value.key)}
          />
          <Button onClick={handleLogout}>Salir</Button>
        </Sider>
        <Layout>
          <Content style={{ minHeight: "81vh" }}>
            <Card
              style={{
                backgroundImage: `url("./EcoExBg.jpg")`,
                minHeight: "70vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "0",
                borderRadius: "0",
                fontFamily: "impact",
                WebkitTextStroke: "3px",
                WebkitTextStrokeColor: "green",
              }}
            >
              <div>{children}</div>
            </Card>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              padding: "0",
              background: "#213547",
              color: "aliceblue",
              justifyContent: "center",
              paddingTop: "2vh",
              height: "6.5vh",
            }}
          >
            EcoExchange, creado por Daniel Torres y Santiago Orduz ©2024
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
