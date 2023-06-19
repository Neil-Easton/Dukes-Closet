import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { addItemToCart, deleteItemFromCart } = useContext(CartContext);

  const increaseItemQuantity = () => {
    const itemToAdd = { ...cartItem };
    delete itemToAdd.quantity;
    addItemToCart(itemToAdd);
  };

  const decreaseItemQuantity = () => {
    deleteItemFromCart(cartItem);
  };

  const removeItem = () => {
    deleteItemFromCart(cartItem, 0);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <h2 className="name">{name}</h2>
      <div className="quantity">
        <h2
          className="arrow"
          style={{ fontWeight: "bold" }}
          onClick={decreaseItemQuantity}
        >
          &#10094;
        </h2>
        <h2 className="value">{quantity}</h2>
        <h2
          className="arrow"
          style={{ fontWeight: "bold" }}
          onClick={increaseItemQuantity}
        >
          &#10095;
        </h2>
      </div>

      <h2 className="price">{price}</h2>
      <h2 className="remove-button" onClick={removeItem}>
        &#10005;
      </h2>
    </div>
  );
};

export default CheckoutItem;
