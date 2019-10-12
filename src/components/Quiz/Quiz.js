import React, { useState } from "react";
import PropTypes from "prop-types";
import { formatQuestionId, getChoiceIndex, getQuestionIndex } from './quizUtilities';
import ContentSection from "../ContentSection";
import Question from "./Question";
import questionValidator from './Question/questionValidator';
import StyledLink from '../Link';
import "./quiz.scss";

const Quiz = ({ quiz, slug, title }) => {
  const initialState = {
    shouldShowCorrectChoice: false,
    questions: quiz.questions
  };
  // Hooks to maintain state within this Quiz
  const [
    { shouldShowCorrectChoice, questions },
    updateQuizState
  ] = useState(initialState);

  // Handles changing of a question; update state based on which choice(s) the user has selected
  const handleInputChange = ({ currentTarget: fieldset, target }) => {
    // Get the current question and mark the appropriate choices as being selected by the user
    const questionIndex = getQuestionIndex(target);
    const currentQuestion = questions[questionIndex];
    switch (currentQuestion.type) {
      case 'checkbox': {
        // Gets the indices of selected checkboxes
        const selectedIndices = Array.from(
          fieldset.querySelectorAll('input:checked')
        ).map(getChoiceIndex);

        // Updates every choice based on whether or not it is in the list of user-selected choices
        currentQuestion.choices.forEach((choice, index) => {
          choice.isSelected = selectedIndices.includes(index);
        });
        break;
      }
      case 'radio': {
        // Set the selection status of all question choices based on
        // whether or not the user has selected them
        const choiceIndex = getChoiceIndex(target);
        currentQuestion.choices.forEach((choice, index) => {
          choice.isSelected = choiceIndex === index;
        });
        break;
      }
      default: {
        break;
      }
    }
    // Clone the questions array to force a state change
    const updatedQuestions = Array.from(questions);
    // Update the state of the quiz
    updateQuizState({
      shouldShowCorrectChoice: false,
      questions: updatedQuestions
    });
  };

  // Handles the submission of the quiz
  const handleQuizSubmit = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    // Validate every question and update the state of the quiz
    const validatedQuestions = questions.map(questionValidator);
    updateQuizState({
      shouldShowCorrectChoice: true,
      questions: validatedQuestions
    });
  };

  return (
    <div className="Quiz">
      <div className="Quiz-homeButton">
        <StyledLink variation={"tertiary"} path={slug}>
          Back to lesson
        </StyledLink>
      </div>
      <ContentSection subTitle={'Pre-Read Quiz'} title={title}>
        {quiz.description && <p>{quiz.description}</p>}
        {/* Iterate over all questions in this Quiz */}
        {
          questions.map((question, questionIndex) => {
            const questionId = formatQuestionId(questionIndex);
            const questionTitle = `Q${questionIndex + 1}: ${question.description}`;
            return (
              <Question
                handleInputChange={handleInputChange}
                key={questionId}
                question={question}
                questionId={questionId}
                questionIndex={questionIndex}
                shouldShowCorrectChoice={shouldShowCorrectChoice}
                title={questionTitle}
              />
            );
          })
        }
        <button
          className="Quiz-submitButton"
          onClick={handleQuizSubmit}
        >
          Submit Quiz
        </button>
      </ContentSection>
    </div>
  );
};

Quiz.propTypes = {
  quiz: PropTypes.shape({
    questions: PropTypes.array,
    description: PropTypes.node
  }).isRequired,
  slug: PropTypes.string, 
  title: PropTypes.string
};

export default Quiz;
