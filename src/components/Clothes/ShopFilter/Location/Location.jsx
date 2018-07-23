import React from 'react';
import './Location.css';

const Location = () => (
  <div className="location-box">
    <h2>Location:</h2>
    <div className="input-holder">
      <input type="checkbox" />Sofia
    </div>
    <div className="input-holder">
      <input type="checkbox" />Plovdiv
    </div>
    <div className="input-holder">
      <input type="checkbox" />Varna
    </div>
    <div className="input-holder">
      <input type="checkbox" />Burgas
    </div>
    <div className="input-holder">
      <input type="checkbox" />Stara Zagora
    </div>
  </div>
);

export default Location;
