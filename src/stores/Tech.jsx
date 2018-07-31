import { observable, action, computed } from 'mobx';
import PropTypes from 'prop-types';

export class Tech {
  @observable
  items = [
    {
      id: 1,
      title: 'Cameras',
      text: 'Technomarket-30% Technopolis-20% Media Markt-10% InterTecno-10% Electronica-10%',
      photo: '../../assets/tech/camera.png'
    },
    {
      id: 2,
      title: 'Mobile',
      text: 'Electronica-15% InterTecno-20% Media Markt-5% Technopolis-10% Technomarket-20%',
      photo: '../../assets/tech/mobile.png'
    },
    {
      id: 3,
      title: 'Laptops',
      text: 'Technomarket-30% Technopolis-20% Media Markt-10% InterTecno-10% Electronica-10%',
      photo: '../../assets/tech/laptops.png'
    },
    {
      id: 4,
      title: 'Audio',
      text: 'Electronica-15% InterTecno-20% Media Markt-5% Technopolis-10% Technomarket-20%',
      photo: '../../assets/tech/audio.png'
    },
    {
      id: 5,
      title: 'TV',
      text: 'Technomarket-20% Technopolis-10% Media Markt-20% InterTecno-10% Electronica-30%',
      photo: '../../assets/tech/tv.png'
    }
  ];

  @observable selectedItem = {};

  @computed
  get getItems() {
    return this.items;
  }
  @action
  setSelectedItem(item) {
    this.selectedItem = item;
  }
}

export const techPropType = PropTypes.shape({
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      photo: PropTypes.string
    })
  ),
  selectedItem: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
    photo: PropTypes.string
  }),
  setSelectedItem: PropTypes.func,
  getItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      text: PropTypes.string,
      photo: PropTypes.string
    })
  )
});
export const techPropTypeDefaults = {
  items: [],
  selectedItem: {},
  getItems: [],
  setSelectedItem: () => true
};
