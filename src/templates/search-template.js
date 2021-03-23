import React from 'react';
import SearchBar from '../components/Search/SearchBar';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';

const SearchTemplate = () => (
  <Layout description='Search for Awesome Things on Awesome Learning' slug='/search' title='Search'>
    <Page>
      <SearchBar />
    </Page>
  </Layout>
);

export default SearchTemplate;
