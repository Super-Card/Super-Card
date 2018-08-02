import React from 'react';
import { observer, inject } from 'mobx-react';
import { beautyPropType, beautyPropTypeDefaults } from '../../../stores/Beauty';
import './BeautyFilters.css';

@inject('beauty')
@observer
export default class Categories extends React.Component {
  render() {
    return (
      <div className="beauty-filters">
        <h3>Categories</h3>
        <label htmlFor="face">
          <input
            type="checkbox"
            name="face"
            id="face"
            value="face"
            onClick={event => this.props.beauty.setFilter('face', event.target.checked)}
          />Face
        </label>
        <label htmlFor="hair">
          <input
            type="checkbox"
            name="hair"
            id="hair"
            value="hair"
            onClick={event => this.props.beauty.setFilter('hair', event.target.checked)}
          />Hair
        </label>
        <label htmlFor="body">
          <input
            type="checkbox"
            name="body"
            id="body"
            value="body"
            onClick={event => this.props.beauty.setFilter('body', event.target.checked)}
          />Body
        </label>
      </div>
    );
  }
}

Categories.wrappedComponent.propTypes = {
  beauty: beautyPropType
};

Categories.wrappedComponent.defaultProps = {
  beauty: beautyPropTypeDefaults
};
