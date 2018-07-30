import React, { Component } from 'react';
import Clock from './Clock';
import './offer.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'August 05, 2018'
    };
  }

  render() {
    return (
      <div className="App">
        <img className="photo" src="../../../../assets/Auto/driver-licence.jpg" alt="driver licence course pic" />
        <h3 className="heading">Driving licence course for B category</h3>
        <p className="paragraph">
          Price:<span className="price">300 lv</span>
        </p>
        <div className="App-title">Offer Expires: {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}

export default App;
