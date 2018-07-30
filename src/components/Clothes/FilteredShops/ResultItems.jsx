import React from 'react';
import PropTypes from 'prop-types';

const ResultItems = ({ resultItems }) =>
  resultItems.mallName ? (
    <div>
      <img className="mall-img" format="png" pngSize={64} basePath="{resultItems.mallImage}" alt="mall" />
    </div>
  ) : (
    <div>Renegotiated</div>
  );

ResultItems.propTypes = {
  resultItems: PropTypes.shape({
    mallName: PropTypes.string,
    mallImage: PropTypes.string,
    discount: PropTypes.string
  })
};

ResultItems.defaultProps = {
  resultItems: {}
};

export default ResultItems;
