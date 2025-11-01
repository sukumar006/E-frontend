
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./CheckOut.css";

function CheckOut() {
  const location = useLocation();
  const { cartItems = [], total: passedTotal = 0 } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("cash_on_delivery");
  const [address, setAddress] = useState({
    name: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

 
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 5 : 0;
  const tax = subtotal * 0.08;
  const total = passedTotal || subtotal + shipping + tax;

  
  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) return;

    const orderData = {
      customer: address,
      cartItems,
      subtotal,
      shipping,
      tax,
      total,
      paymentMethod,
    };

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage(`Order placed successfully! Order ID: ${data.orderId}`);
        localStorage.removeItem("cartItems"); 
      } else {
        setErrorMessage(data.message || "Failed to place order.");
      }
    } catch (error) {
      setErrorMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <div className="forms-section">
        {/* Shipping */}
        <div className="shipping-section">
          <h2>Shipping Address</h2>
          <form>
            <div className="form-group">
              <label htmlFor="full-name">Name</label>
              <input
                type="text"
                id="full-name"
                placeholder="First & Last Name"
                value={address.name}
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="address-1">Address 1</label>
              <input
                type="text"
                id="address-1"
                placeholder="Street address"
                value={address.address1}
                onChange={(e) =>
                  setAddress({ ...address, address1: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="address-2">Address 2</label>
              <input
                type="text"
                id="address-2"
                placeholder="Apartment, suite, etc."
                value={address.address2}
                onChange={(e) =>
                  setAddress({ ...address, address2: e.target.value })
                }
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  value={address.city}
                  onChange={(e) =>
                    setAddress({ ...address, city: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <select
                  id="state"
                  value={address.state}
                  onChange={(e) =>
                    setAddress({ ...address, state: e.target.value })
                  }
                >
                  <option>Select state</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip</label>
                <input
                  type="text"
                  id="zip"
                  placeholder="Zip code"
                  value={address.zip}
                  onChange={(e) =>
                    setAddress({ ...address, zip: e.target.value })
                  }
                />
              </div>
            </div>
          </form>
        </div>

        {/* Payment */}
        <div className="payment-section">
          <h2>Payment</h2>
          <div
            className={`payment-option ${
              paymentMethod === "cash_on_delivery" ? "selected" : ""
            }`}
          >
            <label>
              <input
                type="radio"
                name="payment-method"
                value="cash_on_delivery"
                checked={paymentMethod === "cash_on_delivery"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <span className="radio-label">Cash on Delivery</span>
            </label>
            {paymentMethod === "cash_on_delivery" && (
              <div className="payment-description">
                <p>Pay with cash upon delivery.</p>
              </div>
            )}
          </div>

          <div className="place-order-button-container">
            <button
              className="place-order-button"
              disabled={cartItems.length === 0 || loading}
              onClick={handlePlaceOrder}
            >
              {loading ? "Placing Order..." : `Place Order £${total.toFixed(2)}`}
            </button>
          </div>

          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>

      {/* Order Summary */}
      <div className="summary-section">
        <h2>Order Summary</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item product-summary">
                <img src={item.image} alt={item.name} />
                <div>
                  <p className="product-name">{item.name}</p>
                  <p className="product-desc">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
            <div className="summary-details">
              <div className="summary-line">
                <span>Subtotal</span>
                <span>£{subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Shipping</span>
                <span>£{shipping.toFixed(2)}</span>
              </div>
              <div className="summary-line">
                <span>Tax</span>
                <span>£{tax.toFixed(2)}</span>
              </div>
              <div className="summary-line total-line">
                <span>Total</span>
                <span>£{total.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CheckOut;
