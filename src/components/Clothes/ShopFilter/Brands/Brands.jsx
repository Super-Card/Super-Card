import React from 'react';
// import { mallPropType } from '../../../../stores/ClothesData';

import './Brands.css';

const Brands = () => (
  <div className="brands-box">
    <h2>Brands:</h2>
    <div className="input-holder">
      <input
        type="checkbox"
        name="Armani"
        id="Armani"
        value="Armani"
        onClick={() => this.props.mall.setFilter('Mall Serdika')}
      />Armani
    </div>
    <div className="input-holder">
      <input
        type="checkbox"
        name="Versace"
        id="Versace"
        value="Versace"
        onClick={() => this.props.mall.setFilter('Versace')}
      />Versace
    </div>
    <div className="input-holder">
      <input
        type="checkbox"
        name="Dolce"
        id="Dolce"
        value="Dolce and Gabbana"
        onClick={() => this.props.mall.setFilter('Versace')}
      />Dolce & Gabbana
    </div>
    <div className="input-holder">
      <input
        type="checkbox"
        name="Boss"
        id="Boss"
        value="Hugo Boss"
        onClick={() => this.props.mall.setFilter('Hugo Boss')}
      />Hugo Boss
    </div>
    <div className="input-holder">
      <input type="checkbox" name="Prada" id="Prada" value="Prada" onClick={() => this.props.mall.setFilter('Prada')} />Prada
    </div>
  </div>
);

export default Brands;
