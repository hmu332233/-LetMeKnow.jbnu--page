import React from 'react';

import Layout from '@components/Layout';
import Select from '@components/Select';
import TabHeader from '@components/TabHeader';
import MenuList from '@components/MenuList';

import { navigate } from 'gatsby';

const handleSelectItem = (value) => navigate(`/stores/${value}`);
// markup
const IndexPage = (props) => {
  return (
    <Layout>
      <Select
        selectedValue={props.pageContext.store}
        onChange={handleSelectItem}
      />
      <TabHeader />
      <MenuList />
    </Layout>
  );
};

export default IndexPage;
