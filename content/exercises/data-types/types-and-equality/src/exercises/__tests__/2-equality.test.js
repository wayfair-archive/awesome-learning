/* eslint-disable no-unused-expressions no-unused-vars */
` 
⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

Intro to Equality
 
  We often need to compare values in our programs.
  In javascript, we have a number of ways to check
  equality, each with their own strengths and weaknesses.

  Checking equality all comes down to understanding types though,
  so keep in mind our types as learn how to compare values.

  🚨 Not all of these exercises have tests - 
  🚨 make sure to check the answer key to validate your answers!

  ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
 `;

`
 📚 Exercise 1 - Learning "==" and "===" 📚

 Many describe == as comparing values, or loose equality
 and === as comparing value and type, or strict equality

 This isn't exactly correct though, both check the type of 
 the value. A more accurate description 
 (courtesy of Kyle Simpson):

 == allows coercion
 === dissalows coercion.

 🛠️ Lets create a series of helper functions to check for 
 🛠️ types using equality.
 🛠️ Complete each of the functions below to check for each type. 
 
 💡 Check out the example below to see how it's done.
 `;

// EXAMPLE
const isNumber = value => {
  // YOUR CODE HERE
  return typeof value == "number" ? true : false;
};

test('isNumber returns true only when value is of type "number"', () => {
  expect(isNumber(2)).toBe(true);
  expect(isNumber("2")).toBe(false);
  expect(isNumber(NaN)).toBe(true);
});

const isString = value => {
  // YOUR CODE HERE
};

test('isString returns true only when value is of type "string"', () => {
  expect(isString(1337)).toBe(false);
  expect(isString("two")).toBe(true);
  expect(isString(NaN)).toBe(false);
});

const isBoolean = value => {
  // YOUR CODE HERE
};

test('isBoolean returns true only when value is of type "boolean"', () => {
  expect(isBoolean("true")).toBe(false);
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(1)).toBe(false);
});

const isObject = value => {
  // YOUR CODE HERE
};

test('isObject returns true only when value is of type "object"', () => {
  const lookImAnObject = {};
  expect(isObject("object")).toBe(false);
  expect(isObject(lookImAnObject)).toBe(true);
});

const isUndefined = value => {
  // YOUR CODE HERE
};

test("isUndefined returns true only when value is undefined", () => {
  let imNotDefinedYet;
  expect(isUndefined("undefined")).toBe(false);
  expect(isUndefined(imNotDefinedYet)).toBe(true);
});

const isNull = value => {
  // YOUR CODE HERE
};

test("isNull returns true only when value is null", () => {
  let notDefinedYet;
  const thisIsNull = null;
  expect(isNull(thisIsNull)).toBe(true);
  expect(isNull(notDefinedYet)).toBe(false);
});

`  
📚 Exercise 2 - Checking for Primitives 📚 
 
  🛠️ Write a function called isPrimitive that returns true if the
  🛠️ provided value is a primitive and false if not. 
  
  🚨 Do not use the isNull or isUndefined functions above, 
  🚨 complete the null/undefined task with the == operator.
 
  💡 For more information on how or why you can check for null/undefined
  💡 with just == check out the spec for the abstract equality comparison 
  💡 algorithm which governs the "==" operator
  💡 http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
 `;
const isPrimitive = value => {
  // YOUR CODE HERE
};

test("isPrimitive should return true when given a primitive and false when given an object", () => {
  expect([123, true, "foo", null, undefined, Symbol()].every(isPrimitive)).toBe(
    true
  );
  expect(isPrimitive({})).toBe(false);
});

`
📚 Exercise 3 - Understanding Implicit Coercion 📚

  Implicit type coercion usually happens when you apply operators to values of
  different types, like 1 == null, 2/’5', null + new Date() etc. It's important
  to know when this is happening so we better understand how our programs operate.
 
  🛠 For each of the following SIX expressions 
  🛠 fill in whether a coercion is occurring,
  🛠 and which of the values (or both) are being coerced.
 
  💡 There is no test for this, please refer to the answer key to
  💡 check your work, and see the example below for reference.

  💡 See the exampleExpression below for hints 
`;

`----------------------- ⬇️ EXAMPLE ⬇️ ----------------------`;
const exampleExpression = [] == 0;
// Assign a boolean to this variable with your answer
let isExpressionCoercing = true;
// Feel free to discuss this out loud, or fill in "the number" or "the string" etc.
let whichValueIsExpressionCoercing = "both values";

`-------------------- ⬇️ Expression One ⬇️ ------------------`;

const expressionOne = 123 + "1";
// Assign a boolean to this variable with your answer
let isExpressionOneCoercing;
// Feel free to discuss this out loud, or fill in "the number" or "the string" etc.
let whichValueIsExpressionOneCoercing;

`-------------------- ⬇️ Expression Two ⬇️ ------------------`;

const expressionTwo = () => {
  if (2) {
    // Empty on purpose
  }
};
// Assign a boolean to this variable with your answer
let isExpressionTwoCoercing;
// Feel free to discuss this out loud, or fill in "the number" or "the string" etc.
let whichValueIsExpressionTwoCoercing;

`-------------------- ⬇️ Expression Three ⬇️ ------------------`;

const expressionThree = !!2;
// Assign a boolean to this variable with your answer
let isExpressionThreeCoercing;
// Feel free to discuss this out loud, or fill in "the number" or "the string" etc.
let whichValueIsExpressionThreeCoercing;

`-------------------- ⬇️ Expression Four ⬇️ ------------------`;

const expressionFour = 2 || "hello";
// Assign a boolean to this variable with your answer
let isExpressionFourCoercing;
// Feel free to discuss this out loud, or fill in "the number" or "the string" etc.
let whichValueIsExpressionFourCoercing;

`-------------------- ⬇️ Expression Five ⬇️ ------------------`;

const expressionFive = 4 > "5";
// Assign a boolean to this variable with your answer
let isExpressionFiveCoercing;
// Feel free to discuss this out loud, or fill in "the number" or "the string" etc.
let whichValueIsExpressionFiveCoercing;

`-------------------- ⬇️ Expression Six ⬇️ ------------------`;

const price = 12.99;
const expressionSix = `This is the total price ${price}`;
// Assign a boolean to this variable with your answer
let isExpressionSixCoercing;
// Feel free to discuss this out loud, or fill in "the number" or "the string" etc.
let whichValueIsExpressionSixCoercing;

`  
📚 Exercise 4 - Explicit Coercion 📚
 
  Now that we know how and when Javascript coerces values, let's be explicit.
  In some cases, it's more helpful to other developers to explicitly coerce types
  instead of relying on ===, or the implict coercion inherent in ==. Doing so can
  make our code more readable.
 
  🛠 In the following expressions, change from implict to explicit coercion.
  🛠 You may use any method you wish to explicity coerce (toString, Number(), + etc...)
 
  💡 For example -
 
    const itemPrice = "1";
    const totalPrice = 13;
    
    itemPrice + totalPrice = "131" 
 
  🚨 The "+" will coerce the other valye to a string
  🚨 if one of the operands is a string.
 
  We could make this explicit and correct by coercing 1 to a number

  totalPrice + Number(itemPrice) = 14 
`;

`--- ⬇️ Convert to Explict Coercion Below ⬇️ ---`;
const totalPrice = 32.99;
const displayTotalPriceText = totalPrice => {
  return `Your total price is ${totalPrice}`;
};

`--- ⬇️ Convert to Explict Coercion Below ⬇️ ---`;
const currentSalePrice = 5.99;
const newSalePrice = "4.87";
const getLowestPrice = (oldPrice, newPrice) => {
  return Math.min(oldPrice, newPrice);
};

`--- ⬇️ Convert to Explict Coercion Below ⬇️ ---`;
const response = { data: {} };
const getData = response => {
  return response ? response : null;
};

` 
✅✅✅ 

  Now that we have a strong understand of types and equality, let's put them
  into practice by solving the problems in "3-practical-types-and-equality"

✅✅✅ 
`;
