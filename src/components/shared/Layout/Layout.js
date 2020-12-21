import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import cx from 'classnames';
import Header from '../../Header';
import LastLessonProvider from '../../../providers/LastLessonProvider';
import config from '../../../../config';
import './Layout.scss';

const Layout = ({children, title, description, isFullBleed, slug}) => {
  const formattedTitle = title ? `${title} - ${config.title}` : config.title;
  const formattedUrl = slug ? `${config.url}${slug}` : config.url;
  return (
    <>
      <Helmet defer={false}>
        <html lang="en" />
        <title>{formattedTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={formattedTitle} />
        <meta property="og:url" content={formattedUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={config.twitter} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content={config.twitter} />
        <meta name="twitter:title" content={formattedTitle} />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:200,400"
          rel="stylesheet"
        />
        <link rel="canonical" href={formattedUrl} />
      </Helmet>
      <Header />
      <div
        className={cx('Layout', {
          'Layout--fullBleed': isFullBleed,
        })}
      >
        <LastLessonProvider>{children}</LastLessonProvider>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  isFullBleed: PropTypes.bool,
  slug: PropTypes.string,
  title: PropTypes.string,
};

Layout.defaultProps = {
  description: config.subtitle,
  isFullBleed: false,
  title: config.title,
};

export default Layout;
