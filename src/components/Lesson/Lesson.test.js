import React from 'react';
import { render } from '@testing-library/react';
import Lesson from './Lesson';
import LastLessonProvider from '../../providers/LastLessonProvider';
import * as LessonButton from '../LessonButton/LessonButton';

const baseLesson = {
  html: "",
  fields: {
    slug: "/courses/Data-Types/types-and-equality",
    tagSlugs: ""
  },
  frontmatter: {
    description: "This is a test lesson\n\nsecond paragraph",
    course: "test-course",
    tags: [],
    title: "Test Lesson",
    timeToCompletion: "8 hrs",
    videoLinks: ["https://video.test.com"],
    defaultTab: "tests",
    readingLinks: [
      {
        link: "https://reading1.test.com",
        description: "reading1",
        title: "reading 1"
      },
      {
        link: "https://reading2.test.com",
        description: "reading 2",
        title: "reading 2"
      }
    ]
  },
};

const lessonExternalQuiz = {
  ...baseLesson,
  frontmatter: {
    ...baseLesson.frontmatter,
    preReadQuizLink: "https://prereadquiz.test.com",
    preReadQuiz: null  // graphql would set this to null if there is no preReadQuiz entry in markdown file.
  }
};

const lessonWithQuizData = {
  ...baseLesson,
  frontmatter: {
    ...baseLesson.frontmatter,
    preReadQuiz: {
      description: "This is the test quiz",
      questions: [{
        description: "this is question 1",
        choices: [
          { value: "answer 1" },
          { value: "answer 2" }
        ],
        correctChoices: [0],
        explaination: "this is why it is correct",
        type: "radio"
      }]
    }
  }
};

const lessonWithSecondaryUrlAndQuiz = {
  ...lessonWithQuizData,
  frontmatter: {
    ...lessonWithQuizData.frontmatter,
    secondaryExerciseUrl: "https//secondaryexercise.test.com"
  }
};

const lessonButtonSpy = jest.spyOn(LessonButton, 'default');
const primativeLessonButtonSpy = jest.spyOn(LessonButton, 'PrimitiveLessonButton');

afterEach(() => {
  lessonButtonSpy.mockClear();
  primativeLessonButtonSpy.mockClear();
});

describe('Lesson', () => {
  it('renders course name and removes hyphens and replaces with spaces', () => {
    const { getByText } = render(<LastLessonProvider><Lesson lesson={lessonExternalQuiz} slug={lessonExternalQuiz.fields.slug}></Lesson></LastLessonProvider>);
    expect(getByText(/test course/)).toBeTruthy();
  });

  it('renders description and splits paragraphs into seperate dom elements', () => {
    const { getByText } = render(<LastLessonProvider><Lesson lesson={lessonExternalQuiz} slug={lessonExternalQuiz.fields.slug}></Lesson></LastLessonProvider>);
    expect(getByText("This is a test lesson")).toBeTruthy();
    expect(getByText("second paragraph")).toBeTruthy();
    expect(() => { getByText("This is a test lesson\n\nsecond paragraph"); }).toThrow();
  });

  it('renders the title  and time to completion of the lesson', () => {
    const { getByText } = render(<LastLessonProvider><Lesson lesson={lessonExternalQuiz} slug={lessonExternalQuiz.fields.slug}></Lesson></LastLessonProvider>);
    expect(getByText(lessonExternalQuiz.frontmatter.title)).toBeTruthy();
    expect(getByText(/8 hrs/)).toBeTruthy();
  });

  it('renders the videolinks', () => {
    const { getByTestId } = render(<LastLessonProvider><Lesson lesson={lessonExternalQuiz} slug={lessonExternalQuiz.fields.slug}></Lesson></LastLessonProvider>);
    expect(getByTestId(lessonExternalQuiz.frontmatter.videoLinks[0])).toBeTruthy();
  });

  it('renders the reading links', () => {
    const { getByTestId, getByText } = render(<LastLessonProvider><Lesson lesson={lessonExternalQuiz} slug={lessonExternalQuiz.fields.slug}></Lesson></LastLessonProvider>);
    expect(getByTestId(lessonExternalQuiz.frontmatter.readingLinks[0].link)).toBeTruthy();
    expect(getByTestId(lessonExternalQuiz.frontmatter.readingLinks[1].link)).toBeTruthy();
    expect(getByText(lessonExternalQuiz.frontmatter.readingLinks[0].title)).toBeTruthy();
    expect(getByText(lessonExternalQuiz.frontmatter.readingLinks[1].title)).toBeTruthy();
    expect(getByText(`- ${lessonExternalQuiz.frontmatter.readingLinks[0].description}`)).toBeTruthy();
    expect(getByText(`- ${lessonExternalQuiz.frontmatter.readingLinks[1].description}`)).toBeTruthy();
  });

  it('renders a link to external pre-quiz if no quiz data provided', () => {
    const { getByTestId } = render(<LastLessonProvider><Lesson lesson={lessonExternalQuiz} slug={lessonExternalQuiz.fields.slug}></Lesson></LastLessonProvider>);
    expect(getByTestId(lessonExternalQuiz.frontmatter.preReadQuizLink)).toBeTruthy();
  });

  it('renders a link to internal pre-quiz if no quiz data provided', () => {
    const { getByTestId } = render(<LastLessonProvider><Lesson lesson={lessonWithQuizData} slug={lessonWithQuizData.fields.slug}></Lesson></LastLessonProvider>);
    expect(getByTestId(`${lessonWithQuizData.fields.slug}/quiz`)).toBeTruthy();
  });
  
  it('renders a link to external lesson if it exists', () => {
    render(<LastLessonProvider><Lesson lesson={lessonWithSecondaryUrlAndQuiz} slug={lessonWithSecondaryUrlAndQuiz.fields.slug}></Lesson></LastLessonProvider>);
    expect(primativeLessonButtonSpy).toBeCalledTimes(1);
    expect(primativeLessonButtonSpy).toBeCalledWith({ path: lessonWithSecondaryUrlAndQuiz.frontmatter.secondaryExerciseUrl, lessonData: lessonWithSecondaryUrlAndQuiz, children: "Start the Workshop" }, {});
  });

  it('renders a link to internal awesome-learning-exercises at correct path', () => {
    const pathForTestLesson = baseLesson.fields.slug.toLowerCase().split('/courses/')[1];
    render(<LastLessonProvider><Lesson lesson={lessonWithQuizData} slug={lessonWithQuizData.fields.slug}></Lesson></LastLessonProvider >);
    expect(lessonButtonSpy).toBeCalledTimes(1);
    expect(lessonButtonSpy).toBeCalledWith({ defaultTab: 'tests', path: pathForTestLesson, lessonData: lessonWithQuizData }, {});
  });

  it('renders feedback section', () => {
    const { getByText, getByTestId } = render(<LastLessonProvider><Lesson lesson={lessonExternalQuiz} slug={lessonExternalQuiz.fields.slug}></Lesson></LastLessonProvider>);
    expect(getByText(/feedback/)).toBeTruthy();
    expect(getByTestId("https://docs.google.com/forms/d/e/1FAIpQLSeiB_M1YmwwwG9BNhGnd1Nn_BhnzOfHFUDrZGz1PAvm8A1NxA/viewform")).toBeTruthy();
  });
});
