import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Restaurants } from './stores/Restaurants';
import { Beauty } from './stores/Beauty';
import App from './App';

const restaurants = new Restaurants();
const beauty = new Beauty();

window.restaurants = restaurants;
window.beauty = beauty;

ReactDOM.render(
  <Provider restaurants={restaurants} beauty={beauty}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
