import { observable, action, computed } from 'mobx';
import { intersection } from 'lodash';
import PropTypes from 'prop-types';

class Malls {
  @computed
  get getResultItems() {
    if (this.filters.length) {
      return this.resultItems.filter(i => i.tags && intersection(i.tags, this.filters).length > 0);
    }
      return [];

  }

  @observable
  resultItems = [
    {
      id: 1,
      mallImage: '../../assets/clothes/paradise.jpg',
      mallName: 'Paradise Mall',
      discount: '10%',
      tags: ['Armani', 'Sofia', '15%']
    },
    {
      id: 2,
      mallImage: '../../assets/clothes/serdika.jpg',
      mallName: 'Mall Serdika',
      discount: '10%',
      tags: ['Versace', 'Sofia', '10%']
    },
    {
      id: 3,
      mallImage: '../../assets/clothes/plovdiv.jpeg',
      mallName: 'Mall Plovdiv',
      discount: '10%',
      tags: ['Hugo Boss', 'Plovdiv', '15%']
    },
    {
      id: 4,
      mallImage: '../../assets/clothes/burgas.jpg',
      mallName: 'Burgas',
      discount: '25%',
      tags: ['Prada', 'Burgas', '25%']
    },
    {
      id: 5,
      mallImage: '../../assets/clothes/varna.jpg',
      mallName: 'Mall Varna',
      discount: '10%',
      tags: ['Dolce and Gabanna', 'Varna', '20%']
    },
    {
      id: 6,
      mallImage: '../../assets/clothes/zagora.jpg',
      mallName: 'Mall Stara Zagora',
      discount: '10%',
      tags: ['Stara Zagora', 'Stara Zagora', '30%']
    }
  ];

  @observable selectedItem = {};

  @observable filters = [];

  @action
  setSelectedItem(resultItem) {
    this.selectedItem = resultItem;
  }

  @action
  setFilter(filter) {
    this.filters.push(filter);
  }

  @action
  resetFilters() {
    this.filters = [];
  }
}

const mallPropType = PropTypes.shape({
  resetFilters: PropTypes.arrayOf(PropTypes.string),
  resultItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      mallImage: PropTypes.string,
      mallName: PropTypes.string,
      discount: PropTypes.string
    })
  ),
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    mallImage: PropTypes.string,
    mallName: PropTypes.string,
    discount: PropTypes.string
  }),
  setSelectedItem: PropTypes.func,
  getResultItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      mallImage: PropTypes.string,
      mallName: PropTypes.string,
      discount: PropTypes.string
    })
  )
});

const mallPropTypeDefaults = {
  filters: [],
  resultItems: [],
  selectedItem: {},
  getResultItems: [],
  setSelectedItem: () => true
};

export { Malls, mallPropType, mallPropTypeDefaults };
