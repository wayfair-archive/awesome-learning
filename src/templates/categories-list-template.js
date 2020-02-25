import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Container, Row, Col } from 'react-grid-system';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';

const CategoriesListTemplate = ({ data, path }) => {
  const { group } = data.allMarkdownRemark;

  return (
    <Layout title='Categories' slug={path}>
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
  }).isRequired,
  path: PropTypes.string.isRequired
};

export const query = graphql`
  query CategoriesListQuery {
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
