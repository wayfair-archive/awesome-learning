import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'gatsby';
import cx from 'classnames';
import {useLastLessonContext} from '../../providers/LastLessonProvider';
import './Link.scss';

const LINK_VARIATIONS = [
  'primary',
  'secondary',
  'tertiary',
  'tertiaryAlt',
  'tertiaryAltInverse',
  'pill'
];

const StyledLink = ({
  children,
  variation,
  path,
  isBlock,
  isButton,
  isActive,
  isExternal,
  lessonData
}) => {
  const className = cx('Link', {
    'is-button': isButton,
    'is-block': isBlock,
    [`Link--${variation}`]: variation && !isButton
  });
  const {setLastLessonVisited} = useLastLessonContext();

  const clickHandler = () => setLastLessonVisited(lessonData);

  return isExternal ? (
    <a
      className={className}
      href={path}
      target="_blank"
      onClick={lessonData && clickHandler}
    >
      {children}
    </a>
  ) : (
    <Link
      className={className}
      to={path}
      activeClassName={isActive ? 'is-active' : ''}
      onClick={lessonData && clickHandler}
    >
      {children}
    </Link>
  );
};

StyledLink.propTypes = {
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
