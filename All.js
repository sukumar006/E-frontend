import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Pages
import Home from "./home";
import About from "./about";
import Everything from "./Everything";
import Groceries from "./Groceries";
import Contact from "./Contact";
import ProductDetails from "./ProductDetails";
import View from "./view";
import CheckOut from "./CheckOut";

// Images
import brand from "./brand.png";

// Product list
const products = [
  { id: 1, name: "Assorted Coffee", category: "Groceries", price: 120, image: require("./coffee.png") },
  { id: 2, name: "Cashew Butter", category: "Groceries", price: 320, image: require("./butter.png") },
  { id: 3, name: "Diabetic Cookies", category: "Groceries", price: 240, image: require("./cookie.png") },
  { id: 4, name: "Fresh Eggs", category: "Groceries", price: 90, image: require("./Eggs.png") },
  { id: 5, name: "Fresh Juice", category: "Groceries", price: 160, image: require("./juice.png") },
  { id: 6, name: "Organic Honey", category: "Groceries", price: 345, image: require("./honey.png") },
  { id: 7, name: "Red Chilli Powder", category: "Groceries", price: 80, image: require("./chil.png") },
  { id: 8, name: "Natural Oil", category: "Groceries", price: 180, image: require("./oil.png") },
  { id: 9, name: "Hand Sanitizer", category: "Health", price: 250, image: require("./sanitizer.png") },
];

function AAp() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }
      return [...prev, { ...product, quantity: product.quantity || 1 }];
    });
  };

  return (
    <Router>
      {/* HEADER */}
      <header className="head">
        <div className="brand">
          <img src={brand} alt="Brand Logo" />
        </div>

        <nav className="menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/everything">Everything</Link></li>
            <li><Link to="/groceries">Groceries</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/everything" element={<Everything products={products} addToCart={addToCart} />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />
        <Route path="/checkout" element={<CheckOut />} />
        {/* Cart page */}
        <Route
          path="/cart"
          element={
            <View
              cartItems={cartItems}
              setCartItems={setCartItems}
              products={products}
              addToCart={addToCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default AAp;
