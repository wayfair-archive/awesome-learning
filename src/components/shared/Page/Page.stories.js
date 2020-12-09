import React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text} from '@storybook/addon-knobs';
import Page from './Page';
import LastLessonProvider from '../../../providers/LastLessonProvider';
import PageReadme from './README.md';

const pageText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Nulla at volutpat diam ut venenatis tellus in metus vulputate. Sodales neque sodales ut etiam.
  Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. In cursus turpis massa tincidunt dui ut ornare lectus sit.`;

const stories = storiesOf('Shared.Page', module);

stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <LastLessonProvider>
      {story()}
    </LastLessonProvider>
  ))
  .addParameters({
    readme: {
      // Show readme at the addons panel
      sidebar: PageReadme
    }
  })
  .add('basic', () => (
    <Page title={text('title', 'Page Title')}>{pageText}</Page>
  ));
