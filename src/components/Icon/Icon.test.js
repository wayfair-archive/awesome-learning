import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './Icon';

describe('Icon', () => {
  const props = {
    icon: {
      viewBox: '0 0 0 0',
      path: '',
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Icon {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
