import React from 'react';
import {render} from '@testing-library/react';
import Landing from './Landing';
import LastLessonProvider from '../../providers/LastLessonProvider';

const PROPS = {
  courseEdges: [
    {
      node: {
        id: 0,
        frontmatter: {title: ''},
        fields: {slug: ''}
      }
    }
  ]
};

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

describe('Landing Component', () => {

  test('Renders a Carousel', () => {
    const {container} = render(
      <LastLessonProvider>
        <Landing {...PROPS} />
      </LastLessonProvider>
    );
    expect(container.querySelectorAll('.Carousel').length).toBe(1);
  });

  test('Landing-titleWrapper Has Text Content', () => {
    const {container} = render(
      <LastLessonProvider>
        <Landing {...PROPS} />
      </LastLessonProvider>
    );

    expect(
      container.querySelector('.Landing-titleWrapper').textContent
    ).toBeTruthy();
  });

  test('Landing Callout Has Text Content', () => {
    const {container} = render(
      <LastLessonProvider>
        <Landing {...PROPS} />
      </LastLessonProvider>
    );
    expect(
      container.querySelector('.Landing-callOut').textContent
    ).toBeTruthy();
  });

  test('Contains a link to /courses and /howtTo', () => {
    const {container} = render(
      <LastLessonProvider>
        <Landing {...PROPS} />
      </LastLessonProvider>
    );

    const links = [...container.querySelectorAll('link')];

    expect(validateElementAttributeValue(links, 'to', '/courses')).toBe(true);
    expect(validateElementAttributeValue(links, 'to', '/howTo')).toBe(true);
  });
});
