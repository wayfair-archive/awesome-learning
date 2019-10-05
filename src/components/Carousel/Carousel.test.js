import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, fireEvent} from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel', () => {
  const props = {
    items: [
      { title: 'Test', icon: 'icon', subTitle: 'test subTitle', path: 'path' },
      { title: 'Test2', icon: 'icon', subTitle: 'test subTitle', path: 'path' }
    ],
  };

  it('Check if all items are rendered', () => {
    const {getAllByRole} = render(<Carousel {...props} />);
    expect(getAllByRole('listitem').length).toBe(2);
  });

  it('Check if next and previous buttons work correctly', () => {
    const {getAllByRole} = render(<Carousel cardWidth={100} spacing={0} {...props} />);
    const prevButton = getAllByRole('button')[0];
    const nextButton = getAllByRole('button')[1];

    expect(getAllByRole('list')[0]).toHaveStyle(`left: 0px`);

    // Next button
    fireEvent.click(nextButton);
    expect(getAllByRole('list')[0]).toHaveStyle(`left: -100px`);

    // Previous button
    fireEvent.click(prevButton);
    expect(getAllByRole('list')[0]).toHaveStyle(`left: 0px`);
  });
});
