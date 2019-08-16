import React from "react";
import renderer from 'react-test-renderer';
import HowToTemplate from "./howTo-template";

describe("HowTo template", () => {
  it("matches the snapshot", () => {
    const tree = renderer.create(<HowToTemplate />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
