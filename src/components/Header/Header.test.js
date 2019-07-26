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
      <li
        className="Header-menu"
      >
        <a
          className="Header-link"
          href="https://github.com/wayfair/awesome-learning"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            className="Icon "
            viewBox="0 0 26 28"
          >
            <path
              d="M10 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM20 19c0 1.141-0.594 3-2 3s-2-1.859-2-3 0.594-3 2-3 2 1.859 2 3zM22.5 19c0-2.391-1.453-4.5-4-4.5-1.031 0-2.016 0.187-3.047 0.328-0.812 0.125-1.625 0.172-2.453 0.172s-1.641-0.047-2.453-0.172c-1.016-0.141-2.016-0.328-3.047-0.328-2.547 0-4 2.109-4 4.5 0 4.781 4.375 5.516 8.188 5.516h2.625c3.813 0 8.188-0.734 8.188-5.516zM26 16.25c0 1.734-0.172 3.578-0.953 5.172-2.063 4.172-7.734 4.578-11.797 4.578-4.125 0-10.141-0.359-12.281-4.578-0.797-1.578-0.969-3.437-0.969-5.172 0-2.281 0.625-4.438 2.125-6.188-0.281-0.859-0.422-1.766-0.422-2.656 0-1.172 0.266-2.344 0.797-3.406 2.469 0 4.047 1.078 5.922 2.547 1.578-0.375 3.203-0.547 4.828-0.547 1.469 0 2.953 0.156 4.375 0.5 1.859-1.453 3.437-2.5 5.875-2.5 0.531 1.062 0.797 2.234 0.797 3.406 0 0.891-0.141 1.781-0.422 2.625 1.5 1.766 2.125 3.938 2.125 6.219z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</header>
`);
  });
});
