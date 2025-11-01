import React, { useState } from "react";
import "./product.css";
import { useParams, Link } from "react-router-dom";
import American from "./American.png";
import Visa from "./visa.png";
import Discover from "./Discover_Card.png";
import Master from "./master_card.png";

function Product({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [showViewCart, setShowViewCart] = useState(false);

  if (!product) return <p>Product not found!</p>;

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setShowNotification(true);
    setShowViewCart(true);
    setTimeout(() => setShowNotification(false), 3000); // hide after 3s
  };

  return (
    <div>
      <div className="product-page1">
        <div className="product-header">
          <div className="breadcrumbs">
            <a href="/">Home</a> / <a href="#">{product.category}</a> / {product.name}
          </div>
        </div>
      </div>

      <div className="product-page">
        <div>
          <div className="product-container">
            <div className="product-image-section">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="zoom-icon">
                <i className="fas fa-search"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="pc2">
          <div className="product-details-section">
            <h1>{product.name}</h1>
            <div className="price-info">
              <span className="price">${product.price}</span>
              <span className="shipping">+ Free Shipping</span>
            </div>
            <p className="description">
              {product.description ||
                "Coffee is a beverage brewed from roasted, ground coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans"}
            </p>

            <div className="add-to-cart-container">
              <input
                type="number"
                min="1"
                value={quantity}
                className="quantity-input"
                onChange={(e) => setQuantity(Number(e.target.value))}
              />{" "}
              &nbsp;
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                ADD TO CART
              </button>
            </div>

            <div className="product-categories">
              Categories: <a href="#">{product.category}</a>
            </div>

            <div className="secure-checkout">
              <p>Guaranteed Safe Checkout</p>
              <div className="payment-logos">
                <img src={Visa} alt="Visa" />&nbsp;&nbsp;
                <img src={American} alt="American Express" />&nbsp;&nbsp;
                <img src={Discover} alt="Discover" />&nbsp;&nbsp;
                <img src={Master} alt="Mastercard" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="cart-notification">
          <p>
            {quantity} x {product.name} added to cart!
          </p>
          {showViewCart && (
            <Link to="/cart">
              <button className="view-cart-button">View Cart</button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Product;
