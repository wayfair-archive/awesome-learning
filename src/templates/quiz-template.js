import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Quiz from "../components/Quiz";

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
console.log('PREREADQUIZ', preReadQuiz);
  if (preReadQuiz === null) {
    return (
      <Layout
        title={`${quizTitle} - ${siteTitle}`}
        description={metaDescription}
      >
        <h1>A quiz for this lesson is not ready yet!</h1>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${quizTitle} - ${siteTitle}`}
      description={metaDescription}
    >
      <Quiz quiz={preReadQuiz} slug={slug} title={title} />
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
