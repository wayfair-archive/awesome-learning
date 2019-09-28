const dataTypeA = () => {
  let A = "42";
  return typeof A;
};
// Assign the correct type to returnedAValue b
let returnedAValue = "string";

test("should have correct value for dataTypeA", () => {
  expect(dataTypeA() == returnedAValue).toBe(true);
});

const dataTypeB = () => {
  let B = true;
  return typeof B;
};
// Assign the correct type to returnedBValue
let returnedBValue = "boolean";

test("should have correct value for dataTypeB", () => {
  expect(dataTypeB() == returnedBValue).toBe(true);
});

const dataTypeC = () => {
  return typeof C;
};
// Assign the correct type to returnedCValue
let returnedCValue = "undefined";

test("should have correct value for dataTypeC", () => {
  expect(dataTypeC() == returnedCValue).toBe(true);
});

const dataTypeD = () => {
  let D = null;
  return typeof D;
};
// Assign the correct type to returnedDValue
let returnedDValue = "null";

test("should have correct value for dataTypeD", () => {
  expect(dataTypeD() == returnedDValue).toBe(true);
});

const dataTypeE = () => {
  let E = {};
  return typeof E;
};
// What will be returned function above
let returnedEValue = "object";

test("should have correct value for dataTypeE", () => {
  expect(dataTypeE() == returnedEValue).toBe(true);
});

/**
 * Exercise 2 - Subtypes!
 *
 * What about arrays and functions? Arrays and functions are
 * sub-types of object, meaning they aren't explicitly types in JS,
 * but they fall under our idea of types - we choose them because
 * we expect certain behaviors from them.
 *
 * In this exercise, complete the following functions so they return true
 * if passed the right value, and false otherwise. For example:
 * isFunction should only return true if passed a function
 */

const isFunction = value => {
  // YOUR CODE HERE
  return typeof value == "function" ? true : false;
};

test("isFunction returns true only when value is a function", () => {
  const thisIsAFunction = () => {};
  const thisIsNotAFunction = "() => {}";
  expect(isFunction(thisIsAFunction)).toBe(true);
  expect(isFunction(thisIsNotAFunction)).toBe(false);
});

const isArray = value => {
  // YOUR CODE HERE
  return Array.isArray(value);
};

test("isArray returns true only when value is an array", () => {
  const thisIsAnArray = ["hey", "you"];
  const thisIsNotAnArray = { 1: [] };
  expect(isArray(thisIsAnArray)).toBe(true);
  expect(isArray(thisIsNotAnArray)).toBe(false);
});

/**
 * Now that we have a basic understanding of types, let's learn the basics of equality
 * click on the file "2-equality.test.js" on your left.
 */
