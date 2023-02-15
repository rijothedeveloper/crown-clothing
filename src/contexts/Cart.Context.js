import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const alreadyProduct = cartItems.find(
    (product) => product.id === productToAdd.id
  );
  if (alreadyProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  // find the product to reomove
  const alreadyProduct = cartItems.find(
    (product) => product.id === productToRemove.id
  );
  const filterArray = cartItems.filter(
    (item) => item.id !== productToRemove.id
  );
  // if products quantity is 1 remove product from cart items
  if (alreadyProduct.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  } else {
    // else return cart item with reduced product quantity
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  isCartOpen: false,
  setCartOpen: () => {},
  totalQuantity: 0,
  // incrementQuantity: () => {},
  // decrementQuantity: () => {},
  removeItemFromCart: () => {},
  removeItem: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setTotalQuantity(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const total = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartTotal(total);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const removeItem = (product) => {
    const filterItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(filterItems);
  };

  const value = {
    cartItems,
    addItemToCart,
    isCartOpen,
    setCartOpen,
    totalQuantity,
    // incrementQuantity,
    // decrementQuantity,
    removeItemFromCart,
    removeItem,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
