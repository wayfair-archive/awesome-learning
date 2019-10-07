import React from 'react';
import {render} from '@testing-library/react';
import Text from './Text';

const PROPS = {
  fontSize: 'xl',
}

describe('Block element', () => {
  it('Renders correctly', () => {
    const {getByText, queryByText} = render(<Text>hey</Text>);
    expect(getByText('hey').tagName).toBe('P');
    expect(queryByText('hey')).toMatchInlineSnapshot(`
      <p
        class="Text"
      >
        hey
      </p>
    `);
  });
  it('Renders witch className Text--xl with xl fontSize prop passed', () => {
    const {getByText} = render(
      <Text {...PROPS}>hey</Text>
    );
    expect(getByText('hey').className).toBe('Text Text--xl');
  });
});
