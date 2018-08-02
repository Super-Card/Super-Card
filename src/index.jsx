import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Restaurants } from './stores/Restaurants';
import { Beauty } from './stores/Beauty';
import { Tech } from './stores/Tech';
import { Malls } from './stores/ClothesData';
import App from './App';
import { Auto } from './stores/Auto';

const restaurants = new Restaurants();
const beauty = new Beauty();
const tech = new Tech();
const mall = new Malls();
const auto = new Auto();

window.restaurants = restaurants;
window.beauty = beauty;
window.tech = tech;
window.mall = mall;
window.auto = auto;

ReactDOM.render(
  <Provider restaurants={restaurants} beauty={beauty} tech={tech} mall={mall} auto={auto}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
