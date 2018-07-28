import { observable, action } from 'mobx';
import PropTypes from 'prop-types';

class Beauty {
  @observable
  resultItems = [
    {
      id: 1,
      brandImage: '../../assets/beauty/dr-jacksons.png',
      brandName: 'Dr Jacksons',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 2,
      brandImage: '../../assets/beauty/clarins.png',
      brandName: 'Clarins',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 3,
      brandImage: '../../assets/beauty/1821-man-made.png',
      brandName: '18.21 Man Made',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 4,
      brandImage: '../../assets/beauty/ahava.png',
      brandName: 'AHAVA',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 5,
      brandImage: '../../assets/beauty/nioxin.png',
      brandName: 'NIOXIN',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 6,
      brandImage: '../../assets/beauty/kenra.png',
      brandName: 'Kenra',
      discount: '../../assets/beauty/percent_1  5.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 7,
      brandImage: '../../assets/beauty/tigi.png',
      brandName: 'TIGI',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 8,
      brandImage: '../../assets/beauty/american-crew.png',
      brandName: 'American Crew',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 9,
      brandImage: '../../assets/beauty/sebastian.png',
      brandName: 'Sebastian',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 10,
      brandImage: '../../assets/beauty/pureology.png',
      brandName: 'Pureology',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 11,
      brandImage: '../../assets/beauty/galenic.png',
      brandName: 'Galenic',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 12,
      brandImage: '../../assets/beauty/dermablend.png',
      brandName: 'Dermablend',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 13,
      brandImage: '../../assets/beauty/murad.png',
      brandName: 'Murad',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 14,
      brandImage: '../../assets/beauty/elizabeth-arden.png',
      brandName: 'Elizabeth Arden',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 15,
      brandImage: '../../assets/beauty/philosophy.png',
      brandName: 'Philosophy',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 16,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 17,
      brandImage: '../../assets/beauty/vita-liberata.png',
      brandName: 'Vita Liberata',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 18,
      brandImage: '../../assets/beauty/hempz.png',
      brandName: 'Hempz',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 19,
      brandImage: '../../assets/beauty/moroccanoil.png',
      brandName: 'Moroccanoil',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-beauty-zone.png'
    },
    {
      id: 20,
      brandImage: '../../assets/beauty/dr-jacksons.png',
      brandName: 'Dr Jacksons',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 21,
      brandImage: '../../assets/beauty/clarins.png',
      brandName: 'Clarins',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 22,
      brandImage: '../../assets/beauty/1821-man-made.png',
      brandName: '18.21 Man Made',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 23,
      brandImage: '../../assets/beauty/ahava.png',
      brandName: 'AHAVA',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 24,
      brandImage: '../../assets/beauty/nioxin.png',
      brandName: 'NIOXIN',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 25,
      brandImage: '../../assets/beauty/kenra.png',
      brandName: 'Kenra',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 26,
      brandImage: '../../assets/beauty/tigi.png',
      brandName: 'TIGI',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 27,
      brandImage: '../../assets/beauty/american-crew.png',
      brandName: 'American Crew',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 28,
      brandImage: '../../assets/beauty/sebastian.png',
      brandName: 'Sebastian',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 29,
      brandImage: '../../assets/beauty/pureology.png',
      brandName: 'Pureology',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 30,
      brandImage: '../../assets/beauty/galenic.png',
      brandName: 'Galenic',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 31,
      brandImage: '../../assets/beauty/dermablend.png',
      brandName: 'Dermablend',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 32,
      brandImage: '../../assets/beauty/murad.png',
      brandName: 'Murad',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 33,
      brandImage: '../../assets/beauty/elizabeth-arden.png',
      brandName: 'Elizabeth Arden',
      discount: '../../assets/beauty/percent_30.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 34,
      brandImage: '../../assets/beauty/philosophy.png',
      brandName: 'Philosophy',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 35,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 36,
      brandImage: '../../assets/beauty/vita-liberata.png',
      brandName: 'Vita Liberata',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 37,
      brandImage: '../../assets/beauty/hempz.png',
      brandName: 'Hempz',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 38,
      brandImage: '../../assets/beauty/moroccanoil.png',
      brandName: 'Moroccanoil',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-sephora.png'
    },
    {
      id: 39,
      brandImage: '../../assets/beauty/dr-jacksons.png',
      brandName: 'Dr Jacksons',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 40,
      brandImage: '../../assets/beauty/clarins.png',
      brandName: 'Clarins',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 41,
      brandImage: '../../assets/beauty/1821-man-made.png',
      brandName: '18.21 Man Made',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 42,
      brandImage: '../../assets/beauty/ahava.png',
      brandName: 'AHAVA',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 43,
      brandImage: '../../assets/beauty/nioxin.png',
      brandName: 'NIOXIN',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 44,
      brandImage: '../../assets/beauty/kenra.png',
      brandName: 'Kenra',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 45,
      brandImage: '../../assets/beauty/tigi.png',
      brandName: 'TIGI',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 46,
      brandImage: '../../assets/beauty/sebastian.png',
      brandName: 'Sebastian',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 47,
      brandImage: '../../assets/beauty/pureology.png',
      brandName: 'Pureology',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 48,
      brandImage: '../../assets/beauty/galenic.png',
      brandName: 'Galenic',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 49,
      brandImage: '../../assets/beauty/dermablend.png',
      brandName: 'Dermablend',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 50,
      brandImage: '../../assets/beauty/murad.png',
      brandName: 'Murad',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 51,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 52,
      brandImage: '../../assets/beauty/hempz.png',
      brandName: 'Hempz',
      discount: '../../assets/beauty/percent_25.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 53,
      brandImage: '../../assets/beauty/moroccanoil.png',
      brandName: 'Moroccanoil',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-douglas.png'
    },
    {
      id: 54,
      brandImage: '../../assets/beauty/dr-jacksons.png',
      brandName: 'Dr Jacksons',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 55,
      brandImage: '../../assets/beauty/clarins.png',
      brandName: 'Clarins',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 56,
      brandImage: '../../assets/beauty/ahava.png',
      brandName: 'AHAVA',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 57,
      brandImage: '../../assets/beauty/nioxin.png',
      brandName: 'NIOXIN',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 58,
      brandImage: '../../assets/beauty/tigi.png',
      brandName: 'TIGI',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 59,
      brandImage: '../../assets/beauty/american-crew.png',
      brandName: 'American Crew',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 60,
      brandImage: '../../assets/beauty/sebastian.png',
      brandName: 'Sebastian',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 61,
      brandImage: '../../assets/beauty/pureology.png',
      brandName: 'Pureology',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 62,
      brandImage: '../../assets/beauty/dermablend.png',
      brandName: 'Dermablend',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 63,
      brandImage: '../../assets/beauty/murad.png',
      brandName: 'Murad',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 64,
      brandImage: '../../assets/beauty/elizabeth-arden.png',
      brandName: 'Elizabeth Arden',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 65,
      brandImage: '../../assets/beauty/philosophy.png',
      brandName: 'Philosophy',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 66,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-dm.png'
    },
    {
      id: 67,
      brandImage: '../../assets/beauty/1821-man-made.png',
      brandName: '18.21 Man Made',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png'
    },
    {
      id: 68,
      brandImage: '../../assets/beauty/ahava.png',
      brandName: 'AHAVA',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png'
    },
    {
      id: 69,
      brandImage: '../../assets/beauty/nioxin.png',
      brandName: 'NIOXIN',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png'
    },
    {
      id: 70,
      brandImage: '../../assets/beauty/kenra.png',
      brandName: 'Kenra',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png'
    },
    {
      id: 71,
      brandImage: '../../assets/beauty/tigi.png',
      brandName: 'TIGI',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png'
    },
    {
      id: 72,
      brandImage: '../../assets/beauty/galenic.png',
      brandName: 'Galenic',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png'
    },
    {
      id: 73,
      brandImage: '../../assets/beauty/murad.png',
      brandName: 'Murad',
      discount: '../../assets/beauty/percent_15.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png'
    },
    {
      id: 74,
      brandImage: '../../assets/beauty/elizabeth-arden.png',
      brandName: 'Elizabeth Arden',
      discount: '../../assets/beauty/percent_20.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png'
    },
    {
      id: 75,
      brandImage: '../../assets/beauty/philosophy.png',
      brandName: 'Philosophy',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png'
    },
    {
      id: 76,
      brandImage: '../../assets/beauty/st-tropez.png',
      brandName: 'St. Tropez',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png'
    },
    {
      id: 77,
      brandImage: '../../assets/beauty/moroccanoil.png',
      brandName: 'Moroccanoil',
      discount: '../../assets/beauty/percent_10.png',
      logoPartner: '../../assets/beauty/logo-lilly-drogerie.png'
    }
  ];

  @observable selectedItem = {};
  @action
  setSelectedItem(resultItem) {
    this.selectedItem = resultItem;
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
  setSelectedItem: PropTypes.func
});

const beautyPropTypeDefaults = {
  resultItems: [],
  selectedItem: {},
  getResultItems: [],
  setSelectedItem: () => true
};

export { Beauty, beautyPropType, beautyPropTypeDefaults };
