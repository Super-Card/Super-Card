import React from 'react';
import './Location.css';

const Location = () => (
  <div className="location-box">
    <h2>Location:</h2>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="Sofia" />Sofia
    </div>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="Plovdiv" />Plovdiv
    </div>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="varna" />Varna
    </div>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="Burgas" />Burgas
    </div>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="Stara Zagora" />Stara Zagora
    </div>
  </div>
);

export default Location;
