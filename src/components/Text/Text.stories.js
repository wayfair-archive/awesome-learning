import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Text from './Text';
import TextReadme from './README.md';

const sizeOptions = {
  body: 'body',
  large: 'large',
  xl: 'xl'
};

const bodyText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Nulla at volutpat diam ut venenatis tellus in metus vulputate. Sodales neque sodales ut etiam.
  Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. In cursus turpis massa tincidunt dui ut ornare lectus sit.`

const stories = storiesOf('Shared.Text', module);

stories
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: TextReadme,
    },
  })
  .add(
    'basic',
    () => <Text fontSize={select('fontSize', sizeOptions, 'body')}>{bodyText}</Text>
  )
