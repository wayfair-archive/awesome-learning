import React from "react";
import { graphql } from "gatsby";
import { Container, Row, Col } from "react-grid-system";
import Layout from "../components/Layout";
import Page from "../components/Page";

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
