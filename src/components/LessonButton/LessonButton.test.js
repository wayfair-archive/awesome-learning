import React from "react";
import { mount } from "enzyme";
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
    const wrapper = mount(
      <PureLessonButton {...props} />
    );
    expect(wrapper.find("a").props().href).toBe(
      "https://codesandbox.io/s/github/wayfair/awesome-learning-exercises/tree/master/data-types/objects?fontsize=14&previewwindow=tests"
    );
  });
});
