import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-grid-system';
import Layout from '../components/shared/Layout';
import Courses from '../components/Courses';
import Page from '../components/shared/Page';
import { PAGE_CONTEXT_PROP_TYPE, SITE_METADATA_PROP_TYPE } from '../constants/propTypes';

const CategoryTemplate = ({ data, pageContext, path}) => {
  const { siteTitle } = data.site.siteMetadata;
  const {category} = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = `${category} - ${siteTitle}`;

  return (
    <Layout title={pageTitle} slug={path}>
      <Row>
        <Col md={12}>
          <Page title={category}>
            <Courses edges={edges} />
          </Page>
        </Col>
      </Row>
    </Layout>
  );
};

CategoryTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired
    }),
    site: SITE_METADATA_PROP_TYPE
  }).isRequired,
  pageContext: PAGE_CONTEXT_PROP_TYPE.isRequired,
  path: PropTypes.string.isRequired
};

export const query = graphql`
  query CategoryPage(
    $category: String
    $coursesLimit: Int!
    $coursesOffset: Int!
  ) {
    site {
      ...siteMetadataFields
    }
    allMarkdownRemark(
      limit: $coursesLimit
      skip: $coursesOffset
      filter: {
        frontmatter: {
          category: { eq: $category }
          template: { eq: "course" }
          draft: { ne: true }
        }
      }
    ) {
      edges {
        node {
          fields {
            categorySlug
            slug
          }
          frontmatter {
            description
            category
            title
          }
        }
      }
    }
  }
`;

export default CategoryTemplate;
