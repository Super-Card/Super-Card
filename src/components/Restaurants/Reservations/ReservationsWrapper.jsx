import React from 'react';
import SelectLocation from './SelectLocation';
import SelectDate from './SelectDate';
import SelectTime from './SelectTime';
import SelectPeople from './SelectPeople';
import CompleteReservation from './CompleteReservation';

const ReservationsWrapper = () => (
  <div className="reservations-container">
    <h1>Reserve your table</h1>
    <SelectLocation />
    <SelectDate />
    <SelectTime />
    <SelectPeople />
    <CompleteReservation />
  </div>
);

export default ReservationsWrapper;
