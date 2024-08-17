// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal > 100 ? 10 : 0; // Example discount logic
  const total = subtotal - discount;

  return (
    <div className="cart">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
      ))}
      <div className="cart-summary">
        <p>Subtotal: {subtotal.toFixed(2)} ₹</p>
        <p>Discount: {discount.toFixed(2)} ₹</p>
        <p>Total: {total.toFixed(2)} ₹</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
