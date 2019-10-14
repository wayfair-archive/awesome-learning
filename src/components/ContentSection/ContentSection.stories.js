import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import ContentSectionReadme from './README.md'
import ContentSection from '../ContentSection';

const titleAlignOptions = {
  left: 'left',
  center: 'center'
};

const contentAlignOptions = {
  left: 'left',
  center: 'center'
};

const contentText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Nulla at volutpat diam ut venenatis tellus in metus vulputate. Sodales neque sodales ut etiam.
  Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. In cursus turpis massa tincidunt dui ut ornare lectus sit.`

const stories = storiesOf('Shared.Content', module);

stories.addDecorator(withKnobs)
stories.addParameters({
  readme: {
    // Show readme at the addons panel
    sidebar: ContentSectionReadme,
  },
})

stories
  .add('basic', () =>
    <ContentSection
      title={text('title', 'Content Title')}
      subTitle={text('subTitle', 'sub title')}
      isLight={boolean('isLight', false)}
      titleAlignment={select('titleAlignment', titleAlignOptions, 'left')}
      contentAlignment={select('contentAlignment', contentAlignOptions, 'left')}
    >
      {contentText}
    </ContentSection>
  )

