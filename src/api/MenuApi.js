import axios from 'axios';

const proxyAxios = axios.create({
  baseURL: process.env.API_URL,
});

const listMenus = ({ store }) => {
  const options = {
    params: {
      id: store,
    },
  };
  return proxyAxios.get('/api/v1/menus/search', options);
};

export default {
  listMenus,
};
