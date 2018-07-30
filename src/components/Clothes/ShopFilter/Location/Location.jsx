import React from 'react';
import './Location.css';

const Location = () => (
  <div className="location-box">
    <h2>Location:</h2>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="Sofia" />Sofia
    </div>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="Sofia" />Plovdiv
    </div>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="Sofia" />Varna
    </div>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="Sofia" />Burgas
    </div>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="Sofia" />Stara Zagora
    </div>
  </div>
);

export default Location;
