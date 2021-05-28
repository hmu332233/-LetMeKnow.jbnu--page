import axios from 'axios';
import _mapValues from 'lodash/mapValues';

const proxyAxios = axios.create({
  baseURL: process.env.GATSBY_API_URL || '',
});

const listMenus = ({ store }) => {
  const options = {
    params: {
      id: store,
    },
  };
  return proxyAxios.get('/api/v1/menus/search', options).then((res) => {
    const allMenus = _mapValues(res.data, (menus) => {
      return menus.map((menu) => ({
        subTitle: menu.place,
        title: menu.category ? `${menu.time} (${menu.category})` : menu.time,
        menu: menu.menus?.split(' ').join('\n') || '등록된 메뉴가 없습니다.',
      }));
    });
    return allMenus;
  });
};

export default {
  listMenus,
};
