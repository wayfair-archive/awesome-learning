---
title: Intro to React Hooks
template: lesson
draft: false
slug: /courses/React-Hooks/intro-to-react-hooks
course: React-Hooks
tags:
  - React
description: |
  The first question you see after browing through your news and hearing conversations from your fellow engineers...What are Hooks? What can you do with Hooks? How do they compare to writing React with classes?
  
  React Hooks were introduced in React 16.8 to "hook" into common React patterns, functionality, and architecture, without actually needing to write them with React Components. They "hook" into the React APIs that you already know, and expose them to engineers directly.

  Hooks enable engineers to share stateful logic between components, reduce the complexity and amount of code written to make components work, and reduce dependencies on confusing paradigms within JavaScript (such as 'this' and classes.)

  This lesson will introduce several hooks that will enhance your React engineering experience, and get you rolling with how to write your own!
timeToCompletion: ~1 hour
videoLinks: 
  - https://www.youtube.com/embed/eX_L39UvZes
  - https://www.youtube.com/embed/N1msPjQX36I
readingLinks: 
  - link: https://reactjs.org/docs/hooks-intro.html
    title: Reactjs.org - Introducing Hooks
    description: An introduction to React Hooks, written by the engineers behind the features. Why did they introduce hooks? What problems do they solve? Read exactly what the engineers behind React have to say!
  - link: https://reactjs.org/docs/hooks-faq.html
    title: Hooks FAQ - Reactjs.org
    description: An FAQ from the official React website. A detailed read that covers everything from adoption strategy to performance.
  - link: https://sebhastian.com/react-hooks-introduction
    title: Nathan Sebhastian - React Hooks are live. Here is your introduction.
    description: A code-focused and interactive introduction to Hooks. This introduces our first hook, useState, which allows us to maintain the state of a variable(s) within a component, similar to how "setState" in a Class Component works.
preReadQuiz:
  description: Take this quiz to test your understanding of React Hooks!
  questions: 
    - description: What, if anything, is wrong with the below code snippet?
      codeSnippet: |
        function anAsyncCall() {
          var promise = doSomethingAsync();
          promise.then(function() {
            somethingComplicated();
          });
          return promise;
        }
      choices:
      - value: It will throw a syntax error
      - value: Any error raised in the somethingComplicated() method will not get caught.
      - value: Nothing, it's perfectly fine
      correctChoices: 
      - 2
      explanation: If 'somethingComplicated()' throws an error, there is no 'catch' statement on its containing promise that will 'catch' the error.
      type: radio
    - description: Which of the following snippets of code represent a valid implementation of useState that allows the button to function?
      codeSnippet: |
        import React, {useState} from 'react';

        // ⬇️⬇️⬇️ Snippets begin ⬇️⬇️⬇️
        // 1.
        const count, setCount = useState();

        // 2. 
        const [count, setCount] = useState();

        // 3. 
        const setCount = useState(0);

        // 4.
        const [count, setCount] = useState(0);

        // 5.
        import {count, setCount} from useState();
        // ⬆️⬆️⬆️ Snippets end ⬆️⬆️⬆️

        // 💡 Choose the correct code snippet that allows 
        // 💡 the below React to work correctly!

        function handleButtonClick() {
          const newCount = count + 1;
          setCount(newCount);
        }
        return (
          <section>
            <h1>The count is {count}</h1>
            <button onClick={handleButtonClick}>
              Click me!
            </button>
          </section>
        );
      choices:
      - value: 'Snippet 1'
      - value: 'Snippet 2'
      - value: 'Snippet 3'
      - value: 'Snippet 4'
      - value: 'Snippet 5'
      correctChoices: 
      - 3
      explanation: |
        Snippet 1 will result in a JavaScript syntax error. Snippet 2, while not incorrect, does not provide an initial value to 'useState', which will produce an initial value of 'count' as 'undefined'. When trying to increment the value in 'handleButtonClick', incrementing 'count' by one will return 'NaN'. Snippet 3 is missing an array destructuring statement, and Snippet 5 attempts to import the functionality of useState as if it could be imported, when instead it must be array-destructured. 
      type: radio
    - description: True or False - React Hooks give you permission to refactor all of your Class Components to be Hooked Components.
      choices:
      - value: 'True'
      - value: 'False'
      correctChoices: 
      - 1
      explanation: React Hooks are best implemented in new code, or to move away from unsafe/unstable patterns. Class Components are still 100% valid, and the time invested in refactoring old code is better spent in writing new code with Hooks.
      type: radio
---
