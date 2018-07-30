import React from 'react';
import Brands from '../components/Clothes/ShopFilter/Brands/Brands';
import Location from '../components/Clothes/ShopFilter/Location/Location';
import Discaunt from '../components/Clothes/ShopFilter/Discaunt/Discaunt';
import '../components/Clothes/ShopFilter/Clothes-Style/Clothes.css';
import Shops from '../components/Clothes/FilteredShops/Shops';
import shopper from '../components/Clothes/ShopFilter/Brands/Brands';

const Clothes = () => (
  <div className="content-wrapper">
    <div className="filter-holder">
      <Brands />
      <Location />
      <Discaunt />
      <shopper />
    </div>

    <div className="filtered-shops">
      <Shops />
    </div>
  </div>
);

export default Clothes;
