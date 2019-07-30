/**
 * Block spec
 *
 * @author Evan Cooper <evcooper@wayfair.com>
 * @copyright 2019 Wayfair LLC - All rights reserved
 */
import React from "react";
import { mount } from "enzyme";
import Block, { __DATA_ENZYME_IDS } from "./Block";

describe("Block element", () => {
  it("Renders a div if no element type is passed", () => {
    const wrapper = mount(<Block>hey</Block>);
    const RENDERED_ELEMENT = wrapper.find(
      `[data-enzyme-id="${__DATA_ENZYME_IDS.RENDERED_ELEMENT}"]`
    );
    expect(RENDERED_ELEMENT.type()).toEqual("div");
    wrapper.unmount();
  });
  it("Renders a p tag if 'p' is passed to the is prop", () => {
    const wrapper = mount(<Block is="p">hey</Block>);
    const RENDERED_ELEMENT = wrapper.find(
      `[data-enzyme-id="${__DATA_ENZYME_IDS.RENDERED_ELEMENT}"]`
    );
    expect(RENDERED_ELEMENT.type()).toEqual("p");
    wrapper.unmount();
  });
});
