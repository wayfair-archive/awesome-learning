/* eslint-disable no-unused-expressions, import/first */
import React, {
  useEffect,
  useState
} from 'react';
import { getNumberTrivia } from './../utilities';
import NumberSlider from './../NumberSlider';

const NumberTrivia = (props) => {
  const defaultTriviaMessage =
    "Couldn't find any trivia!";
  const { number } = props;
  const [trivia, setTrivia] = useState(
    defaultTriviaMessage
  );
  // 📗 Solution below 📗
  // We have also provided the second parameter to
  // useEffect, an array of dependencies. We only
  // want to re-run this effect if the number prop
  // changes, otherwise the hook will run every time
  // the component re-renders (setTrivia changes the
  // state of the component, which triggers a re-render!)

  // See what happens in the editor if you pass an empty
  // array. You should see an ESLint warning, telling
  // you that there's a missing dependency (number).
  // This is helpful when writing hooks that depend
  // on variables that may change. You should declare
  // these variables in the dependency array of useEffect
  useEffect(() => {
    getNumberTrivia(number).then((response) => {
      setTrivia(response.trivia);
    });
  }, [number]);
  // 📗 Solution above 📗
  return <h1>{trivia}</h1>;
};

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
