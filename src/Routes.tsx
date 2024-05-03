import { lazy } from "react";
import { Fragment, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useValidateContext } from "./utils/customHooks";
import { LoadingScreen } from "./pages/utils/loadingScreen";
//import GuardRole from "./GuardRole";
import { PageLayout } from "./pages/utils/layout";

const routesConfig: RoutesType[] = [
  {
    id: "root",
    path: "/*",
    layout: PageLayout,
    //guard: GuardRole(["ADMIN", "BENEF", "DONOR", "MOD"]),
    component: lazy(() => import("src/pages/main_page/mainPage")),
  },
  {
    id: "negociacion",
    path: "/negociacion",
    component: lazy(() => import("src/componentes/Negociacion")), // Asegúrate de importar el componente correctamente
  },

  {
    id: "login",
    path: "/login",
    component: lazy(() => import("src/pages/authentication/login")),
  },
  {
    id: "register",
    path: "/register",
    component: lazy(() => import("src/pages/authentication/register")),
  },
  {
    id: "allies",
    path: "/allies",
    layout: PageLayout,
    //guard: GuardRole(["ADMIN", "BENEF", "DONOR", "MOD"]),
    component: lazy(() => import("src/pages/allies/allies")),
  },
  {
    id: "exchanges",
    path: "/exchanges",
    layout: PageLayout,
    //guard: GuardRole(["ADMIN", "BENEF", "DONOR", "MOD"]),
    component: lazy(() => import("src/pages/exchanges/exchanges")),
  },
  {
    id: "offers",
    path: "/offers",
    layout: PageLayout,
    //guard: GuardRole(["ADMIN", "BENEF", "DONOR", "MOD"]),
    component: lazy(() => import("src/pages/offers/offers")),
  },
  {
    id: "*",
    path: "*",
    component: () => <Navigate to="/404" />,
  },
];

const renderRoutes = (routes: RoutesType[]) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {routes.map((route) => {
          const Guard = route.guard || Fragment;
          const Layout = route.layout || Fragment;
          const Component = route.component;
          return (
            <Route
              key={route.id}
              path={route.path ?? ""}
              element={
                <Guard>
                  <Layout>
                    {route.routes ? renderRoutes(route.routes) : <Component />}
                  </Layout>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  ) : null;

const RenderRoutes = () => {
  useValidateContext();
  return renderRoutes(routesConfig);
};

export default RenderRoutes;
