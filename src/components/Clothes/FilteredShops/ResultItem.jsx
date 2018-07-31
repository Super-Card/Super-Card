import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { mallPropType, mallPropTypeDefaults } from '../../../stores/ClothesData';

@inject('mall')
@observer
class Result extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemSelect = this.handleItemSelect.bind(this);
  }

  handleItemSelect = resultItem => {
    this.props.mall.setSelectedItem(resultItem);
  };

  render() {
    return (
      <div className="result-list-mall" onClick={() => this.handleItemSelect(this.props.resultItem)}>
        {this.props.resultItem.mallName}
      </div>
    );
  }

  render() {
    return (
      <div className="result-list-mall" onClick={() => this.handleItemSelect(this.props.resultItem)}>
        <div className="mall-name">{this.props.resultItem.mallName}</div>
        <img className="mall-img" src={this.props.resultItem.mallImage} alt="" />
        <img className="discount-mall" src={this.props.resultItem.discount} alt="" />
      </div>
    );
  }
}

Result.propTypes = {
  resultItem: PropTypes.shape({
    id: PropTypes.number,
    mallName: PropTypes.string,
    mallImage: PropTypes.string,
    discount: PropTypes.string
  }).isRequired
};

Result.wrappedComponent.propTypes = {
  mall: mallPropType
};

Result.wrappedComponent.defaultProps = {
  mall: mallPropTypeDefaults
};

export default Result;
