import React from 'react';
import { render } from '@testing-library/react';
import HowTo from './HowTo';

describe('HowTo Component', () => {

  test('Renders all prerequisite elements of HowTo Page', () => {
    const { container, queryByText } = render(
      <HowTo/>
    );
    expect(queryByText('Gathering A Group')).toBeTruthy();
    expect(queryByText('Before Your Lesson')).toBeTruthy();
    expect(queryByText('During Your Lesson')).toBeTruthy();
    expect(container.querySelectorAll('iframe').length).toBe(1);
    expect(queryByText('FAQs')).toBeTruthy();
  });
});
