import React from 'react';
import CategoryContainer from '../components/Tech/Categories/CategoryContainer';

const Tech = () => (
  <div>
    <div className="heading-container">
      <h2 className="category-header">Categories</h2>
      <h2 className="discount-heading">See your discount today!</h2>
    </div>
    <CategoryContainer />
  </div>
);

export default Tech;
