import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import StyledLink from './Link';
import LastLessonProvider from '../../../providers/LastLessonProvider';
import LinkReadme from './README.md';

const stories = storiesOf('Shared.Link', module);

const variationOptions = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  tertiaryAlt: 'tertiaryAlt',
  tertiaryAltInverse: 'tertiaryAltInverse',
  pill: 'pill'
};

stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <LastLessonProvider>
      {story()}
    </LastLessonProvider>
  ))
  .addParameters({
    readme: {
      sidebar: LinkReadme,
    },
  })
  .add(
    'primary',
    () =>
      <StyledLink
        variation={select('variation', variationOptions, 'primary')}
        path={text('path', '/')}
        isExternal
      >
        Primary
      </StyledLink>
  )
  // .add(
  //   'secondary',
  //   () =>
  //     <StyledLink
  //       variation={select('variation', variationOptions, 'secondary')}
  //       path={text('path', '/')}
  //       isExternal
  //     >
  //       Secondary
  //     </StyledLink>
  // )
  // .add(
  //   'tertiary',
  //   () =>
  //     <StyledLink
  //       variation={select('variation', variationOptions, 'tertiary')}
  //       path={text('path', '/')}
  //       isExternal
  //     >
  //       Tertiary
  //     </StyledLink>
  // )
  // .add(
  //   'tertiary alt',
  //   () =>
  //     <StyledLink
  //       variation={select('variation', variationOptions, 'tertiaryAlt')}
  //       path={text('path', '/')}
  //       isExternal
  //     >
  //       Tertiary Alt
  //     </StyledLink>
  // )
  // .add(
  //   'tertiary alt inverse',
  //   () =>
  //     <StyledLink
  //       variation={select('variation', variationOptions, 'tertiaryAltInverse')}
  //       path={text('path', '/')}
  //       isExternal
  //     >
  //       Tertiary Alt Inverse
  //     </StyledLink>
  // )
  // .add(
  //   'pill',
  //   () =>
  //     <StyledLink
  //       variation={select('variation', variationOptions, 'pill')}
  //       path={text('path', '/')}
  //       isExternal
  //     >
  //       Pill
  //     </StyledLink>
  // )
  // .add(
  //   'isButton',
  //   () =>
  //     <StyledLink
  //       variation={select('variation', variationOptions, 'primary')}
  //       isButton={boolean('isButton', true)}
  //       path={text('path', '/')}
  //       isExternal
  //     >
  //       Is Button
  //     </StyledLink>
  // )
  // .add(
  //   'isActive',
  //   () =>
  //     <StyledLink
  //       variation={select('variation', variationOptions, 'primary')}
  //       isActive={boolean('isActive', true)}
  //       path={text('path', '#')}
  //       isExternal={false}
  //     >
  //       Is Active
  //     </StyledLink>
  // ) 