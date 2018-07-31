import React from 'react';
import PropTypes from 'prop-types';

const ItemDetail = ({ item }) =>
  item.title ? (
    <div className="item-details">
      <div className="item-wrapper">
        <p className="info-title">{item.title}</p>
        <p className="info-descfription">{item.text}</p>
      </div>
      <div className="info-img" style={{ backgroundImage: `url(${item.photo})` }} />
    </div>
  ) : (
    <div className="item-details noselected">
      <div className="info">No selected item.</div>
    </div>
  );

ItemDetail.propTypes = {
  item: PropTypes.shape({
    titel: PropTypes.string,
    text: PropTypes.string,
    photo: PropTypes.string
  })
};

ItemDetail.defaultProps = {
  item: {}
};

export default ItemDetail;
