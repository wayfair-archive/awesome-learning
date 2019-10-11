import React from 'react';
import { render } from '@testing-library/react';
import { PAGINATION } from '../../constants';
import Pagination from './Pagination';

describe('Pagination', () => {
  const props = {
    prevPagePath: 'prevPath',
    nextPagePath: 'nextPath',
    hasPrevPage: true,
    hasNextPage: true,
  };

  it('renders correctly with all props', () => {
    const {container, getAllByText} = render(<Pagination {...props} />);
    expect(container.firstChild.tagName).toBe('DIV');
    expect(container.firstChild.attributes.getNamedItem('class').value).toBe('Pagination');
    expect(container.firstChild.children).toHaveLength(2);
    expect(container.firstChild.children[0].attributes.getNamedItem('class').value).toBe('Pagination-prev');
    expect(getAllByText(PAGINATION.PREV_PAGE)).toHaveLength(1);
    expect(getAllByText(PAGINATION.PREV_PAGE)[0].attributes.getNamedItem('class').value).toBe('Pagination-prev-link');
    expect(getAllByText(PAGINATION.PREV_PAGE)[0].attributes.getNamedItem('to').value).toBe(props.prevPagePath);
    expect(container.firstChild.children[1].attributes.getNamedItem('class').value).toBe('Pagination-next');
    expect(getAllByText(PAGINATION.NEXT_PAGE)).toHaveLength(1);
    expect(getAllByText(PAGINATION.NEXT_PAGE)[0].attributes.getNamedItem('class').value).toBe('Pagination-next-link');
    expect(getAllByText(PAGINATION.NEXT_PAGE)[0].attributes.getNamedItem('to').value).toBe(props.nextPagePath);
  });

  it('renders correctly without previous page', () => {
    props.hasNextPage = true;
    props.hasPrevPage = false;
    const {container, getAllByText} = render(<Pagination {...props} />);
    expect(container.firstChild.tagName).toBe('DIV');
    expect(container.firstChild.attributes.getNamedItem('class').value).toBe('Pagination');
    expect(container.firstChild.children).toHaveLength(1);
    expect(container.firstChild.firstChild.attributes.getNamedItem('class').value).toBe('Pagination-next');
    expect(getAllByText(PAGINATION.NEXT_PAGE)).toHaveLength(1);
    expect(getAllByText(PAGINATION.NEXT_PAGE)[0].attributes.getNamedItem('class').value).toBe('Pagination-next-link');
    expect(getAllByText(PAGINATION.NEXT_PAGE)[0].attributes.getNamedItem('to').value).toBe(props.nextPagePath);

  });
  it('renders correctly without next page', () => {
    props.hasNextPage = false;
    props.hasPrevPage = true;
    const {container, getAllByText} = render(<Pagination {...props} />);
    expect(container.firstChild.tagName).toBe('DIV');
    expect(container.firstChild.attributes.getNamedItem('class').value).toBe('Pagination');
    expect(container.firstChild.children).toHaveLength(1);
    expect(container.firstChild.firstChild.attributes.getNamedItem('class').value).toBe('Pagination-prev');
    expect(getAllByText(PAGINATION.PREV_PAGE)).toHaveLength(1);
    expect(getAllByText(PAGINATION.PREV_PAGE)[0].attributes.getNamedItem('class').value).toBe('Pagination-prev-link');
    expect(getAllByText(PAGINATION.PREV_PAGE)[0].attributes.getNamedItem('to').value).toBe(props.prevPagePath);
  });
});
