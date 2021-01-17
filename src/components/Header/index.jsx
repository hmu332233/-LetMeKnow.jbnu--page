import React from 'react';
import PropTypes from 'prop-types';

import logo from '@images/logo.png';

function Header(props) {
  return (
    <div className="flex justify-center py-2">
      <img className="h-16" src={logo} />
    </div>
  );
}

Header.propTypes = {
};
Header.defaultProps = {
};

export default Header;