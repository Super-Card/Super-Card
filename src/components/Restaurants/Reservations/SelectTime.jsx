import React from 'react';
import TimePicker from 'react-times';
import 'react-times/css/classic/default.css';
import { observer, inject } from 'mobx-react';
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants';

@inject('restaurants')
@observer
class SelectTime extends React.Component {
  constructor(props) {
    super(props);
    
    this.onTimeChange = this.onTimeChange.bind(this);
  }

  onTimeChange(options) {
    const { hour, minute } = options;

    this.props.restaurants.setSelectedTime({ hour, minute });
  }
  
  render() {
    return (
      <div>
        <TimePicker
          theme="classic"
          timeMode="24"
          timeConfig={{
            from: '12:00',
            to: '22:00',
            step: 30,
            unit: 'minutes'
          }}
          onTimeChange={this.onTimeChange}
          time={
            this.props.restaurants.getSelectedTime.hour && this.props.restaurants.getSelectedTime.minute
              ? `${this.props.restaurants.getSelectedTime.hour}:${this.props.restaurants.getSelectedTime.minute}`
              : null
          }
        />
      </div>
    );
  }
}

SelectTime.wrappedComponent.propTypes = {
  restaurants: restaurantsPropType
};

SelectTime.wrappedComponent.defaultProps = {
  restaurants: restaurantsPropTypeDefaults
};

export default SelectTime;
