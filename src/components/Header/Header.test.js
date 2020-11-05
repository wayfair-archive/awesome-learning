import React from 'react';
import { render } from '@testing-library/react';
import { PureHeader } from './Header';

describe('PureHeader', () => {
  const menu = [{ label: "testlabel1", path: "/testpath1" }, { label: "testlabel2", path: "/testpath2" }];
  const title = 'Test Title';
  const expectedData = { site: { siteMetadata: { title, menu } } };
  
  it('renders title correctly', () => {
    const { getByText } = render(<PureHeader data={expectedData} />);
    expect(getByText(title)).toBeTruthy();
  });

  it('renders menu labels correctly', () => {
    const { getByText } = render(<PureHeader data={expectedData} />);
    expect(getByText('testlabel1')).toBeTruthy();
    expect(getByText('testlabel2')).toBeTruthy();
  });
});
