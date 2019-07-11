import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import cx from "classnames";
import "./Link.scss";

const LINK_VARIATIONS = [
  "primary",
  "secondary",
  "tertiary",
  "tertiaryAlt",
  "tertiaryAltInverse",
  "pill"
];

const StyledLink = ({
  children,
  variation,
  path,
  isBlock,
  isButton,
  isActive
}) => {
  return (
    <Link
      className={cx("Link", {
        "is-button": isButton,
        "is-block": isBlock,
        [`Link--${variation}`]: variation && !isButton
      })}
      to={path}
      activeClassName={isActive ? "is-active" : ""}
    >
      {children}
    </Link>
  );
};

StyledLink.propTypes = {
  variation: PropTypes.oneOf(LINK_VARIATIONS),
  path: PropTypes.string.isRequired,
  isButton: PropTypes.bool,
  isActive: PropTypes.bool
};

StyledLink.defaultProps = {
  variation: null,
  isButton: false,
  isActive: false
};

export default StyledLink;
