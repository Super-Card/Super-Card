import React from 'react';
import { observer, inject } from 'mobx-react';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';
import Location from './Location';

@inject('restaurants')
@observer
class SelectLocation extends React.Component {
  render() {
    return (
      <div>
        <p className="location-text">Please select a restaurant:</p>
        <div className="location-list">
          {this.props.restaurants.getLocations.map(location => <Location key={location.id} location={location} />)}
        </div>
      </div>
    );
  }
}

SelectLocation.wrappedComponent.propTypes = {
  restaurants: restaurantsPropType
};

SelectLocation.wrappedComponent.defaultProps = {
  restaurants: restaurantsPropTypeDefaults
};

export default SelectLocation;
