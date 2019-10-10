import React from 'react';
import {render} from '@testing-library/react';
import Text from './Text';

const TEXT = 'some text';

describe('Text element', () => {
  it('Applies "Text--large" className if props.fontSize is "large"', () => {
    const {container} = render(<Text fontSize="large">{TEXT}</Text>);
    expect(container.firstChild.classList.contains('Text--large')).toBe(true);
  });
  it('Applies "Text--xl" className if props.fontSize is "xl"', () => {
    const {container} = render(<Text fontSize="xl">{TEXT}</Text>);
    expect(container.firstChild.classList.contains('Text--xl')).toBe(true);
  });
  it('Renders props.children', () => {
    const {getByText} = render(<Text>{TEXT}</Text>);
    expect(getByText(TEXT).textContent).toBe(TEXT);
  });
});
