import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CartIcon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";

const CartIcon = () => {
  const { cartValues, setCartValues } = useContext(CartContext);
  const toggleCart = () => {
    console.log("toggle");
    setCartValues({ ...cartValues, isCartOpen: !cartValues.isCartOpen });
  };
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
