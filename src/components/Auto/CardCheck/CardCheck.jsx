import React from 'react';
import './cardCheck.css';

const CardCheck = () => (
  <div className="newsletter-container">
    <h1>Enter the ID of your card:</h1>
    <div className="center">
      <input type="email" />
      <input type="submit" value="Check" />
    </div>
  </div>
);

export default CardCheck;
