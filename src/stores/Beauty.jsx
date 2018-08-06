import { observable, action, computed } from 'mobx';
import { intersection } from 'lodash';
import PropTypes from 'prop-types';

class Beauty {
  @computed
  get getResultItems() {
    let result = this.resultItems;

    if (this.filters.partners.length > 0) {
      result = result.filter(item => this.filters.partners.some(p => p === item.partner));

      if (result.length === 0) {
        return [];
      }
    }

    if (this.filters.discounts.length > 0) {
      result = result.filter(item => this.filters.discounts.some(p => p === item.discount));

      if (result.length === 0) {
        return [];
      }
    }

    if (this.filters.gender.length > 0) {
      result = result.filter(item => intersection(item.gender, this.filters.gender).length > 0);

      if (result.length === 0) {
        return [];
      }
    }

    if (this.filters.categories.length > 0) {
      result = result.filter(item => intersection(item.categories, this.filters.categories).length > 0);

      if (result.length === 0) {
        return [];
      }
    }

    return result;
  }

  @observable
  resultItems = [
    {
      id: 1,
      brandImage: '../../assets/beauty/dr-jacksons.png',
      brandName: 'Dr Jacksons',
      discountImage: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      discount: '10%',
      partner: 'beautyzone',
      gender: ['male', 'female'],
      categories: ['face']
    },
    {
      id: 2,
      brandImage: '../../assets/beauty/clarins.png',
      brandName: 'Clarins',
      discountImage: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      discount: '25%',
      partner: 'beautyzone',
      gender: ['male', 'female'],
      categories: ['face']
    },
    {
      id: 3,
      brandImage: '../../assets/beauty/1821-man-made.png',
      brandName: '18.21 Man Made',
      discountImage: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      discount: '20%',
      partner: 'beautyzone',
      gender: ['male'],
      categories: ['hair', 'face', 'body']
    },
    {
      id: 4,
      brandImage: '../../assets/beauty/ahava.png',
      brandName: 'AHAVA',
      discountImage: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      discount: '20%',
      partner: 'beautyzone',
      gender: ['male', 'female'],
      categories: ['hair', 'face', 'body']
    },
    {
      id: 5,
      brandImage: '../../assets/beauty/nioxin.png',
      brandName: 'NIOXIN',
      discountImage: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      discount: '30%',
      partner: 'beautyzone',
      gender: ['male', 'female'],
      categories: ['hair']
    },
    {
      id: 6,
      brandImage: '../../assets/beauty/kenra.png',
      brandName: 'Kenra',
      discountImage: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      discount: '15%',
      partner: 'beautyzone',
      gender: ['male', 'female'],
      categories: ['hair']
    },
    {
      id: 7,
      brandImage: '../../assets/beauty/tigi.png',
      brandName: 'TIGI',
      discountImage: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      discount: '15%',
      partner: 'sephora',
      gender: ['male'],
      categories: ['hair']
    },
    {
      id: 8,
      brandImage: '../../assets/beauty/american-crew.png',
      brandName: 'American Crew',
      discountImage: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      discount: '30%',
      partner: 'sephora',
      gender: ['male'],
      categories: ['hair']
    },
    {
      id: 9,
      brandImage: '../../assets/beauty/sebastian.png',
      brandName: 'Sebastian',
      discountImage: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      discount: '15%',
      partner: 'sephora',
      gender: ['male', 'female'],
      categories: ['hair']
    },
    {
      id: 10,
      brandImage: '../../assets/beauty/pureology.png',
      brandName: 'Pureology',
      discountImage: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      discount: '30%',
      partner: 'sephora',
      gender: ['male', 'female'],
      categories: ['hair']
    },
    {
      id: 11,
      brandImage: '../../assets/beauty/murad.png',
      brandName: 'Murad',
      discountImage: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      discount: '25%',
      partner: 'sephora',
      gender: ['female'],
      categories: ['face']
    },
    {
      id: 12,
      brandImage: '../../assets/beauty/philosophy.png',
      brandName: 'Philosophy',
      discountImage: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      discount: '20%',
      partner: 'sephora',
      gender: ['female'],
      categories: ['face', 'body']
    },
    {
      id: 13,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discountImage: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      discount: '20%',
      partner: 'sephora',
      gender: ['female'],
      categories: ['body']
    },
    {
      id: 14,
      brandImage: '../../assets/beauty/vita-liberata.png',
      brandName: 'Vita Liberata',
      discountImage: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      discount: '25%',
      partner: 'sephora',
      gender: ['female'],
      categories: ['body']
    },
    {
      id: 15,
      brandImage: '../../assets/beauty/sebastian.png',
      brandName: 'Sebastian',
      discountImage: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      discount: '25%',
      partner: 'douglas',
      gender: ['male', 'female'],
      categories: ['hair']
    },
    {
      id: 16,
      brandImage: '../../assets/beauty/pureology.png',
      brandName: 'Pureology',
      discountImage: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      discount: '10%',
      partner: 'douglas',
      gender: ['male', 'female'],
      categories: ['hair']
    },
    {
      id: 17,
      brandImage: '../../assets/beauty/galenic.png',
      brandName: 'Galenic',
      discountImage: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      discount: '25%',
      partner: 'douglas',
      gender: ['female'],
      categories: ['face']
    },
    {
      id: 18,
      brandImage: '../../assets/beauty/dermablend.png',
      brandName: 'Dermablend',
      discountImage: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      discount: '25%',
      partner: 'douglas',
      gender: ['female'],
      categories: ['face']
    },
    {
      id: 19,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discountImage: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      discount: '10%',
      partner: 'douglas',
      gender: ['female'],
      categories: ['body']
    },
    {
      id: 20,
      brandImage: '../../assets/beauty/hempz.png',
      brandName: 'Hempz',
      discountImage: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      discount: '25%',
      partner: 'douglas',
      gender: ['female'],
      categories: ['body', 'hair']
    },
    {
      id: 21,
      brandImage: '../../assets/beauty/moroccanoil.png',
      brandName: 'Moroccanoil',
      discountImage: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      discount: '10%',
      partner: 'douglas',
      gender: ['female'],
      categories: ['body', 'hair']
    },
    {
      id: 22,
      brandImage: '../../assets/beauty/tigi.png',
      brandName: 'TIGI',
      discountImage: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      discount: '25%',
      partner: 'dm',
      gender: ['male'],
      categories: ['hair']
    },
    {
      id: 23,
      brandImage: '../../assets/beauty/american-crew.png',
      brandName: 'American Crew',
      discountImage: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      discount: '20%',
      partner: 'dm',
      gender: ['male'],
      categories: ['hair']
    },
    {
      id: 24,
      brandImage: '../../assets/beauty/sebastian.png',
      brandName: 'Sebastian',
      discountImage: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      discount: '20%',
      partner: 'dm',
      gender: ['male', 'female'],
      categories: ['hair']
    },
    {
      id: 25,
      brandImage: '../../assets/beauty/dermablend.png',
      brandName: 'Dermablend',
      discountImage: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      discount: '10%',
      partner: 'dm',
      gender: ['female'],
      categories: ['face']
    },
    {
      id: 26,
      brandImage: '../../assets/beauty/elizabeth-arden.png',
      brandName: 'Elizabeth Arden',
      discountImage: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      discount: '10%',
      partner: 'dm',
      gender: ['female'],
      categories: ['face', 'body']
    },
    {
      id: 27,
      brandImage: '../../assets/beauty/philosophy.png',
      brandName: 'Philosophy',
      discountImage: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      discount: '15%',
      partner: 'dm',
      gender: ['female'],
      categories: ['face', 'body']
    },
    {
      id: 28,
      brandImage: '../../assets/beauty/galenic.png',
      brandName: 'Galenic',
      discountImage: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      discount: '15%',
      partner: 'lillydrogerie',
      gender: ['female'],
      categories: ['face']
    },
    {
      id: 29,
      brandImage: '../../assets/beauty/murad.png',
      brandName: 'Murad',
      discountImage: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      discount: '15%',
      partner: 'lillydrogerie',
      gender: ['female'],
      categories: ['face']
    },
    {
      id: 30,
      brandImage: '../../assets/beauty/elizabeth-arden.png',
      brandName: 'Elizabeth Arden',
      discountImage: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      discount: '20%',
      partner: 'lillydrogerie',
      gender: ['female'],
      categories: ['face', 'body']
    },
    {
      id: 31,
      brandImage: '../../assets/beauty/philosophy.png',
      brandName: 'Philosophy',
      discountImage: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      discount: '10%',
      partner: 'lillydrogerie',
      gender: ['female'],
      categories: ['face', 'body']
    },
    {
      id: 32,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discountImage: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      discount: '10%',
      partner: 'lillydrogerie',
      gender: ['female'],
      categories: ['body']
    },
    {
      id: 33,
      brandImage: '../../assets/beauty/moroccanoil.png',
      brandName: 'Moroccanoil',
      discountImage: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      discount: '10%',
      partner: 'lillydrogerie',
      gender: ['female'],
      categories: ['body', 'hair']
    }
  ];

  @observable selectedItem = {};
  @observable filters = { discounts: [], partners: [], gender: [], categories: [] };
  @action
  setSelectedItem(resultItem) {
    this.selectedItem = resultItem;
  }

  @action
  setFilter(type, filter, isChecked) {
    if (isChecked) {
      this.filters[type].push(filter);
    } else {
      this.filters[type].remove(filter);
    }
  }
}

const beautyPropType = PropTypes.shape({
  resultItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      brandImage: PropTypes.string,
      brandName: PropTypes.string,
      discountImage: PropTypes.string,
      logoPartner: PropTypes.string,
      discount: PropTypes.string,
      partner: PropTypes.string,
      gender: PropTypes.arrayOf(PropTypes.string),
      categories: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    brandImage: PropTypes.string,
    brandName: PropTypes.string,
    discountImage: PropTypes.string,
    logoPartner: PropTypes.string,
    discount: PropTypes.string,
    partner: PropTypes.string,
    gender: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string)
  }),
  setSelectedItem: PropTypes.func,
  getResultItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      brandImage: PropTypes.string,
      brandName: PropTypes.string,
      discountImage: PropTypes.string,
      logoPartner: PropTypes.string,
      discount: PropTypes.string,
      partner: PropTypes.string,
      gender: PropTypes.arrayOf(PropTypes.string),
      categories: PropTypes.arrayOf(PropTypes.string)
    })
  ),
  filters: PropTypes.shape({
    discounts: PropTypes.arrayOf(PropTypes.string),
    partners: PropTypes.arrayOf(PropTypes.string),
    gender: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string)
  }),
  setFilter: PropTypes.func
});

const beautyPropTypeDefaults = {
  resultItems: [],
  selectedItem: {},
  getResultItems: [],
  setSelectedItem: () => true,
  filters: {},
  setFilter: () => true
};

export { Beauty, beautyPropType, beautyPropTypeDefaults };
