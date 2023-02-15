import "./CartDropDown.styles.scss";
import Button from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";
import CartItem from "../cartItem/CartItem";
import { Link, useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button onClick={goToCheckout}>Go to Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
