import React from 'react';
import SelectLocation from './SelectLocation';
import SelectDate from './SelectDate';
import SelectTime from './SelectTime';
import SelectPeople from './SelectPeople';
import CompleteReservation from './CompleteReservation';

const ReservationsWrapper = () => (
  <div className="reservations-container">
    <SelectLocation />
    <SelectDate />
    <SelectTime />
    <SelectPeople />
    <CompleteReservation />
  </div>
);

export default ReservationsWrapper;
