/**
 * Course Card spec
 *
 * @author Evan Cooper <evcooper@wayfair.com>
 * @copyright 2019 Wayfair LLC - All rights reserved
 */
import React from "react";
import { mount } from "enzyme";
import CourseCard, { __DATA_ENZYME_IDS } from "./CourseCard";
import getEnzymeAttributeSelector from "../../utils/getEnzymeAttributeSelector";

const TITLE = getEnzymeAttributeSelector(__DATA_ENZYME_IDS.TITLE);
const DESCRIPTION = getEnzymeAttributeSelector(__DATA_ENZYME_IDS.DESCRIPTION);
const LINK = getEnzymeAttributeSelector(__DATA_ENZYME_IDS.LINK);

const PROPS = {
  link: "/courses",
  description: "This is the course",
  title: "Title Of Course"
};

describe("Course Card", () => {
  it("Renders a title, link, and description", () => {
    const wrapper = mount(<CourseCard {...PROPS} />);
    expect(wrapper.find(TITLE).text()).toBe(PROPS.title);
    expect(wrapper.find(DESCRIPTION).text()).toBe(PROPS.description);
    expect(wrapper.find(LINK).props().path).toBe(PROPS.link);
    wrapper.unmount();
  });
});
