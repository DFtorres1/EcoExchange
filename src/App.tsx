import UserProvider from "./UserProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import RenderRoutes from "./Routes";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, createContext, useContext, useState } from "react";

export const queryClient = new QueryClient();

interface CartContextInterface {
  cart: Array<Product> | undefined
  setCart: React.Dispatch<Product[] | undefined>;
}

const CartContext = createContext<CartContextInterface | null>(null);

const CartProvider = (children: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[] | undefined>([]);
  const cartValue = { cart, setCart };
  return (
    <CartContext.Provider value={cartValue}>
      {children.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <RenderRoutes />
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
