import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import kebabCase from "lodash/kebabCase";
import { Container, Row, Col } from "react-grid-system";
import Layout from "../components/Layout";
import Page from "../components/Page";
import { SITE_METADATA_PROP_TYPE } from "../constants/propTypes";

const TagsListTemplate = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;
  const { group } = data.allMarkdownRemark;

  return (
    <Layout title={`Tags - ${title}`} description={subtitle}>
      <Container fluid>
        <Row>
          <Col>
            <Page title="Tags">
              <ul>
                {group.map(tag => (
                  <li key={tag.fieldValue}>
                    <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue} ({tag.totalCount})
                    </Link>
                  </li>
                ))}
              </ul>
            </Page>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

TagsListTemplate.propTypes = {
  data: PropTypes.shape({
    site: SITE_METADATA_PROP_TYPE.isRequired,
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array
    })
  }).isRequired
}

export const query = graphql`
  query TagsListQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { template: { eq: "course" }, draft: { ne: true } }
      }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default TagsListTemplate;
