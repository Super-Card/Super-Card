import React from 'react';
import Introduction from '../components/Restaurants/Introduction';
import LocationsWrapper from '../components/Restaurants/Locations/LocationsWrapper';
import ReservationsWrapper from '../components/Restaurants/Reservations/ReservationsWrapper';
import '../components/Restaurants/Locations/locations.css';

const Restaurants = () => (
  <div>
    <Introduction />
    <LocationsWrapper />
    <ReservationsWrapper />
  </div>
);

export default Restaurants;
