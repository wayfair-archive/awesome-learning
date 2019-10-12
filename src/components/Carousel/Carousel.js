import React from "react";
import PropTypes from "prop-types";
import AliceCarousel from 'react-alice-carousel';
import TrackCard from './trackCard';
import { getIcon } from "../../utils";
import "react-alice-carousel/lib/scss/alice-carousel.scss";

const Carousel = ({ items }) =>
  (
    <AliceCarousel
      responsive={{
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        720: {
          items: 3
        },
        1024: { items: 4 },
      }}
      dotsDisabled
      autoPlayInterval={3000}
      autoPlayDirection="ltr"
      autoPlay={true}
      fadeOutAnimation={true}
      mouseDragEnabled={true}
      disableAutoPlayOnAction={true}
    >
      {
        items.map(({ title, icon, subTitle, path }) => (
          <TrackCard
            key={title}
            role="listitem"
            title={title}
            icon={getIcon(icon)}
            subTitle={subTitle}
            path={path}
          />
        ))
      }
    </AliceCarousel >
  );

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default Carousel;
