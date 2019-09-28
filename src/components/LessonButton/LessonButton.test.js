import React from 'react';
import { render } from '@testing-library/react';
import { PureLessonButton } from './LessonButton';

describe('LessonButton', () => {
  const props = {
    path: 'data-types/objects',
    data: {
      site: {
        siteMetadata: {
          repoName: 'awesome-learning',
          repoOwner: 'wayfair'
        }
      }
    },
    defaultTab: 'tests'
  };

  it('creates a link with the right codesandbox url', () => {
    const { getByText } = render(<PureLessonButton {...props} />);
    expect(getByText(/click here/i).href).toBe(
      'https://codesandbox.io/s/github/wayfair/awesome-learning/tree/master/exercises/data-types/objects?fontsize=14&previewwindow=tests'
    );
  });
});
