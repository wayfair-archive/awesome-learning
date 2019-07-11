import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Course from '../components/Course';

const CourseTemplate = ({ data }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    title: courseTitle,
    description: courseDescription
  } = data.markdownRemark.frontmatter;

  const metaDescription = courseDescription !== null ? courseDescription : siteSubtitle;

  return (
    <Layout title={`${courseTitle} - ${siteTitle}`} description={metaDescription}>
      <Course course={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query CourseBySlug($slug: String!) {
    site {
      siteMetadata {
        disqusShortname
        subtitle
        title
        url
      }
    }
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
