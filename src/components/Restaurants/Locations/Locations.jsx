import React from 'react';
import { observer, inject } from 'mobx-react';
import ListItems from './ListItems';
import Description from './Description';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';

@inject('restaurants')
@observer
class Locations extends React.Component {
  render() {
    return (
      <div>
        <h2>Locations</h2>
        <ListItems />
        <Description location={this.props.restaurants.selectedLocation} />
      </div>
    );
  }
}

Locations.wrappedComponent.propTypes = {
  restaurants: restaurantsPropType
};

Locations.wrappedComponent.defaultProps = {
  restaurants: restaurantsPropTypeDefaults
};

export default Locations;
