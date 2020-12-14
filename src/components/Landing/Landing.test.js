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
        fields: {slug: ''},
      },
    },
  ],
};

/**
 * @param {NodeList} nodeList
 * @param {string} attributeName
 * @param {string} key
 * @description
 */
function someElementHasPropValue(nodeList, attributeName, key) {
  return Array.from(nodeList).some(
    (node) => node.getAttribute(attributeName) === key
  );
}

describe('Landing Component', () => {
  test('Renders a hero', () => {
    const {queryByText, container} = render(
      <LastLessonProvider>
        <Landing {...PROPS} />
      </LastLessonProvider>
    );
    expect(queryByText('Awesome Learning')).toBeTruthy();
    expect(queryByText('Learn front-end tech, together.')).toBeTruthy();

    const links = [...container.querySelectorAll('a')];
    expect(someElementHasPropValue(links, 'to', '/courses')).toBe(true);
  });

  test('Renders a Popular Courses Carousel with Title', () => {
    const {container, queryByText} = render(
      <LastLessonProvider>
        <Landing {...PROPS} />
      </LastLessonProvider>
    );

    expect(queryByText('Popular Courses')).toBeTruthy();
    expect(container.querySelectorAll('.alice-carousel')).toHaveLength(1);
  });

  test('Renders What is Awesome Learning', () => {
    const {queryByText} = render(
      <LastLessonProvider>
        <Landing {...PROPS} />
      </LastLessonProvider>
    );

    expect(queryByText('What is Awesome Learning?')).toBeTruthy();
    expect(
      queryByText('Awesome Learning is a front-end-web focused learning', {
        exact: false,
      })
    ).toBeTruthy();
  });

  test('Renders How Can I Get Started', () => {
    const {queryByText} = render(
      <LastLessonProvider>
        <Landing {...PROPS} />
      </LastLessonProvider>
    );

    expect(queryByText('How can I get started?')).toBeTruthy();
    expect(queryByText('Make a team')).toBeTruthy();
    expect(queryByText('Pick a course')).toBeTruthy();
    expect(queryByText('Find a time')).toBeTruthy();
    expect(queryByText('Start coding')).toBeTruthy();
  });
});
