import React from 'react';
import './BeautyFilters.css';

const Gender = () => (
  <div className="beauty-filters">
    <h3>Gender</h3>
    <label htmlFor="male">
      <input type="checkbox" name="male" id="male" value="male" />Male
    </label>
    <label htmlFor="female">
      <input type="checkbox" name="female" id="female" value="female" />Female
    </label>
  </div>
);

export default Gender;
