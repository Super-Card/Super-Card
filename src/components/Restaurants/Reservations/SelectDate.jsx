import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { observer, inject } from 'mobx-react';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';

@inject('restaurants')
@observer
class SelectDate extends React.Component {
  constructor(props) {
    super(props);

    this.handleDayChange = this.handleDayChange.bind(this);
  }

  handleDayChange(day) {
    this.props.restaurants.setSelectedDate(day);
  }

  render() {
    const today = new Date();

    return (
      <div>
        <DayPickerInput
          onDayChange={this.handleDayChange}
          value={this.props.restaurants.getSelectedDate}
          placeholder="Select a date"
          dayPickerProps={{ disabledDays: { before: today } }}
        />
      </div>
    );
  }
}

SelectDate.wrappedComponent.propTypes = {
  restaurants: restaurantsPropType
};

SelectDate.wrappedComponent.defaultProps = {
  restaurants: restaurantsPropTypeDefaults
};

export default SelectDate;
