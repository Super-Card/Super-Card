import React from 'react';
import './home.css';

const HeadingImage = () => (
  <div className="head-wrapper">
    <div className="head-image">
      <h1 className="head-title">Get SuperCard and save money now!</h1>
      <p className="head-subtitle">One discounts card. Over 650 locations. Best benefit for every employee.</p>
      <div className="head-cta">
        <a className="head-cta-btn" href="http://localhost:8080/#request-card">
          Get your card
        </a>
      </div>
    </div>
  </div>
);

export default HeadingImage;
