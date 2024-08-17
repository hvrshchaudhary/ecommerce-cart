// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs'; // Import the BsCart2 icon
import './Home.css'; // Ensure this is imported

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 style={{ color: 'rgb(56, 161, 105)' }}>SPINACH</h1>
        <p className='home-subtitle'><b>Popeye the sailor man</b> gets his spinach from us</p>
        <Link to="/products" className="home-button">
          <BsCart2 size={20} />
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
