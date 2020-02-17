import React from 'react';
import { render } from '@testing-library/react';
import HowTo from './HowTo';

describe('HowTo Component', () => {

  test('Renders all prerequisite elements of HowTo Page', () => {
    const { container } = render(
      <HowTo/>
    );
    expect(container.querySelectorAll('.HowTo').length).toBe(1);
    expect(container.querySelectorAll('.HowTo-description').length).toBe(4);
    expect(container.querySelectorAll('iframe').length).toBe(1);
  });
});
