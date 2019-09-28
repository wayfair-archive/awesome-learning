/*eslint-disable no-unused-expressions */
`
⬇️

Welcome to Testing - Intro to Unit Tests!
Here's a simple function:

💡 const add = (a, b) => a + b;

To test it, we call it and throw an error if the result
doesn't match our expected output.

💡 Here's how we would use it:
💡 test(add(1, 2), 3); <-- This will not throw an
💡 error

Generally, in addition to the 'happy path', we
want to test edge cases (What happens
if we pass a string as an argument? 

💡 What if we don't pass in enough arguments?)
💡 test(add(1), 1); <-- This will throw an error

This test will fail, because 1 + undefined evaluates to NaN.

Tests are great for telling you your function is
not as robust as it needs to be!

⬆️
`;

`📚 Exercise #1 - Basic Function Testing  📚 

Your coworker Alex wrote a function that reverses
a string: reverse('Hello') === 'olleH'

🛠️ Write a test for Alex's reverse function using Jest 
🛠️ Don't change test1's arguments,
🛠️ Use the provided "it" and "expect" arguments to write a test 
🛠️ like the below example.

test('returns the sum of two inputs', () => {
  expect(add(1, 2)).toBe(3);
});

💡 Note: The 2 main components of a Jest test are:
💡
💡 1. Description - A summary of what the test checks, which
💡 communicates your code's
💡 intended behavior to other developers.
💡
💡 2. Assertion - Your check that the function works correctly
💡 "expect", the matcher "toBe", and the rest of the Jest API is
💡 essentially a wrapper around our error-throwing "if" block.


❓ What's a matcher? 
❓ The most basic matcher in Jest is '.toBe'. A matcher is a method
❓ to help you validate that the code you are running "matches"
❓ what you expect. 'toBe()' does a strict equality check
`

const reverse = str =>
  str.split("").reduce((reversed, letter) => letter + reversed, "");

export const test1 = (it, expect) => {
  // Your code here
};

`📚 Exercise #2 - Testing Objects 📚

Alex wrote this factory function that takes a name and array
of hobbies and returns a user object. We want a test that
make sure it works:

🛠️ Write a test for makeUser, which takes in "name" and "hobbies"
🛠️ arguments, and returns an object with those properties.

🚨 When comparing objects or arrays, '.toBe' won't work
🚨 unless the objects have the same reference. 

💡 For example,  expect({ name: 'Alex'}).toBe({ name: 'Alex' }) 
💡 will fail. We need to use ".toEqual", which checks 
💡 that objects or arrays  are deeply equal even if 
💡 they have different references.
`


const makeUser = (name, hobbies = []) => {
  return {
    name,
    hobbies
  };
};

export const test2 = (it, expect) => {
  // Your code here
};


`📚 Exercise #3: More Function Testing 📚

Testing allows us to refactor our code confidently,
knowing we aren't breaking any functionality, especially
if our code touches other parts of the codebase.

Our old friend Alex wrote a function "getCartTotal",
which takes an array of wishlist items and returns
the total of all items that have been added to the cart.

🛠️ Write a test for getCartTotal that it returns the right total price
🛠️ when calling getCartTotal() with the "wishlistData" array.
`

const getCartTotal = wishlist => {
  let totalPrice = 0;
  for (let i = 0; i < wishlist.length; i++) {
    const { price, addedToCart } = wishlist[i];
    if (addedToCart) {
      totalPrice += price;
    }
  }
  return totalPrice;
};

const wishlistData = [
  { id: "4027", addedToCart: true, price: 20.0 },
  { id: "5301", addedToCart: false, price: 20.0 },
  { id: "6711", addedToCart: true, price: 20.0 },
  { id: "1244", addedToCart: false, price: 20.0 },
  { id: "4765", addedToCart: true, price: 20.0 }
];

export const test3 = (it, expect) => {
  // Your code here
};

const wishlistWithSalePrice = [
  { id: "4027", addedToCart: true, price: 20.0, salePrice: 10.0 },
  { id: "5301", addedToCart: false, price: 20.0, salePrice: 10.0 },
  { id: "6711", addedToCart: true, price: 20.0, salePrice: 10.0 },
  { id: "1244", addedToCart: false, price: 20.0, salePrice: null },
  { id: "4765", addedToCart: true, price: 20.0, salePrice: null }
];


`📚 Exercise 4: Intro to Test Driven Development 📚 

We need new functionality for the getCartTotal function -
getCartTotal must now add the salePrice instead of price
if it is available.

However, before we refactor let's write a test to capture this
new behavior. Doing this gives us a data-driven
way to refactor because we will know when our code works.

🛠️ Write a test for getCartTotal using wishlistWithSalePrice, and expect
🛠️ the total price to include sale price.

🚨 NOTE: This test will fail until you complete exercise 5
`

export const test4 = (it, expect) => {
  // Your code here
};


`📚 Exercise #5 - The Development Part of TDD 📚

Now we have two tests - one testing the original functionality of
getCartTotal called with wishlistData and one testing the
expected new functionality of getCartTotal called with wishlistWithSalePrice.

🛠️ Modify the getCartTotal function to add the salePrice instead of
🛠️ regular price if it exists and make sure both
🛠️ test 3 and 4 pass once you are done!
`
