import { observable, action, computed } from 'mobx';
import PropTypes from 'prop-types';

class Restaurants {
  @computed
  get getLocations() {
    return this.locations;
  }

  @observable
  locations = [
    { id: 1, name: 'Raffy Terrace Bar', desc: 'bla bla', photo: '../../assets/restaurants/raffy.jpg' },
    { id: 2, name: 'Spaghetti Kitchen', desc: 'kla kla', photo: '../../assets/restaurants/spaghettikitchen.jpg' },
    { id: 3, name: 'La Bocca', desc: 'kla kla', photo: '../../assets/restaurants/labocca.jpg' },
    { id: 4, name: 'BMS Cuisine', desc: 'kla kla', photo: '../../assets/restaurants/bms.jpg' },
    { id: 5, name: 'Nordsee', desc: 'kla kla', photo: '../../assets/restaurants/nordsee.jpg' },
    { id: 6, name: 'Casavino', desc: 'kla kla', photo: '../../assets/restaurants/casavino.jpg' }
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
      desc: PropTypes.string,
      photo: PropTypes.string
    })
  ),
  selectedLocation: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string,
    photo: PropTypes.string
  }),
  setSelectedLocation: PropTypes.func,
  getLocations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      desc: PropTypes.string,
      photo: PropTypes.string
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
