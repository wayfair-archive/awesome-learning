import React from "react";
import { mount } from "enzyme";
import { OutboundLink } from "gatsby-plugin-gtag";
import { PureLessonButton } from "./LessonButton";

describe("LessonButton", () => {
  const props = {
    path: "data-types/objects",
    data: {
      site: {
        siteMetadata: {
          repoName: "awesome-learning",
          repoOwner: "wayfair"
        }
      }
    }
  };

  it("creates a link with the right codesandox url", () => {
    const wrapper = mount(<PureLessonButton {...props} />);
    expect(wrapper.find("a").props().href).toBe(
      "https://codesandbox.io/s/github/wayfair/awesome-learning-exercises/tree/master/data-types/objects?fontsize=14&previewwindow=tests"
    );
  });
  it("calls the handler when the outbound link is clicked", () => {
    const handleClick = jest.fn();
    const wrapper = mount(
      <PureLessonButton {...props} onClick={handleClick} />
    );
    const link = wrapper.find(OutboundLink);
    link.simulate("click");
    expect(handleClick).toHaveBeenCalledWith(props.path);
  });
});
