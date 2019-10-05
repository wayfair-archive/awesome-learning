import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Course from '../components/Course';
import Page from '../components/Page';
import { SITE_METADATA_PROP_TYPE } from '../constants/propTypes';

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

CourseTemplate.PropTypes = {
  data: PropTypes.shape({
    site: SITE_METADATA_PROP_TYPE.isRequired,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
      })
    })
  })
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
