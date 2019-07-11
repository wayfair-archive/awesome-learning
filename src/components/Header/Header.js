import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Menu from "./Menu";
import Icon from "../Icon";
import { getIcon } from "../../utils";
import "./Header.scss";

export const PureHeader = ({ data }) => {
  const { title, menu } = data.site.siteMetadata;
  return (
    <header className="Header">
      <Link to="/" className="Header-logo">
        <Icon icon={getIcon('logo')} cssClasses="Header-icon Header-icon--logo" />
        <h1 className="Header-title">{title}</h1>
      </Link>
      <nav className="Header-nav">
        <div className="Header-menu Header-menu--icon">
          <Menu menu={menu} />
        </div>
        <ul className="Header-list">
          {menu.map(item => (
            <li key={item.label} className="Header-menu"><Link className="Header-link" to={item.path}>{item.label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export const Header = props => (
  <StaticQuery
    query={graphql`
      query HeaderQuery  {
        site {
          siteMetadata {
            title
            menu {
              label
              path
            }
          }
        }
      }
    `}
    render={data => <PureHeader {...props} data={data} />}
  />
);

export default Header;
