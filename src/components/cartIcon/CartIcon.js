import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";

const CartIcon = ({ quantity }) => {
  const { isCartOpen, setCartOpen } = useContext(CartContext);
  const toggleCart = () => {
    console.log("toggle");
    setCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{quantity}</span>
    </div>
  );
};

export default CartIcon;
