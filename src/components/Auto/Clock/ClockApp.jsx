import React, { Component } from 'react';
import Clock from './Clock';

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
        <div className="App-title">Offer Expires: {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
      </div>
    );
  }
}

export default App;
