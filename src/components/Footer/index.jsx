import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
  return (
    <footer className="mt-auto text-gray-700">
      <div className="bg-gray-200">
        <div className="container mx-auto py-4 px-5 flex flex-wrap items-center flex-col">
          <span className="text-gray-500 text-sm text-center">© 2021 minung.han</span>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
};
Footer.defaultProps = {
};

export default Footer;