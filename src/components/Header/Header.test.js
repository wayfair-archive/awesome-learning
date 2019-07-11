import React from "react";
import renderer from "react-test-renderer";
import { PureHeader } from "./Header";

describe("Header", () => {
  const props = {
    data: {
      site: {
        siteMetadata: {
          title: "Title",
          menu: [
            {
              label: "Item 0",
              path: "/#0/"
            },
            {
              label: "Item 1",
              path: "/#1/"
            }
          ]
        }
      }
    }
  };
  it("renders correctly", () => {
    const tree = renderer.create(<PureHeader {...props} />).toJSON();
    expect(tree).toMatchInlineSnapshot(`
<header
  className="Header"
>
  <Link
    className="Header-logo"
    to="/"
  >
    <svg
      className="Icon Header-icon Header-icon--logo"
      viewBox="0 0 28 28"
    >
      <path
        d="M26 8.28l-1.64-6.2a.63.63 0 0 0-.42-.42L17.72 0a.6.6 0 0 0-.58.17L13 4.33 21.67 13l4.14-4.14a.6.6 0 0 0 .19-.58M0 17.72l1.64 6.2a.63.63 0 0 0 .42.42L8.28 26a.6.6 0 0 0 .58-.17L13 21.67 4.33 13 .19 17.14a.58.58 0 0 0-.17.58M8.28 0l-6.2 1.66a.63.63 0 0 0-.42.42L0 8.28a.6.6 0 0 0 .17.58L4.33 13 13 4.33 8.86.19A.56.56 0 0 0 8.28 0M25.8 17.09L21.7 13 13 21.69l4.07 4.09a.78.78 0 0 0 .73.19l6.05-1.59a.73.73 0 0 0 .53-.53l1.59-6a.76.76 0 0 0-.17-.72"
      />
    </svg>
    <h1
      className="Header-title"
    >
      Title
    </h1>
  </Link>
  <nav
    className="Header-nav"
  >
    <div
      className="Header-menu Header-menu--icon"
    >
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
              to="/#0/"
            >
               
              Item 0
               
            </Link>
          </li>
          <li
            className="Menu-item"
          >
            <Link
              to="/#1/"
            >
               
              Item 1
               
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <ul
      className="Header-list"
    >
      <li
        className="Header-menu"
      >
        <Link
          className="Header-link"
          to="/#0/"
        >
          Item 0
        </Link>
      </li>
      <li
        className="Header-menu"
      >
        <Link
          className="Header-link"
          to="/#1/"
        >
          Item 1
        </Link>
      </li>
    </ul>
  </nav>
</header>
`);
  });
});
