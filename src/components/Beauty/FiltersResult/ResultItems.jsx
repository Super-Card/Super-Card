import React from 'react';
import PropTypes from 'prop-types';

const ResultItems = ({ resultItems }) =>
  resultItems.brandName ? (
    <div>
      <img className="brand-img" format="png" pngSize={64} basePath="{resultItems.brandImage}" alt="brand" />
      <img className="discount-percent" format="png" pngSize={64} basePath="{resultItems.discount}" alt="discount" />
      <img className="logo-partner" format="png" pngSize={64} basePath="{resultItems.logoPartner}" alt="Logo" />
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
