import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";
import Page from '../components/Page';

const QuizTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  const {
    title: quizTitle,
    description: courseDescription
  } = data.markdownRemark.frontmatter;

  const { slug } = data.markdownRemark.fields;
  const { title } = data.markdownRemark.frontmatter;

  const metaDescription = courseDescription !== null ? courseDescription : siteSubtitle;

  const { markdownRemark: { frontmatter: { preReadQuiz } } } = data;

  return (
    <Layout
      title={`${quizTitle} - ${siteTitle}`}
      description={metaDescription}
    >
      <Page>
        {
          preReadQuiz === null ? (
            <h1>A quiz for this lesson is not ready yet!</h1>
          ) : (
            <Layout
              title={`${quizTitle} - ${siteTitle}`}
              description={metaDescription}
            >
              <Quiz quiz={preReadQuiz} slug={slug} title={title} />
            </Layout>
          )
        }
      </Page>
    </Layout>
  );
};

// export const query = graphql`
//   query QuizBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         author {
//           name
//           contacts {
//             twitter
//           }
//         }
//         disqusShortname
//         subtitle
//         title
//         url
//       }
//     }
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       id
//       html
//       fields {
//         slug
//         tagSlugs
//       }
//       frontmatter {
//         title
//         preReadQuiz {
//           description
//           questions {
//             correctChoices
//             description
//             explanation
//             type
//             choices {
//               value
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default QuizTemplate;
