import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Restaurants } from './stores/Restaurants';
import { Beauty } from './stores/Beauty';
import { Tech } from './stores/Tech';
import App from './App';

const restaurants = new Restaurants();
const beauty = new Beauty();
const tech = new Tech();

window.restaurants = restaurants;
window.beauty = beauty;
window.tech = tech;

ReactDOM.render(
  <Provider restaurants={restaurants} beauty={beauty} tech={tech}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
