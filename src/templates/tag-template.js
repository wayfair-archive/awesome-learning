import React from 'react';
import {graphql} from 'gatsby';
import PropTypes from 'prop-types';
import Courses from '../components/Courses';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';

const TagTemplate = ({data, pageContext, path}) => {
  const {tag} = pageContext;
  const {edges} = data.allMarkdownRemark;
  const pageTitle = `All content tagged as "${tag}"`;

  return (
    <Layout title={pageTitle} slug={path}>
      <Page>
        <Courses edges={edges} title={pageTitle} />
      </Page>
    </Layout>
  );
};

TagTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export const query = graphql`
  query TagPage($tag: String!, $coursesLimit: Int!, $coursesOffset: Int!) {
    allMarkdownRemark(
      limit: $coursesLimit
      skip: $coursesOffset
      filter: {
        frontmatter: {
          tags: {in: [$tag]}
          template: {in: ["course", "techtalk"]}
          draft: {ne: true}
        }
      }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            category
            description
          }
        }
      }
    }
  }
`;

export default TagTemplate;
