import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { beautyPropType, beautyPropTypeDefaults } from '../../../stores/Beauty';

@inject('beauty')
@observer
class Result extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemSelect = this.handleItemSelect.bind(this);
  }

  handleItemSelect = resultItem => {
    this.props.beauty.setSelectedItem(resultItem);
  };

  render() {
    return (
      <div className="result-list-item" onClick={() => this.handleItemSelect(this.props.resultItem)}>
        <div className="brand-name">{this.props.resultItem.brandName}</div>
        <img className="brand-img" src={this.props.resultItem.brandImage} alt="" />
        <img className="discount-percent" src={this.props.resultItem.discountImage} alt="" />
        <img className="logo-partner" src={this.props.resultItem.logoPartner} alt="" />
      </div>
    );
  }
}

Result.propTypes = {
  resultItem: PropTypes.shape({
    id: PropTypes.number,
    brandName: PropTypes.string,
    brandImage: PropTypes.string,
    discountImage: PropTypes.string,
    logoPartner: PropTypes.string,
    discount: PropTypes.string,
    partner: PropTypes.string,
    gender: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};

Result.wrappedComponent.propTypes = {
  beauty: beautyPropType
};

Result.wrappedComponent.defaultProps = {
  beauty: beautyPropTypeDefaults
};

export default Result;
