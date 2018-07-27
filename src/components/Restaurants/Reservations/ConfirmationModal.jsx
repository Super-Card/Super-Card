import React from 'react';
/* import PropTypes from 'prop-types'; */
import { observer, inject } from 'mobx-react';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';

@inject('restaurants')
@observer
class ConfirmationModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleCloseModal = () => {
    this.props.restaurants.toggleModal();
    this.props.restaurants.resetReservation();
  };

  render() {
    return this.props.restaurants.getModalState ? (
      <div>
        <h1>Reservation Confirmation</h1>
        <p>Reservation number: {Math.floor(Math.random() * 1000) + 5000}</p>
        <p>You have a reservation at {this.props.restaurants.getReservedRestaurant.name} on at pm for people.</p>
        <button onClick={() => this.handleCloseModal()}>Close</button>
      </div>
    ) : (
      ''
    );
  }
}

ConfirmationModal.wrappedComponent.propTypes = {
  restaurants: restaurantsPropType
};

ConfirmationModal.wrappedComponent.defaultProps = {
  restaurants: restaurantsPropTypeDefaults
};

export default ConfirmationModal;
