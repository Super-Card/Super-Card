export class Tech {
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
  get getItems() {
    return this.items;
  }
}
