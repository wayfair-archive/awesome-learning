import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';
import TechTalkGroups from '../components/TechTalkGroups';
import {techTalkPropType} from '../components/TechTalk';

const TrackListTemplate = ({data, path}) => {
  const {nodes: tracks} = data.allMarkdownRemark;

  return (
    <Layout title="Tech Talk Groups" slug={path}>
      <Page>
        <TechTalkGroups techTalkGroups={tracks} />
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
  query TechTalkListQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {template: {eq: "techtalkgroup"}, draft: {ne: true}}
      }
      sort: {fields: frontmatter___title}
    ) {
      nodes {
        fields {
          slug
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
