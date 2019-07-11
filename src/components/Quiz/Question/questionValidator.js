export default function questionValidator(question) {
  const { choices, correctChoices } = question;
  // Get the user-selected choice values
  const selectedChoices = choices.reduce((listOfChoices, choice) => {
    if (choice.isSelected) {
      listOfChoices.push(choice.value);
    }
    return listOfChoices;
  }, []);

  // Get the values of the correct choices
  const correctChoiceValues = choices.reduce((listOfChoices, choice, choiceIndex) => {
    if (correctChoices.includes(choiceIndex)) {
      listOfChoices.push(choice.value);
    }
    return listOfChoices;
  }, []);

  // If there is a discrepancy in the number of choices, versus the number of correct choices,
  // mark the question as incorrect and return early
  if (selectedChoices.length !== correctChoices.length) {
    question.isCorrect = false;
    return question;
  }

  // If the length is the same, compare each value to verify that every correct choice
  // is in the list of user-selected choices
  question.isCorrect = correctChoiceValues.every(choice => selectedChoices.includes(choice));
  return question;
}
