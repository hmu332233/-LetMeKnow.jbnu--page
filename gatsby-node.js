const STORES = [
  { name: '참빛관', value: 'cham' },
  { name: '직영관', value: 'basic' },
  { name: '특성화 캠퍼스', value: 'characterization' },
  { name: '진수당', value: 'jinsu' },
  { name: '의대', value: 'medi' },
  { name: '후생관', value: 'hu' },
  { name: '정담원', value: 'jungdam' },
];

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  STORES.forEach((store) => {
    console.log(store);
    createNode({
      id: createNodeId(`store-${store.value}`),
      name: store.name,
      value: store.value,
      internal: {
        type: 'Store',
        contentDigest: createContentDigest(store),
      },
    });
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // store page
  STORES.forEach((store) => {
    createPage({
      path: `/stores/${store.value}`,
      component: require.resolve(`./src/pages/index.js`),
      context: {
        store,
      },
    });
  });
};
