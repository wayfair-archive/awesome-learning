import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/shared/Layout';
import Courses from '../components/Courses';
import Page from '../components/shared/Page';

const CourseListTemplate = ({ data, path }) => {
  const { edges } = data.allMarkdownRemark;
  const pageTitle = 'Courses';

  return (
    <Layout title={pageTitle} slug={path}>
      <Page>
        <Courses edges={edges} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query CourseListTemplate($coursesLimit: Int!, $coursesOffset: Int!) {
    allMarkdownRemark(
      limit: $coursesLimit,
      skip: $coursesOffset,
      filter: { frontmatter: { template: { eq: "course" }, draft: { ne: true } } },
      sort: {
        fields: [frontmatter___title]
        order: [ASC]
    }){
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

CourseListTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object)
    })
  }).isRequired
};

export default CourseListTemplate;
