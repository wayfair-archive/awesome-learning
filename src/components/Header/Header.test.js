import React from 'react';
import { render } from '@testing-library/react';
import { PureHeader } from './Header';

describe('PureHeader', () => {
  const menu = [{ label: "testlabel1", path: "/testpath1" }, { label: "testlabel2", path: "/testpath2" }];
  const title = 'Test Title';
  const expectedData = { site: { siteMetadata: { title, menu } } };
  
  it('renders title correctly', () => {
    const { getByText } = render(<PureHeader data={expectedData} />);
    expect(getByText(title));
  });

  it('renders menu labels correctly', () => {
    const { getAllByText } = render(<PureHeader data={expectedData} />);
    expect(getAllByText('testlabel1')).toHaveLength(2);
    expect(getAllByText('testlabel2')).toHaveLength(2);
  });
});
