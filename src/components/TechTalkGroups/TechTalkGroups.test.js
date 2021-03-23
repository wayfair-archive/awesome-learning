import React from 'react';
import {render} from '@testing-library/react';
import TechTalkGroups from './TechTalkGroups';

export const MOCK_TECH_TALK_GROUPS = [
  {
    fields: {
      slug: '/tech-talks/react-boston-2018',
    },
    frontmatter: {
      description: 'Description for React Boston 2018',
      title: 'React Boston 2018',
    },
  },
  {
    fields: {
      slug: '/tech-talks/react-boston-2019',
    },
    frontmatter: {
      description: 'Description for React Boston 2019',
      title: 'React Boston 2019',
    },
  },
];

describe('Tech Talk Groups', () => {
  it('shows all tech talk groups passed through via props', () => {
    const {getByText} = render(
      <TechTalkGroups techTalkGroups={MOCK_TECH_TALK_GROUPS} />
    );
    MOCK_TECH_TALK_GROUPS.forEach((mockTechTalkGroup) => {
      expect(getByText(mockTechTalkGroup.frontmatter.title)).toBeTruthy();
      expect(getByText(mockTechTalkGroup.frontmatter.description)).toBeTruthy();
    });
  });
});
