import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';
import { SITE_METADATA_PROP_TYPE } from '../constants/propTypes';

const PageTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  const {
    title: pageTitle,
    description: pageDescription
  } = data.markdownRemark.frontmatter;

  const { html: pageBody } = data.markdownRemark;

  const metaDescription =
    pageDescription !== null ? pageDescription : siteSubtitle;

  return (
    <Layout title={`${pageTitle} - ${siteTitle}`} description={metaDescription}>
      <Container fluid>
        <Row>
          <Col>
            <Page title={pageTitle}>
              <div dangerouslySetInnerHTML={{ __html: pageBody }} />
            </Page>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.shape({
    site: SITE_METADATA_PROP_TYPE.isRequired,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string
      })
    })
  }).isRequired
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title

        description
      }
    }
  }
`;

export default PageTemplate;
