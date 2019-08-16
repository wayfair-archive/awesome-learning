import React from 'react';
import renderer from 'react-test-renderer';
import Quiz from './quiz-template';

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
          slug: '/test1',
          tagSlugs: [
            '/test_0',
            '/test_1'
          ]
        },
        frontmatter: {
          title: 'test',
          preReadQuiz: {
            description: 'test',
            questions: [
              {
                description: 'test1',
                choices: ["testChoice1", "testChoice2", "testChoice3", "testChoice4"],
                correctChoices: [2],
                explanation: 'test',
                type: 'radio'
              },
              {
                description: 'test2',
                choices: ["testChoice5", "testChoice6", "testChoice7", "testChoice8"],
                correctChoices: [0],
                explanation: 'test2',
                type: 'checkbox'
              }
            ]
          }
        }
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Quiz {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
