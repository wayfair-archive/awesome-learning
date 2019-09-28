/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 2 - Add Data Fetching 📚
 
  We have a slider on the page which shows users
  a fun fact about a number, as represented by
  the value of the slider. 

  Currently, the component to display trivia
  and the component to show the slider are written
  separately. This is often the case when working in
  large component libraries, where we can implement
  but not directly edit or control an interactive
  element. However, this slider gives us a "handleChange"
  event, which is called with the value of the new
  number when the slider is changed. We want to take
  this number and pass it to our trivia component
  based on the new slider value.
  
  🛠️ Call the getNumberTrivia function
  🛠️ inside of a useEffect hook to change the 
  🛠️ trivia displayed in the NumberTrivia component. 
  🛠️ NumberTrivia takes a number as a prop, and shows
  🛠️ new trivia facts based on the prop.

  💡 We have already set up the setState functionality
  💡 to update the trivia fact.
  💡 getNumberTrivia takes a number and returns
  💡 a Promise. When the Promise resolves, it returns:
  💡 {number: 1, trivia: "One is a great number!"}
  💡 You need to call getNumberTrivia with a number,
  💡 and it will take care of data fetching & processing
  💡 for you. You do not need to be concerned with 
  💡 what happens when the Promise rejects.

  🚨 If you implement useEffect but see the trivia
  🚨 flickering on the screen, there is still more
  🚨 work that you need to do!
`;

import React, {
  useEffect,
  useState
} from 'react';
import { getNumberTrivia } from './utilities';
import NumberSlider from './NumberSlider';

// useEffect goes inside this component
const NumberTrivia = (props) => {
  const defaultTriviaMessage =
    "Couldn't find any trivia!";
  const { number } = props;
  const [trivia, setTrivia] = useState(
    defaultTriviaMessage
  );
  return (
    <h1>
      {trivia !== null
        ? trivia
        : defaultTriviaMessage}
    </h1>
  );
};

` 
✅✅✅ 

  When you're done with Part 1, open 
  'exercises/exercise3/index.js' to
  begin the next exercise! Also
  click the "Exercise 3"
  link in the browser!
  
✅✅✅
`;

// ⛔ You should not need to modify anything below
// ⛔ this line, but reading it may help you understand
// ⛔ what you need to do.
const Form = () => {
  const [sliderValue, setSliderValue] = useState(
    1
  );
  const handleSliderChange = (value) => {
    setSliderValue(value);
  };
  return (
    <section>
      <h3>
        Exercise 2, Part 1: Add Data Fetching to a
        component
      </h3>
      <NumberTrivia number={sliderValue} />
      <NumberSlider
        handleChange={handleSliderChange}
        value={sliderValue}
      />
    </section>
  );
};

export default Form;
