import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Container, Row, Col } from 'react-grid-system';
import PropTypes from 'prop-types';
import { SITE_METADATA_PROP_TYPE } from '../constants/propTypes';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';

const CategoriesListTemplate = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;

  const { group } = data.allMarkdownRemark;

  return (
    <Layout title={`Categories - ${title}`} description={subtitle}>
      <Container fluid>
        <Row>
          <Col>
            <Page title="Categories">
              <ul>
                {group.map(category => (
                  <li key={category.fieldValue}>
                    <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
                      {category.fieldValue} ({category.totalCount})
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

CategoriesListTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array.isRequired
    }).isRequired,
    site: SITE_METADATA_PROP_TYPE
  }).isRequired
};

export const query = graphql`
  query CategoriesListQuery {
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
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default CategoriesListTemplate;
