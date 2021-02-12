import React from 'react';
import {render} from '@testing-library/react';
import TechTalk from './TechTalk';

export const MOCK_TECH_TALKS = [
  {
    fields: {
      tagSlugs: ['/tags/react', '/tags/accessibility'],
    },
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
    fields: {
      tagSlugs: ['/tags/unit-testing', '/tags/performance'],
    },
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
      tags: ['unit-testing', 'performance'],
      title: 'Test title 2',
    },
  },
];

describe('Tech Talk', () => {
  const [firstTechTalk] = MOCK_TECH_TALKS;
  it('shows important information about the tech talk', () => {
    const {getByText} = render(<TechTalk techTalk={firstTechTalk} />);

    expect(getByText(firstTechTalk.frontmatter.title)).toBeInTheDocument();
    firstTechTalk.frontmatter.speakers.forEach((speaker) => {
      expect(getByText(speaker.email)).toBeInTheDocument();
      expect(getByText(speaker.name)).toBeInTheDocument();
      expect(getByText(speaker.title)).toBeInTheDocument();
      expect(getByText('Twitter').closest('a')).toHaveAttribute(
        'href',
        `https://twitter.com/${speaker.twitter}`
      );
    });

    firstTechTalk.frontmatter.tags.forEach((tag) => {
      expect(getByText(tag)).toBeInTheDocument();
    });
  });
});
