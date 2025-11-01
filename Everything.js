import React, { useState } from "react";
import "./every.css";
import { Link } from "react-router-dom";

// images
import brand from "./brand.png";
import oil from "./oil.png";
import honey from "./honey.png";
import juice from "./juice.png";
import butter from "./butter.png";
import chil from "./chil.png";
import coffee from "./coffee.png";
import cookie from "./cookie.png";
import eggs from "./Eggs.png";
import sanitizer from "./sanitizer.png";

function Everything() {
  const [min, setMin] = useState(125);
  const [max, setMax] = useState(1250);
  const [price, setPrice] = useState(500);

  // ✅ Product list for linking
  const products = [
    { id: 1, name: "Assorted Coffee", price: 120, category: "Groceries", image: coffee },
    { id: 2, name: "Cashew Butter", price: 320, category: "Groceries", image: butter },
    { id: 3, name: "Diabetic Cookies", price: 240, category: "Groceries", image: cookie },
    { id: 4, name: "Fresh Eggs", price: 90, category: "Groceries", image: eggs },
    { id: 5, name: "Fresh Juice", price: 160, category: "Groceries", image: juice },
    { id: 6, name: "Organic Honey", price: 345, category: "Groceries", image: honey },
    { id: 7, name: "Red Chilli Powder", price: 80, category: "Groceries", image: chil },
    { id: 8, name: "Natural Oil", price: 180, category: "Groceries", image: oil },
    { id: 9, name: "Hand Sanitizer", price: 250, category: "Health", image: sanitizer },
  ];

  return (
    <div>
      <div className="shop-container">
        {/* LEFT SIDE */}
        <div className="set1">
          {/* 🔍 Search Box */}
          <div className="search-box">
            <input className="sear" type="search" placeholder="Search Products" />
            <button className="s">🔍</button>
          </div>

          {/* 💰 Price Filter */}
          <div className="searval">
            <h2>Filter by Price</h2>
            <input
              type="range"
              min={min}
              max={max}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <p>Selected Price: ${price}</p>

            <div className="price-inputs">
              <input
                className="min"
                type="number"
                placeholder="Min $125"
                onChange={(e) => setMin(Number(e.target.value))}
              />
              <input
                className="max"
                type="number"
                placeholder="Max $1250"
                onChange={(e) => setMax(Number(e.target.value))}
              />
            </div>
          </div>

          {/* ⭐ Popular Items */}
          <div className="popular">
            <h2>Popular Items</h2>
            <div className="popular-items">
              <div className="i1">
                <img src={oil} alt="Edible Oil" />
                <p>Natural Extracted Edible Oil</p>
                <p>Price: $100</p>
              </div>
              <div className="i2">
                <img src={coffee} alt="Coffee" />
                <p>Assorted Coffee</p>
                <p>Price: $320</p>
              </div>
              <div className="i3">
                <img src={sanitizer} alt="Sanitizer" />
                <p>Hand Sanitizer</p>
                <p>Price: $140</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="set2">
          <h1>Home / Shop</h1>
          <span className="Shop">Shop</span>

          {/* ✅ Product Grid (Click → Product Details) */}
          <div className="cat1">
            {products.slice(0, 3).map((p) => (
              <div key={p.id} className="c1">
                <Link to={`/product/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <img src={p.image} alt={p.name} />
                  <p className="gr">{p.category}</p>
                  <p>{p.name}</p>
                  <p>${p.price}</p>
                </Link>
              </div>
            ))}
          </div>

          <div className="cat1">
            {products.slice(3, 6).map((p) => (
              <div key={p.id} className="c1">
                <Link to={`/product/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <img src={p.image} alt={p.name} />
                  <p className="gr">{p.category}</p>
                  <p>{p.name}</p>
                  <p>${p.price}</p>
                </Link>
              </div>
            ))}
          </div>

          <div className="cat1">
            {products.slice(6, 9).map((p) => (
              <div key={p.id} className="c1">
                <Link to={`/product/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <img src={p.image} alt={p.name} />
                  <p className="gr">{p.category}</p>
                  <p>{p.name}</p>
                  <p>${p.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="last">
        <div className="l1">
          <img src={brand} alt="Brand" />
          <br />
          <span>
            Maecenas mi justo, interdum at consectetur ve, <br />
            tristique et arcu
          </span>
        </div>

        <div className="l2">
          <p>Website</p>
          <span className="a">
            <a>About</a> <br />
            <a>Everything</a> <br />
            <a>Groceries</a> <br />
            <a>Juice</a> <br />
            <a>Contact</a>
          </span>
        </div>

        <div className="l3">
          <p>Quick Links</p>
          <span className="a">
            <a>Know More About Us</a> <br />
            <a>Visit Store</a> <br />
            <a>Let's Connect</a> <br />
            <a>Locate Stores</a>
          </span>
        </div>

        <div className="l4">
          <p>Site Links</p>
          <span className="a">
            <a>Privacy Policy</a> <br />
            <a>Shipping Details</a> <br />
            <a>Offers Coupons</a> <br />
            <a>Terms & Conditions</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Everything;
