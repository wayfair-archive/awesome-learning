import React from 'react';
import renderer from 'react-test-renderer';
import { PureComments as Comments } from './Comments';

describe('Comments', () => {
  it('renders correctly', () => {
    const props = {
      data: {
        site: {
          siteMetadata: {
            url: 'http://localhost',
            disqusShortname: 'test'
          }
        }
      },
      courseTitle: 'test',
      courseSlug: '/test'
    };

    const tree = renderer.create(<Comments {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
