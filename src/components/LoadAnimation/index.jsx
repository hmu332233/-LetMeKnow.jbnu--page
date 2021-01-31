import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

function LoadAnimation({ children, loading }) {
  return (
    <div
      className={classnames(
        'transition duration-300',
        loading ? 'opacity-0' : 'opacity-100'
      )}
    >
      {children}
    </div>
  );
}

LoadAnimation.propTypes = {
  loading: PropTypes.bool,
};
LoadAnimation.defaultProps = {
  loading: false,
};

export default LoadAnimation;
