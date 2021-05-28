import React from 'react';

import { QueryClientProvider, QueryClient } from 'react-query';

import Layout from '@components/Layout';
import StoreSelect from '@containers/StoreSelect';
import StoreMenuList from '@containers/StoreMenuList';
import SEO from '@containers/Seo';

const queryClient = new QueryClient();

// markup
const IndexPage = (props) => {
  const store = props.pageContext.store || { name: '참빛관', value: 'cham' };
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <SEO title={`${store.name} 메뉴`} />
        <StoreSelect value={store.value} />
        <StoreMenuList value={store.value} />
      </Layout>
    </QueryClientProvider>
  );
};

export default IndexPage;
