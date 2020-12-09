import React from 'react';
import {render} from '@testing-library/react';
import Page from './Page';

describe('Page', () => {
  const title = 'Test page title';

  it('renders page correctly with all props', () => {
    const {container, getByText, getAllByText} = render(
      <Page title={title}>
        <section>children test section</section>
        <section>children test section</section>
      </Page>
    );

    expect(container.firstChild.attributes.getNamedItem('class').value).toBe(
      'Page'
    );
    expect(
      container.firstChild.firstChild.attributes.getNamedItem('class').value
    ).toBe('Page-inner');
    expect(getByText(title).attributes.getNamedItem('class').value).toBe(
      'Page-title'
    );
    expect(container.firstChild.firstChild.children[0].tagName).toBe('H1');
    expect(
      container.firstChild.firstChild.children[0].attributes.getNamedItem(
        'class'
      ).value
    ).toBe('Page-title');
    expect(
      container.firstChild.firstChild.children[1].attributes.getNamedItem(
        'class'
      ).value
    ).toBe('Page-body');
    expect(getAllByText('children test section')).toHaveLength(2);
    expect(container.firstChild.firstChild.children[1].children).toHaveLength(
      2
    );
    expect(
      container.firstChild.firstChild.children[1].children[0].tagName
    ).toBe('SECTION');
    expect(
      container.firstChild.firstChild.children[1].children[1].tagName
    ).toBe('SECTION');
  });

  it('renders page correctly with just title', () => {
    const {container, getByText} = render(<Page title={title} />);

    expect(container.firstChild.attributes.getNamedItem('class').value).toBe(
      'Page'
    );
    expect(
      container.firstChild.firstChild.attributes.getNamedItem('class').value
    ).toBe('Page-inner');
    expect(container.firstChild.firstChild.firstChild.tagName).toBe('H1');
    expect(
      container.firstChild.firstChild.firstChild.attributes.getNamedItem(
        'class'
      ).value
    ).toBe('Page-title');
    expect(getByText(title).attributes.getNamedItem('class').value).toBe(
      'Page-title'
    );
  });

  it('renders page correctly with just children', () => {
    const {container, getAllByText} = render(
      <Page>
        <section>children test section</section>
        <section>children test section</section>
      </Page>
    );

    expect(container.firstChild.attributes.getNamedItem('class').value).toBe(
      'Page'
    );
    expect(
      container.firstChild.firstChild.attributes.getNamedItem('class').value
    ).toBe('Page-inner');
    expect(
      container.firstChild.firstChild.firstChild.attributes.getNamedItem(
        'class'
      ).value
    ).toBe('Page-body');
    expect(getAllByText('children test section')).toHaveLength(2);
    expect(container.firstChild.firstChild.firstChild.children).toHaveLength(2);
    expect(container.firstChild.firstChild.firstChild.children[0].tagName).toBe(
      'SECTION'
    );
    expect(container.firstChild.firstChild.firstChild.children[1].tagName).toBe(
      'SECTION'
    );
  });

  it('renders page correctly without props', () => {
    const {container} = render(<Page />);

    expect(container.firstChild.attributes.getNamedItem('class').value).toBe(
      'Page'
    );
    expect(
      container.firstChild.firstChild.attributes.getNamedItem('class').value
    ).toBe('Page-inner');
    expect(
      container.firstChild.firstChild.firstChild.attributes.getNamedItem(
        'class'
      ).value
    ).toBe('Page-body');
  });
});
