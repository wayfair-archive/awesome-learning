import React from 'react'
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Toast from './Toast'
import ToastReadme from './README.md'

const toastType = {
  info: 'info',
  success: 'success',
  warning: 'warning',
  error: 'error'
}

const messageLength = {
  shortMessage: "This is a short toast",
  longMessage: "This is a super long message with tons of text, but it shows how a toast responds to long messages"
}

const stories = storiesOf('Shared.Toast', module);

stories
  .addDecorator(withKnobs)
  .addParameters({
    readme: {
      sidebar: ToastReadme,
    },
  })
  .add(
    'basic',
    () =>
      <Toast
        type={select('type', toastType, 'info')}
        message={select('message length', messageLength)}
      />
  )
