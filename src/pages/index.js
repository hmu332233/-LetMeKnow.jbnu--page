import React from 'react';

import Layout from '@components/Layout';
import Select from '@components/Select';
import TabHeader from '@components/TabHeader';
import MenuList from '@components/MenuList';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Select onChange={console.log} />
      <TabHeader />
      <MenuList />
    </Layout>
  );
};

export default IndexPage;
