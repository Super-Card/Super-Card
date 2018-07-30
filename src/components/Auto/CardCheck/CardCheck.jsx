import React from 'react';
import './cardCheck.css';

const CardCheck = () => (
  <div>
    <div className="newsletter-container">
      <h1>Enter the ID of your card:</h1>
      <div className="center">
        <input type="number" />
        <input type="submit" value="Check" />
      </div>
    </div>
    <h1>Offers:</h1>
  </div>
);

export default CardCheck;
