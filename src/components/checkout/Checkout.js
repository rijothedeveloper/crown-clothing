import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";
import CheckoutItem from "../checkoutItem/CheckoutItem";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return cartItems.map((item) => <CheckoutItem item={item} />);
};

export default Checkout;
