import React from 'react';
import { render } from '@testing-library/react';
import Tags from './Tags';

const props = {
  tagSlugs: ['tag/slug1', 'tag/slug2', 'tag/slug3'],
  tags: ['tag1', 'tag2', 'tag3'],
};

describe('Tags', () => {
  it('renders all tags correcty', () => {
    const { queryByRole, queryAllByRole, queryByText } = render(<Tags {...props} />);
    const { tags, tagSlugs } = props;
    
    expect(queryByRole('list')).toBeTruthy();
    expect(queryAllByRole('listitem')).toHaveLength(tags.length);
    
    tags.forEach((t, i) => {
      const tagHtml = queryByText(t);
      expect(tagHtml).toBeTruthy();
      expect(tagHtml.getAttribute('to')).toBe(`${tagSlugs[i]}`);
    });
  });
});
