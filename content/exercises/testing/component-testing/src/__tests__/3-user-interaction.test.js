/*eslint-disable no-unused-expressions */
import React from "react";
import PropTypes from "prop-types";
import { shallow, mount } from "enzyme";
import setup from "../../test/setup";

`
⬇️

You should now be comfortable with the major parts of the Enzyme API.
Let's exercise that knowledge with more complex components to test.

💡 Note: The Icon and IconButton components below are setup for the
💡 rest of this session.

⬆️
`;

const Icon = ({ iconType, altText }) => (
  <img
    src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`}
    alt={altText}
  />
);

`
💡 Note that this version of IconButton takes an 
💡 "onClick" prop (a function that will be called 
💡 when the button is pressed) and an "isDisabled" prop.
`;

const IconButton = ({ iconType, altText, buttonText, onClick, isDisabled }) => (
  <button onClick={onClick} disabled={isDisabled}>
    <Icon iconType={iconType} altText={altText} /> {buttonText}
  </button>
);


`📚 Exercise 1 - Testing user interaction 📚

🛠️ Write a test that the "onClick" prop of IconButton
🛠️ is called when the button is pressed. 

🚨 You should use Jest mocks and Enzyme's mount() and simulate() 
🚨 methods - (https://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html)
`;


test("IconButton's onClick() is called when the button is clicked", () => {
  const mock = jest.fn();

  const wrapper = mount(
    <IconButton buttonText="Submit" iconType="submit" onClick={mock} />
  );
  // Your code here
});


` 🚨Exercise Setup 🚨

In the following exercises , you'll write tests 
for the NameDialog component. This component renders 
a text input and with a submit button (implemented
using IconButton) that allows users to submit their name.

Checkout the implementation, and when you're ready tackle 
the exercises below. 
`;


class NameDialog extends React.Component {
  constructor() {
    super();

    this.state = { name: "" };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSaveClick() {
    this.props.onSave(this.state.name);
  }

  render() {
    return (
      <div>
        <p>What is your name?</p>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <IconButton
          buttonText="Save"
          iconType="submit"
          onClick={this.handleSaveClick}
          isDisabled={!this.state.name}
        />
      </div>
    );
  }
}

NameDialog.propTypes = {
  onSave: PropTypes.func.isRequired
};

`
📚 Exercise 2a - User Interaction Part 1  📚

Test user interaction by doing the following:

🛠️ 1) Simulate a change to the text input and verify that 
🛠️    the component re-renders and displays the new value
🛠️ 2) Simulate a click on the submit button and verify 
🛠️    that onSave() is called
`;

test("NameDialog displays text input and it's onSave() is called when the button is clicked", () => {
  const mock = jest.fn();

  const wrapper = mount(<NameDialog onSave={mock} />);
  // Your code here
});


`📚 Exercise 2b - User Interaction Part 2  📚

🛠️ Test that the disabling functionality works: 
🛠️ the button should be disabled as long as the 
🛠️ text input has no text. Once a user enters some text, 
🛠️ the button should be enabled.
`;

test("NameDialog's button is disabled until a user inputs text", () => {
  const mock = jest.fn();

  const wrapper = mount(<NameDialog onSave={mock} />);
  // Your code here
});
