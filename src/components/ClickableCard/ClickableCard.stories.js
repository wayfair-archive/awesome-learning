import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ClickableCard from './ClickableCard';
import ClickableCardReadme from './README.md';

const cardText = `Clickable Card`;

const cardOnClick = () => alert('You clicked on the card- congratulations.');

const stories = storiesOf('ClickableCard', module);

stories
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: ClickableCardReadme,
    },
  })
  .add(
    'with link',
    () =>
      <ClickableCard
        link={text('link', '/')}
      >
        {cardText}
      </ClickableCard>
  )
  .add(
    'with onClick and icon',
    () =>
      <ClickableCard
        handleCardClick={cardOnClick}
        iconName={text('iconName', 'hook')}
      >
        {cardText}
      </ClickableCard>
  );
