import React from 'react';
import { mount } from "enzyme";
import HowToTemplate from "./howTo-template";

describe("HowTo template", () => {
  it('matches the snapshot', () => {
    const wrapper = mount(<HowToTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
