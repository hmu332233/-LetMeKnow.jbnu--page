import React from 'react';
import PropTypes from 'prop-types';

import Menu from '@components/Menu';

function MenuList(props) {
  return (
    <section class="text-gray-600 body-font">
      <div class="flex flex-wrap justify-between -mx-4">
        {props.menus.map(({ subTitle, title, menu }) => (
          <Menu
            key={subTitle + title}
            subTitle={subTitle}
            title={title}
            menu={menu}
          />
        ))}
      </div>
    </section>
  );
}

MenuList.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      subTitle: PropTypes.string,
      title: PropTypes.string,
      menu: PropTypes.string,
    })
  ),
};
MenuList.defaultProps = {
  menus: [
    {
      subTitle: '참빛관',
      title: '아침',
      menu:
        '쌀밥\n두부김치국\n순두부계란찜\n매콤대구채조림\n열무된장나물\n깍두기\n\n(간편식) 소보루빵\n씨리얼\n흰우유',
    },
    {
      subTitle: '참빛관',
      title: '점심',
      menu:
        '쌀밥\n두부김치국\n순두부계란찜\n매콤대구채조림\n열무된장나물\n깍두기\n\n(간편식) 소보루빵\n씨리얼\n흰우유',
    },
    {
      subTitle: '참빛관',
      title: '저녁',
      menu:
        '쌀밥\n두부김치국\n순두부계란찜\n매콤대구채조림\n열무된장나물\n깍두기\n\n(간편식) 소보루빵\n씨리얼\n흰우유',
    },
  ],
};

export default MenuList;
