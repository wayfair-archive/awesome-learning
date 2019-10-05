import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Icon from "../../Icon";
import { getIcon } from "../../../utils";
import "./Menu.scss";

const Menu = ({ menu }) => (
  <div className="Menu">
    <Icon icon={getIcon("menu")} cssClasses="Menu-icon" />
    <ul className="Menu-list">
      {menu.map(item => (
        <li key={item.label} className="Menu-item">
          <Link to={item.path}> {item.label} </Link>
        </li>
      ))}
    </ul>
  </div>
);

Menu.PropTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    path: PropTypes.string
  })).isRequired
};

export default Menu;
