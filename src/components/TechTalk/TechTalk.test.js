import React from 'react';
import {render} from '@testing-library/react';
import TechTalk from './TechTalk';

export const MOCK_TECH_TALKS = [
  {
    fields: {
      tagSlugs: ['/tags/react', '/tags/accessibility', '/tags/usability'],
    },
    frontmatter: {
      description: 'Test description',
      embedLink: 'https://www.youtube.com/embed/jvEFw0YpGgg',
      speakers: [
        {
          name: 'Test Speaker',
          title: 'Test Engineer',
          twitter: 'testtwitter2',
        },
      ],
      tags: ['react', 'accessibility', 'usability'],
      title: 'Test title',
    },
  },
  {
    fields: {
      tagSlugs: ['/tags/unit-testing', '/tags/performance', '/tags/javascript'],
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
      tags: ['unit-testing', 'performance', 'javascript'],
      title: 'Test title 2',
    },
  },
];

describe('Tech Talk', () => {
  const [firstTechTalk] = MOCK_TECH_TALKS;
  it('shows important information about the tech talk', () => {
    const {getByText} = render(<TechTalk techTalk={firstTechTalk} />);

    expect(getByText(firstTechTalk.frontmatter.title)).toBeTruthy();
    expect(getByText(firstTechTalk.frontmatter.description)).toBeTruthy();
  });
  it('shows speaker information about the tech talk', () => {
    const {getByText, queryByText} = render(
      <TechTalk techTalk={firstTechTalk} />
    );

    firstTechTalk.frontmatter.speakers.forEach((speaker) => {
      expect(queryByText(new RegExp(speaker.name, 'i'))).toBeTruthy();
      expect(queryByText(new RegExp(speaker.title, 'i'))).toBeTruthy();
      expect(getByText('(Twitter)').closest('a').getAttribute('href')).toBe(
        `https://twitter.com/${speaker.twitter}`
      );
    });
  });
  it('shows tag information about the tech talk', () => {
    const {getByText} = render(<TechTalk techTalk={firstTechTalk} />);

    firstTechTalk.frontmatter.tags.forEach((tag) => {
      expect(getByText(tag)).toBeTruthy();
    });
  });
});
