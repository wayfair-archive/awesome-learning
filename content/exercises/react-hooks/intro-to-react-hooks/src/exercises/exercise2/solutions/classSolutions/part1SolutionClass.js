/* eslint-disable no-unused-expressions, import/first */
import React, {
  Component,
  useState
} from 'react';
import { getNumberTrivia } from './../../utilities';
import NumberSlider from './../../NumberSlider';

class NumberTrivia extends Component {
  state = {
    trivia: "Couldn't find any trivia!"
  };

  // Classes vs hooks
  // We need to manually inspect prevProps
  // to determine if the number value has changed
  // if it has, then and only then do we make the
  // getNumberTrivia call
  componentDidUpdate(prevProps) {
    if (prevProps.number !== this.props.number) {
      getNumberTrivia(this.props.number).then(
        (response) => {
          this.setState({
            trivia: response.trivia
          });
        }
      );
    }
  }

  render() {
    return <h1>{this.state.trivia}</h1>;
  }
}

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
