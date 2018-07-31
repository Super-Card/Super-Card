import React from 'react';
import './home.css';

const About = () => (
  <div className="about-sc">
    <h1 className="about-title">About SuperCard</h1>
    <p className="about-text">
      SuperCard is an employee benefit program that grants an access to hundreds of different gyms, studios and swimming
      pools in whole Bulgaria. It is a card based on monthly subscription that allows users to use any facility in our
      network.
    </p>
    <div className="about-icons">
      <div>
        <img src="../../../assets/home/credit-card-regular.svg" alt="" />
        <p>Get your card from your employer</p>
      </div>
      <div>
        <img src="../../../assets/home/percent-solid.svg" alt="" />
        <p>Find discounts you like</p>
      </div>
      <div>
        <img src="../../../assets/home/heart-regular.svg" alt="" />
        <p>Enjoy</p>
      </div>
    </div>
  </div>
);

export default About;
