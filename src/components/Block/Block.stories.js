import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Block from './Block';
import BlockReadme from './README.md';

const blockText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Nulla at volutpat diam ut venenatis tellus in metus vulputate. Sodales neque sodales ut etiam.
  Diam phasellus vestibulum lorem sed risus ultricies tristique nulla. In cursus turpis massa tincidunt dui ut ornare lectus sit.`

const stories = storiesOf('Shared.Block', module);

stories
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: BlockReadme,
    },
  })
  .add(
    'basic',
    () => 
      <Block
        is={text('is', 'div')}
        mb={text('mb', '4px')}
        mr={text('mr', '4px')}
        mt={text('mt', '4px')}
        ml={text('ml', '4px')}
      >
        {blockText}
      </Block>
  )
