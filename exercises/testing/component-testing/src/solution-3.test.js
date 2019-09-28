import React from "react";
import PropTypes from "prop-types";
import { shallow, mount } from "enzyme";
import setup from "../test/setup";

const Icon = ({ iconType, altText }) => (
  <img
    src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`}
    alt={altText}
  />
);

const IconButton = ({ iconType, altText, buttonText, onClick, isDisabled }) => (
  <button onClick={onClick} disabled={isDisabled}>
    <Icon iconType={iconType} altText={altText} /> {buttonText}
  </button>
);

// Exercise 1
test.skip("IconButton's onClick() is called when the button is clicked", () => {
  const mock = jest.fn();

  const wrapper = mount(
    <IconButton buttonText="Submit" iconType="submit" onClick={mock} />
  );
  // Your code here
  expect(mock).toHaveBeenCalledTimes(0);
  wrapper.find("button").simulate("click");
  expect(mock).toHaveBeenCalledTimes(1);
});

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

// Exercise 2
test.skip("NameDialog's onSave() is called when the button is clicked", () => {
  const mock = jest.fn();

  const wrapper = mount(<NameDialog onSave={mock} />);

  expect(mock).toHaveBeenCalledTimes(0);

  wrapper.find("input").simulate("change", { target: { value: "Taylor" } });
  wrapper.find("button").simulate("click");

  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith("Taylor");
});

// Exercise 2a
test.skip("NameDialog's onSave() is called when the button is clicked", () => {
  const mock = jest.fn();

  const wrapper = mount(<NameDialog onSave={mock} />);

  expect(mock).toHaveBeenCalledTimes(0);
  expect(wrapper.find("button").prop("disabled")).toBe(true);

  wrapper.find("input").simulate("change", { target: { value: "Kris" } });

  expect(wrapper.find("button").prop("disabled")).toBe(false);
  expect(wrapper.find("input").prop("value")).toBe("Kris");

  wrapper.find("button").simulate("click");

  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith("Kris");
});
