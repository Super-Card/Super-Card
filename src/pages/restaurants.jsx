import React from 'react';
import Introduction from '../components/Restaurants/Introduction';
import Locations from '../components/Restaurants/Locations/Locations';
import ChatBot from '../components/Restaurants/ChatBot/ChatBot';
import '../components/Restaurants/Locations/locations.css';

const Restaurants = () => (
  <div>
    <Introduction />
    <Locations />
    <ChatBot />
  </div>
);

export default Restaurants;
