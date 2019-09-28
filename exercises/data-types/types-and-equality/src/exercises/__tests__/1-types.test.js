/* eslint-disable no-unused-expressions */
`
⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

Welcome to Data Types - Intro to types!
  
  We are working on a new feature - give our users the ability
  to input their zip code, and based on that zip code show a price
  with their local tax included.
 
  To build this feature, we will need to sanitize user input, validate
  data coming back from an API, and more. 
  
  By the end of this session, you will know enough about
  JavaScript types and equality to write more predictable, stable solutions than
  before. 

  Let's get started. 

  ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
`;

`
📚 Exercise 1 - Learning Types and Typeof 📚
 
  Before we can validate if the input is the correct type for the form,
  we first need to understand types.
 
  🛠️ There are 7 types in JS. We'll only worry about 6 for now.
  🛠️ Fill in the following variables below to match the output type. Follow the
  🛠️ example if you are confused.
 
  💡 Typeof only ever returns a string. 
`;

`--- ⬇️ Exercise 1 EXAMPLE ⬇️ ---`;
const example = () => {
  let EXAMPLE = 42;
  return typeof EXAMPLE;
};
// You will be assigning the correct types moving forward
const returnedExampleValue = "number";

test("should have correct value for example", () => {
  expect(example() == returnedExampleValue).toBe(true);
});

`--- ⬇️ Exercise 1a ⬇️ ---`;

const dataTypeA = () => {
  let A = "42";
  return typeof A;
};
// Assign the correct type to returnedAValue b
let returnedAValue;

test("should have correct value for dataTypeA", () => {
  expect(dataTypeA() == returnedAValue).toBe(true);
});

`--- ⬇️ Exercise 1b ⬇️ ---`;
const dataTypeB = () => {
  let B = true;
  return typeof B;
};
// Assign the correct type to returnedBValue
let returnedBValue;

test("should have correct value for dataTypeB", () => {
  expect(dataTypeB() == returnedBValue).toBe(true);
});

`--- ⬇️ Exercise 1c ⬇️ ---`;
const dataTypeC = () => {
  return typeof C;
};
// Assign the correct type to returnedCValue
let returnedCValue;

test("should have correct value for dataTypeC", () => {
  expect(dataTypeC() == returnedCValue).toBe(true);
});

`--- ⬇️ Exercise 1d ⬇️ ---`;
const dataTypeD = () => {
  let D = null;
  return typeof D;
};
// Assign the correct type to returnedDValue
let returnedDValue;

test("should have correct value for dataTypeD", () => {
  expect(dataTypeD() == returnedDValue).toBe(true);
});

`--- ⬇️ Exercise 1e ⬇️ ---`;
const dataTypeE = () => {
  let E = {};
  return typeof E;
};
// What will be returned function above
let returnedEValue;

test("should have correct value for dataTypeE", () => {
  expect(dataTypeE() == returnedEValue).toBe(true);
});

` 
📚 Exercise 2 - Subtypes!

  What about arrays and functions? Arrays and functions are
  sub-types of object, meaning they aren't explicitly types in JS,
  but they fall under our idea of types - we choose them because
  we expect certain behaviors from them.
 
  🛠️ In this exercise, complete the following functions so they return true
  🛠 ️if passed the right value, and false otherwise. For example:
  🛠️ isFunction should only return true if passed a function
`;

const isFunction = value => {
  // YOUR CODE HERE
};

test("isFunction returns true only when value is a function", () => {
  const thisIsAFunction = () => {};
  const thisIsNotAFunction = "() => {}";
  expect(isFunction(thisIsAFunction)).toBe(true);
  expect(isFunction(thisIsNotAFunction)).toBe(false);
});

const isArray = value => {
  // YOUR CODE HERE
};

test("isArray returns true only when value is an array", () => {
  const thisIsAnArray = ["hey", "you"];
  const thisIsNotAnArray = { 1: [] };
  expect(isArray(thisIsAnArray)).toBe(true);
  expect(isArray(thisIsNotAnArray)).toBe(false);
});

` 
✅✅✅ 

  Now that we have a basic understanding of types, let's learn 
  the basics of equality click on the file "2-equality.test.js" on your left
  
✅✅✅
`;
