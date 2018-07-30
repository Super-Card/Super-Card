import React from 'react';
import './BeautyFilters.css';

const Categories = () => (
  <div className="beauty-filters">
    <h3>Categories</h3>
    <label htmlFor="face">
      <input type="checkbox" name="face" id="face" value="face" />Face
    </label>
    <label htmlFor="hair">
      <input type="checkbox" name="hair" id="hair" value="hair" />Hair
    </label>
    <label htmlFor="body">
      <input type="checkbox" name="body" id="body" value="body" />Body
    </label>
  </div>
);

export default Categories;
