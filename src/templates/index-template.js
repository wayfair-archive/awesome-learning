import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/shared/Layout';
import Landing from '../components/Landing';

const IndexTemplate = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout isFullBleed>
      <Landing courseEdges={edges} />
    </Layout>
  );
};

IndexTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired
};

export const query = graphql`
  query IndexTemplate($coursesLimit: Int!, $coursesOffset: Int!) {
    allMarkdownRemark(
      limit: $coursesLimit,
      skip: $coursesOffset,
      filter: { frontmatter: { template: { eq: "course" }, draft: { ne: true } } },
    ){
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

export default IndexTemplate;
