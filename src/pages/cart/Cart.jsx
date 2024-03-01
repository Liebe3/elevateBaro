// Cart.jsx
import React, { useContext } from "react";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/ShopContextProvider";
import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotal } = useContext(ShopContext);
  const totalAmount = getTotal();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cartTitle">
        <h1>Your Cart Items</h1>
      </div>
      <div className="carts">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} item={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal: ₱{totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
