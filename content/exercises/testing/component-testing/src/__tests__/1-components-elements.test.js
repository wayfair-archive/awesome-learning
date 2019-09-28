/*eslint-disable no-unused-expressions */
import React from "react";
import ReactDOM from "react-dom";
`
⬇️

Welcome to Testing - Intro to component testing.

This will be a bit different than other Awesome Learning sessions

💡 We aren't providing tests to see you did things "correctly". 
💡 Instead, we are providing solutions for you to compare 
💡 your completed exercises against.

When your tests are correct and pass, 
check the solution file to see how you did

The story: You've been tasked with writing tests for some of
your React components using only Jest - your team hasn't adopted enzyme yet.

Through the course of this session you will learn:
1) How to test React elements, components, and instances.
2) Complex UI testing, and why you may need enzyme
3) Basic user interaction testing.

⬆️
`;

`
📚 Exercise 1 - Components and elements 📚

You have a ticket to test the Icon component.

What's Icon? It's a functional React component. 
We can call the function to get a React element 
(a plain object that describes the component's output).

🛠️ Write a test in the test block below 
🛠️ to check that calling Icon returns an object.
`;

const Icon = ({ iconType, altText }) => (
  <img
    src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`}
    alt={altText}
  />
);

test("component returns an element", () => {
  const element = Icon({ iconType: "check", altText: "Check Mark" });
  // Your code here ...
});

`
📚 Exercise 2 - Making assertions on React elements 📚

Since React elements are plain objects, we can use 
Jest to make assertions on them.

🛠️ Write a test that checks that the output of 
🛠️ Icon() is a DOM element of type <img>
🛠️ and that the <img> is given the following props:
🛠️ an iconType of "check" and altText of "Check Mark".

💡 If you get stuck, either console.log out the element, or try writing:
💡 expect(element).toEqual('foo')

Either way will show you the shape of the element
`;

test("icon component returns an element with the correct type and props", () => {
  const element = Icon({ iconType: "check", altText: "Check Mark" });
  // Your code here ...
});

`
📚 Exercise 3 - Testing nested components 📚

After successfully testing the Icon, you now 
have to test the IconButton component.

Since elements describe what will be rendered 
(the component types and their props) and not the 
actual output, testing some aspects of IconButton 
functionality is hard without a way to render everything.

For example, how would we test that the <img> for 
the icon of a given IconButton is correct? The element 
returned by IconButton() describes that the first child 
of the <button> should be an Icon component with certain props, 
but we'd need to call Icon() with those props to 
test that the <img> is correct.

We need a way to check the real DOM generated 
by rendering components given different props. 
We can use ReactDOM (a part of React's API) to render 
any component into a real DOM element. 
We've provided this code for you.

🛠️ Below are two failing tests. Your job is to fix them 
🛠️ to test these two things:
🛠️ 1) The output of IconButton includes "Click Me"
🛠️  - This validates that IconButton renders children
🛠️ 2) The IconButton output has an iconType of 
🛠️   "https://cdn.wayfair.com/static/icons/check.svg"
🛠️  - This validates IconButton formats iconType based on the prop passed to it.
`;

const IconButton = ({ iconType, altText, children }) => (
  <button>
    <Icon iconType={iconType} altText={altText} /> {children}
  </button>
);

test("button renders an anchor when given an href and a button when not", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <IconButton iconType="check" altText="Check Mark">
      Click Me
    </IconButton>,
    div
  );
  // Your code here ...
});

`
✅✅✅ 

Testing Complex React Component Instances (not an exercise)

The above method works *ok* for such a simple component, but quickly
becomes difficult with complex components.

Imagine if IconButton was inside a modal, or had a disabled state.
In order to test it without enzyme, we would need to explicitly render
it in every possible state and assert tests on the html output alone.

This could quickly get out of hand, not to mention the tests 
would be difficult to maintain if they all had to be based 
on the exact string output of the html.

Head over to the "using-enzyme" file to learn how the 
Enzyme library can give us more power over testing 
our user interfaces.

✅✅✅ 
`;