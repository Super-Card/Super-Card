import React from 'react';
import SelectLocation from './SelectLocation';
import SelectDate from './SelectDate';
import SelectTime from './SelectTime';
import SelectPeople from './SelectPeople';
import CompleteReservation from './CompleteReservation';
import './reservations.css';

const ReservationsWrapper = () => (
  <div className="reservations-container">
    <h1>Reserve your table</h1>
    <p>
      By booking a table, you&apos;re guaranteeing your place in one of our restaurants on a date and time of your
      choice, so say goodbye to waiting times! Upon arrival, you can be rest assured that a member of our team will be
      on hand to greet you, take your order and ensure you&apos;re looked after throughout your visit. To book, simply
      select your chosen restaurant on a date and time of your choice and we&apos;ll do the rest.
    </p>
    <SelectLocation />
    <div className="reservations-datetime">
      <SelectDate />
      <SelectTime />
    </div>
    <SelectPeople />
    <CompleteReservation />
  </div>
);

export default ReservationsWrapper;
