import React from 'react';
import Gender from './Gender';
import Partners from './Partners';
import Discounts from './Discounts';
import HumanBody from './HumanBody';
import './BeautyFilters.css';

const Container = () => (
  <div>
    <div className="beauty-filter-area-left">
      <Gender />
      <Partners />
      <Discounts />
    </div>
    <div>
      <HumanBody />
    </div>
  </div>
);

export default Container;
