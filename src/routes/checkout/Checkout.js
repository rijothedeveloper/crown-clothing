import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalSpan,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem item={item} key={item.id} />
      ))}

      <TotalSpan>Total: ${cartTotal}</TotalSpan>
    </CheckoutContainer>
  );
};

export default Checkout;
