import React from 'react';
import { render } from '@testing-library/react';
import Course from './Course';

const props = {
  course: {
    fields: {
      slug: '/test',
      tagSlugs: ['tag/slug1', 'tag/slug2', 'tag/slug3'],
    },
    frontmatter: {
      title: 'test title',
      description: 'test description',
      lessons: [{
        link: '/course1',
        description: 'This is the course 1',
        title: 'Title Of Course 1'
      }, {
        link: '/course2',
        description: 'This is the course 2',
        title: 'Title Of Course 2'
      }],
      tags: ['tag1', 'tag2', 'tag3'],
    }
  }
};

describe('Course', () => {
  it('renders title', () => {
    const { queryByText } = render(<Course {...props} />);
    expect(queryByText('test title')).toBeTruthy();
  });
  it('renders description', () => {
    const { queryByText } = render(<Course {...props} />);
    expect(queryByText('test description')).toBeTruthy();
  });
  it('renders all lessons', () => {
    const { queryByText } = render(<Course {...props} />);
    const { lessons } = props.course.frontmatter;
    const { slug } = props.course.fields;
    
    lessons.forEach(l => {
      expect(queryByText(l.title)).toBeTruthy();
      expect(queryByText(l.description)).toBeTruthy();
      expect(queryByText(l.title).getAttribute('to')).toBe(`${slug}${l.link}`);
    });
  });
  it('renders all tags', () => {
    const { queryByText } = render(<Course {...props} />);
    const { tags } = props.course.frontmatter;
    const { tagSlugs } = props.course.fields;

    tags.forEach((t, i) => {
      const tagHtml = queryByText(t);
      expect(tagHtml).toBeTruthy();
      expect(tagHtml.getAttribute('to')).toBe(`${tagSlugs[i]}`);
    });
  });

  describe('when lesser than 2 tags', () => {
    it('do not render tags neither related themes section', () => {
      const propsWithOneTag = JSON.parse(JSON.stringify(props));
      propsWithOneTag.course.fields.tagSlugs = [ 'tag/onlytag' ];
      propsWithOneTag.course.frontmatter.tags = [ 'onlytag' ];
      const { queryByText } = render(<Course {...propsWithOneTag} />);
      const { tags } = props.course.frontmatter;
      expect(queryByText('Related Themes')).toBeFalsy();
      tags.forEach((t) => {
        expect(queryByText(t)).toBeFalsy();
      });
    });
  });
});
