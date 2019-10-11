import React from 'react';
import { render } from '@testing-library/react';
import { PureHeader, Header } from './Header';

describe('PureHeader', () => {
  it('renders', () => {
    const menu = [{ label: "testlabel1", path: "/testlabel1" }]
    const data = { site: { siteMetadata: { title: 'Test Title', menu } } };
    const { container } = render(<PureHeader data={data} />);
    expect(container).not.toBeNull();
  })

  it('renders menu correctly', () => {
    const menu = [{ label: "testlabel1", path: "/testpath1" }, { label: "testlabel2", path: "/testpath2" }];
    const data = { site: { siteMetadata: { title: 'Test Title', menu } } };
    const { container, queryAllByText } = render(<PureHeader data={data} />);
    expect(container.querySelectorAll('.Header-link')).toHaveLength(3);
    expect(container.querySelectorAll('link[to="/testpath1"]')).toHaveLength(2);
    expect(container.querySelectorAll('link[to="/testpath2"]')).toHaveLength(2);
    expect(queryAllByText(/testlabel1/gi)).toHaveLength(2);
    expect(queryAllByText(/testlabel2/gi)).toHaveLength(2);
  })
});

describe('Header', () => {
  it('renders', () => {
    const { container } = render(<Header />);
    expect(container).not.toBeNull();
  })
});
