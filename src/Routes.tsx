import { lazy } from "react";
import { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useValidateContext } from "./utils/customHooks";
import { LoadingScreen } from "./pages/utils/loadingScreen";
//import GuardRole from "./GuardRole";
import PageLayout from "./pages/utils/layout";

const routesConfig: RoutesType[] = [
  {
    id: "root",
    path: "/*",
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
    //guard: GuardRole(["ADMIN", "BENEF", "DONOR", "MOD"]),
    component: lazy(() => import("src/pages/allies/allies")),
  },
  {
    id: "exchanges",
    path: "/exchanges",
    //guard: GuardRole(["ADMIN", "BENEF", "DONOR", "MOD"]),
    component: lazy(() => import("src/pages/exchanges/exchanges")),
  },
  {
    id: "offers",
    path: "/offers",
    //guard: GuardRole(["ADMIN", "BENEF", "DONOR", "MOD"]),
    component: lazy(() => import("src/pages/offers/offers")),
  },
];

const renderRoutes = (routes: RoutesType[]) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {routes.map((route) => {
          const Guard = route.guard || Fragment;
          const Component = route.component;
          return (
            <Route
              key={route.id}
              path={route.path ?? ""}
              element={
                <Guard>
                  {route.id == "login" ? (
                    <Component />
                  ) : route.id == "register" ? (
                    <Component />
                  ) : (
                    <PageLayout>
                      {route.routes ? (
                        renderRoutes(route.routes)
                      ) : (
                        <Component />
                      )}
                    </PageLayout>
                  )}
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
