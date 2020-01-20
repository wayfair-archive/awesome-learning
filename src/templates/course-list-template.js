import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/shared/Layout';
import Courses from '../components/Courses';
import Page from '../components/shared/Page';
import Pagination from '../components/Pagination';
import { SITE_METADATA_PROP_TYPE } from '../constants/propTypes';

const CourseListTemplate = ({ data, pageContext }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle
  } = data.site.siteMetadata;

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;

  const { edges } = data.allMarkdownRemark;
  const pageTitle = currentPage > 0 ? `Courses - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Page>
        <Courses edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query CourseListTemplate($coursesLimit: Int!, $coursesOffset: Int!) {
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
    site: SITE_METADATA_PROP_TYPE.isRequired,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object)
    })
  }).isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    hasNextPage: PropTypes.bool,
    hasPrevPage: PropTypes.bool,
    prevPagePath: PropTypes.string,
    nextPagePath: PropTypes.string
  })
};

export default CourseListTemplate;
