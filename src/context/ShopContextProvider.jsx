// ShopContextProvider.js
import React, { createContext, useState } from "react";
import { PRODUCTS } from "../product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotal = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 0) {
        updatedCart[itemId] -= 1;

        const productIndex = PRODUCTS.findIndex(
          (product) => product.id === itemId
        );
        if (productIndex !== -1) {
          // Update the product stock
          PRODUCTS[productIndex].stock += 1;
        }
      }
      return updatedCart;
    });
  };

  const updateCart = (newAmount, itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      updatedCart[itemId] = newAmount;
      return updatedCart;
    });
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCart,
    getTotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
