import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { appStatePropType, appStatePropTypeDefaults } from '../../../stores';

@inject('appState')
@observer
class Item extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemSelect = this.handleItemSelect.bind(this);
  }

  handleItemSelect = location => {
    this.props.appState.setSelectedLocation(location);
  };

  render() {
    return <button onClick={() => this.handleItemSelect(this.props.location)}>{this.props.location.name}</button>;
  }
}

Item.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string
  }).isRequired
};

Item.wrappedComponent.propTypes = {
  appState: appStatePropType
};

Item.wrappedComponent.defaultProps = {
  appState: appStatePropTypeDefaults
};

export default Item;
