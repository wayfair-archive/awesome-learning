import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/shared/Layout';
import Lesson from '../components/Lesson';
import Page from '../components/shared/Page';

const LessonTemplate = ({ data }) => {
  const {
    title: lessonTitle,
    description: courseDescription
  } = data.markdownRemark.frontmatter;

  const { slug } = data.markdownRemark.fields;

  return (
    <Layout
      description={courseDescription}
      slug={slug}
      title={lessonTitle}
    >
      <Page>
        <Lesson lesson={data.markdownRemark} slug={slug} />
      </Page>
    </Layout>
  );
};

LessonTemplate.propTypes = {
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
