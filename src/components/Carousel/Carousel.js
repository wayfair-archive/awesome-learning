import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import TrackCard from './trackCard';
import { getIcon } from "../../utils";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/scss/alice-carousel.scss";

const Carousel = ({ items }) => {

  return (
    <AliceCarousel responsive={{
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
        items.map(({ title, icon, subTitle, path }, index) => (
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
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  count: PropTypes.number,
  cardWidth: PropTypes.number.isRequired,
  cardHeight: PropTypes.number,
  spacing: PropTypes.number,
};

export default Carousel;
