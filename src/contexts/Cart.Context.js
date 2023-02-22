import { createContext, useEffect, useReducer, useState } from "react";

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
  // const [cartItems, setCartItems] = useState([]);
  // const [isCartOpen, setCartOpen] = useState(false);
  // const [totalQuantity, setTotalQuantity] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);

  const CART_REDUCER_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_CART_OPEN: "SET_CART_OPEN",
    // SET_TOTAL_QUANTITY: "SET_TOTAL_QUANTITY",
    // SET_CART_TOTAL: "SET_CART_TOTAL",
  };

  const CartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case CART_REDUCER_TYPES.SET_CART_ITEMS:
        return {
          ...state,
          cartItems: payload.cartItems,
          totalQuantity: payload.totalQuantity,
          cartTotal: payload.cartTotal,
        };
      case CART_REDUCER_TYPES.SET_CART_OPEN:
        return {
          ...state,
          isCartOpen: payload,
        };
      default:
        throw new Error(`unhandled type ${type} in cartReducer`);
    }
  };

  const updateCareItems = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    const newTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    dispatch({
      type: CART_REDUCER_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        totalQuantity: newCartCount,
        cartTotal: newTotal,
      },
    });
  };

  const INITIAL_STATE = {
    cartItems: [],
    isCartOpen: false,
    totalQuantity: 0,
    cartTotal: 0,
  };

  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
  const { cartItems, isCartOpen, totalQuantity, cartTotal } = state;

  const setCartItems = (items) => {
    updateCareItems(items);
  };

  const setCartOpen = (open) => {
    dispatch({
      type: CART_REDUCER_TYPES.SET_CART_OPEN,
      payload: open,
    });
  };

  // const setTotalQuantity = (quantity) => {
  //   dispatch({
  //     type: CART_REDUCER_TYPES.SET_TOTAL_QUANTITY,
  //     payload: quantity,
  //   });
  // };

  // const setCartTotal = (total) => {
  //   dispatch({
  //     type: CART_REDUCER_TYPES.SET_CART_TOTAL,
  //     payload: total,
  //   });
  // };

  // useEffect(() => {
  //   const newCartCount = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.quantity,
  //     0
  //   );
  //   setTotalQuantity(newCartCount);
  // }, [cartItems]);

  // useEffect(() => {
  //   const total = cartItems.reduce(
  //     (total, cartItem) => total + cartItem.price * cartItem.quantity,
  //     0
  //   );
  //   setCartTotal(total);
  // }, [cartItems]);

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
