import React from 'react';
import renderer from 'react-test-renderer';
import Course from './Course';

describe('Course', () => {
  const props = {
    course: {
      html: '<p>test</p>',
      slug: '/slug',
      fields: {
        tagSlugs: [
          '/test_0',
          '/test_1'
        ]
      },
      frontmatter: {
        date: '2016-09-01',
        tags: [
          'test_0',
          'test_1'
        ],
        title: 'test',
        lessons: [{
          link: 'link',
          title: 'this is the title',
          description: 'this is the description'
        }]
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Course {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
