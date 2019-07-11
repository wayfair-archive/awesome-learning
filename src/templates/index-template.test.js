import React from 'react';
import renderer from 'react-test-renderer';
import IndexTemplate from './index-template';

describe('IndexTemplate', () => {
  const props = {
    data: {
      allMarkdownRemark: {
        edges: [
          {
            node: {
              fields: {
                slug: '/test_0',
                categorySlug: '/test_0'
              },
              frontmatter: {
                date: '2016-09-01',
                description: 'test_0',
                category: 'test_0',
                title: 'test_0'
              }
            }
          },
          {
            node: {
              fields: {
                slug: '/test_1',
                categorySlug: '/test_1'
              },
              frontmatter: {
                date: '2016-09-01',
                description: 'test_1',
                category: 'test_1',
                title: 'test_1'
              }
            }
          }
        ]
      },
      site: {
        siteMetadata: {
          title: 'test',
          subtitle: 'test'
        }
      }
    },
    pageContext: {
      currentPage: 1,
      prevPagePath: '/page/1',
      nextPagePath: '/page/3',
      hasNextPage: true,
      hasPrevPage: true
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<IndexTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
