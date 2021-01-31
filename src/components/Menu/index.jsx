import React from 'react';
import PropTypes from 'prop-types';

function Menu({ subTitle, title, menu }) {
  return (
    <div class="px-4 w-1/3 text-center">
      <h2 class="tracking-widest text-xs title-font font-medium text-yellow-500 mb-1">
        {subTitle}
      </h2>
      <h1 class="title-font font-bold text-gray-900 mb-3">{title}</h1>

      <p class="leading-relaxed mb-5 whitespace-pre-line">{menu}</p>
    </div>
  );
}

Menu.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  menu: PropTypes.string,
};
Menu.defaultProps = {
  subTitle: '',
  title: '',
  menu: '',
};

export default Menu;
