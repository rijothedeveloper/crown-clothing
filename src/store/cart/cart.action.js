import { CART_REDUCER_TYPES } from "./cart.types";

export const addCartItem = (cartItems, productToAdd) => {
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

export const setCartOpen = (open) => ({
  type: CART_REDUCER_TYPES.SET_CART_OPEN,
  payload: open,
});

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return {
    type: CART_REDUCER_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};
export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return {
    type: CART_REDUCER_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};

export const removeItem = (cartItems, product) => {
  const filterItems = cartItems.filter((item) => item.id !== product.id);
  return {
    type: CART_REDUCER_TYPES.SET_CART_ITEMS,
    payload: filterItems,
  };
};
