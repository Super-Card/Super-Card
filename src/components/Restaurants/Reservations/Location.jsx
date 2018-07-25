import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
/* import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants'; */

@inject('restaurants')
@observer
class Location extends React.Component {
  render() {
    return <button className="location-button">{this.props.location.name}</button>;
  }
}

Location.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string,
    photo: PropTypes.string
  }).isRequired
};

/* Location.wrappedComponent.propTypes = {
  restaurants: restaurantsPropType
};

Location.wrappedComponent.defaultProps = {
  restaurants: restaurantsPropTypeDefaults
}; */

export default Location;
