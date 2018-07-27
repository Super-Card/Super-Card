import { observable, action, computed } from 'mobx';
import PropTypes from 'prop-types';

export class Tech {
  @observable
  items = [
    {
      id: 1,
      title: 'Cameras',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: '../../assets/tech/camera.png'
    },
    {
      id: 2,
      title: 'Mobile',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: '../../assets/tech/mobile.png'
    },
    {
      id: 3,
      title: 'Laptops',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: '../../assets/tech/laptops.png'
    },
    {
      id: 4,
      title: 'Audio',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      photo: '../../assets/tech/audio.png'
    },
    {
      id: 5,
      title: 'TV',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
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
