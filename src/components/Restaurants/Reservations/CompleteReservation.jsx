import React from 'react';
/* import PropTypes from 'prop-types'; */
import { observer, inject } from 'mobx-react';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';

@inject('restaurants')
@observer
class CompleteReservation extends React.Component {
  render() {
    return (
      <div className="reservation-complete">
        <button
          className={this.props.restaurants.getReservedRestaurant.name ? 'reservation-confirm' : 'reservation-disabled'}
        >
          Complete Reservation
        </button>
        <button onClick={() => this.props.restaurants.resetReservation()} className="reservation-clear">
          Clear
        </button>
      </div>
    );
  }
}

CompleteReservation.wrappedComponent.propTypes = {
  restaurants: restaurantsPropType
};

CompleteReservation.wrappedComponent.defaultProps = {
  restaurants: restaurantsPropTypeDefaults
};

export default CompleteReservation;
