import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ location }) => (
  <div>
    <button>{location.name}</button>
  </div>
);

Item.propTypes = {
  location: PropTypes.shape({
    Name: PropTypes.string,
    Desc: PropTypes.string,
    Photo: PropTypes.string
  })
};

Item.defaultProps = {
  location: {}
};

export default Item;
