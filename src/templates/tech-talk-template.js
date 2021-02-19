import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';
import TechTalk, {techTalkPropType} from '../components/TechTalk';

const TechTalkTemplate = ({data}) => {
  const {
    title: techTalkTitle,
    description: courseDescription,
  } = data.markdownRemark.frontmatter;

  const {slug} = data.markdownRemark.fields;

  return (
    <Layout description={courseDescription} slug={slug} title={techTalkTitle}>
      <Page>
        <TechTalk techTalk={data.markdownRemark} />
      </Page>
    </Layout>
  );
};

TechTalkTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: techTalkPropType.isRequired,
      fields: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        tagSlugs: PropTypes.arrayOf(PropTypes.string).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
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
        date
        embedLink
        group
        tags
        title
        speakers {
          name
          title
          twitter
        }
      }
    }
  }
`;

export default TechTalkTemplate;
