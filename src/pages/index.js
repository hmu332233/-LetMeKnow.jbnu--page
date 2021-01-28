import React from 'react';

import Layout from '@components/Layout';
import StoreSelect from '@containers/StoreSelect';
import TabHeader from '@components/TabHeader';
import MenuList from '@components/MenuList';

// markup
const IndexPage = (props) => {
  return (
    <Layout>
      <StoreSelect selectedValue={props.pageContext.store.value} />
      <TabHeader />
      <MenuList />
    </Layout>
  );
};

export default IndexPage;
