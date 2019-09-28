import React from "react";
import ReactDOM from "react-dom";

// Exercise 1
const Icon = ({ iconType, altText }) => (
  <img
    src={`https://cdn.wayfair.com/static/icons/${iconType}.svg`}
    alt={altText}
  />
);

test.skip("component returns an element", () => {
  const element = Icon({ iconType: "check", altText: "Check Mark" });
  expect(typeof element).toBe("object");
});

// Exercise 2
test.skip("icon component returns an element with the correct type and props", () => {
  const element = Icon({ iconType: "check", altText: "Check Mark" });
  expect(element.type).toBe("img"); // toBe here because strings are primitives
  expect(element.props).toEqual({
    alt: "Check Mark",
    src: "https://cdn.wayfair.com/static/icons/check.svg"
  }); // toEqual here beacause its an object
});

// Exercise 3
const IconButton = ({ iconType, altText, children }) => (
  <button>
    <Icon iconType={iconType} altText={altText} /> {children}
  </button>
);

test.skip("button renders an anchor when given an href and a button when not", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <IconButton iconType="check" altText="Check Mark">
      Click Me
    </IconButton>,
    div
  );
  expect(div.innerHTML.includes("Click Me")).toBe(true);
  expect(
    div.innerHTML.includes("https://cdn.wayfair.com/static/icons/check.svg")
  ).toBe(true);
});
