import React from 'react';
import {render} from '@testing-library/react';
import Lesson from './Lesson';

const baseLesson = {
  html: '',
  fields: {
    slug: '/courses/Data-Types/types-and-equality',
    tagSlugs: '',
  },
  frontmatter: {
    description: 'This is a test lesson\n\nsecond paragraph',
    course: 'test-course',
    tags: [],
    title: 'Test Lesson',
    timeToCompletion: '8 hrs',
    videoLinks: ['https://video.test.com'],
    defaultTab: 'tests',
    readingLinks: [
      {
        link: 'https://reading1.test.com',
        description: 'reading1',
        title: 'reading 1',
      },
      {
        link: 'https://reading2.test.com',
        description: 'reading2',
        title: 'reading 2',
      },
    ],
  },
};

const lessonExternalQuiz = {
  ...baseLesson,
  frontmatter: {
    ...baseLesson.frontmatter,
    preReadQuizLink: 'https://prereadquiz.test.com',
    preReadQuiz: null, // graphql would set this to null if there is no preReadQuiz entry in markdown file.
  },
};

const lessonWithQuizData = {
  ...baseLesson,
  frontmatter: {
    ...baseLesson.frontmatter,
    preReadQuiz: {
      description: 'This is the test quiz',
      questions: [
        {
          description: 'this is question 1',
          choices: [{value: 'answer 1'}, {value: 'answer 2'}],
          correctChoices: [0],
          explaination: 'this is why it is correct',
          type: 'radio',
        },
      ],
    },
  },
};

const lessonWithSecondaryUrlAndQuiz = {
  ...lessonWithQuizData,
  frontmatter: {
    ...lessonWithQuizData.frontmatter,
    secondaryExerciseUrl: 'https//secondaryexercise.test.com',
  },
};

describe('Lesson', () => {
  it('renders back to course button', () => {
    const {queryByText} = render(
      <Lesson
        lesson={lessonExternalQuiz}
        slug={lessonExternalQuiz.fields.slug}
      />
    );
    expect(queryByText('Back to test course', {exact: false})).toBeTruthy();
  });

  it('renders course title', () => {
    const {queryByText} = render(
      <Lesson
        lesson={lessonExternalQuiz}
        slug={lessonExternalQuiz.fields.slug}
      />
    );
    expect(queryByText(lessonExternalQuiz.frontmatter.title)).toBeTruthy();
  });

  it('renders time to completion and description', () => {
    const {queryByText} = render(
      <Lesson
        lesson={lessonExternalQuiz}
        slug={lessonExternalQuiz.fields.slug}
      />
    );
    expect(queryByText('8 hrs')).toBeTruthy();
    expect(queryByText('This is a test lesson')).toBeTruthy();
    expect(queryByText('second paragraph')).toBeTruthy();
  });

  it('renders the video iframes', () => {
    const {queryByTestId} = render(
      <Lesson
        lesson={lessonExternalQuiz}
        slug={lessonExternalQuiz.fields.slug}
      />
    );
    expect(
      queryByTestId(lessonExternalQuiz.frontmatter.videoLinks[0])
    ).toBeTruthy();
  });

  it('renders the reading links', () => {
    const {queryByText} = render(
      <Lesson
        lesson={lessonExternalQuiz}
        slug={lessonExternalQuiz.fields.slug}
      />
    );
    expect(
      queryByText(lessonExternalQuiz.frontmatter.readingLinks[0].title)
    ).toBeTruthy();
    expect(
      queryByText(lessonExternalQuiz.frontmatter.readingLinks[1].title)
    ).toBeTruthy();
    expect(
      queryByText(lessonExternalQuiz.frontmatter.readingLinks[0].description, {
        exact: false,
      })
    ).toBeTruthy();
    expect(
      queryByText(lessonExternalQuiz.frontmatter.readingLinks[1].description, {
        exact: false,
      })
    ).toBeTruthy();
  });

  it('renders a link to pre-quiz', () => {
    const {queryByText} = render(
      <Lesson
        lesson={lessonExternalQuiz}
        slug={lessonExternalQuiz.fields.slug}
      />
    );
    expect(queryByText('Take the Quiz')).toBeTruthy();
  });

  it('renders a link to external lesson if it exists', () => {
    const {getByText, getByTestId} = render(
      <Lesson
        lesson={lessonWithSecondaryUrlAndQuiz}
        slug={lessonWithSecondaryUrlAndQuiz.fields.slug}
      />
    );
    const element = getByTestId(
      lessonWithSecondaryUrlAndQuiz.frontmatter.secondaryExerciseUrl
    );
    expect(element).toBeTruthy();
    expect(element.href).toMatch(
      new RegExp(
        lessonWithSecondaryUrlAndQuiz.frontmatter.secondaryExerciseUrl,
        'g'
      )
    );
    expect(getByText('Start the Workshop')).toBeTruthy();
  });
});
