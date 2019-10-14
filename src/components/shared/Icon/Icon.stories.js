import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import IconReadme from './README.md'
import { getIcon } from '../../../utils';
import Icon from './Icon';


const containerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  flexWrap: 'wrap'
};

const blockStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '130px',
  height: '130px',
  padding: '30px',
  margin: '10px',
  border: '1px #000 solid'
};

const stories = storiesOf('Shared.Icon', module);

stories.addDecorator(withKnobs)
stories.addParameters({
  readme: {
    // Show readme at the addons panel
    sidebar: IconReadme,
  },
})

stories
  .add('basic', () =>
    <div style={containerStyle}>
      <div style={blockStyle}>
        <p>Twitter</p>
        <Icon icon={getIcon("twitter")}/>
      </div>
      <div style={blockStyle}>
        <p>Github</p>
        <Icon icon={getIcon("github")}/>
      </div>
      <div style={blockStyle}>
        <p>Email</p>
        <Icon icon={getIcon("email")}/>
      </div>
      <div style={blockStyle}>
        <p>Awesome Learning</p>
        <Icon icon={getIcon("logo")}/>
      </div>
      <div style={blockStyle}>
        <p>Menu</p>
        <Icon icon={getIcon("menu")}/>
      </div>
      <div style={blockStyle}>
        <p>Functions</p>
        <Icon icon={getIcon("functions")}/>
      </div>
      <div style={blockStyle}>
        <p>Array</p>
        <Icon icon={getIcon("array")}/>
      </div>
      <div style={blockStyle}>
        <p>Async</p>
        <Icon icon={getIcon("async")}/>
      </div>
      <div style={blockStyle}>
        <p>Data</p>
        <Icon icon={getIcon("data")}/>
      </div>
      <div style={blockStyle}>
        <p>Testing</p>
        <Icon icon={getIcon("testing")}/>
      </div>
      <div style={blockStyle}>
        <p>Function</p>
        <Icon icon={getIcon("function")}/>
      </div>
      <div style={blockStyle}>
        <p>Hook</p>
        <Icon icon={getIcon("hook")}/>
      </div>
      <div style={blockStyle}>
        <p>Left Chevron</p>
        <Icon icon={getIcon("leftChevron")}/>
      </div>
      <div style={blockStyle}>
        <p>Right Chevron</p>
        <Icon icon={getIcon("rightChevron")}/>
      </div>
    </div>,
    { info: { disable: true } }
  )