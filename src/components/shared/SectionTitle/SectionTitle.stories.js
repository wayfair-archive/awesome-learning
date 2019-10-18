import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
import SectionTitle from './SectionTitle';
import SectiontitleReadme from './README.md';

const headingOptions = {
  h2: 'h2',
  h3: 'h3',
  h4: 'h4'
};

const sizeOptions = {
  body: 'body',
  large: 'large',
  xl: 'xl'
};

const bodyText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Nulla at volutpat diam ut venenatis tellus in metus vulputate. Sodales neque sodales ut etiam.
  Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. In cursus turpis massa tincidunt dui ut ornare lectus sit.`

const stories = storiesOf('Shared.SectionTitle', module);

stories
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: SectiontitleReadme,
    },
  })
  .add(
    'basic',
    () =>
      <SectionTitle
        headingLevel={select('headingLevel', headingOptions, 'h2')}
        fontSize={select('fontSize', sizeOptions, 'body')}
        textTransform={boolean('textTransform', false)}
        mb={text('mb', '0px')}
      >
        {bodyText}
      </SectionTitle>
  )