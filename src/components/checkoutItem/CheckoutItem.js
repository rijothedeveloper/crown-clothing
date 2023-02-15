import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";
import "./checkoutItem.styles.scss";

const CheckoutItem = ({ item }) => {
  // const { incrementQuantity, decrementQuantity, removeItem } =
  //   useContext(CartContext);
  const { addItemToCart, removeItemFromCart, removeItem } =
    useContext(CartContext);
  const increment = () => {
    addItemToCart(item);
  };
  const decrement = () => {
    removeItemFromCart(item);
  };
  const remove = () => {
    removeItem(item);
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
