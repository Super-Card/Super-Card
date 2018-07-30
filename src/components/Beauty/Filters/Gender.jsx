import React from 'react';
import { observer, inject } from 'mobx-react';
import { beautyPropType, beautyPropTypeDefaults } from '../../../stores/Beauty';
import './BeautyFilters.css';

@inject('beauty')
@observer
export default class Gender extends React.Component {
  render() {
    return (
      <div className="beauty-filters">
        <h3>Gender</h3>
        <label htmlFor="male">
          <input
            type="checkbox"
            name="male"
            id="male"
            value="male"
            onClick={() => this.props.beauty.setFilter('male')}
          />Male
        </label>
        <label htmlFor="female">
          <input
            type="checkbox"
            name="female"
            id="female"
            value="female"
            onClick={() => this.props.beauty.setFilter('female')}
          />Female
        </label>
      </div>
    );
  }
}
