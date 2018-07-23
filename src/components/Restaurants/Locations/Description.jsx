import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ location }) =>
  location.name ? (
    <div>
      <h2>{location.name}</h2>
      <p>{location.desc}</p>
      <img src={location.photo} alt={location.name} />
    </div>
  ) : (
    <div>Please select a location.</div>
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
