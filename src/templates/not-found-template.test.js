import React from 'react';
import renderer from 'react-test-renderer';
import NotFoundTemplate from './not-found-template';

describe('NotFoundTemplate', () => {
  const props = {
    data: {
      site: {
        siteMetadata: {
          title: 'test',
          subtitle: 'test'
        }
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<NotFoundTemplate {...props} />, {
      createNodeMock: () => ({
        scrollIntoView() {}
      })
    }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
