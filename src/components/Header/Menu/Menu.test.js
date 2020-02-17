import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu';

const MenuData = [
  {
    label: 'Menu Item 1',
    path: '/item1'
  },
  {
    label: 'Menu Item 2',
    path: '/item2'
  }
];

/**
 * @param {NodeList} nodeList
 * @param {string} attributeName
 * @param {string} key
 * @description
 */
function validateElementAttributeValue(nodeList, attributeName, key) {
  return Array.from(nodeList).some(
    node => node.getAttribute(attributeName) === key
  );
}

describe('Menu Component', () => {

  test('Renders a Menu', () => {
    const { container } = render(
      <Menu menu={MenuData} />
    );
    expect(container.querySelector('.Menu').textContent).toBeTruthy();
  });

  test('Menu has Menu Item 1 Item', () => {
    const { container } = render(
      <Menu menu={MenuData} />
    );
    expect(container.querySelector('.Menu-item').textContent).toContain('Menu Item 1');
  });

  test('Menu contains a link to /item2', () => {
    const { container } = render(
      <Menu menu={MenuData} />
    );
    const links = [...container.querySelectorAll('.Menu-item a')];
    expect(validateElementAttributeValue(links, 'to', '/item2')).toBe(true);
  });

});
