import React from "react";

import Layout from "@components/Layout";
import TabHeader from "@components/TabHeader";
import MenuList from '@components/MenuList';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <TabHeader />
      <MenuList />
    </Layout>
  );
};

export default IndexPage;
