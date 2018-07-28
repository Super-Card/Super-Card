import React from 'react';
import { observer, inject } from 'mobx-react';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';
import ListItems from './ListItems';
import Description from './Description';
import './locations.css';

@inject('restaurants')
@observer
class LocationsWrapper extends React.Component {
  render() {
    return (
      <div>
        <div className="restaurants-intro">
          <h1>Restaurants</h1>
          <p>
            SuperCard promises foodies a way to save money on restaurant bills. Call ahead to reserve a table, mention
            you are a cardholder and then, when you pay, show the card and a discount will be applied accordingly.
          </p>
        </div>
        <div className="locations-container">
          <ListItems />
          <Description location={this.props.restaurants.selectedLocation} />
        </div>
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
