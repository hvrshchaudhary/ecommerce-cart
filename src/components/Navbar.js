// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import { GrAnchor } from 'react-icons/gr';
import './Navbar.css';

const Navbar = ({ cartItemsCount }) => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="logo">
          <GrAnchor className="nav-icon" />
        </Link>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/products" className="nav-item">Products</Link>
      </div>
      <Link to="/cart" className="cart-icon-wrapper">
        <BsCart2 size={24} className="cart-icon" />
        {cartItemsCount > 0 && (
          <span className="cart-count-badge">{cartItemsCount}</span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
