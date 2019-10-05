import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-grid-system";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Page from "../components/Page";
import { SITE_METADATA_PROP_TYPE } from "../constants/propTypes";

const NotFoundTemplate = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Container fluid>
        <Row>
          <Col>
            <Page title="NOT FOUND">
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </Page>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

NotFoundTemplate.PropTypes = {
  data: PropTypes.shape({
    site: SITE_METADATA_PROP_TYPE.isRequired
  })
}

export const query = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

export default NotFoundTemplate;
