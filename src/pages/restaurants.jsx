import React from 'react';
import Introduction from '../components/Restaurants/Introduction';
import Locations from '../components/Restaurants/Locations/Locations';
import ChatBot from '../components/Restaurants/ChatBot/ChatBot';
import ReservationsWrapper from '../components/Restaurants/Reservations/ReservationsWrapper';
import '../components/Restaurants/Locations/locations.css';

const Restaurants = () => (
  <div>
    <Introduction />
    <Locations />
    <ChatBot />
    <ReservationsWrapper />
  </div>
);

export default Restaurants;
