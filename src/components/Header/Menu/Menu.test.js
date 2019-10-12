import React from 'react';
import { render } from '@testing-library/react';
import Icon from "../../Icon";
import { getIcon } from "../../../utils";
import Menu from './Menu';

const props = {
  menu: ['item1', 'item2'],
};
const {container} = render(<Icon {...props} />);
expect(container.firstChild.tagName).toBe('svg');
expect(container.firstChild.attributes.getNamedItem('icon').value).toBe(getIcon(menu));
expect(container.firstChild.attributes.getNamedItem('cssClasses').value).toBe('Menu-icon');


describe('Menus', () => {
  it('renders all tags correcty', () => {Menu
    const { queryByRole, queryAllByRole, queryByText } = render(<Menu {...props} />);
    const { menu } = props
    
    expect(queryByRole('list')).toBeTruthy();
    expect(queryAllByRole('Menu-list')).toHaveLength(menu.length);
    
    menu.forEach((t, i) => {
      const menuHtml = queryByText(t);
      expect(menuHtml).toBeTruthy();
      expect(menuHtml.getAttribute('to')).toBe(`${menu[i]}`)
    })
  });
});

