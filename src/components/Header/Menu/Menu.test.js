import React from "react";
import renderer from "react-test-renderer";
import Menu from "./Menu";

describe("Menu", () => {
  const props = {
    menu: [
      {
        label: "Courses",
        path: "/"
      },
      {
        label: "How-To",
        path: "/pages/howTo"
      },
      {
        label: "Contribute",
        path: "/pages/contacts"
      }
    ]
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Menu {...props} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
<div
  className="Menu"
>
  <svg
    className="Icon Menu-icon"
    viewBox="0 0 28 28"
  >
    <path
      d="M7,9h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H7C6.4,7,6,7.4,6,8S6.4,9,7,9z M21,13H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,13,21,13z M21,19H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S21.6,19,21,19z"
    />
  </svg>
  <ul
    className="Menu-list"
  >
    <li
      className="Menu-item"
    >
      <Link
        to="/"
      >
         
        Courses
         
      </Link>
    </li>
    <li
      className="Menu-item"
    >
      <Link
        to="/pages/howTo"
      >
         
        How-To
         
      </Link>
    </li>
    <li
      className="Menu-item"
    >
      <Link
        to="/pages/contacts"
      >
         
        Contribute
         
      </Link>
    </li>
  </ul>
</div>
`);
  });
});
