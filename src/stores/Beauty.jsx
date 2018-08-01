import { observable, action, computed } from 'mobx';
import { intersection } from 'lodash';
import PropTypes from 'prop-types';

class Beauty {
  static refBody = 'body';

  @computed
  get getResultItems() {
    if (this.filters.length) {
      return this.resultItems.filter(i => i.tags && intersection(i.tags, this.filters).length === this.filters.length);
    }

    return this.resultItems;
  }
  @observable
  resultItems = [
    {
      id: 1,
      brandImage: '../../assets/beauty/dr-jacksons.png',
      brandName: 'Dr Jacksons',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['10%', 'beautyzone', 'male', 'female', 'face']
    },
    {
      id: 2,
      brandImage: '../../assets/beauty/clarins.png',
      brandName: 'Clarins',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['25%', 'beautyzone', 'male', 'female', 'face']
    },
    {
      id: 3,
      brandImage: '../../assets/beauty/1821-man-made.png',
      brandName: '18.21 Man Made',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['20%', 'beautyzone', 'male', 'hair', 'face', 'body']
    },
    {
      id: 4,
      brandImage: '../../assets/beauty/ahava.png',
      brandName: 'AHAVA',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['20%', 'beautyzone', 'male', 'female', 'hair', 'face', 'body']
    },
    {
      id: 5,
      brandImage: '../../assets/beauty/nioxin.png',
      brandName: 'NIOXIN',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['30%', 'beautyzone', 'male', 'female', 'hair']
    },
    {
      id: 6,
      brandImage: '../../assets/beauty/kenra.png',
      brandName: 'Kenra',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['10%', 'beautyzone', 'male', 'female', 'hair']
    },
    {
      id: 7,
      brandImage: '../../assets/beauty/tigi.png',
      brandName: 'TIGI',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['25%', 'beautyzone', 'male', 'hair']
    },
    {
      id: 8,
      brandImage: '../../assets/beauty/american-crew.png',
      brandName: 'American Crew',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['20%', 'beautyzone', 'male', 'hair']
    },
    {
      id: 9,
      brandImage: '../../assets/beauty/sebastian.png',
      brandName: 'Sebastian',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['10%', 'beautyzone', 'male', 'female', 'hair']
    },
    {
      id: 10,
      brandImage: '../../assets/beauty/pureology.png',
      brandName: 'Pureology',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['30%', 'beautyzone', 'male', 'female', 'hair']
    },
    {
      id: 11,
      brandImage: '../../assets/beauty/galenic.png',
      brandName: 'Galenic',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['10%', 'beautyzone', 'female', 'face']
    },
    {
      id: 12,
      brandImage: '../../assets/beauty/dermablend.png',
      brandName: 'Dermablend',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['15%', 'beautyzone', 'female', 'face']
    },
    {
      id: 13,
      brandImage: '../../assets/beauty/murad.png',
      brandName: 'Murad',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['25%', 'beautyzone', 'female', 'face']
    },
    {
      id: 14,
      brandImage: '../../assets/beauty/elizabeth-arden.png',
      brandName: 'Elizabeth Arden',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['20%', 'beautyzone', 'female', 'face', 'body']
    },
    {
      id: 15,
      brandImage: '../../assets/beauty/philosophy.png',
      brandName: 'Philosophy',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['30%', 'beautyzone', 'female', 'face', 'body']
    },
    {
      id: 16,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['15%', 'beautyzone', 'female', 'body']
    },
    {
      id: 17,
      brandImage: '../../assets/beauty/vita-liberata.png',
      brandName: 'Vita Liberata',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['15%', 'beautyzone', 'female', 'body']
    },
    {
      id: 18,
      brandImage: '../../assets/beauty/hempz.png',
      brandName: 'Hempz',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['25%', 'beautyzone', 'female', 'body', 'hair']
    },
    {
      id: 19,
      brandImage: '../../assets/beauty/moroccanoil.png',
      brandName: 'Moroccanoil',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png',
      tags: ['30%', 'beautyzone', 'female', 'body', 'hair']
    },
    {
      id: 20,
      brandImage: '../../assets/beauty/dr-jacksons.png',
      brandName: 'Dr Jacksons',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['10%', 'sephora', 'male', 'female', 'face']
    },
    {
      id: 21,
      brandImage: '../../assets/beauty/clarins.png',
      brandName: 'Clarins',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['25%', 'sephora', 'male', 'female', 'face']
    },
    {
      id: 22,
      brandImage: '../../assets/beauty/1821-man-made.png',
      brandName: '18.21 Man Made',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['10%', 'sephora', 'male', 'hair', 'face', 'body']
    },
    {
      id: 23,
      brandImage: '../../assets/beauty/ahava.png',
      brandName: 'AHAVA',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['30%', 'sephora', 'male', 'female', 'hair', 'face', 'body']
    },
    {
      id: 24,
      brandImage: '../../assets/beauty/nioxin.png',
      brandName: 'NIOXIN',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['15%', 'sephora', 'male', 'female', 'hair']
    },
    {
      id: 25,
      brandImage: '../../assets/beauty/kenra.png',
      brandName: 'Kenra',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['25%', 'sephora', 'male', 'female', 'hair']
    },
    {
      id: 26,
      brandImage: '../../assets/beauty/tigi.png',
      brandName: 'TIGI',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['15%', 'sephora', 'male', 'hair']
    },
    {
      id: 27,
      brandImage: '../../assets/beauty/american-crew.png',
      brandName: 'American Crew',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['30%', 'sephora', 'male', 'hair']
    },
    {
      id: 28,
      brandImage: '../../assets/beauty/sebastian.png',
      brandName: 'Sebastian',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['15%', 'sephora', 'male', 'female', 'hair']
    },
    {
      id: 29,
      brandImage: '../../assets/beauty/pureology.png',
      brandName: 'Pureology',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['30%', 'sephora', 'male', 'female', 'hair']
    },
    {
      id: 30,
      brandImage: '../../assets/beauty/galenic.png',
      brandName: 'Galenic',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['15%', 'sephora', 'female', 'face']
    },
    {
      id: 31,
      brandImage: '../../assets/beauty/dermablend.png',
      brandName: 'Dermablend',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['25%', 'sephora', 'female', 'face']
    },
    {
      id: 32,
      brandImage: '../../assets/beauty/murad.png',
      brandName: 'Murad',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['25%', 'sephora', 'female', 'face']
    },
    {
      id: 33,
      brandImage: '../../assets/beauty/elizabeth-arden.png',
      brandName: 'Elizabeth Arden',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['30%', 'sephora', 'female', 'face', 'body']
    },
    {
      id: 34,
      brandImage: '../../assets/beauty/philosophy.png',
      brandName: 'Philosophy',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['20%', 'sephora', 'female', 'face', 'body']
    },
    {
      id: 35,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['20%', 'sephora', 'female', 'body']
    },
    {
      id: 36,
      brandImage: '../../assets/beauty/vita-liberata.png',
      brandName: 'Vita Liberata',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['25%', 'sephora', 'female', 'body']
    },
    {
      id: 37,
      brandImage: '../../assets/beauty/hempz.png',
      brandName: 'Hempz',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['15%', 'sephora', 'female', 'body', 'hair']
    },
    {
      id: 38,
      brandImage: '../../assets/beauty/moroccanoil.png',
      brandName: 'Moroccanoil',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-sephora.png',
      tags: ['20%', 'sephora', 'female', 'body', 'hair']
    },
    {
      id: 39,
      brandImage: '../../assets/beauty/dr-jacksons.png',
      brandName: 'Dr Jacksons',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['15%', 'douglas', 'male', 'female', 'face']
    },
    {
      id: 40,
      brandImage: '../../assets/beauty/clarins.png',
      brandName: 'Clarins',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['15%', 'douglas', 'male', 'female', 'face']
    },
    {
      id: 41,
      brandImage: '../../assets/beauty/1821-man-made.png',
      brandName: '18.21 Man Made',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['25%', 'douglas', 'male', 'hair', 'face', 'body']
    },
    {
      id: 42,
      brandImage: '../../assets/beauty/ahava.png',
      brandName: 'AHAVA',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['15%', 'douglas', 'male', 'female', 'hair', 'face', 'body']
    },
    {
      id: 43,
      brandImage: '../../assets/beauty/nioxin.png',
      brandName: 'NIOXIN',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['15%', 'douglas', 'male', 'female', 'hair']
    },
    {
      id: 44,
      brandImage: '../../assets/beauty/kenra.png',
      brandName: 'Kenra',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['25%', 'douglas', 'male', 'female', 'hair']
    },
    {
      id: 45,
      brandImage: '../../assets/beauty/tigi.png',
      brandName: 'TIGI',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['15%', 'douglas', 'male', 'hair']
    },
    {
      id: 46,
      brandImage: '../../assets/beauty/sebastian.png',
      brandName: 'Sebastian',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['25%', 'douglas', 'male', 'female', 'hair']
    },
    {
      id: 47,
      brandImage: '../../assets/beauty/pureology.png',
      brandName: 'Pureology',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['10%', 'douglas', 'male', 'female', 'hair']
    },
    {
      id: 48,
      brandImage: '../../assets/beauty/galenic.png',
      brandName: 'Galenic',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['25%', 'douglas', 'female', 'face']
    },
    {
      id: 49,
      brandImage: '../../assets/beauty/dermablend.png',
      brandName: 'Dermablend',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['25%', 'douglas', 'female', 'face']
    },
    {
      id: 50,
      brandImage: '../../assets/beauty/murad.png',
      brandName: 'Murad',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['15%', 'douglas', 'female', 'face']
    },
    {
      id: 51,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['10%', 'douglas', 'female', 'body']
    },
    {
      id: 52,
      brandImage: '../../assets/beauty/hempz.png',
      brandName: 'Hempz',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['25%', 'douglas', 'female', 'body', 'hair']
    },
    {
      id: 53,
      brandImage: '../../assets/beauty/moroccanoil.png',
      brandName: 'Moroccanoil',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-douglas.png',
      tags: ['10%', 'douglas', 'female', 'body', 'hair']
    },
    {
      id: 54,
      brandImage: '../../assets/beauty/dr-jacksons.png',
      brandName: 'Dr Jacksons',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['20%', 'dm', 'male', 'female', 'face']
    },
    {
      id: 55,
      brandImage: '../../assets/beauty/clarins.png',
      brandName: 'Clarins',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['15%', 'dm', 'male', 'female', 'face']
    },
    {
      id: 56,
      brandImage: '../../assets/beauty/ahava.png',
      brandName: 'AHAVA',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['10%', 'dm', 'male', 'female', 'hair', 'face', 'body']
    },
    {
      id: 57,
      brandImage: '../../assets/beauty/nioxin.png',
      brandName: 'NIOXIN',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['10%', 'dm', 'male', 'female', 'hair']
    },
    {
      id: 58,
      brandImage: '../../assets/beauty/tigi.png',
      brandName: 'TIGI',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['25%', 'dm', 'male', 'hair']
    },
    {
      id: 59,
      brandImage: '../../assets/beauty/american-crew.png',
      brandName: 'American Crew',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['20%', 'dm', 'male', 'hair']
    },
    {
      id: 60,
      brandImage: '../../assets/beauty/sebastian.png',
      brandName: 'Sebastian',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['20%', 'dm', 'male', 'female', 'hair']
    },
    {
      id: 61,
      brandImage: '../../assets/beauty/pureology.png',
      brandName: 'Pureology',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['15%', 'dm', 'male', 'female', 'hair']
    },
    {
      id: 62,
      brandImage: '../../assets/beauty/dermablend.png',
      brandName: 'Dermablend',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['10%', 'dm', 'female', 'face']
    },
    {
      id: 63,
      brandImage: '../../assets/beauty/murad.png',
      brandName: 'Murad',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['15%', 'dm', 'female', 'face']
    },
    {
      id: 64,
      brandImage: '../../assets/beauty/elizabeth-arden.png',
      brandName: 'Elizabeth Arden',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['10%', 'dm', 'female', 'face', 'body']
    },
    {
      id: 65,
      brandImage: '../../assets/beauty/philosophy.png',
      brandName: 'Philosophy',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['15%', 'dm', 'female', 'face', 'body']
    },
    {
      id: 66,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png',
      tags: ['10%', 'dm', 'female', 'body']
    },
    {
      id: 67,
      brandImage: '../../assets/beauty/1821-man-made.png',
      brandName: '18.21 Man Made',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      tags: ['10%', 'lillydrogerie', 'male', 'hair', 'face', 'body']
    },
    {
      id: 68,
      brandImage: '../../assets/beauty/ahava.png',
      brandName: 'AHAVA',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      tags: ['20%', 'lillydrogerie', 'male', 'female', 'hair', 'face', 'body']
    },
    {
      id: 69,
      brandImage: '../../assets/beauty/nioxin.png',
      brandName: 'NIOXIN',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      tags: ['10%', 'lillydrogerie', 'male', 'female', 'hair']
    },
    {
      id: 70,
      brandImage: '../../assets/beauty/kenra.png',
      brandName: 'Kenra',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      tags: ['15%', 'lillydrogerie', 'male', 'female', 'hair']
    },
    {
      id: 71,
      brandImage: '../../assets/beauty/tigi.png',
      brandName: 'TIGI',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      tags: ['10%', 'lillydrogerie', 'male', 'hair']
    },
    {
      id: 72,
      brandImage: '../../assets/beauty/galenic.png',
      brandName: 'Galenic',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      tags: ['15%', 'lillydrogerie', 'female', 'face']
    },
    {
      id: 73,
      brandImage: '../../assets/beauty/murad.png',
      brandName: 'Murad',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      tags: ['15%', 'lillydrogerie', 'female', 'face']
    },
    {
      id: 74,
      brandImage: '../../assets/beauty/elizabeth-arden.png',
      brandName: 'Elizabeth Arden',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      tags: ['20%', 'lillydrogerie', 'female', 'face', 'body']
    },
    {
      id: 75,
      brandImage: '../../assets/beauty/philosophy.png',
      brandName: 'Philosophy',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      tags: ['10%', 'lillydrogerie', 'female', 'face', 'body']
    },
    {
      id: 76,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      tags: ['10%', 'lillydrogerie', 'female', 'body']
    },
    {
      id: 77,
      brandImage: '../../assets/beauty/moroccanoil.png',
      brandName: 'Moroccanoil',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png',
      tags: ['10%', 'lillydrogerie', 'female', 'body', 'hair']
    }
  ];

  @observable selectedItem = {};
  @observable filters = [];
  @action
  setSelectedItem(resultItem) {
    this.selectedItem = resultItem;
  }

  @action
  setFilter(filter, event) {
    if (event.target.checked) {
      this.filters.push(filter);
    } else {
      this.filters.remove(filter);
    }
  }
}

const beautyPropType = PropTypes.shape({
  resultItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      brandImage: PropTypes.string,
      brandName: PropTypes.string,
      discount: PropTypes.string,
      logoPartner: PropTypes.string
    })
  ),
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    brandImage: PropTypes.string,
    brandName: PropTypes.string,
    discount: PropTypes.string,
    logoPartner: PropTypes.string
  }),
  setSelectedItem: PropTypes.func,
  getResultItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      brandImage: PropTypes.string,
      brandName: PropTypes.string,
      discount: PropTypes.string,
      logoPartner: PropTypes.string
    })
  ),
  filters: PropTypes.arrayOf(PropTypes.string),
  setFilter: PropTypes.func
});

const beautyPropTypeDefaults = {
  resultItems: [],
  selectedItem: {},
  getResultItems: [],
  setSelectedItem: () => true,
  filters: [],
  filterIsChecked: () => true,
  setFilter: () => true
};

export { Beauty, beautyPropType, beautyPropTypeDefaults };
