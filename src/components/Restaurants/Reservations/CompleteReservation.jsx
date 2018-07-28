import React from 'react';
import { observer, inject } from 'mobx-react';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';
import ConfirmationModal from './ConfirmationModal';

@inject('restaurants')
@observer
class CompleteReservation extends React.Component {
  constructor(props) {
    super(props);

    this.filledOut = this.filledOut.bind(this);
  }

  filledOut = () => this.props.restaurants.getReservedRestaurant.name && this.props.restaurants.getSelectedDate;

  render() {
    return (
      <div>
        <div className="reservation-complete">
          <button
            className={this.filledOut() ? 'reservation-confirm' : 'reservation-disabled'}
            onClick={this.filledOut() ? () => this.props.restaurants.toggleModal() : () => ''}
          >
            Complete Reservation
          </button>
          <button onClick={() => this.props.restaurants.resetReservation()} className="reservation-clear">
            Clear
          </button>
        </div>
        <ConfirmationModal />
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
