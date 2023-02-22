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

const getCartCount = (newCartItems) => {
  const newCartCount = newCartItems.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );
  return newCartCount;
};

const getCartTotal = (newCartItems) => {
  const newTotal = newCartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );
  return newTotal;
};

export const setCartOpen = (open) => ({
  type: CART_REDUCER_TYPES.SET_CART_OPEN,
  payload: open,
});

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  const newTotal = getCartTotal(newCartItems);
  const newCartCount = getCartCount(newCartItems);
  return {
    type: CART_REDUCER_TYPES.SET_CART_ITEMS,
    payload: {
      cartItems: newCartItems,
      totalQuantity: newCartCount,
      cartTotal: newTotal,
    },
  };
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  const newTotal = getCartTotal(newCartItems);
  const newCartCount = getCartCount(newCartItems);
  return {
    type: CART_REDUCER_TYPES.SET_CART_ITEMS,
    payload: {
      cartItems: newCartItems,
      totalQuantity: newCartCount,
      cartTotal: newTotal,
    },
  };
};

export const removeItem = (cartItems, product) => {
  const newCartItems = cartItems.filter((item) => item.id !== product.id);
  const newTotal = getCartTotal(newCartItems);
  const newCartCount = getCartCount(newCartItems);
  return {
    type: CART_REDUCER_TYPES.SET_CART_ITEMS,
    payload: {
      cartItems: newCartItems,
      totalQuantity: newCartCount,
      cartTotal: newTotal,
    },
  };
};
