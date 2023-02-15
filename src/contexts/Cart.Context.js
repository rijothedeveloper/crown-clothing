import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const alreadyProduct = cartItems.find(
    (product) => product.id === productToAdd.id
  );
  if (alreadyProduct) {
    // alreadyProduct.quantity = alreadyProduct.quantity + 1;
    // const filteredArray = cartItems.filter(
    //   (product) => product.id !== productToAdd.id
    // );
    // filteredArray.push(alreadyProduct);
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  isCartOpen: false,
  setCartOpen: () => {},
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setTotalQuantity(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    cartItems,
    addItemToCart,
    isCartOpen,
    setCartOpen,
    totalQuantity,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
