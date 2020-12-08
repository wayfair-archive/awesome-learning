import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  FormControl,
  FormLabel,
  FormControlLabel,
  Box,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { formatChoiceId } from "../quizUtilities";
import "./question.scss";

const useStyles = makeStyles((theme) => ({
  question: {
    color: theme.palette.primary.dark,
    width: '100%',
  },
  titleWrapper: {
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    minHeight: '45px',
    marginBottom: theme.spacing(2),
  },
  title: {
    paddingLeft: theme.spacing(2),
    color: theme.palette.secondary.contrastText,
  }
}));

const Question = ({
  handleInputChange,
  question,
  questionId,
  questionIndex,
  shouldShowCorrectChoice,
  title
}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <FormControl component="fieldset" onChange={handleInputChange} className={classes.question}>
      <Box className={classes.titleWrapper}>
        <FormLabel component="legend" className={classes.title}>{title}</FormLabel>
      </Box>
      {question.codeSnippet && (
        <pre className="Question-codeSnippet">
          {question.codeSnippet}
        </pre>
      )}
      {shouldShowCorrectChoice && question.explanation && (
        <Typography variant="body1">
          <b>Explanation: </b>{question.explanation}
        </Typography>
      )}

      {
        question.choices.map((choice, choiceIndex) => {
          const choiceId = formatChoiceId(questionId, choiceIndex);
          return (
            <FormControlLabel
              value={choice.value}
              control={
                <Box px={theme.spacing(1)}>
                  <input
                    data-choice-index={choiceIndex}
                    data-question-index={questionIndex}
                    id={choiceId}
                    key={choiceIndex}
                    name={questionId}
                    type={question.type}
                    value={choice.value}
                  />
                </Box>
              }
              label={
                <Typography variant="body1">
                  {choice.value}
                </Typography>
              }
              key={choiceId}
            />
          );
        })
      }
    </FormControl>
  );
};

Question.propTypes = {
  handleInputChange: PropTypes.func,
  question: PropTypes.object.isRequired,
  questionId: PropTypes.string.isRequired,
  questionIndex: PropTypes.number.isRequired,
  shouldShowCorrectChoice: PropTypes.bool,
  title: PropTypes.string
};

export default Question;

/*
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
      {/* If instructed, show the explanation to this question /}
      {shouldShowCorrectChoice && question.explanation && (
        <Typography variant="body1">
          <b>Explanation: </b>{question.explanation}
        </Typography>
      )}
      {/* Iterate over all choices this question has, and display them /}

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
 */
