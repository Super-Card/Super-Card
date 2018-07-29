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
        {this.props.resultItem.brandName}
      </div>
    );
  }
}

Result.propTypes = {
  resultItem: PropTypes.shape({
    id: PropTypes.number,
    brandName: PropTypes.string,
    brandImage: PropTypes.string,
    discount: PropTypes.string,
    logoPartner: PropTypes.string
  }).isRequired
};

Result.wrappedComponent.propTypes = {
  beauty: beautyPropType
};

Result.wrappedComponent.defaultProps = {
  beauty: beautyPropTypeDefaults
};

export default Result;
