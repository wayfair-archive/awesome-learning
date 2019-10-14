import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { create } from '@storybook/theming';
import { configureActions } from "@storybook/addon-actions"
import { addReadme } from 'storybook-readme';
import React from "react"
import StoryContainer from './StoryContainer';

// Components to exclude from Storybook PropsTable
import Block from '../src/components/Block';
import ContentSection from '../src/components/ContentSection';
import Icon from '../src/components/Icon';
import StyledLink from '../src/components/Link';
import LastLessonProvider from '../src/providers/LastLessonProvider';
import Page from '../src/components/Page';
import Text from '../src/components/Text';



addParameters({
  options: {
    isFullScreen: false,
    showNav: true,
    showPanel: true,
    panelPosition: 'right',
    sortStoriesByKind: true,
    hierarchySeparator: /\/|\./,
    hierarchyRootSeparator: /\|/,
    sidebarAnimations: false,
    enableShortcuts: true,
    isToolshown: true,
    theme: create({
      base: 'light',
      brandTitle: 'Awesome Learning'
    })
  }
});

configureActions({
  depth: 100,
  limit: 20,
});

addDecorator(
  withInfo({
    inline: true,
    styles: {
      header: {
        h1: {
          fontWeight: 600
        },
      },
    },
    header: false,
    maxPropStringLength: 200,
    maxPropsIntoLine: 1,
    propTablesExclude: [
      Block,
      ContentSection,
      Icon,
      StyledLink,
      LastLessonProvider,
      Page,
      Text
    ]
  })
);
addDecorator(addReadme);
addDecorator(story => <StoryContainer story={story} />);

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
configure(loadStories, module);