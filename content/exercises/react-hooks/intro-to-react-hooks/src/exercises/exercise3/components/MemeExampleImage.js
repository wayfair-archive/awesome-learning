import React from 'react';
import PropTypes from 'prop-types';

const memegenUrl = 'https://memegen.link/';

const MemeExampleImage = (props) => {
  const { meme } = props;
  if (meme) {
    const imageUrlSplit = meme.example.split('/');
    // The indices at which
    // the important parts of the image URL
    // live in will always be the same (5, 6, 7)
    const templateName = imageUrlSplit[5];
    const textPart1 = imageUrlSplit[6];
    const textPart2 = imageUrlSplit[7];
    const baseImageUrl = `${memegenUrl}/${templateName}`;
    // Need to add .jpg at the end
    const exampleImageUrl = `${baseImageUrl}/${textPart1}/${textPart2}.jpg`;
    return (
      <img
        alt={`Example of ${meme.name}`}
        src={exampleImageUrl}
        width="50%"
      />
    );
  } else {
    return <div />;
  }
};

MemeExampleImage.propTypes = {
  meme: PropTypes.object.isRequired
};

export default MemeExampleImage;
