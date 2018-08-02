import { observable, action, computed } from 'mobx';

class Auto {
  @observable
  auto = [
    {
      name: 'Shop1'
    },
    {
      name: 'Shop2'
    }
  ];

  @action
  addAuto(car) {
    this.auto.push(car);
  }

  @computed
  get carCount() {
    return this.auto.length;
  }
}

export { Auto };
