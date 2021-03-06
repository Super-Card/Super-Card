import React from 'react';
import { observer, inject } from 'mobx-react';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';

@inject('restaurants')
@observer
class SelectPeople extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.restaurants.setSelectedPeople(event.target.value);
  }

  render() {
    return (
      <div className="reservations-people">
        <form>
          <input
            type="number"
            min="1"
            max="10"
            step="1"
            onChange={this.handleChange}
            value={this.props.restaurants.getSelectedPeople}
            className="reservations-people__input"
            placeholder="Number of people"
          />
        </form>
      </div>
    );
  }
}

SelectPeople.wrappedComponent.propTypes = {
  restaurants: restaurantsPropType
};

SelectPeople.wrappedComponent.defaultProps = {
  restaurants: restaurantsPropTypeDefaults
};

export default SelectPeople;
