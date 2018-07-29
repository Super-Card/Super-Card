import React from 'react';
import PropTypes from 'prop-types';

const ResultItems = ({ resultItems }) =>
  resultItems.brandName ? (
    <div>
      <img className="brand-img" src={resultItems.brandImage} alt="Brand" />
      <img className="discount-percent" src={resultItems.discount} alt="Discount" />
      <img className="logo-partner" src={resultItems.logoPartner} alt="Logo" />
    </div>
  ) : (
    <div>Renegotiated</div>
  );

ResultItems.propTypes = {
  resultItems: PropTypes.shape({
    brandName: PropTypes.string,
    brandImage: PropTypes.string,
    discount: PropTypes.string,
    logoPartner: PropTypes.string
  })
};

ResultItems.defaultProps = {
  resultItems: {}
};

export default ResultItems;
