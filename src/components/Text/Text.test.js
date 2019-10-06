import React from 'react';
import {render} from '@testing-library/react';
import Text from './Text';

const TEXT = 'some text';

describe('Text element', () => {
  it('Applies "Text--large" className if props.fontSize is "large"', () => {
    const {container} = render(<Text fontSize="large">{TEXT}</Text>);
    expect(container.firstChild.classList.contains('Text--large')).toBeTruthy();
  });
  it('Applies "Text--xl" className if props.fontSize is "xl"', () => {
    const {container} = render(<Text fontSize="xl">{TEXT}</Text>);
    expect(container.firstChild.classList.contains('Text--xl')).toBeTruthy();
  });
  it('Renders props.children', () => {
    const {getByText} = render(<Text fontSize="large">{TEXT}</Text>);
    expect(getByText(TEXT)).toBeTruthy();
  });
});
