import React from 'react';

import Layout from '@components/Layout';
import StoreSelect from '@containers/StoreSelect';
import StoreMenuList from '@containers/StoreMenuList';
import SEO from '@containers/Seo';

// markup
const IndexPage = (props) => {
  const store = props.pageContext.store || { name: '참빛관', value: 'cham' };
  return (
    <Layout>
      <SEO title={`${store.name} 메뉴`} />
      <StoreSelect value={store.value} />
      <StoreMenuList value={store.value} />
    </Layout>
  );
};

export default IndexPage;
