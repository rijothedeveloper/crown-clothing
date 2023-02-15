import { useContext } from "react";
import { CartContext } from "../../contexts/Cart.Context";

const CheckoutItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeItem } =
    useContext(CartContext);
  const increment = () => {
    incrementQuantity(item);
  };
  const decrement = () => {
    decrementQuantity(item);
  };
  const remove = () => {
    removeItem(item);
  };
  return (
    <div key={item.id} className="cart-items-container">
      <img src={item.imageUrl} alt={item.name} />
      <span>{item.name}</span>
      <div>
        <button onClick={decrement}>&lt;</button>
        <span>{item.quantity}</span>
        <button onClick={increment}>&gt;</button>
      </div>
      <span>{item.price}</span>
      <button onClick={remove}>remove</button>
    </div>
  );
};

export default CheckoutItem;
