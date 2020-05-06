import React from 'react';
import {render} from '@testing-library/react';
import ClickableCard from './ClickableCard';

const cardContent = 'Clickable Card';
const link = '/';
const handleCardClick = jest.fn();
const iconName = 'hook';

describe('Clickable Card', () => {
  it('Renders child content and a link', () => {
    const {container, getByText} = render(<ClickableCard link={link}>{cardContent}</ClickableCard>);
    const icon = container.querySelector('.ClickableCard-icon');
    const cardLink = container.querySelector('.ClickableCard').getAttribute('href');

    expect(icon).toBeFalsy();
    expect(cardLink).toBe(link);
    expect(getByText(cardContent)).toBeTruthy();
    expect(handleCardClick).not.toHaveBeenCalled();
  });
  it('Renders an icon and an onClick handler', () => {
    const {container, getByText} = render(<ClickableCard {...{handleCardClick, iconName}}>{cardContent}</ClickableCard>);
    const icon = container.querySelector('.ClickableCard-icon');
    const cardLink = container.querySelector('.ClickableCard').getAttribute('href');
    container.querySelector('.ClickableCard').click();

    expect(icon).toBeTruthy();
    expect(cardLink).toBeFalsy();
    expect(getByText(cardContent)).toBeTruthy();
    expect(handleCardClick).toHaveBeenCalled();
  });
});
