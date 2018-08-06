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
            onClick={event => this.props.beauty.setFilter('partners', 'beautyzone', event.target.checked)}
          />Beauty Zone
        </label>
        <label htmlFor="sephora">
          <input
            type="checkbox"
            name="sephora"
            id="sephora"
            value="sephora"
            onClick={event => this.props.beauty.setFilter('partners', 'sephora', event.target.checked)}
          />Sephora
        </label>
        <label htmlFor="douglas">
          <input
            type="checkbox"
            name="douglas"
            id="douglas"
            value="douglas"
            onClick={event => this.props.beauty.setFilter('partners', 'douglas', event.target.checked)}
          />Douglas
        </label>
        <label htmlFor="dm">
          <input
            type="checkbox"
            name="dm"
            id="dm"
            value="dm"
            onClick={event => this.props.beauty.setFilter('partners', 'dm', event.target.checked)}
          />DM
        </label>
        <label htmlFor="lillydrogerie">
          <input
            type="checkbox"
            name="lillydrogerie"
            id="lillydrogerie"
            value="lillydrogerie"
            onClick={event => this.props.beauty.setFilter('partners', 'lillydrogerie', event.target.checked)}
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
