import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const Product = (props) => {
  const { id, productName, price, productImage, size, stock } = props.item;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  const handleAddToCart = () => {
    addToCart(id);
  };

  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="">
        <p>
          <b>{productName}</b>
        </p>
        <p>{size}</p>
        <p>₱{price}</p>
      </div>
      <button
        className="addToCartBttn"
        onClick={handleAddToCart}
        disabled={stock - cartItemAmount <= 0}
        style={{ backgroundColor: stock - cartItemAmount <= 0 ? "red" : "" }}
      >
        Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
      </button>
    </div>
  );
};

export default Product;
