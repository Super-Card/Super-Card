import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';

@inject('restaurants')
@observer
class Item extends React.Component {
  constructor(props) {
    super(props);

    this.handleItemSelect = this.handleItemSelect.bind(this);
  }

  handleItemSelect = location => {
    this.props.restaurants.setSelectedLocation(location);
  };

  render() {
    return <button onClick={() => this.handleItemSelect(this.props.location)}>{this.props.location.name}</button>;
  }
}

Item.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string,
    photo: PropTypes.string
  }).isRequired
};

Item.wrappedComponent.propTypes = {
  restaurants: restaurantsPropType
};

Item.wrappedComponent.defaultProps = {
  restaurants: restaurantsPropTypeDefaults
};

export default Item;
