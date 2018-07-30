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
            onClick={() => this.props.beauty.setFilter('face')}
          />Face
        </label>
        <label htmlFor="hair">
          <input
            type="checkbox"
            name="hair"
            id="hair"
            value="hair"
            onClick={() => this.props.beauty.setFilter('hair')}
          />Hair
        </label>
        <label htmlFor="body">
          <input
            type="checkbox"
            name="body"
            id="body"
            value="body"
            onClick={() => this.props.beauty.setFilter('body')}
          />Body
        </label>
      </div>
    );
  }
}
