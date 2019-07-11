import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout';

describe('Layout', () => {
  const props = {
    children: 'test',
    description: 'test',
    title: 'test'
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Layout {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
