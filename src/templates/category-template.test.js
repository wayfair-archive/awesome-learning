import React from 'react';
import renderer from 'react-test-renderer';
import CategoryTemplate from './category-template';

describe('CategoryTemplate', () => {
  const props = {
    data: {
      allMarkdownRemark: {
        group: [
          {
            fieldValue: 'test_0',
            totalCount: 1
          },
          {
            fieldValue: 'test_1',
            totalCount: 2
          }
        ],
        edges: [
          {
            node: {
              fields: {
                slug: '/test_0',
                categorySlug: '/test'
              },
              frontmatter: {
                date: '2016-09-01',
                description: 'test_0',
                category: 'test',
                title: 'test_0'
              }
            }
          },
          {
            node: {
              fields: {
                slug: '/test_1',
                categorySlug: '/test'
              },
              frontmatter: {
                date: '2016-09-01',
                description: 'test_1',
                category: 'test',
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
      category: 'test',
      currentPage: 1,
      prevPagePath: '/page/1',
      nextPagePath: '/page/3',
      hasNextPage: true,
      hasPrevPage: true
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<CategoryTemplate {...props} />, {
      createNodeMock: () => ({
        scrollIntoView() {}
      })
    }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
