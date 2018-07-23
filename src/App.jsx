import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header, Footer } from './components';

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
