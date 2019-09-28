/* eslint-disable no-unused-expressions, import/first */
import React, { Component } from 'react';
import { processForm } from './../../utilities';

class Form extends Component {
  state = {
    fullName: '',
    phoneNumber: '',
    emailAddress: ''
  };

  handleFullNameChange = (event) => {
    this.setState({
      fullName: event.target.value
    });
  };

  handlePhoneNumberChange = (event) => {
    this.setState({
      phoneNumber: event.target.value
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      emailAddress: event.target.value
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    processForm({
      fullName: this.state.fullName,
      phoneNumber: this.state.phoneNumber,
      emailAddress: this.state.emailAddress
    });
  };

  render() {
    return (
      <section>
        <h3>Exercise 1, Part 1</h3>
        <form
          className="Form"
          onSubmit={this.handleFormSubmit}
        >
          <Field
            label="Full Name"
            onChange={this.handleFullNameChange}
            name="fullName"
            value={this.state.fullName}
          />
          <Field
            label="Phone Number"
            onChange={
              this.handlePhoneNumberChange
            }
            name="phoneNumber"
            value={this.state.phoneNumber}
          />
          <Field
            label="Email Address"
            onChange={this.handleEmailChange}
            name="email"
            value={this.state.emailAddress}
          />
          <hr className="Divider" />
          <button className="Form-submitButton">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

const Field = ({
  label,
  name,
  type,
  value,
  ...inputProps
}) => {
  return (
    <div className="Form-fieldWrapper">
      <label
        className="Form-fieldLabel"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        className="Form-fieldInput"
        id={name}
        name={name}
        type="text"
        value={value}
        {...inputProps}
      />
    </div>
  );
};

// Exercise setup
export default Form;
