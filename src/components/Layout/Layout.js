import React from "react";
import PropTypes from 'prop-types';
import Helmet from "react-helmet";
import cx from "classnames";
import Header from "../Header";

import "./Layout.scss";

const Layout = ({ children, title, description, isFullBleed }) => {
  const layoutClass = cx("Layout", {
    "Layout--fullBleed": isFullBleed
  });
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:200,400"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <div className={layoutClass}>{children}</div>
    </>
  );
};

Layout.defaultProps = {
  isFullBleed: false
};

Layout.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isFullBleed: PropTypes.string,
}
export default Layout;
