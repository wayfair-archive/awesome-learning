import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon from "../Icon";
import TrackCard from './trackCard';
import { getIcon } from "../../utils";
import './Carousel.scss';

const Carousel = ({ items, count, cardWidth, cardHeight, spacing }) => {
  const itemCount = items.length;
  const [ offset, setOffset ] = useState(0);

  const navigateLeft = () => setOffset(offset - 1 < 0 ? 0 : offset - 1);
  const navigateRight = () => setOffset(offset + count === itemCount ? offset : offset + 1);
  const navigateToCard = cardIndex => setOffset(cardIndex + count >= itemCount ? itemCount - count : cardIndex);

  return (
    <div className="Carousel">
      <div
        tabIndex="0"
        className={`Carousel-navigator left ${offset === 0 ? 'disabled' : ''}`}
        onClick={navigateLeft}
        onMouseDown={e => e.preventDefault()}
        onKeyDown={e => e.key === 'Enter' && navigateLeft()}>
        <Icon icon={getIcon('leftChevron')} />
      </div>
      <div className="Carousel-listWrapper" style={{height: cardHeight, width: (cardWidth + spacing) * count }}>
        <div className="Carousel-list" style={{left: offset * -1 * (cardWidth + spacing)}}>
          {
            items.map(({title, icon, subTitle, path}, index) => (
              <TrackCard
                key={title}
                title={title}
                icon={getIcon(icon)}
                subTitle={subTitle}
                path={path}
                style={{marginLeft: spacing / 2, marginRight: spacing / 2, minWidth: cardWidth}}
                onFocus={() => navigateToCard(index)}
              />
            ))
          }
        </div>
      </div>
      <div
        tabIndex="0"
        className={`Carousel-navigator right ${offset === itemCount - count ? 'disabled' : ''}`}
        onClick={navigateRight}
        onMouseDown={e => e.preventDefault()}
        onKeyDown={e => e.key === 'Enter' && navigateRight()}>
        <Icon icon={getIcon('rightChevron')} />
      </div>
    </div>
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

Carousel.defaultProps = {
  count: 3,
  cardWidth: 325,
  cardHeight: 180,
  spacing: 10,
};

export default Carousel;
