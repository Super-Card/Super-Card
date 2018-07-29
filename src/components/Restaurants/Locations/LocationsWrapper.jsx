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
            SuperCard promises foodies a way to save money on restaurant bills. Book a table below, mention you are a
            cardholder at the restaurant and then, when you pay, show the card and a discount will be applied
            accordingly. Here are the locations where we offer discounts at.
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
