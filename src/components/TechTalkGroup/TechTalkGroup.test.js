import React from 'react';
import {render} from '@testing-library/react';
import {MOCK_TECH_TALK_GROUPS} from '../TechTalkGroups/TechTalkGroups.test';
import {MOCK_TECH_TALKS} from '../TechTalk/TechTalk.test';
import TechTalkGroup from './TechTalkGroup';

const [MOCK_TECH_TALK_GROUP] = MOCK_TECH_TALK_GROUPS;

describe('Tech Talk Group', () => {
  it('shows information about the current group', () => {
    const {getByText} = render(
      <TechTalkGroup
        techTalkGroup={MOCK_TECH_TALK_GROUP.frontmatter}
        techTalks={MOCK_TECH_TALKS}
      />
    );
    expect(
      getByText(MOCK_TECH_TALK_GROUP.frontmatter.description)
    ).toBeTruthy();
    expect(getByText(MOCK_TECH_TALK_GROUP.frontmatter.title)).toBeTruthy();
  });
  it('shows all tech talks in this group', () => {
    const {getByText, getAllByText} = render(
      <TechTalkGroup
        techTalkGroup={MOCK_TECH_TALK_GROUP.frontmatter}
        techTalks={MOCK_TECH_TALKS}
      />
    );
    MOCK_TECH_TALKS.forEach((mockTechTalk) => {
      expect(getByText(mockTechTalk.frontmatter.description)).toBeTruthy();
      expect(
        getAllByText(new RegExp(mockTechTalk.frontmatter.title, 'i'))
      ).toBeTruthy();
    });
  });
});
