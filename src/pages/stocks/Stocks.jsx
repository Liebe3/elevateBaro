import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";
import { PRODUCTS } from "../../product";
import styles from "./stocks.module.css";

const Stocks = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className={styles.stocks}>
      <h1>Product Stocks</h1>
      <ul className={styles.productList}>
        {PRODUCTS.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <p>
              <span>{product.productName}</span> <br />
              {product.size}
              <br />
              {product.stock - cartItems[product.id] > 0 ? (
                <span>Stocks: {product.stock - cartItems[product.id]}</span>
              ) : (
                <span style={{ color: "red" }}>Stock not available</span>
              )}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stocks;
