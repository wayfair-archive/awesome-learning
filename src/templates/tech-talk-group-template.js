import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';
import TechTalkGroup, {
  techTalkGroupPropType,
} from '../components/TechTalkGroup';
import {techTalkPropType} from '../components/TechTalk';

const TechTalkGroupTemplate = ({data}) => {
  const {title, description} = data.markdownRemark.frontmatter;

  const {slug} = data.markdownRemark.fields;

  return (
    <Layout description={description} slug={slug} title={title}>
      <Page>
        <TechTalkGroup
          techTalks={data.allMarkdownRemark.nodes}
          techTalkGroup={data.markdownRemark.frontmatter}
        />
      </Page>
    </Layout>
  );
};

TechTalkGroupTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(techTalkPropType),
    }),
    markdownRemark: techTalkGroupPropType,
  }),
};

export const query = graphql`
  query TechTalkGroupBySlug($id: String!, $slug: String!) {
    # Get information about the entire group
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        description
        title
      }
    }
    # Get all tech talks in this group
    allMarkdownRemark(
      filter: {frontmatter: {group: {eq: $id}, template: {eq: "techtalk"}}}
      sort: {fields: frontmatter___title}
    ) {
      totalCount
      nodes {
        frontmatter {
          description
          slug
          speakers {
            name
          }
          title
        }
      }
    }
  }
`;

export default TechTalkGroupTemplate;
