import React from 'react';
import renderer from 'react-test-renderer';
import {PureHeader} from './Header';

describe('Header', () => {
  const props = {
    data: {
      site: {
        siteMetadata: {
          title: 'Title',
          menu: [
            {
              label: 'Item 0',
              path: '/#0/'
            },
            {
              label: 'Item 1',
              path: '/#1/'
            }
          ]
        }
      }
    }
  };
  it('renders correctly', () => {
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
      viewBox="0 0 24 24"
    >
      <path
        d="M24 7.65l-1.52-5.72a.59.59 0 0 0-.39-.38L16.35 0a.55.55 0 0 0-.53.15L12 4l8 8 3.82-3.82a.55.55 0 0 0 .18-.53m-24 8.7l1.51 5.72a.55.55 0 0 0 .39.38L7.65 24a.55.55 0 0 0 .53-.15L12 20l-8-8-3.81 3.82a.53.53 0 0 0-.16.53M7.65 0L1.93 1.55a.56.56 0 0 0-.38.38L0 7.65a.55.55 0 0 0 .15.53L4 12l8-8L8.18.19A.49.49 0 0 0 7.65 0M23.8 15.77L20 12l-8 8 3.75 3.77a.74.74 0 0 0 .68.18L22 22.49a.66.66 0 0 0 .49-.49L24 16.47a.67.67 0 0 0-.16-.66"
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
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0a12.15 12.15 0 0 1 12 12.3A12.29 12.29 0 0 1 15.79 24c-.6.11-.82-.27-.82-.59v-2.1c3.34.75 4-1.65 4-1.65a3.27 3.27 0 0 1 1.33-1.8c1.09-.76-.08-.74-.08-.74a2.53 2.53 0 0 0-1.84 1.26 2.52 2.52 0 0 1-3.49 1 2.68 2.68 0 0 0-.76-1.65c2.66-.31 5.47-1.36 5.47-6.08a4.82 4.82 0 0 0-1.24-3.3 4.52 4.52 0 0 0-.06-3.25s-1-.33-3.3 1.26a11.18 11.18 0 0 0-6 0C6.7 4.77 5.7 5.1 5.7 5.1a4.52 4.52 0 0 0-.12 3.26 4.81 4.81 0 0 0-1.23 3.3c0 4.73 2.8 5.77 5.47 6.07A3 3 0 0 0 9 20v3.38c0 .38-.21.71-.82.59A12.29 12.29 0 0 1 0 12.3 12.15 12.15 0 0 1 12 0z"
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
