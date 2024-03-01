import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import Shop from "./pages/shop/Shop";
import "./App.css";
import ShopContextProvider from "./context/ShopContextProvider";
import Stocks from "./pages/stocks/Stocks";

function App() {
  return (
    <>
      <div className="App">
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/stocks" element={<Stocks />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
