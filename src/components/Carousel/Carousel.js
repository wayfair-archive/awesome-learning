import React from 'react';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import TrackCard from './trackCard';
import {getIcon} from '../../utils';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';

const Carousel = ({items}) => (
  <AliceCarousel
    responsive={{
      0: {
        items: 1,
      },
      630: {
        items: 2,
      },
      900: {
        items: 3,
      },
    }}
    autoPlayInterval={3000}
    autoPlayDirection="ltr"
    autoPlay
    fadeOutAnimation
    mouseDragEnabled
    disableButtonsControls
    infinite
  >
    {items.map(({title, icon, path}) => (
      <TrackCard
        key={title}
        role="listitem"
        title={title}
        icon={getIcon(icon)}
        path={path}
      />
    ))}
  </AliceCarousel>
);

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;
