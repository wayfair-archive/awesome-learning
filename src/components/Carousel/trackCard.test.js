import React from 'react';
import {render} from '@testing-library/react';
import TrackCard from './trackCard';
import {getIcon} from '../../utils';

const PROPS = {
  title: 'Track Card Title',
  icon: getIcon('array'),
  subTitle: 'This is a track card',
  path: '/trackcard',
};

describe('Track Card', () => {
  it('Renders an icon, and title that link to path', () => {
    const {queryByText, container} = render(<TrackCard {...PROPS} />);
    const icon = container.querySelector('svg');
    const link = container.querySelector('a');

    expect(queryByText(PROPS.title)).toBeTruthy();
    expect(icon).toBeTruthy();
    expect(link.getAttribute('to')).toBe(PROPS.path);
  });
});
