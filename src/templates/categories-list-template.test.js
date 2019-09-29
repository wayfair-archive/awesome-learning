import React from 'react';
import renderer from 'react-test-renderer';
import CategoriesListTemplate from './categories-list-template';

describe('CategoriesListTemplate', () => {
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
        ]
      },
      site: {
        siteMetadata: {
          title: 'test',
          subtitle: 'test'
        }
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<CategoriesListTemplate {...props} />, {
      createNodeMock: () => ({
        scrollIntoView() {}
      })
    }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
