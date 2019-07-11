import React from 'react';
import renderer from 'react-test-renderer';
import CourseTemplate from './course-template';

describe('CourseTemplate', () => {
  const props = {
    data: {
      site: {
        siteMetadata: {
          title: 'test',
          subtitle: 'test'
        }
      },
      markdownRemark: {
        html: '<p>test</p>',
        fields: {
          tagSlugs: [
            '/test_0',
            '/test_1'
          ]
        },
        frontmatter: {
          date: '2016-09-01',
          description: 'test',
          title: 'test',
          tags: [
            'test_0',
            'test_1'
          ],
          lessons: [{
            link: 'link',
            title: 'this is the title',
            description: 'this is the description'
          }]
        }
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<CourseTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
