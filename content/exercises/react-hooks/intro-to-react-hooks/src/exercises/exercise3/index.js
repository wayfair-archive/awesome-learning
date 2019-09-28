/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 3 - Meme Generator and Gallery 📚

🚨 This exercise is very open-ended, and will take
🚨 more time to complete than the other two exercises.
🚨 It involves the architecture of components, beyond
🚨 just writing them.
 
  Welcome to Exercise 3! In this exercise,
  you will have great flexibility to develop a Meme Explorer
  that allows a visitor to browse the templates of 
  popular memes.

  We provide two functions you can use to access an API
  of meme templates and information:
   getMemeTemplates(): Returns a promise that resolves with
    all meme template information
    Example output:
    { 
      "First Try": "https://memegen.link/api/templates/firsttry",
      "Matrix Morpheus": "https://memegen.link/api/templates/morpheus",
    }

   getMemeInformation(link): Takes the API endpoint of a
    meme (returned from getMemeTemplates), returns
    information on that individual meme.
    Example output:
    {
      "name": "Matrix Morpheus",
      "description": "http://knowyourmeme.com/memes/matrix-morpheus",
      "aliases": ["matrix-morpheus",],
      "styles": [],
      "example": "https://memegen.link/api/templates/morpheus/your_text/goes_here"
    }

  We also provide several helper components:

   MemeAliases: Takes "meme" as a prop, lists all aliases
    this meme is also known by

   MemeExampleImage: Takes "meme" as a prop, shows an
    image that is an example of this meme

   MemeTemplatesDropdown: Takes "memes" and "onChange" as
    props, shows a dropdown with all memes in the dropdown.
    "onChange" is called with the new dropdown value if it
    is changed. "memes" expects an object that was returned
    from "getMemeTemplates".

  🛠️ Create a Meme Explorer that allows users to browse meme
  🛠️ templates, choose one from a dropdown, then see more info.
  🛠️ The user should see the name of the template,
  🛠️ aliases of it, an example image, and a link to its description.

  💡 We have provided some components to easily use the
  💡 output of the API with minimal data processing.
  💡 Take a look at those components to see how they work.
`;

import React, {
  useEffect,
  useState
} from 'react';

import {
  getMemeTemplates,
  getMemeInformation
} from './utilities';

import MemeAliases from './components/MemeAliases';
import MemeExampleImage from './components/MemeExampleImage';
import MemeTemplatesDropdown from './components/MemeTemplatesDropdown';

const MemeExplorer = () => {
  return (
    <section>
      Check out{' '}
      <code className="inlineCode">
        exercises/exercise3/index.js
      </code>{' '}
      to start Exercise 3!
    </section>
  );
};

export default MemeExplorer;
