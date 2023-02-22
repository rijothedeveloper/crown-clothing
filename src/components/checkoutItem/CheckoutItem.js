import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItem,
  removeItemFromCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
// import { CartContext } from "../../contexts/Cart.Context";
import "./checkoutItem.styles.scss";

const CheckoutItem = ({ item }) => {
  // const { incrementQuantity, decrementQuantity, removeItem } =
  //   useContext(CartContext);
  //
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const increment = () => {
    dispatch(addItemToCart(cartItems, item));
  };
  const decrement = () => {
    dispatch(removeItemFromCart(cartItems, item));
  };
  const remove = () => {
    dispatch(removeItem(cartItems, item));
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrement}>
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div className="arrow" onClick={increment}>
          &#10095;
        </div>
      </span>
      <span className="price">{item.price}</span>
      <div className="remove-button" onClick={remove}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
