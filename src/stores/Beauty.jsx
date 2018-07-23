import { observable, action } from 'mobx';

import PropTypes from 'prop-types';

export class Beauty {
  @observable
  resultItems = [
    { id: 1, brand: 'Versace', logo: '', partner: 'Beauty Zone', discount: '20%' },
    { id: 2, brand: 'Versace', logo: '', partner: 'DM', discount: '10%' },
    { id: 3, brand: 'Versace', logo: '', partner: 'Lilly Drogerie', discount: '5%' },
    { id: 4, brand: 'Loreal', logo: '', partner: 'Beauty Zone', discount: '5%' },
    { id: 5, brand: 'Loreal', logo: '', partner: 'Lilly Drogerie', discount: '40%' },
    { id: 5, brand: 'Loreal', logo: '', partner: 'DM', discount: '25%' }
  ];

  @observable selectedItem = {};
  @action
  setSelectedItem(resultItem) {
    this.selectedItem = resultItem;
  }
}

export const beautyPropType = PropTypes.shape({
  resultItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      brand: PropTypes.string,
      logo: PropTypes.string,
      partner: PropTypes.string,
      discount: PropTypes.string
    })
  ),

  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    logo: PropTypes.string,
    partner: PropTypes.string,
    discount: PropTypes.string
  }),
  setSelectedItem: PropTypes.func
});

export const beautyPropTypeDefaults = {
  selectedItem: {},
  setSelectedItem: () => true,
  resultItems: []
};
