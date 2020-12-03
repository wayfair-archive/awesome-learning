import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import Layout from '../components/shared/Layout';
import Courses from '../components/Courses';
import Page from '../components/shared/Page';

const TagTemplate = ({ data, pageContext, path }) => {
  const {tag} = pageContext;
  const { edges } = data.allMarkdownRemark;
  const pageTitle = `All Courses tagged as "${tag}"`;

  return (
    <Layout title={pageTitle} slug={path}>
      <Container fluid>
        <Row>
          <Col>
            <Page title={tag}>
              <Courses edges={edges} />
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
  }).isRequired,
  path: PropTypes.string.isRequired
};

export const query = graphql`
  query TagPage($tag: String, $coursesLimit: Int!, $coursesOffset: Int!) {
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
