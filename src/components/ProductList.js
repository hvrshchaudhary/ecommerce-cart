// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';


const ProductList = ({ products, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          isInCart={isInCart(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductList;
