import React from 'react';
import { graphql } from 'gatsby';
import { Row, Col } from 'react-grid-system';
import PropTypes from 'prop-types';
import Layout from '../components/shared/Layout';
import Courses from '../components/Courses';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { PAGE_CONTEXT_PROP_TYPE, SITE_METADATA_PROP_TYPE } from '../constants/propTypes';

const CategoryTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  const {
    category,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0
    ? `${category} - Page ${currentPage} - ${siteTitle}`
    : `${category} - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Row>
        <Col md={12}>
          <Page title={category}>
            <Courses edges={edges} />
            <Pagination
              prevPagePath={prevPagePath}
              nextPagePath={nextPagePath}
              hasPrevPage={hasPrevPage}
              hasNextPage={hasNextPage}
            />
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
  pageContext: PAGE_CONTEXT_PROP_TYPE.isRequired
};

export const query = graphql`
  query CategoryPage(
    $category: String
    $coursesLimit: Int!
    $coursesOffset: Int!
  ) {
    site {
      siteMetadata {
        title
        subtitle
      }
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
