import React from 'react';
import MemeAliases from './../../components/MemeAliases';
import MemeExampleImage from './../../components/MemeExampleImage';

const MemeTemplateInformation = (props) => (
  <article>
    <h2>Selected Meme Information</h2>
    <p>
      <b>Meme Name:</b>{' '}
      {props.selectedMemeDetails.name}
    </p>
    <p>
      <b>Meme Aliases:</b>
    </p>
    <MemeAliases
      meme={props.selectedMemeDetails}
    />
    <p>
      <a
        href={
          props.selectedMemeDetails.description
        }
      >
        Meme Description
      </a>
    </p>
    <p>
      <b>Meme Example:</b>
    </p>
    <MemeExampleImage
      meme={props.selectedMemeDetails}
    />
  </article>
);

export default MemeTemplateInformation;
