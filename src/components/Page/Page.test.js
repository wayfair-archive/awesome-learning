import React from 'react';
import {render} from '@testing-library/react';
import Page from './Page';

describe('Page', () => {
  const props = {
    title: 'Test page title',
    children: undefined,
  };

  it('renders page correctly with all props', () => {
    const {container, getByText} = render(<Page {...props} />);

    expect(container.firstChild.attributes.getNamedItem('class').value).toBe('Page');
    expect(container.firstChild.firstChild.attributes.getNamedItem('class').value).toBe('Page-inner');
    expect(container.firstChild.firstChild.firstChild.tagName).toBe('H1');
    expect(container.firstChild.firstChild.firstChild.attributes.getNamedItem('class').value).toBe('Page-title');
    expect(getByText(props.title).attributes.getNamedItem('class').value).toBe('Page-title');
    // Add test for children props
  });

  it('renders page correctly with just title', () => {
    const {container, getByText} = render(<Page title={props.title} />);

    expect(container.firstChild.attributes.getNamedItem('class').value).toBe('Page');
    expect(container.firstChild.firstChild.attributes.getNamedItem('class').value).toBe('Page-inner');
    expect(container.firstChild.firstChild.firstChild.tagName).toBe('H1');
    expect(container.firstChild.firstChild.firstChild.attributes.getNamedItem('class').value).toBe('Page-title');
    expect(getByText(props.title).attributes.getNamedItem('class').value).toBe('Page-title');
  });

  it('renders page correctly with just children', () => {
    const {container, getByText} = render(<Page children={props.children} />);

    expect(container.firstChild.attributes.getNamedItem('class').value).toBe('Page');
    expect(container.firstChild.firstChild.attributes.getNamedItem('class').value).toBe('Page-inner');
    expect(container.firstChild.firstChild.firstChild.attributes.getNamedItem('class').value).toBe('Page-body');
    // Add test for children props
  });

  it('renders page correctly without props', () => {
    const {container} = render(<Page />);

    expect(container.firstChild.attributes.getNamedItem('class').value).toBe('Page');
    expect(container.firstChild.firstChild.attributes.getNamedItem('class').value).toBe('Page-inner');
    expect(container.firstChild.firstChild.firstChild.attributes.getNamedItem('class').value).toBe('Page-body');
  });
});
