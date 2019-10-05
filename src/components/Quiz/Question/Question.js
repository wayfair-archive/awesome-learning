import React from "react";
import PropTypes from "prop-types";
import cx from 'classnames';
import { formatChoiceId } from "../quizUtilities";
import "./question.scss";

const Question = ({
  handleInputChange,
  question,
  questionId,
  questionIndex,
  shouldShowCorrectChoice,
  title
}) => (
  <fieldset className="Question" onChange={handleInputChange}>
    <legend className={cx("Question-legend", {
      "Question-legend--isCorrect": question.isCorrect === true,
      "Question-legend--isIncorrect": question.isCorrect === false,
    })}>
      {title}
    </legend>
    {question.codeSnippet && (
      <pre className="Question-codeSnippet">
        {question.codeSnippet}
      </pre>
    )}
    {/* If instructed, show the explanation to this question */}
    {shouldShowCorrectChoice && question.explanation && (
      <div className="Question-explanation">
        <b>Explanation: </b>{question.explanation}
      </div>
    )}
    {/* Iterate over all choices this question has, and display them */}
    {
      question.choices.map((choice, choiceIndex) => {
        const choiceId = formatChoiceId(questionId, choiceIndex);
        // Bolden the label to this question to highlight it as the right answer
        const shouldBoldenLabel = (
          shouldShowCorrectChoice
          && question.correctChoices.includes(choiceIndex)
        );
        return (
          <div className="Question-choice" key={choiceId}>
            <input
              className="Question-choiceInput"
              data-choice-index={choiceIndex}
              data-question-index={questionIndex}
              id={choiceId}
              key={choiceIndex}
              name={questionId}
              type={question.type}
              value={choice.value}
            />
            <label
              className={cx('Question-choiceLabel', {
                'Question-choiceLabel--isBold': shouldBoldenLabel
              })}
              htmlFor={choiceId}
            >
              {choice.value}
            </label>
          </div>
        );
      })
    }
  </fieldset>
);

Question.PropTypes = {
  handleInputChange: PropTypes.func,
  question: PropTypes.object,
  questionId: PropTypes.string,
  questionIndex: PropTypes.number,
  shouldShowCorrectChoice: PropTypes.bool,
  title: PropTypes.string
};

export default Question;
