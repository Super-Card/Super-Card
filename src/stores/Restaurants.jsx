import { observable, action, computed } from 'mobx';
import PropTypes from 'prop-types';

class Restaurants {
  @computed
  get getLocations() {
    return this.locations;
  }

  @observable
  locations = [
    { id: 1, name: 'Raffy Terrace Bar', desc: 'bla bla' },
    { id: 2, name: 'Spaghetti Kitchen', desc: 'kla kla' },
    { id: 3, name: 'La Bocca', desc: 'kla kla' },
    { id: 4, name: 'BMS Cuisine', desc: 'kla kla' },
    { id: 5, name: 'Nordsee', desc: 'kla kla' },
    { id: 6, name: 'Casavino', desc: 'kla kla' }
  ];

  @observable selectedLocation = {};

  @action
  setSelectedLocation(location) {
    this.selectedLocation = location;
  }
}

const restaurantsPropType = PropTypes.shape({
  locations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      desc: PropTypes.string
      // photo: PropTypes.string
    })
  ),
  selectedLocation: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string
    // photo: PropTypes.string
  }),
  setSelectedLocation: PropTypes.func,
  getLocations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      desc: PropTypes.string
      // photo: PropTypes.string
    })
  )
});

const restaurantsPropTypeDefaults = {
  locations: [],
  selectedLocation: {},
  getLocations: [],
  setSelectedLocation: () => true
};

export { Restaurants, restaurantsPropType, restaurantsPropTypeDefaults };
