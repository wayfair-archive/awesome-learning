import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { graphql } from 'gatsby';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';

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
