import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/shared/Layout';
import Landing from '../components/Landing';
import { SITE_METADATA_PROP_TYPE } from '../constants/propTypes';

const IndexTemplate = ({ data }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const { edges } = data.allMarkdownRemark;

  return (
    <Layout title={siteTitle} description={siteSubtitle} isFullBleed>
      <Landing courseEdges={edges} />
    </Layout>
  );
};

IndexTemplate.propTypes = {
  data: PropTypes.shape({
    site: SITE_METADATA_PROP_TYPE.isRequired,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired
}

export const query = graphql`
  query IndexTemplate($coursesLimit: Int!, $coursesOffset: Int!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
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
