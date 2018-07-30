import React from 'react';
import './Brands.css';

const Brands = () => (
  <div className="brands-box">
    <h2>Brands:</h2>
    <div className="input-holder">
      <input type="checkbox" name="Armani" id="Armani" value="Armani" />Armani
    </div>
    <div className="input-holder">
      <input type="checkbox" name="Armani" id="Armani" value="Armani" />Versace
    </div>
    <div className="input-holder">
      <input type="checkbox" name="Armani" id="Armani" value="Armani" />Dolce & Gabbana
    </div>
    <div className="input-holder">
      <input type="checkbox" name="Armani" id="Armani" value="Armani" />Hugo Boss
    </div>
    <div className="input-holder">
      <input type="checkbox" name="Armani" id="Armani" value="Armani" />Prada
    </div>
  </div>
);

export default Brands;
