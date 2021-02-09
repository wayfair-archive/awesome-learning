import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import Layout from '../components/shared/Layout';
import Track from '../components/Track';
import Page from '../components/shared/Page';

const TrackTemplate = ({data}) => {
  const {
    fields: {slug: courseSlug},
    frontmatter: {title: courseTitle, description: courseDescription},
  } = data.markdownRemark;

  console.log(data.markdownRemark, 'data.markdownRemark');

  return (
    <Layout
      title={courseTitle}
      description={courseDescription}
      slug={courseSlug}
    >
      <Page>
        <Track track={data.markdownRemark} />
      </Page>
    </Layout>
  );
};

TrackTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        description: PropTypes.string,
        slug: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        techTalks: PropTypes.arrayOf(
          PropTypes.shape({
            description: PropTypes.string,
            link: PropTypes.string,
            title: PropTypes.string,
          })
        ),
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query TrackBySlug($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        description
        slug
        tags
        title
        techTalks {
          description
          link
          title
        }
      }
    }
  }
`;

export default TrackTemplate;
