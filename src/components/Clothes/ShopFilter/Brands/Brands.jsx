import React from 'react';
import './Brands.css';

const Brands = () => (
  <div className="brands-box">
    <h2>Brands:</h2>
    <div className="input-holder">
      <input type="checkbox" name="Armani" id="Armani" value="Armani" />Armani
    </div>
    <div className="input-holder">
      <input type="checkbox" name="Versace" id="Versace" value="Versace" />Versace
    </div>
    <div className="input-holder">
      <input type="checkbox" name="Dolce" id="Dolce" value="Dolce and Gabbana" />Dolce & Gabbana
    </div>
    <div className="input-holder">
      <input type="checkbox" name="Boss" id="Boss" value="Hugo Boss" />Hugo Boss
    </div>
    <div className="input-holder">
      <input type="checkbox" name="Prada" id="Prada" value="Prada" />Prada
    </div>
  </div>
);

export default Brands;
