import React from 'react';
import {render} from '@testing-library/react';
import Content from './Content';

describe('Content', () => {
  it('renders correctly', () => {
    const props = {
      title: 'test title',
      body: '<p>test body</p>'
    };

    const {queryByText} = render(<Content {...props} />);
    expect(queryByText('test title')).toBeTruthy();
    expect(queryByText('test body')).toMatchInlineSnapshot(`
      <p>
        test body
      </p>
    `);
  });
});
