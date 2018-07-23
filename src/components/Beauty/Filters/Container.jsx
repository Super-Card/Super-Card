import React from 'react';
import Gender from './Gender';
import Partners from './Partners';
import Discounts from './Discounts';
import HumanBody from './HumanBody';
import Categories from './Categories';

const Container = () => (
  <div>
    <div>
      <Gender />
      <Partners />
      <Discounts />
    </div>
    <div>
      <HumanBody />
      <Categories />
    </div>
  </div>
);

export default Container;
