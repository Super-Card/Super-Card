import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { Restaurants } from './stores/Restaurants';
import App from './App';

const restaurants = new Restaurants();

window.restaurants = restaurants;

ReactDOM.render(
  <Provider restaurants={restaurants}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
