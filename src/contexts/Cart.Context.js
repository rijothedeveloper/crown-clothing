import { createContext, useState } from "react";

export const CartContext = createContext({
  products: [],
  isCartOpen: false,
});

export const CartProvider = ({ children }) => {
  const [cartValues, setCartValues] = useState({
    products: [],
    isCartOpen: false,
  });
  const value = { cartValues, setCartValues };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
