import React from 'react';
import './Brands.css';

const shopData = {
  shops: [
    { id: 1, name: 'Mega Mall', discaunt: '10%' },
    { id: 2, name: 'Paradise', discaunt: '15%' },
    { id: 3, name: 'Serdika', discaunt: '20%' },
    { id: 4, name: 'City Center', discaunt: '25%' },
    { id: 5, name: 'Markovo Tepe', discaunt: '30%' },
    { id: 6, name: 'Mega Mall', discaunt: '10%' },
    { id: 7, name: 'Paradise', discaunt: '15%' },
    { id: 8, name: 'Serdika', discaunt: '20%' },
    { id: 9, name: 'City Center', discaunt: '25%' },
    { id: 10, name: 'Markovo Tepe', discaunt: '30%' }
  ]
};

const mall = shopData.shops[0].name;

const toggleMall = click => alert(click);

const Brands = () => (
  <div className="brands-box">
    <h2>Brands:</h2>
    <div className="input-holder">
      <input type="checkbox" onClick={toggleMall} />Armani
    </div>
    <div className="input-holder">
      <input type="checkbox" onClick={toggleMall} />Versace
    </div>
    <div className="input-holder">
      <input type="checkbox" />Dolce & Gabbana
    </div>
    <div className="input-holder">
      <input type="checkbox" />Hugo Boss
    </div>
    <div className="input-holder">
      <input type="checkbox" />Prada
    </div>
  </div>
);

export default Brands;
