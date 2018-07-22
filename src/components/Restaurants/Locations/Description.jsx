import React from 'react';
import PropTypes from 'prop-types';

const Description = ({ location }) =>
  location.Name ? (
    <div>
      <h2>{location.Name}</h2>
      <p>{location.Desc}</p>
      <img src={location.Photo} alt={location.Name} />
    </div>
  ) : (
    <div>Please select a location.</div>
  );

Description.propTypes = {
  location: PropTypes.shape({
    Name: PropTypes.string,
    Desc: PropTypes.string,
    Photo: PropTypes.string
  })
};

Description.defaultProps = {
  location: {}
};

export default Description;
