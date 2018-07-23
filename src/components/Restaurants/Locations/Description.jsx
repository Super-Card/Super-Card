import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ location }) =>
  location.name ? (
    <div className="locations-details">
      <img src={location.photo} alt={location.name} className="locations-details__img" />
      <h2 className="locations-details__name">{location.name}</h2>
      <p className="locations-details__desc">{location.desc}</p>
    </div>
  ) : (
    <div className="locations-details--unselected">Please select a location.</div>
  );

Description.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
    photo: PropTypes.string
  })
};

Description.defaultProps = {
  location: {}
};

export default Description;
