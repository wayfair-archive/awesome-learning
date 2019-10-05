import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/Layout';
import Page from '../components/Page';
import Quiz from '../components/Quiz';

const QuizTemplate = ({data}) => {
  const {title: siteTitle, subtitle: siteSubtitle} = data.site.siteMetadata;

  const {
    title: quizTitle,
    description: courseDescription
  } = data.markdownRemark.frontmatter;

  const {slug} = data.markdownRemark.fields;
  const {title} = data.markdownRemark.frontmatter;

  const metaDescription =
    courseDescription !== null ? courseDescription : siteSubtitle;

  const {
    markdownRemark: {
      frontmatter: {preReadQuiz}
    }
  } = data;

  return (
    <Layout title={`${quizTitle} - ${siteTitle}`} description={metaDescription}>
      <Page>
        {preReadQuiz === null ? (
          <h1>A quiz for this lesson is not ready yet!</h1>
        ) : (
          <Quiz quiz={preReadQuiz} slug={slug} title={title} />
        )}
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query QuizBySlug($slug: String!) {
    site {
      siteMetadata {
        subtitle
        title
        url
      }
    }
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

QuizTemplate.propTypes = {
  data: PropTypes.string
};

export default QuizTemplate;
