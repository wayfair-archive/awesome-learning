import React from 'react';
import {render} from '@testing-library/react';
import {PureLessonButton} from './LessonButton';
import LastLessonProvider from '../../providers/LastLessonProvider';

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
    const {getByText} = render(
      <LastLessonProvider>
        <PureLessonButton {...props} />
      </LastLessonProvider>
    );
    expect(getByText(/click here/i).href).toBe(
      'https://codesandbox.io/s/github/wayfair/awesome-learning-exercises/tree/master/data-types/objects?fontsize=14&previewwindow=tests'
    );
  });
});
