import React from 'react';
import PropTypes from 'prop-types';

const ItemDetail = ({ item }) =>
  item.Title ? (
    <div className="item-detail">
      <p className="info" style={{ backgroundImage: `url(${item.photo})` }} />
      <p className="info">{item.title}</p>
      <p className="info plot">{item.text}</p>
    </div>
  ) : (
    <div className="item-detail">
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
