import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/shared/Layout';
import Course from '../components/Course';
import Page from '../components/shared/Page';

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
      <Page>
        <Course course={data.markdownRemark} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query CourseBySlug($slug: String!) {
    site {
      siteMetadata {
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
