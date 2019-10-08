import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './ContentSection.scss';

const ContentSection = ({
  className,
  children,
  title,
  subTitle,
  isLight,
  contentAlignment,
  titleAlignment
}) => {
  const headerClasses = cx('ContentSection-title', {
    'ContentSection-title--alignCenter': titleAlignment === 'center',
    'ContentSection-title--alignLeft': titleAlignment === 'left',
    'ContentSection-title--textLight': isLight
  });
  const contentClasses = cx(`ContentSection-content ${className}`, {
    'ContentSection-content--alignCenter': contentAlignment === 'center',
    'ContentSection-content--alignLeft': contentAlignment === 'left'
  });

  return (
    <div className="ContentSection">
      {title && (
        <header className={headerClasses}>
          <h1>{title}</h1>
          {subTitle && <h2>{subTitle}</h2>}
        </header>
      )}
      <div className={contentClasses}>{children}</div>
    </div>
  );
};

ContentSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLight: PropTypes.bool,
  contentAlignment: PropTypes.oneOf(['left', 'center']),
  textAlignment: PropTypes.oneOf(['left', 'center'])
};

ContentSection.defaultProps = {
  className: '',
  title: null,
  subTitle: null,
  contentAlignment: 'left',
  textAlignment: 'left',
  isLight: false
};

export default ContentSection;
