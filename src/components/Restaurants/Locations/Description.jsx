import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ location }) =>
  location.name ? (
    <div className="locations-details">
      <div className="locations-details__text">
        <h2 className="locations-details__name">{location.name}</h2>
        <p className="locations-details__desc">{location.desc}</p>
      </div>
      <div className="locations-details__img" style={{ backgroundImage: `url(${location.photo})` }} />
    </div>
  ) : (
    <div className="locations-details--unselected">Please select a restaurant for more details.</div>
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
