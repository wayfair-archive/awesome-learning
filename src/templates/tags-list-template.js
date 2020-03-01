import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { Container, Row, Col } from 'react-grid-system';
import Layout from '../components/shared/Layout';
import Page from '../components/shared/Page';

const TagsListTemplate = ({ data, path }) => {
  const { group } = data.allMarkdownRemark;

  return (
    <Layout title={'Tags'} slug={path}>
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
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array
    })
  }).isRequired,
  path: PropTypes.string.isRequired
};

export const query = graphql`
  query TagsListQuery {
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
