import React from 'react';
/* import PropTypes from 'prop-types'; */
import {
  observer,
  inject
} from 'mobx-react'; /* 
import { restaurantsPropType, restaurantsPropTypeDefaults } from '../../../stores/Restaurants'; */

@inject('restaurants')
@observer
class ConfirmationModal extends React.Component {
  render() {
    return <div>heeeeey</div>;
  }
}

export default ConfirmationModal;
