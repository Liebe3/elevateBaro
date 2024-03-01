import React, { useContext } from "react";
import "../shop/shop.css";
import { ShopContext } from "../../context/ShopContextProvider";

const CartItem = (props) => {
  const { id, productName, price, productImage, size } = props.item;
  const { cartItems, addToCart, removeFromCart, updateCart } =
    useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  const stock = props.item.stock;

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  const handleAddToCart = () => {
    addToCart(id);
  };

  const handleInputChange = (e) => {
    const newAmount = parseInt(e.target.value);
    if (!isNaN(newAmount)) {
      updateCart(newAmount, id);
    }
  };

  return (
    <div className="cartItem">
      <div className="cartImage-container">
        <img src={productImage} alt={productName} />
      </div>
      <div className="cart-description">
        <p>
          <b>{productName}</b>
        </p>
        <p>{size}</p>
        <p>₱{price}</p>
        <div className="countHandler">
          <button
            onClick={handleRemoveFromCart}
            disabled={cartItemAmount <= 0 || stock <= 0}
            style={{
              backgroundColor: cartItemAmount <= 0 || stock <= 0 ? "red" : "",
            }}
          >
            -
          </button>
          <input
            type="text"
            value={cartItemAmount}
            onChange={handleInputChange}
            disabled={stock <= 0}
            style={{ backgroundColor: stock <= 0 ? "red" : "" }}
          />
          <button
            onClick={handleAddToCart}
            disabled={stock <= 0}
            style={{ backgroundColor: stock <= 0 ? "red" : "" }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
