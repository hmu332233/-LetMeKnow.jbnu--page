import React from 'react';
import PropTypes from 'prop-types';

function Menu({ subTitle, title, menu }) {
  return (
    <div class="px-4">
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
  subTitle: '참빛관',
  title: '아침',
  menu:
    '쌀밥\n두부김치국\n순두부계란찜\n매콤대구채조림\n열무된장나물\n깍두기\n\n(간편식) 소보루빵\n씨리얼\n흰우유',
};

export default Menu;
