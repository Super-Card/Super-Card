import React from 'react';
import { observer, inject } from 'mobx-react';
import { appStatePropType, appStatePropTypeDefaults } from '../stores';
import Item from './Item';

@inject('appState')
@observer
class ListItems extends React.Component {
  render() {
    return this.props.appState.getLocations ? (
      <ul>{this.props.appState.getLocations.map(location => <Item key={location.id} location={location} />)}</ul>
    ) : (
      <ul>
        <li>No found items.</li>
      </ul>
    );
  }
}

ListItems.wrappedComponent.propTypes = {
  appState: appStatePropType
};

ListItems.wrappedComponent.defaultProps = {
  appState: appStatePropTypeDefaults
};

export default ListItems;
