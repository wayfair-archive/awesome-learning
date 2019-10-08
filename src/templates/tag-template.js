import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import PropTypes from 'prop-types';
import Layout from '../components/shared/Layout';
import Courses from '../components/Courses';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { SITE_METADATA_PROP_TYPE } from '../constants/propTypes';

const TagTemplate = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  const {
    tag,
    currentPage,
    prevPagePath,
    nextPagePath,
    hasPrevPage,
    hasNextPage
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0
    ? `All Courses tagged as "${tag}" - Page ${currentPage} - ${siteTitle}`
    : `All Courses tagged as "${tag}" - ${siteTitle}`;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Container fluid>
        <Row>
          <Col>
            <Page title={tag}>
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
      </Container>
    </Layout>
  );
};

TagTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired
    }),
    site: SITE_METADATA_PROP_TYPE.isRequired
  }).isRequired
};

export const query = graphql`
  query TagPage($tag: String, $coursesLimit: Int!, $coursesOffset: Int!) {
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
          tags: { in: [$tag] }
          template: { eq: "course" }
          draft: { ne: true }
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
