import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';
import TechTalkGroups from '../components/TechTalkGroups';
import {techTalkPropType} from '../components/TechTalk';

const ITEMS_PER_PAGE = 7;

const TrackListTemplate = ({data, path}) => {
  const {nodes: tracks} = data.allMarkdownRemark;
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = Math.ceil(tracks.length / ITEMS_PER_PAGE);
  const handlePaginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  return (
    <Layout title="Tech Talk Groups" slug={path}>
      <Page>
        <TechTalkGroups
          currentPage={currentPage}
          handlePaginate={handlePaginate}
          numberOfPages={numberOfPages}
          techTalkGroups={tracks.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            currentPage * ITEMS_PER_PAGE
          )}
        />
      </Page>
    </Layout>
  );
};

TrackListTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      nodes: PropTypes.arrayOf(techTalkPropType),
    }).isRequired,
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
