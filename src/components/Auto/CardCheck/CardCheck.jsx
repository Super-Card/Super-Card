import React, { Component } from 'react';
import './cardCheck.css';

class CardCheck extends Component {
  constructor(props) {
    super(props);
    this.state = { showMessage: false };
  }

  _showMessage = () =>
    this.setState(prevState => ({
      showMessage: !prevState.showMessage
    }));
  render() {
    return (
      <div>
        <div className="newsletter-container">
          <h1>Enter the ID of your card:</h1>
          <div className="center">
            <input type="number" required />
            <input type="submit" value="Check" onClick={this._showMessage} />
          </div>
          <div />
          {this.state.showMessage && (
            <div className="results">
              <h2 className="green-heading">Your card is valid in the following places:</h2>
              <p>Magic Auto Spa</p>
              <p>Ivans auto shop</p>
              <p>AutoHouse Sofia</p>
              <p>Bankya Auto Palace</p>
              <button className="close" onClick={this._showMessage}>
                Close
              </button>
            </div>
          )}
        </div>
        <h1>Offers:</h1>
      </div>
    );
  }
}

export default CardCheck;
