import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  isCartOpen: false,
  setCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({
    cartItems: [],
    setCartItems: () => {},
  });
  const [isCartOpen, setCartOpen] = useState(false);
  const value = { cartItems, setCartItems, isCartOpen, setCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
