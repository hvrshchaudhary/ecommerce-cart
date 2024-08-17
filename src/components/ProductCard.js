// src/components/ProductCard.js
import React from 'react';
import './Products.css';

const ProductCard = ({ product, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <div className='content-parent'>
      <div className="content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="price-button-container">
        <div className="price">₹{product.price.toFixed(2)}</div>
        {isInCart ? (
          <button 
            className="remove-btn" 
            onClick={() => removeFromCart(product.id)}
          >
            Remove from Cart
          </button>
        ) : (
          <button 
            className="add-btn" 
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
