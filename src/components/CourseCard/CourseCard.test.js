/**
 * Course Card spec
 *
 * @author Evan Cooper <evcooper@wayfair.com>
 * @copyright 2019 Wayfair LLC - All rights reserved
 */
import React from 'react';
import {render} from '@testing-library/react';
import CourseCard from './CourseCard';
import LastLessonProvider from '../../providers/LastLessonProvider';

const PROPS = {
  link: '/courses',
  description: 'This is the course',
  title: 'Title Of Course'
};

describe('Course Card', () => {
  it('Renders a title, link, and description', () => {
    const {getByText} = render(
      <LastLessonProvider>
        <CourseCard {...PROPS} />
      </LastLessonProvider>
    );
    expect(getByText(PROPS.description)).toBeTruthy();
    expect(getByText(PROPS.title)).toBeTruthy();
    expect(getByText(`Learn ${PROPS.title}`).getAttribute('to')).toBe(
      PROPS.link
    );
  });
});
