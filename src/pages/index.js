import React from 'react';

import Layout from '@components/Layout';
import StoreSelect from '@containers/StoreSelect';
import StoreMenuList from '@containers/StoreMenuList';

// markup
const IndexPage = (props) => {
  const store = props.pageContext.store.value;
  return (
    <Layout>
      <StoreSelect selectedValue={store.value} />
      <StoreMenuList />
    </Layout>
  );
};

export default IndexPage;
