import React from 'react';
import { observer, inject } from 'mobx-react';
import { beautyPropType, beautyPropTypeDefaults } from '../../../stores/Beauty';
import './BeautyFilters.css';

@inject('beauty')
@observer
export default class Partners extends React.Component {
  render() {
    return (
      <div className="beauty-filters">
        <h3>Partners</h3>
        <label htmlFor="beautyzone">
          <input
            type="checkbox"
            name="beautyzone"
            id="beautyzone"
            value="beautyzone"
            onClick={() => this.props.beauty.setFilter('beautyzone')}
          />Beauty Zone
        </label>
        <label htmlFor="sephora">
          <input
            type="checkbox"
            name="sephora"
            id="sephora"
            value="sephora"
            onClick={() => this.props.beauty.setFilter('sephora')}
          />Sephora
        </label>
        <label htmlFor="douglas">
          <input
            type="checkbox"
            name="douglas"
            id="douglas"
            value="douglas"
            onClick={() => this.props.beauty.setFilter('douglas')}
          />Douglas
        </label>
        <label htmlFor="dm">
          <input type="checkbox" name="dm" id="dm" value="dm" onClick={() => this.props.beauty.setFilter('dm')} />DM
        </label>
        <label htmlFor="lillydrogerie">
          <input
            type="checkbox"
            name="lillydrogerie"
            id="lillydrogerie"
            value="lillydrogerie"
            onClick={() => this.props.beauty.setFilter('lillydrogerie')}
          />Lilly Drogerie
        </label>
      </div>
    );
  }
}
Partners.wrappedComponent.propTypes = {
  beauty: beautyPropType
};

Partners.wrappedComponent.defaultProps = {
  beauty: beautyPropTypeDefaults
};
