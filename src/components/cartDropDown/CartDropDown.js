import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropDown.styles";
import Button from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";
import CartItem from "../cartItem/CartItem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropDown = () => {
  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        <Button onClick={goToCheckout}>Go to Checkout</Button>
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
