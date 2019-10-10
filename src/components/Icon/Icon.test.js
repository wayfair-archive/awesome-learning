import React from 'react';
import {render} from '@testing-library/react';
import Icon from './Icon';

describe('Icon', () => {
  const props = {
    icon: {
      viewBox: '0 0 24 24',
      path:
        'M24 7.65l-1.52-5.72a.59.59 0 0 0-.39-.38L16.35 0a.55.55 0 0 0-.53.15L12 4l8 8 3.82-3.82a.55.55 0 0 0 .18-.53m-24 8.7l1.51 5.72a.55.55 0 0 0 .39.38L7.65 24a.55.55 0 0 0 .53-.15L12 20l-8-8-3.81 3.82a.53.53 0 0 0-.16.53M7.65 0L1.93 1.55a.56.56 0 0 0-.38.38L0 7.65a.55.55 0 0 0 .15.53L4 12l8-8L8.18.19A.49.49 0 0 0 7.65 0M23.8 15.77L20 12l-8 8 3.75 3.77a.74.74 0 0 0 .68.18L22 22.49a.66.66 0 0 0 .49-.49L24 16.47a.67.67 0 0 0-.16-.66'
    },
    cssClasses: 'Header-icon Header-icon--logo'
  };

  it('renders icon with correct HTML nodes', () => {
    const {container, queryAllByText} = render(<Icon {...props} />);

    expect(container.firstChild.tagName).toBe('svg');
    expect(container.firstChild.firstChild.tagName).toBe('path');
    expect(container.querySelectorAll('*')).toHaveLength(2);
    expect(queryAllByText(/.+/)).toHaveLength(0);
  });

  it('renders icon with correct HTML attributes', () => {
    const {container} = render(<Icon {...props} />);
    const svgAttributes = container.firstChild.attributes;
    const pathAttributes = container.firstChild.firstChild.attributes;

    expect(svgAttributes.getNamedItem('class').value).toBe(`Icon ${props.cssClasses}`);
    expect(svgAttributes.getNamedItem('viewBox').value).toBe(props.icon.viewBox);
    expect(pathAttributes.getNamedItem('d').value).toBe(props.icon.path);
  });

  it('renders icon correctly even with cssClasses undefined', () => {
    props.cssClasses = undefined;

    const {container} = render(<Icon {...props} />);
    const svgAttributes = container.firstChild.attributes;

    expect(svgAttributes.getNamedItem('class').value.trim()).toBe('Icon');
  });
});
