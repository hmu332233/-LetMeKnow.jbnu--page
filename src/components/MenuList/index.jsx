import React from 'react';
import PropTypes from 'prop-types';

import Menu from '@components/Menu';

function MenuList(props) {
  return (
    <section class="text-gray-600 body-font">
      <div class="flex flex-wrap justify-between -mx-4">
        <Menu />
        <Menu />
        <Menu />
      </div>
    </section>
  );
}

MenuList.propTypes = {};
MenuList.defaultProps = {};

export default MenuList;
