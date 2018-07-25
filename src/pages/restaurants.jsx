import React from 'react';
import Introduction from '../components/Restaurants/Introduction';
import LocationsWrapper from '../components/Restaurants/Locations/LocationsWrapper';
import '../components/Restaurants/Locations/locations.css';

const Restaurants = () => (
  <div>
    <Introduction />
    <LocationsWrapper />
  </div>
);

export default Restaurants;
