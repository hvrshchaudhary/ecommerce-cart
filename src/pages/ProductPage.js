// src/pages/ProductPage.js
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import productsData from '../data/products.json';

const ProductPage = ({ addToCart, removeFromCart, cartItems, showNotification }) => { // Add showNotification
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    showNotification({ // Use showNotification from App.js
      title: `${product.name} added to cart!`,
      subtitle: "Visit cart to see your order details."
    });
  };

  return (
    <div>
      <ProductList 
        products={products} 
        addToCart={handleAddToCart} 
        removeFromCart={removeFromCart}
        isInCart={isInCart}
      />
    </div>
  );
};

export default ProductPage;
