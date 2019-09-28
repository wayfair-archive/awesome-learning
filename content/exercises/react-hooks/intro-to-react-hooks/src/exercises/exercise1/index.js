/* eslint-disable no-unused-expressions, import/first */
`
📚 Exercise 1 - Making a Stateless Component Stateful 📚
 
  Welcome to Exercise 1! In your browser, make 
  sure "Exercise 1" is bold in the browser 
  navigation before proceeding. 

  We are working with a form that does not 
  manage its own state; the inputs in the 
  form take input, but they don't currently
  send it anywhere. This exercise will make 
  this form stateful, and validate its fields!

  🛠️ Open 'part1.js' in this folder when you're 
  🛠️ ready to start!
`;

` ⛔ Exercise setup, ignore everything below this line`;
import React from 'react';
import Exercise1 from './part1';

const Lesson1 = () => (
  <section>
    <p>
      Check out{' '}
      <code className="inlineCode">
        exercises/exercise1/index.js
      </code>{' '}
      to start Exercise 1!
    </p>
    <Exercise1 />
  </section>
);

export default Lesson1;
