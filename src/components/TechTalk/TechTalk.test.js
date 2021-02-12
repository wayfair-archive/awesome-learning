import React from 'react';
import {render} from '@testing-library/react';
import TechTalk from './TechTalk';

export const MOCK_TECH_TALKS = [
  {
    frontmatter: {
      description: 'Test description',
      embedLink: 'https://www.youtube.com/embed/jvEFw0YpGgg',
      speakers: [
        {
          email: 'test@mail.com',
          name: 'Test Speaker',
          title: 'Test Engineer',
          twitter: 'testtwitter2',
        },
      ],
      tags: ['react', 'accessibility'],
      title: 'Test title',
    },
  },
  {
    frontmatter: {
      description: 'Test description 2',
      embedLink: 'https://www.youtube.com/embed/oi3j2S4Mx',
      speakers: [
        {
          email: 'test2@mail.com',
          name: 'Test Speaker 2',
          title: 'Test Engineer 2',
          twitter: 'testtwitter2',
        },
      ],
      tags: ['unit testing', 'performance'],
      title: 'Test title 2',
    },
  },
];

describe('Tech Talk', () => {});
