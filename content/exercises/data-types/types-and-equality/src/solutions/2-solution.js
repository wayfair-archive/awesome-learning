// EXAMPLE
const isNumber = value => {
  return typeof value == "number" ? true : false;
};

test('isNumber returns true only when value is of type "number"', () => {
  expect(isNumber(2)).toBe(true);
  expect(isNumber("2")).toBe(false);
  expect(isNumber(NaN)).toBe(true);
  // NaN is of type number, it represents an invalid number!
});

const isString = value => {
  // YOUR CODE HERE
  return typeof value == "string" ? true : false;
};

test('isString returns true only when value is of type "string"', () => {
  expect(isString(1337)).toBe(false);
  expect(isString("two")).toBe(true);
  expect(isString(NaN)).toBe(false);
});

const isBoolean = value => {
  // YOUR CODE HERE
  return typeof value == "boolean" ? true : false;
};

test('isBoolean returns true only when value is of type "boolean"', () => {
  expect(isBoolean("true")).toBe(false);
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(1)).toBe(false);
});

const isObject = value => {
  // YOUR CODE HERE
  return typeof value == "object" ? true : false;
};

test('isObject returns true only when value is of type "object"', () => {
  const lookImAnObject = {};
  expect(isObject("object")).toBe(false);
  expect(isObject(lookImAnObject)).toBe(true);
});

const isUndefined = value => {
  // YOUR CODE HERE
  return typeof value == "undefined" ? true : false;
};

test("isUndefined returns true only when value is undefined", () => {
  let imNotDefinedYet;
  expect(isUndefined("undefined")).toBe(false);
  expect(isUndefined(imNotDefinedYet)).toBe(true);
});

const isNull = value => {
  // YOUR CODE HERE
  if (!value && typeof value == "object") {
    return true;
  }
  return false;
};

test("isNull returns true only when value is null", () => {
  let notDefinedYet;
  const thisIsNull = null;
  expect(isNull(thisIsNull)).toBe(true);
  expect(isNull(notDefinedYet)).toBe(false);
});

/**
 * Exercise 2 - Checking for Primitives with Implicit Coercion
 *
 * We've made two helper functions  to check specifically
 * for undefined and null. In a real app that needs to check for
 * undefined and/or null, there's a simpler way using the power
 * of implicit coercion from the == operator.
 *
 * Write a function called isPrimitive that returns true if the
 * provided value is a primitive and false if not. Do not use
 * the isNull or isUndefined functions above, complete this task
 * with the == operator.
 *
 * For more information on how or why this works, check out the spec for
 * the abstract equality comparison algortihm which governs the ==
 * http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
 *
 */
const isPrimitive = value => {
  return (
    value == null ||
    typeof value === "symbol" ||
    isNumber(value) ||
    isBoolean(value) ||
    isString(value)
  );
};

test("isPrimitive should return true when given a primitive and false when given an object", () => {
  expect([123, true, "foo", null, undefined, Symbol()].every(isPrimitive)).toBe(
    true
  );
  expect(isPrimitive({})).toBe(false);
});

// TODO? Should we get into NaN?

// TODO should we list more resources?

/**
 * Exercise 3 - Understanding Implicit Coercion
 * Implicit type coercion usually happens when you apply operators to values of
 * different types, like 1 == null, 2/’5', null + new Date() etc.
 *
 * Many avoid using == because they consider this conversion to be confusing
 * or buggy. Yes it can be frustrating, but it can also be a useful mechanism
 * that allows us to write less code without losing the readability.
 *
 * Instead of hiding from Javascript coercion by using === all the time,
 * we can instead strive to understand how and when things are coerced,
 * so we are empowered to use the proper operators in our comparisons.
 *
 * For each of the following expressions, fill in whether a coercion is occurring,
 * and which of the values (or both) are being coerced.
 *
 * NOTE: There is no test for this, please refer to the answer key to
 * check your work, and see the example below for reference.
 */

const exampleExpression = [] == 0;
// Assign a boolean to this variable with your answer
let isExpressionOneCoercing = true;
// Feel free to discuss this out loud, or fill in "the number" or "the string" etc.
let whichValueIsExpressionOneCoercing = "both values";

const expressionOne = 123 + "1";
let isExpressionOneCoercing = true;
let whichValueIsExpressionOneCoercing = 123;

const expressionTwo = () => {
  if (2) {
    // Empty on purpose
  }
};
let isExpressionTwoCoercing = true;

const expressionThree = !!2;
let isExpressionThreeCoercing = true;

const expressionFour = 2 || "hello";
let isExpressionFourCoercing = true;
// logical operators coerce their operands to boolans
let whichValueIsExpressionFourCoercing = "both";

const expressionFive = 4 > "5";
let isExpressionFiveCoercing = true;
// All operators convert their operands of different types to numbers.
let whichValueIsExpressionFiveCoercing = "the string";

const price = 12.99;
const expressionSix = `This is the total price ${price}`;
let isExpressionSixCoercing = true;
let whichValueIsExpressionSixCoercing = "price";

// Convert the function below to use explicit coercion
const totalPrice = 32.99;
const displayTotalPriceText = totalPrice => {
  return `Your total price is ${String(totalPrice)}`;
};

const currentSalePrice = 5.99;
const newSalePrice = "4.87";
const getLowestPrice = (oldPrice, newPrice) => {
  return Math.min(Number(oldPrice), Number(newPrice));
};

// Convert the function below to use explicit coercion
const response = { data: {} };
const getData = response => {
  return Boolean(response) ? response : null;
};
