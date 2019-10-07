import React from 'react';
import { render } from '@testing-library/react';
import TrackCard from './TrackCard';
import { getIcon } from "../../utils";

const PROPS = {
  title: 'Track Card Title',
  icon: getIcon("array"),
  subTitle: 'This is a track card',
  path: '/trackcard'
};

describe('Track Card', () => {
  it('Renders an icon, title, and subtitle that link to path', () => {
    const { container, getByText } = render(
      <TrackCard {...PROPS} />
    );
    const icon = container.querySelector('.TrackCard-icon');

    expect(icon).toBeTruthy();
    expect(container.querySelector(".TrackCard").getAttribute("to")).toBe(PROPS.path)
    expect(getByText(PROPS.title)).toBeTruthy();
    expect(getByText(PROPS.subTitle)).toBeTruthy();
  });
});
