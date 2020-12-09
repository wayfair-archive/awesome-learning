import React from 'react';
import {render} from '@testing-library/react';
import {PureHeader} from './Header';

describe('PureHeader', () => {
  const menu = [
    {label: 'testlabel1', path: '/testpath1'},
    {label: 'testlabel2', path: '/testpath2'},
  ];
  const title = 'Test Title';
  const expectedData = {site: {siteMetadata: {title, menu}}};

  it('Renders a page title button that links back to the landing', () => {
    const {queryByText, container} = render(<PureHeader data={expectedData} />);
    const link = container.querySelector('a');
    expect(queryByText(title)).toBeTruthy();
    expect(link.getAttribute('href')).toBe('/');
  });

  it('Renders two menu tabs', () => {
    const {queryByText} = render(<PureHeader data={expectedData} />);
    expect(queryByText('testlabel1')).toBeTruthy();
    expect(queryByText('testlabel2')).toBeTruthy();
  });
});
