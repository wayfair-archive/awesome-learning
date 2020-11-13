import React from 'react';
import PropTypes from 'prop-types';
import StyledLink from '../shared/StyledLink';
import Block from '../shared/Block';
import LessonButton, {PrimitiveLessonButton} from '../LessonButton';
import ContentSection from '../shared/ContentSection';
import './lesson.scss';

const Lesson = ({lesson, slug}) => {
  const {
    title,
    description,
    timeToCompletion,
    videoLinks,
    readingLinks,
    preReadQuizLink,
    preReadQuiz,
    course,
    defaultTab,
    secondaryExerciseUrl
  } = lesson.frontmatter;

  // Split the description into different paragraphs based on new lines
  const descriptionParagraphs = description.split(/\r?\n\n/);
  const path = slug.toLowerCase().split('/courses/')[1];
  const courseName = course.split('-').join(' ');
  return (
    <div className="Lesson">
      <div className="Lesson-homeButton">
        <StyledLink variation="tertiary" path={`/courses/${course}/`}>
          Back to {courseName}
        </StyledLink>
      </div>

      <ContentSection title={title}>
        {timeToCompletion && (
          <p>
            ⌛ Average time to completion ={' '}
            <span className="Lesson-time">{timeToCompletion} ⌛</span>
          </p>
        )}
        {descriptionParagraphs.map((paragraph, key) => (
          <Block is="p" key={key} mb="16px">
            {paragraph}
          </Block>
        ))}
      </ContentSection>

      <ContentSection
        title=" "
        subTitle="Pre-Session Learning Materials (required)"
      >
        <Block is="p" mb="16px">
          Check out this content before your session begins to get an idea of
          what you will be working on.
        </Block>
        {videoLinks &&
          videoLinks.map(link => (
            <iframe
              data-testid={link}
              key={link}
              width="100%"
              height="315"
              src={link}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          ))}
      </ContentSection>

      {readingLinks && (
        <ContentSection title=" " subTitle="Pre-read Materials">
          <Block is="p" mb="16px">
            We've curated these resources to give you greater depth on these
            subjects. Don't feel like you have to read them all.
          </Block>
          <Block is="p" mb="16px">
            Taking the time to go through all of these resources will definitely
            put you on the road to expert-level knowledge in this subject
            matter.
          </Block>
          <ul className="Lesson-readingList">
            {readingLinks.map(readingLink => (
              <li className="Lesson-readingListItem" key={readingLink.title}>
                <StyledLink
                  isExternal
                  variation="tertiary"
                  path={readingLink.link}
                >
                  {readingLink.title}
                </StyledLink>
                <p>- {readingLink.description}</p>
              </li>
            ))}
          </ul>
        </ContentSection>
      )}
      {(preReadQuiz || preReadQuizLink) && (
        <ContentSection title=" " subTitle="Pre-read Quiz">
          <Block is="p" mb="16px">
            This pre-read quiz is designed to challenge your knowledge of the
            pre-read material. These quizzes are a great way to check your
            comprehension, and we highly recommend taking them.
          </Block>
          <StyledLink
            path={preReadQuiz !== null ? `${slug}/quiz` : preReadQuizLink}
            isExternal={preReadQuiz === null}
            variation="tertiary"
            lessonData={lesson}
          >
            Quiz Link
          </StyledLink>
        </ContentSection>
      )}

      <ContentSection title=" " subTitle="Exercises">
        {secondaryExerciseUrl ? (
          <PrimitiveLessonButton
            path={secondaryExerciseUrl}
            lessonData={lesson}
          >
            Start the Workshop
          </PrimitiveLessonButton>
        ) : (
          <LessonButton
            defaultTab={defaultTab}
            path={path}
            lessonData={lesson}
          />
        )}
      </ContentSection>

      <ContentSection title=" " subTitle="Session Feedback">
        <Block is="p" mb="16px">
          We need as much feedback as possible to make this platform more
          effective for you and others like you. Please take a moment to fill
          out this session survey.
        </Block>
        <StyledLink
          isExternal
          path="https://docs.google.com/forms/d/e/1FAIpQLSeiB_M1YmwwwG9BNhGnd1Nn_BhnzOfHFUDrZGz1PAvm8A1NxA/viewform"
          variation="tertiary"
        >
          Survey Link
        </StyledLink>
      </ContentSection>
    </div>
  );
};

Lesson.propTypes = {
  lesson: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      timeToCompletion: PropTypes.node,
      videoLinks: PropTypes.array,
      readingLinks: PropTypes.array,
      preReadQuizLink: PropTypes.string,
      preReadQuiz: PropTypes.any,
      course: PropTypes.string,
      defaultTab: PropTypes.string,
      secondaryExerciseUrl: PropTypes.string
    })
  }).isRequired,
  slug: PropTypes.string.isRequired
};

export default Lesson;
