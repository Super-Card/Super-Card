import React from 'react';
import { observer, inject } from 'mobx-react';
import ListItems from './ListItems';
import Description from './Description';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';

@inject('restaurants')
@observer
class LocationsWrapper extends React.Component {
  render() {
    return (
      <div className="locations-container">
        <ListItems />
        <Description location={this.props.restaurants.selectedLocation} />
      </div>
    );
  }
}

LocationsWrapper.wrappedComponent.propTypes = {
  restaurants: restaurantsPropType
};

LocationsWrapper.wrappedComponent.defaultProps = {
  restaurants: restaurantsPropTypeDefaults
};

export default LocationsWrapper;
