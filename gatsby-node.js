const STORES = [
  'cham',
  'basic',
  'characterization',
  'jinsu',
  'medi',
  'hu',
  'jungdam',
];

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // category page
  STORES.forEach((store) => {
    console.log(store);
    createPage({
      path: `/stores/${store}`,
      component: require.resolve(`./src/pages/index.js`),
      context: {
        store,
      },
    });
  });
};
