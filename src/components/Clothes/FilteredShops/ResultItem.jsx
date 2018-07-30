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
      <div className="result-list-item" onClick={() => this.handleItemSelect(this.props.resultItem)}>
        {this.props.resultItem.mallName}
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
