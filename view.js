// View.js
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./view.css";

function View({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);

  // Save cart to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const calculateSubtotal = (item) => item.price * item.quantity;
  const total = cartItems.reduce((acc, item) => acc + calculateSubtotal(item), 0);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <div style={{ color: "red", textAlign: "center", margin: "20px 0" }}>
          Your cart is empty. Add some products to proceed!
        </div>
      ) : (
        <div className="cart-message">
          <i className="fas fa-check-circle"></i>
          <span>Cart updated.</span>
        </div>
      )}

      <div className="cart-table-wrapper">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Remove</th>
              <th>Product Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <button  className=" remove" onClick={() => removeItem(item.id)}>&times;</button>
                </td>
                <td className="pg"><img src={item.image} alt={item.name} /></td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>{item.quantity}</td>
                <td>${calculateSubtotal(item)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Link to="/everything">
          <button className="more">Add More Products</button>
        </Link>
      </div>

      <div className="cart-footer">
        <h3>Cart totals</h3>
        <p>Subtotal: ${total.toFixed(2)}</p>
        <p>Total: ${total.toFixed(2)}</p>

        <button className="check"
          onClick={() => navigate("/checkout", { state: { cartItems, total } })}
          disabled={cartItems.length === 0}
          style={{ cursor: cartItems.length === 0 ? "not-allowed" : "pointer" }}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default View;
