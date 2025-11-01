import React, { useState } from "react";
import "./every.css";
import brand from "./brand.png";
import "./groceries.css"
// Images
import oil from "./oil.png";
import honey from "./honey.png";
import juice from "./juice.png";
import butter from "./butter.png";
import chil from "./chil.png";
import coffee from "./coffee.png";
import cookie from "./cookie.png";
import eggs from "./Eggs.png";
import sanitizer from "./sanitizer.png";

function Groceries() {
  const [min, setMin] = useState(125);
  const [max, setMax] = useState(1250);
  const [price, setPrice] = useState(500);

  return (
    <div>
      <div className="shop-container">
        {/* LEFT SIDE */}
        <div className="set1">
          {/* 🔍 Search Box */}
          <div className="search-box">
            <input
              className="sear"
              type="search"
              placeholder="Search Products"
            />
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
          {/* Heading & Intro Paragraph */}
          <h1 className="gm">Groceries</h1>
          <p>
            Welcome to our Groceries section. Here you will find a wide variety of essential products including fresh items, packaged goods, beverages, and daily necessities. Our goal is to provide high-quality groceries at affordable prices, making your shopping experience convenient, reliable, and enjoyable.
          </p>

          <h1>Home / Shop</h1>
          <span className="Shop">Shop</span>

          {/* Row 1 */}
          <div className="cat1">
            <div className="c1">
              <img src={coffee} alt="Coffee" />
              <p className="gr">Groceries</p>
              <p>Assorted Coffee</p>
              <p>$120</p>
            </div>
            <div className="c2">
              <img src={butter} alt="Butter" />
              <p className="gr">Groceries</p>
              <p>Cashew Butter</p>
              <p>$120</p>
            </div>
            <div className="c3">
              <img src={cookie} alt="Cookies" />
              <p className="gr">Groceries</p>
              <p>Diabetic Cookies</p>
              <p>$120</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="cat1">
            <div className="c1">
              <img src={eggs} alt="Eggs" />
              <p className="gr">Groceries</p>
              <p>Fresh Eggs</p>
              <p>$120</p>
            </div>
            <div className="c2">
              <img src={juice} alt="Juice" />
              <p className="gr">Groceries</p>
              <p>Fresh Juice</p>
              <p>$120</p>
            </div>
            <div className="c3">
              <img src={honey} alt="Honey" />
              <p className="gr">Groceries</p>
              <p>Organic Honey</p>
              <p>$120</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="cat1">
            <div className="c1">
              <img src={chil} alt="Chilli Powder" />
              <p className="gr">Groceries</p>
              <p>Red Chilli Powder</p>
              <p>$120</p>
            </div>
            <div className="c2">
              <img src={oil} alt="Edible Oil" />
              <p className="gr">Groceries</p>
              <p>Natural Oil</p>
              <p>$120</p>
            </div>
            <div className="c3">
              <img src={sanitizer} alt="Sanitizer" />
              <p className="gr">Health</p>
              <p>Hand Sanitizer</p>
              <p>$120</p>
            </div>
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

export default Groceries;
