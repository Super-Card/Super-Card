import React from 'react';
import { observer, inject } from 'mobx-react';
import { mallPropType, mallPropTypeDefaults } from '../../../../stores/ClothesData';
import './Discount.css';

@inject('mall')
@observer
export default class Discount extends React.Component {
  render() {
    return (
      <div className="discount-box">
        <h2>Discount:</h2>
        <div className="input-holder">
          <input type="checkbox" name="10%" id="10%" value="10%" onClick={() => this.props.mall.setFilter('10%')} />10%
        </div>
        <div className="input-holder">
          <input type="checkbox" name="10%" id="10%" value="15%" onClick={() => this.props.mall.setFilter('15%')} />15%
        </div>
        <div className="input-holder">
          <input type="checkbox" name="10%" id="10%" value="20%" onClick={() => this.props.mall.setFilter('20%')} />20%
        </div>
        <div className="input-holder">
          <input type="checkbox" name="10%" id="10%" value="25%" onClick={() => this.props.mall.setFilter('25%')} />25%
        </div>
        <div className="input-holder">
          <input type="checkbox" name="10%" id="10%" value="30%" onClick={() => this.props.mall.setFilter('30%')} />30%
        </div>
      </div>
    );
  }
}

Discount.wrappedComponent.propTypes = {
  mall: mallPropType
};

Discount.wrappedComponent.defaultProps = {
  mall: mallPropTypeDefaults
};
