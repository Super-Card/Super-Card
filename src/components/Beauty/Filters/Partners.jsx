import React from 'react';
import './BeautyFilters.css';

const Partners = () => (
  <div>
    <h3>Partners</h3>
    <label>
      <input type="checkbox" name="beautyzone" id="beautyzone" value="beautyzone" />Beauty Zone
    </label>
    <label>
      <input type="checkbox" name="sephora" id="sephora" value="sephora" />Sephora
    </label>
    <label>
      <input type="checkbox" name="douglas" id="douglas" value="douglas" />Douglas
    </label>
    <label>
      <input type="checkbox" name="dm" id="dm" value="dm" />DM
    </label>
    <label>
      <input type="checkbox" name="lillydrogerie" id="lillydrogerie" value="lillydrogerie" />Lilly Drogerie
    </label>
  </div>
);

export default Partners;
