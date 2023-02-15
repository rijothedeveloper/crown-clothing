import "./CartDropDown.styles.scss";
import Button from "../button/Button";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";
import CartItem from "../cartItem/CartItem";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {console.log(cartItems)}
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button>Go to Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropDown;
