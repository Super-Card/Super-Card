import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';

@inject('restaurants')
@observer
class Location extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectRestaurant = this.handleSelectRestaurant.bind(this);
  }

  handleSelectRestaurant = location => {
    this.props.restaurants.setReservedRestaurant(location);
  };

  render() {
    return (
      <button
        onClick={() => this.handleSelectRestaurant(this.props.location)}
        className={
          this.props.restaurants.getReservedRestaurant.name === this.props.location.name
            ? 'location-button--selected'
            : 'location-button'
        }
      >
        {this.props.location.name}
      </button>
    );
  }
}

Location.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string,
    photo: PropTypes.string
  }).isRequired,
  getReservedRestaurant: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string,
    photo: PropTypes.string
  })
};

Location.defaultProps = {
  getReservedRestaurant: {}
};

Location.wrappedComponent.propTypes = {
  restaurants: restaurantsPropType
};

Location.wrappedComponent.defaultProps = {
  restaurants: restaurantsPropTypeDefaults
};

export default Location;
