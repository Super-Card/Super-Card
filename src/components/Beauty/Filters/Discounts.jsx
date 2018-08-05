import React from 'react';
import { observer, inject } from 'mobx-react';
import { beautyPropType, beautyPropTypeDefaults } from '../../../stores/Beauty';
import './BeautyFilters.css';

@inject('beauty')
@observer
export default class Discounts extends React.Component {
  render() {
    return (
      <div className="beauty-filters">
        <h3>Discount</h3>
        <label htmlFor="10%">
          <input
            type="checkbox"
            name="10%"
            id="10%"
            value="10%"
            onClick={event => this.props.beauty.setFilter('discounts', '10%', event.target.checked)}
          />10%
        </label>
        <label htmlFor="15%">
          <input
            type="checkbox"
            name="15%"
            id="15%"
            value="15%"
            onClick={event => this.props.beauty.setFilter('discounts', '15%', event.target.checked)}
          />15%
        </label>
        <label htmlFor="20%">
          <input
            type="checkbox"
            name="20%"
            id="20%"
            value="20%"
            onClick={event => this.props.beauty.setFilter('discounts', '20%', event.target.checked)}
          />20%
        </label>
        <label htmlFor="25%">
          <input
            type="checkbox"
            name="25%"
            id="25%"
            value="25%"
            onClick={event => this.props.beauty.setFilter('discounts', '25%', event.target.checked)}
          />25%
        </label>
        <label htmlFor="30%">
          <input
            type="checkbox"
            name="30%"
            id="30%"
            value="30%"
            onClick={event => this.props.beauty.setFilter('discounts', '30%', event.target.checked)}
          />30%
        </label>
      </div>
    );
  }
}
Discounts.wrappedComponent.propTypes = {
  beauty: beautyPropType
};

Discounts.wrappedComponent.defaultProps = {
  beauty: beautyPropTypeDefaults
};
