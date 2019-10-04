import React from "react";
import Helmet from "react-helmet";
import cx from "classnames";
import Header from "../../components/Header";

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

export default Layout;
