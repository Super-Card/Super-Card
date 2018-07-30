import React from 'react';
import './Discaunt.css';

const Discaunt = () => (
  <div className="discaunt-box">
    <h2>Discaunt:</h2>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="10%" />10%
    </div>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="15%" />15%
    </div>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="20%" />20%
    </div>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="25%" />25%
    </div>
    <div className="input-holder">
      <input type="checkbox" name="10%" id="10%" value="30%" />30%
    </div>
  </div>
);

export default Discaunt;
