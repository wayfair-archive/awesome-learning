import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';
import TechTalks from '../components/TechTalks';
import {techTalkPropType} from '../components/TechTalk';

const TrackListTemplate = ({data, path}) => {
  const {nodes: tracks} = data.allMarkdownRemark;

  return (
    <Layout title="Tech Talks" slug={path}>
      <Page>
        <TechTalks techTalks={tracks} />
      </Page>
    </Layout>
  );
};

TrackListTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(techTalkPropType),
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export const query = graphql`
  query TrackListQuery {
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "techtalk"}, draft: {ne: true}}}
    ) {
      nodes {
        fields {
          slug
          categorySlug
        }
        frontmatter {
          description
          title
        }
      }
    }
  }
`;

export default TrackListTemplate;
