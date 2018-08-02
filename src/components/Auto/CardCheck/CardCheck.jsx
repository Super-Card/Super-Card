import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import './cardCheck.css';

@inject('auto')
@observer
class CardCheck extends Component {
  render() {
    const { auto } = this.props;

    return (
      <div>
        <div className="newsletter-container">
          <h1>Enter the ID of your card:</h1>
          <div className="center">
            <input type="number" />
            <input type="submit" value="Check" />
          </div>
          <div className="results">{auto.carCount}</div>
        </div>
        <h1>Offers:</h1>
      </div>
    );
  }
}

CardCheck.propTypes = {
  auto: PropTypes.shape({
    carCount: PropTypes.string
  })
};

export default CardCheck;
