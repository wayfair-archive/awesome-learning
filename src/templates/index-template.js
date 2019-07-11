// @flow
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Landing from '../components/Landing';


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
