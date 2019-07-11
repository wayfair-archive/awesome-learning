// Formats the input ID for one question choice
export const formatChoiceId = (questionId, choiceIndex) => `${questionId}_choice${choiceIndex}`;

// Formats the question ID for one question
export const formatQuestionId = questionIndex => `question${questionIndex}`;

// Gets the numeric index of this choice
export const getChoiceIndex = element => parseInt(element.getAttribute('data-choice-index'), 10);

// Gets the numeric index of this choice
export const getQuestionIndex = element => parseInt(element.getAttribute('data-question-index'), 10);
