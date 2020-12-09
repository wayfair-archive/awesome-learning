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

const useStyles = makeStyles((theme) => ({
  question: {
    color: theme.palette.primary.dark,
    width: '100%',
  },
  titleWrapper: {
    backgroundColor: 'var(--background-color)',
    display: 'flex',
    alignItems: 'center',
    minHeight: '45px',
  },
  title: {
    paddingLeft: theme.spacing(2),
    color: theme.palette.secondary.contrastText,
  },
  explanation: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  choices: {
    marginTop: theme.spacing(2),
  },
}));

const defaultColor = theme => ({
  '--background-color': theme.palette.secondary.main,
});

const correctColor = theme => ({
  '--background-color': theme.palette.success.main,
});

const incorrectColor = theme => ({
  '--background-color': theme.palette.error.main,
});

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
  let highlightColor = defaultColor(theme);
  if (shouldShowCorrectChoice) {
    highlightColor = question.isCorrect ? correctColor(theme) : incorrectColor(theme);
  }
  return (
    <FormControl component="fieldset" onChange={handleInputChange} className={classes.question}>
      <Box className={classes.titleWrapper} style={highlightColor}>
        <FormLabel component="legend" className={classes.title}>{title}</FormLabel>
      </Box>
      {shouldShowCorrectChoice && question.explanation && (
        <Typography variant="body1" className={classes.explanation}>
          <b>Explanation: </b>{question.explanation}
        </Typography>
      )}
      {question.codeSnippet && (
        <pre>
          {question.codeSnippet}
        </pre>
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
              className={classes.choices}
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
