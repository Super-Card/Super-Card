import React from 'react';
import './BeautyFilters.css';

const Gender = () => (
  <div className="gender-filter-beauty">
    <h3>Gender</h3>
    <label>
      <input type="checkbox" name="male" id="male" value="male" />Male
    </label>
    <label>
      <input type="checkbox" name="male" id="male" value="female" />Female
    </label>
  </div>
);

export default Gender;
