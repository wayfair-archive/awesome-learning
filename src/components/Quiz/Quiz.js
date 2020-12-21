import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Typography, Box} from '@material-ui/core';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import {Link} from 'gatsby';
import {
  formatQuestionId,
  getChoiceIndex,
  getQuestionIndex,
} from './quizUtilities';
import Question from './Question';
import questionValidator from './Question/questionValidator';

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    paddingTop: theme.spacing(3),
  },
  linkTitle: {
    textTransform: 'uppercase',
    textDecoration: 'underline',
    '&:hover, &:focus': {
      color: theme.palette.secondary.dark,
      textDecoration: 'none',
    },
  },
  paragraphContainer: {
    paddingBottom: theme.spacing(4),
  },
}));

const Quiz = ({quiz, slug, title}) => {
  const classes = useStyles();
  const theme = useTheme();
  const initialState = {
    shouldShowCorrectChoice: false,
    questions: quiz.questions,
  };
  // Hooks to maintain state within this Quiz
  const [{shouldShowCorrectChoice, questions}, updateQuizState] = useState(
    initialState
  );

  // Handles changing of a question; update state based on which choice(s) the user has selected
  const handleInputChange = ({currentTarget: fieldset, target}) => {
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
      questions: updatedQuestions,
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
      questions: validatedQuestions,
    });
  };

  return (
    <Box m="auto" maxWidth={theme.breakpoints.values.lg}>
      <Typography
        variant="h4"
        color="secondary"
        component={Link}
        to={slug}
        className={classes.linkTitle}
      >
        Back to Lesson
      </Typography>
      <Typography variant="h1" className={classes.sectionTitle}>
        {title} Pre-Read Quiz
      </Typography>
      <Box>
        {quiz.description && (
          <Typography variant="body1" className={classes.sectionTitle}>
            {quiz.description}
          </Typography>
        )}
        {/* Iterate over all questions in this Quiz */}
        {questions.map((question, questionIndex) => {
          const questionId = formatQuestionId(questionIndex);
          const questionTitle = `Q${questionIndex + 1}: ${
            question.description
          }`;
          return (
            <Box my={4} key={questionId}>
              <Question
                handleInputChange={handleInputChange}
                question={question}
                questionId={questionId}
                questionIndex={questionIndex}
                shouldShowCorrectChoice={shouldShowCorrectChoice}
                title={questionTitle}
              />
            </Box>
          );
        })}
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleQuizSubmit}
        >
          Submit Quiz
        </Button>
      </Box>
    </Box>
  );
};

Quiz.propTypes = {
  quiz: PropTypes.shape({
    questions: PropTypes.array,
    description: PropTypes.node,
  }).isRequired,
  slug: PropTypes.string,
  title: PropTypes.string,
};

export default Quiz;
