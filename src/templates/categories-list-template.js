import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import {Box, Button, Typography} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';

const CategoriesListTemplate = ({data, path}) => {
  const theme = useTheme();
  const {group} = data.allMarkdownRemark;
  return (
    <Layout title="Categories" slug={path}>
      <Page title="Categories">
        <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
          <Typography variant="h1" color="textPrimary">
            All Categories
          </Typography>
          {group.map((category) => (
            <Box display="block" pt={2} key={category.fieldValue}>
              <Button href={`/category/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue} ({category.totalCount})
              </Button>
            </Box>
          ))}
        </Box>
      </Page>
    </Layout>
  );
};

CategoriesListTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export const query = graphql`
  query CategoriesListQuery {
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "course"}, draft: {ne: true}}}
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default CategoriesListTemplate;
