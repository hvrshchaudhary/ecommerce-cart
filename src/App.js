import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import './App.css';
import Navbar from './components/Navbar';
import Notification from './components/Notification';
import './styles/responsive.css';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState({});

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    showNotification({
      title: `${product.name} added to cart!`,
      subtitle: "Visit cart to see your order details."
    });
  };

  const showNotification = (message) => {
    setNotificationMessage(message);
    setNotificationVisible(true);
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems');
  };

  const closeNotification = () => {
    setNotificationVisible(false);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity } : item));
  };

  return (
    <Router basename="/ecommerce-cart"> {/* Add basename here */}
      <div className="App">
        <header className="header-container">
          <Navbar cartItemsCount={cartItems.length} />
        </header>

        <Notification 
          message={notificationMessage} 
          visible={notificationVisible} 
          onClose={closeNotification} 
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/products" 
            element={
              <ProductPage 
                addToCart={addToCart} 
                removeFromCart={removeFromCart} 
                cartItems={cartItems}
                showNotification={showNotification} 
              />
            } 
          />
          <Route 
            path="/cart" 
            element={
              <CartPage 
                cartItems={cartItems} 
                updateQuantity={updateQuantity} 
                removeItem={removeFromCart} 
                showNotification={showNotification} 
                clearCart={clearCart} 
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
