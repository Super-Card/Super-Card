import React from 'react';
import { observer, inject } from 'mobx-react';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';
import Item from './Item';

@inject('restaurants')
@observer
class ListItems extends React.Component {
  render() {
    return (
      <div className="locations-list">
        {this.props.restaurants.getLocations.map(location => <Item key={location.id} location={location} />)}
      </div>
    );
  }
}

ListItems.wrappedComponent.propTypes = {
  restaurants: restaurantsPropType
};

ListItems.wrappedComponent.defaultProps = {
  restaurants: restaurantsPropTypeDefaults
};

export default ListItems;
