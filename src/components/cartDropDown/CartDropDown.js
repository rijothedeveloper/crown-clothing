import "./CartDropDown.styles.scss";
import Button from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";
import CartItem from "../cartItem/CartItem";
import { Link } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Link to="checkout">
          <Button>Go to Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartDropDown;
