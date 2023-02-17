import { CartIconContainer, ItemCount, ShoppingIcon } from "./CartIcon.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";

const CartIcon = ({ quantity }) => {
  const { isCartOpen, setCartOpen } = useContext(CartContext);
  const toggleCart = () => {
    console.log("toggle");
    setCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{quantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
