import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';
// import TechTalk from '../components/TechTalk'

const TechTalkTemplate = ({data}) => {
  const {
    title: lessonTitle,
    description: courseDescription,
  } = data.markdownRemark.frontmatter;

  const {slug} = data.markdownRemark.fields;

  return (
    <Layout description={courseDescription} slug={slug} title={lessonTitle}>
      <Page>
        <h1>Hello</h1>
      </Page>
    </Layout>
  );
};

TechTalkTemplate.propTypes = {
  markdownRemark: PropTypes.shape({
    frontmatter: PropTypes.shape({
      description: PropTypes.string,
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
};

export const query = graphql`
  query TechTalkBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        description
      }
    }
  }
`;

export default TechTalkTemplate;
