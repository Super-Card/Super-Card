import React from 'react';
import './BeautyFilters.css';

const Discounts = () => (
  <div className="beauty-filters">
    <h3>Discount</h3>
    <label htmlFor="10%">
      <input type="checkbox" name="10%" id="10%" value="10%" />10%
    </label>
    <label htmlFor="15%">
      <input type="checkbox" name="15%" id="15%" value="15%" />15%
    </label>
    <label htmlFor="20%">
      <input type="checkbox" name="20%" id="20%" value="20%" />20%
    </label>
    <label htmlFor="25%">
      <input type="checkbox" name="25%" id="25%" value="25%" />25%
    </label>
    <label htmlFor="30%">
      <input type="checkbox" name="30%" id="30%" value="30%" />30%
    </label>
  </div>
);

export default Discounts;
