import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {Typography} from '@material-ui/core';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';
import Quiz from '../components/Quiz';

const QuizTemplate = ({data}) => {
  const {
    title: quizTitle,
    description: courseDescription,
  } = data.markdownRemark.frontmatter;

  const {slug} = data.markdownRemark.fields;
  const {title} = data.markdownRemark.frontmatter;

  const {
    markdownRemark: {
      frontmatter: {preReadQuiz},
    },
  } = data;

  return (
    <Layout description={courseDescription} title={quizTitle} slug={slug}>
      <Page>
        {preReadQuiz === null ? (
          <Typography variant="h1" color="textPrimary">
            A quiz for this lesson is not ready yet!
          </Typography>
        ) : (
          <Quiz quiz={preReadQuiz} slug={slug} title={title} />
        )}
      </Page>
    </Layout>
  );
};

QuizTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        preReadQuiz: PropTypes.object,
      }),
      fields: PropTypes.shape({
        slug: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query QuizBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        title
        preReadQuiz {
          description
          questions {
            codeSnippet
            correctChoices
            description
            explanation
            type
            choices {
              value
            }
          }
        }
      }
    }
  }
`;

export default QuizTemplate;
