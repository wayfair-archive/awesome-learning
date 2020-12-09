import React from 'react';
import {Container, Row, Col} from 'react-grid-system';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';

const NotFoundTemplate = () => (
  <Layout title="Not Found">
    <Container fluid>
      <Row>
        <Col>
          <Page title="Not Found">
            <p>You just hit a route that doesn't exist.</p>
          </Page>
        </Col>
      </Row>
    </Container>
  </Layout>
);

export default NotFoundTemplate;
