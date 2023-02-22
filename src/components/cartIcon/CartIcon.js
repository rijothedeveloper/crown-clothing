import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setCartOpen } from "../../store/cart/cart.action";

const CartIcon = ({ quantity }) => {
  // const { isCartOpen, setCartOpen } = useContext(CartContext);
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const toggleCart = () => {
    console.log("toggle");
    dispatch(setCartOpen(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{quantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
