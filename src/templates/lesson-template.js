import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Lesson from "../components/Lesson";
import Page from '../components/Page';

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

export const query = graphql`
  query LessonBySlug($slug: String!) {
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
        course
        tags
        title
        timeToCompletion
        videoLinks
        preReadQuizLink
        readingLinks {
          link
          description
          title
        }
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
