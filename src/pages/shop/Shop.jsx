import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { PRODUCTS } from "../../product";
import Product from "./Product";
import "./shop.css";

const Shop = () => {
  const { cartItems } = useContext(ShopContext);

  // Function to check if stock is available
  const isStockAvailable = (productId) => {
    const product = PRODUCTS.find((item) => item.id === productId);
    const cartQuantity = cartItems[productId] || 0;
    return product.stock - cartQuantity > 0;
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Baro Uniform Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            item={{
              ...product,
              stock: isStockAvailable(product.id) ? product.stock : 0
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
