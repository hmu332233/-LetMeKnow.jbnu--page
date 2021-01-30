import React from 'react';

import Layout from '@components/Layout';
import StoreSelect from '@containers/StoreSelect';
import StoreMenuList from '@containers/StoreMenuList';

// markup
const IndexPage = (props) => {
  const store = props.pageContext.store;
  return (
    <Layout>
      <StoreSelect value={store.value} />
      <StoreMenuList value={store.value} />
    </Layout>
  );
};

export default IndexPage;
