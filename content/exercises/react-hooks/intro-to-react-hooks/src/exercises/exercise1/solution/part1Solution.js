/* eslint-disable no-unused-expressions, import/first */
import React, { useState } from 'react';
import { processForm } from './../utilities';

const Form = () => {
  // 📗 Solution below 📗

  // It is also acceptable to use a single "useState" call,
  // and then pass an object with fullName, phoneNumber,
  // and emailAddress in it

  // From a readability and separation-of-concerns perspective,
  // it makes sense to have one stateful variable manage its state
  // and only its own state

  // Further reading:
  // https://reactjs.org/docs/hooks-state.html#tip-using-multiple-state-variables
  const [fullName, setFullName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [emailAddress, setEmailAddress] = useState();
  // 📗 Solution above 📗
  const handleFormSubmit = e => {
    e.preventDefault();
    processForm({ fullName, phoneNumber, emailAddress });
  };
  return (
    <section>
      <h3>Exercise 1, Part 1</h3>
      <form className="Form" onSubmit={handleFormSubmit}>
        <Field
          label="Full Name"
          onChange={e => setFullName(e.target.value)}
          name="fullName"
          value={fullName}
        />
        <Field
          label="Phone Number"
          onChange={e => setPhoneNumber(e.target.value)}
          name="phoneNumber"
          value={phoneNumber}
        />
        <Field
          label="Email Address"
          onChange={e => setEmailAddress(e.target.value)}
          name="email"
          value={emailAddress}
        />
        <hr className="Divider" />
        <button className="Form-submitButton">
          Submit
        </button>
      </form>
    </section>
  );
};

const Field = ({
  label,
  name,
  type,
  value,
  ...inputProps
}) => {
  return (
    <div className="Form-fieldWrapper">
      <label className="Form-fieldLabel" htmlFor={name}>
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
