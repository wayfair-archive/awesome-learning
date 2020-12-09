import React from 'react';
import {render} from '@testing-library/react';
import Courses from './Courses';

const PROPS = {
  edges: [
    {
      node: {
        fields: {
          slug: '/courses/Accessibility/',
          categorySlug: '/category/accessibility/',
        },
        frontmatter: {
          title: 'Accessibility',
          category: 'Accessibility',
          description:
            'Accessibility refers to how people with disabilities can meaningfully use products...',
        },
      },
    },
    {
      node: {
        fields: {
          slug: '/courses/Array-Methods/',
          categorySlug: '/category/js-fundamentals/',
        },
        frontmatter: {
          title: 'Array Methods',
          category: 'JS Fundamentals',
          description:
            'Welcome to the Awesome Learning Array Methods course. Over the next 5 lessons, ...',
        },
      },
    },
    {
      node: {
        fields: {
          slug: '/courses/CSS-Layouts/',
          categorySlug: '/category/css-fundamentals/',
        },
        frontmatter: {
          title: 'CSS Layouts',
          category: 'CSS Fundamentals',
          description:
            'Need help achieving the ideal layout for your feature? This course explains the...',
        },
      },
    },
    {
      node: {
        fields: {
          slug: '/courses/Data-Types/',
          categorySlug: '/category/js-fundamentals/',
        },
        frontmatter: {
          title: 'Data Types',
          category: 'JS Fundamentals',
          description:
            'The focus of this course is to make you familiar with the nuance of the JavaScript...',
        },
      },
    },
    {
      node: {
        fields: {
          slug: '/courses/Functions-and-Scope/',
          categorySlug: '/category/js-fundamentals/',
        },
        frontmatter: {
          title: 'Functions and Scope',
          category: 'JS Fundamentals',
          description:
            'If you want to learn about JavaScript functions, then this is the course for you...',
        },
      },
    },
    {
      node: {
        fields: {
          slug: '/courses/Promises/',
          categorySlug: '/category/async-js/',
        },
        frontmatter: {
          title: 'Promises',
          category: 'Async JS',
          description:
            'Asynchronous programming patterns are the cornerstone of Frontend. All of the...',
        },
      },
    },
  ],
};

describe('Courses', () => {
  it('renders only the first four courses because of pagination', () => {
    const {queryByText, queryAllByText} = render(<Courses {...PROPS} />);

    expect(queryAllByText('Accessibility')).toBeTruthy();
    expect(queryByText('Array Methods')).toBeTruthy();
    expect(queryByText('CSS Layouts')).toBeTruthy();
    expect(queryByText('Data Types')).toBeTruthy();
    expect(queryByText('Functions and Scope')).toBeFalsy();
    expect(queryByText('Promises')).toBeFalsy();
  });

  it('renders pagination bar', () => {
    const {queryByLabelText} = render(<Courses {...PROPS} />);
    expect(queryByLabelText('Go to next page')).toBeTruthy();
  });
});
