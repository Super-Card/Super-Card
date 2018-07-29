import React from 'react';
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
      <div className="confirmation-modal-bcg">
        <div className="confirmation-modal">
          <h2 className="confirmation-title">Reservation Confirmation</h2>
          <p>Reservation number: {Math.floor(Math.random() * 1000) + 5000}</p>
          <p>
            You have successfully booked a table at <strong>{this.props.restaurants.getReservedRestaurant.name}</strong>{' '}
            on <strong>{this.props.restaurants.getSelectedDate.toLocaleDateString('en-US')}</strong> at{' '}
            <strong>{`${this.props.restaurants.getSelectedTime.hour}:${
              this.props.restaurants.getSelectedTime.minute
            }`}</strong>{' '}
            for {this.props.restaurants.getSelectedPeople}{' '}
            {this.props.restaurants.getSelectedPeople === '1' ? 'person' : 'people'}.
          </p>
          <button onClick={() => this.handleCloseModal()} className="reservation-confirm confirmation-close">
            Close
          </button>
        </div>
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
