import React from 'react';
import PropTypes from 'prop-types';
import {graphql, Link} from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import {Typography, Box, Button} from '@material-ui/core';
import {useTheme} from '@material-ui/core/styles';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';

const TagsListTemplate = ({data, path}) => {
  const theme = useTheme();
  const {group} = data.allMarkdownRemark;

  return (
    <Layout title={'Tags'} slug={path}>
      <Page title="Tags">
        <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
          <Typography variant="h1" color="textPrimary">
            All Tags
          </Typography>
          {group.map((tag) => (
            <Box display="block" key={tag.fieldValue} pt={2}>
              <Button
                component={Link}
                to={`/tag/${kebabCase(tag.fieldValue)}/`}
                role="link"
              >
                {tag.fieldValue} ({tag.totalCount})
              </Button>
            </Box>
          ))}
        </Box>
      </Page>
    </Layout>
  );
};

TagsListTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array,
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export const query = graphql`
  query TagsListQuery {
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "course"}, draft: {ne: true}}}
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsListTemplate;
