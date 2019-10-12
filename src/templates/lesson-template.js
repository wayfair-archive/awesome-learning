import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Lesson from "../components/Lesson";
import Page from '../components/Page';
import { SITE_METADATA_PROP_TYPE } from "../constants/propTypes";

const LessonTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  const {
    title: lessonTitle,
    description: courseDescription
  } = data.markdownRemark.frontmatter;

  const { slug } = data.markdownRemark.fields;

  const metaDescription = courseDescription !== null ? courseDescription : siteSubtitle;

  return (
    <Layout
      title={`${lessonTitle} - ${siteTitle}`}
      description={metaDescription}
    >
      <Page>
        <Lesson lesson={data.markdownRemark} slug={slug} />
      </Page>
    </Layout>
  );
};

LessonTemplate.propTypes = {
  site: SITE_METADATA_PROP_TYPE.isRequired,
  markdownRemark: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string
    })
  })
};

export const query = graphql`
  query LessonBySlug($slug: String!) {
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
        course
        tags
        title
        timeToCompletion
        videoLinks
        preReadQuizLink
        defaultTab
        readingLinks {
          link
          description
          title
        }
        secondaryExerciseUrl
        preReadQuiz {
          description
          questions {
            choices {
              value
            }
          }
        }
      }
    }
  }
`;

export default LessonTemplate;
