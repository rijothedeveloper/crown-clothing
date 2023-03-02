import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.styles";
import { FC, useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";
import { useDispatch, useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setCartOpen } from "../../store/cart/cart.action";

type CartIconProps = {
  quantity: number;
};

const CartIcon: FC<CartIconProps> = ({ quantity }) => {
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
