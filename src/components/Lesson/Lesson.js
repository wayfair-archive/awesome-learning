import React from "react";
import StyledLink from "../Link";
import { Link } from "gatsby";
import LessonButton from '../LessonButton';
import "./Lesson.scss";

const Lesson = ({ lesson, slug }) => {
  const {
    title,
    description,
    timeToCompletion,
    videoLinks,
    readingLinks,
    preReadQuizLink,
    course
  } = lesson.frontmatter;
  const path = slug.toLowerCase().split('/courses/')[1];
  return (
    <div className="Lesson">
      <div className="Lesson-homeButton">
        <StyledLink variation={'tertiaryAltInverse'} path={`/courses/${course}/`}>
          Back to {course}
        </StyledLink>
      </div>
      <h2 className="Lesson-title">{title}</h2>

      <div className="Lesson-body">
        
        <div className="Lesson-section">
          {timeToCompletion && (
            <p>
              ⌛ Average time to completion ={" "}
              <span className="Lesson-time">{timeToCompletion} ⌛</span>
            </p>
          )}
          <p>{description}</p>
        </div>
        
        <div className="Lesson-section">
          <h3>Pre-Session Learning Materials (required)</h3>
          <p>
            Check out this content before your session begins to get an idea of
            what you will be working on.
          </p>
          {
            videoLinks && (
              videoLinks.map(link => (
                <iframe
                  key={link}
                  width="560"
                  height="315"
                  src={link}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ))
            )
          }
        </div>

        <div className="Lesson-section">
          <h3>Pre-read Materials (bonus)</h3>
          <p>
            We've curated these resources to give you greater depth on these
            subjects. Don't feel like you have to read them all.
            <br />
            Taking the time to go through all of these resources will definitely
            put you on the road to expert-level knowledge in this subject matter.
          </p>
          {readingLinks && (
            <ul className="Lesson-readingList">
              {readingLinks.map(readingLink => (
                <li className="Lesson-readingListItem" key={readingLink.title}>
                  <a
                    href={readingLink.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {readingLink.title}
                  </a>
                  <p>- {readingLink.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        <div className="Lesson-section">
          <h3>Pre-read Quiz</h3>
          <p>
          Test your knowledge from the pre-read material{" "}
            <a href={preReadQuizLink} rel="noopener noreferrer" target="_blank">
              here
            </a>
            !
          </p>
        </div>

        <div className="Lesson-section">
          <h3>Exercises</h3>
          <LessonButton path={path} />
        </div>

        <div className="Lesson-section">
          <h3>Session Feedback</h3>
          <p>
            We need as much feedback as possible to make this platform more effective for you and others like you. Please take a moment to fill out this session survey {" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeiB_M1YmwwwG9BNhGnd1Nn_BhnzOfHFUDrZGz1PAvm8A1NxA/viewform" rel="noopener noreferrer" target="_blank">
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
