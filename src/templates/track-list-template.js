import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';
import Tracks, {trackPropType} from '../components/Tracks';

const TrackListTemplate = ({data, path}) => {
  const {nodes: tracks} = data.allMarkdownRemark;

  return (
    <Layout title="Tech Talk Tracks" slug={path}>
      <Page>
        <Tracks tracks={tracks} />
      </Page>
    </Layout>
  );
};

TrackListTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(trackPropType),
    }),
  }).isRequired,
  path: PropTypes.string.isRequired,
};

export const query = graphql`
  query TrackListQuery {
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "track"}, draft: {ne: true}}}
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
