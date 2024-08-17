// src/pages/CartPage.js
import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './CartPage.css';

const CartPage = ({ cartItems, updateQuantity, removeItem, showNotification, clearCart }) => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 0 : 0;
  const total = subtotal - discount;

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === '10OFF') {
      setDiscount(subtotal * 0.1); // 10% discount
      setError('');
      setSuccess('You saved ₹' + (subtotal * 0.1).toFixed(2) + '.');
    } else {
      setDiscount(0);
      setError('Invalid coupon code. Try using "10OFF".');
      setSuccess('');
    }
  };

  const handleCheckout = () => {
    // Trigger the notification for successful order placement
    showNotification({
      title: "Order placed successfully!",
      subtitle: "Your order has been placed successfully."
    });

    // Clear the cart using the clearCart function passed down from App.js
    clearCart();

    // Redirect to Home page after showing the notification
    setTimeout(() => {
      navigate('/'); // Redirect to Home page
    }, 1000); // Wait for the notification to show before navigating
  };

  return (
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            updateQuantity={updateQuantity} 
            removeItem={removeItem} 
          />
        ))}
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <div className="summary-item">
          <span>Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Shipping:</span>
          <span>FREE</span>
        </div>

        {discount > 0 && (
          <div className="summary-item discount">
            <span><strong>Discount:</strong></span>
            <span>-₹{discount.toFixed(2)}</span>
          </div>
        )}

        <div className="coupon-container">
          <input 
            type="text" 
            placeholder="Enter coupon code" 
            value={couponCode} 
            onChange={(e) => setCouponCode(e.target.value)} 
          />
          <button className="apply-btn" onClick={handleApplyCoupon}>Apply</button>
        </div>

        {error && <div className="message error-message">{error}</div>}
        {success && <div className="message success-message">{success}</div>}

        <div className="summary-line"></div>

        <div className="summary-total">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
