import React from 'react';
import { observer, inject } from 'mobx-react';
import ListItems from './ListItems';
import Description from './Description';
import { appStatePropType, appStatePropTypeDefaults } from '../../../stores';

@inject('appState')
@observer
class Locations extends React.Component {
  render() {
    return (
      <div>
        <h2>Locations</h2>
        <ListItems />
        <Description location={this.props.appState.selectedLocation} />
      </div>
    );
  }
}

Locations.wrappedComponent.propTypes = {
  appState: appStatePropType
};

Locations.wrappedComponent.defaultProps = {
  appState: appStatePropTypeDefaults
};

export default Locations;
