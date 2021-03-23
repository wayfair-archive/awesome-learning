import React from 'react';
import {render} from '@testing-library/react';
import {PureLessonButton} from './LessonButton';

describe('LessonButton', () => {
  const props = {
    path: 'data-types/objects',
    data: {
      site: {
        siteMetadata: {
          repoName: 'awesome-learning',
          repoOwner: 'wayfair',
        },
      },
    },
    defaultTab: 'tests',
  };

  it('creates a button with the right copy and codesandbox url', () => {
    const {queryByText} = render(<PureLessonButton {...props} />);

    expect(queryByText('Click here to start your exercises!')).toBeTruthy();
    expect(document.querySelector('a').getAttribute('href')).toBe(
      'https://codesandbox.io/s/github/wayfair/awesome-learning-exercises/tree/main/data-types/objects?fontsize=14&previewwindow=tests'
    );
  });
});
