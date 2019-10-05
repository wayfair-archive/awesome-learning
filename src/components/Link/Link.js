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
  isActive,
  isExternal
}) => {
  const className = cx("Link", {
    "is-button": isButton,
    "is-block": isBlock,
    [`Link--${variation}`]: variation && !isButton
  });

  return isExternal ? (
    <a className={className} href={path} target="_blank">
      {children}
    </a>
  ) : (
    <Link
      className={className}
      to={path}
      activeClassName={isActive ? "is-active" : ""}
    >
      {children}
    </Link>
  );
};

StyledLink.propTypes = {
  children: PropTypes.string,
  isBlock: PropTypes.string,
  variation: PropTypes.oneOf(LINK_VARIATIONS),
  path: PropTypes.string.isRequired,
  isButton: PropTypes.bool,
  isActive: PropTypes.bool,
  isExternal: PropTypes.bool
};

StyledLink.defaultProps = {
  variation: null,
  isButton: false,
  isActive: false,
  isExternal: false
};

export default StyledLink;
