import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { techPropType, techPropTypeDefaults } from '../../../stores/Tech';

@inject('tech')
@observer
class ResultList extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemSelect = this.handleItemSelect.bind(this);
  }

  handleItemSelect = category => {
    this.props.tech.setSelectedItem(category);
  };

  render() {
    return (
      <div className="category-list-item" onClick={() => this.handleItemSelect(this.props.category)}>
        {this.props.category.title}
      </div>
    );
  }
}
ResultList.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
    photo: PropTypes.string
  }).isRequired
};

ResultList.wrappedComponent.propTypes = {
  tech: techPropType
};

ResultList.wrappedComponent.defaultProps = {
  tech: techPropTypeDefaults
};

export default ResultList;
