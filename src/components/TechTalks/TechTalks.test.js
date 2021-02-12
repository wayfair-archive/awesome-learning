import React from 'react';
import {render} from '@testing-library/react';
import {MOCK_TECH_TALKS} from '../TechTalk/TechTalk.test';
import TechTalks from './TechTalks';

describe('Tech Talks', () => {
  it('shows all tech talks passed through via props', () => {
    const {getByText} = render(<TechTalks techTalks={MOCK_TECH_TALKS} />);
    MOCK_TECH_TALKS.forEach((mockTechTalk) => {
      expect(getByText(mockTechTalk.frontmatter.title)).toBeTruthy();
      expect(getByText(mockTechTalk.frontmatter.description)).toBeTruthy();
    });
  });
});
