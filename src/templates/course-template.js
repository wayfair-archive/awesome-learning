import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/shared/Layout';
import Course from '../components/Course';
import Page from '../components/shared/Page';

const CourseTemplate = ({ data }) => {
  const {
    fields: {
      slug: courseSlug
    },
    frontmatter: {
      title: courseTitle,
      description: courseDescription
    },
  } = data.markdownRemark;

  return (
    <Layout title={courseTitle} description={courseDescription} slug={courseSlug}>
      <Page>
        <Course course={data.markdownRemark} />
      </Page>
    </Layout>
  );
};

CourseTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
      })
    })
  }).isRequired
};

export const query = graphql`
  query CourseBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        description
        tags
        title
        lessons {
          link
          description
          title
        }
      }
    }
  }
`;

export default CourseTemplate;
