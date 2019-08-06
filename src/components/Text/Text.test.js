import React from 'react';
import renderer from 'react-test-renderer';
import Text from './Text';

describe('Text', () => {
  const props = {
    fontSize: 'large'
  };
  it('renders correctly', () => {
    const tree = renderer
      .create(<Text {...props}>Text Component</Text>)
      .toJSON();
    expect(tree).toMatchInlineSnapshot(`
<p
  className="Text Text--large"
>
  Text Component
</p>
`);
  });
});
