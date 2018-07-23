import React from 'react';
import Brands from '../components/Clothes/ShopFilter/Brands/Brands';
import Location from '../components/Clothes/ShopFilter/Location/Location';
import Discaunt from '../components/Clothes/ShopFilter/Discaunt/Discaunt';
import '../components/Clothes/ShopFilter/Clothes-Style/Clothes.css'

const Clothes = () => (
  <div>
	<div className="filter-holder">
	<Brands />
    <Location />
	<Discaunt />
	</div>
  </div>
);

export default Clothes;
