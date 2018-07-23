import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { AppState } from './stores/SelectedLocation';
import App from './App';

const appState = new AppState();

window.appState = appState;

ReactDOM.render(
  <Provider appState={appState}>
    <App />
  </Provider>,
  document.querySelector('.container')
);

/* 
ReactDOM.render(<App />, document.querySelector('.container')); */
