---
title: Intro to React Hooks
template: lesson
draft: false
slug: /courses/React-Hooks/intro-to-react-hooks
course: React-Hooks
defaultTab: browser
tags:
  - React
description: |
  The first question you see after browing through your news and hearing conversations from your fellow engineers...What are Hooks? What can you do with Hooks? How do they compare to writing React with classes?
  
  React Hooks were introduced in React 16.8 to "hook" into common React patterns, functionality, and architecture, without actually needing to write them with React Components. They "hook" into the React APIs that you already know, and expose them to engineers directly.

  Hooks enable engineers to share stateful logic between components, reduce the complexity and amount of code written to make components work, and reduce dependencies on confusing paradigms within JavaScript (such as 'this' and classes.)

  This lesson will introduce several hooks that will enhance your React engineering experience, and get you rolling with how to write your own!
timeToCompletion: ~1.5 - 2 hours
videoLinks: 
  - https://www.youtube.com/embed/eX_L39UvZes
  - https://www.youtube.com/embed/K4xfCIRuf54
readingLinks: 
  - link: https://reactjs.org/docs/hooks-intro.html
    title: Reactjs.org - Introducing Hooks
    description: An introduction to React Hooks, written by the engineers behind the features. Why did they introduce hooks? What problems do they solve? Read exactly what the engineers behind React have to say!
  - link: https://sebhastian.com/react-hooks-introduction
    title: Nathan Sebhastian - React Hooks are live. Here is your introduction.
    description: A code-focused and interactive introduction to Hooks. This introduces our first hook, useState, which allows us to maintain the state of a variable(s) within a component, similar to how "setState" in a Class Component works.
  - link: https://overreacted.io/a-complete-guide-to-useeffect
    title: Dan Abramov - A complete guide to useEffect
    description: Dan Abramov does a deep dive into useEffect, focusing on the newest principles, gotchas, and big ideas from hooks and from useEffect.
  - link: https://reactjs.org/docs/hooks-rules.html#explanation
    title: Rules of Hooks - Reactjs.org
    description: A list of practices and patterns that you should keep in mind as you begin to write code using React Hooks.
preReadQuiz:
  description: Take this quiz to test your understanding of React Hooks!
  questions: 
    - description: Which of the following scenarios describe a correct usage of the useState Hook? Check all that apply.
      choices:
      - value: Calling useState from within a Class Component
      - value: Calling useState from within a Function Component
      - value: Calling useState from within an if/else statement
      - value: Calling useContext from within useState
      - value: Calling useState from within a forEach statement on an array whose length can change
      correctChoices: 
      - 1
      - 3
      explanation: One of the core rules of React Hooks is that they should be called the same number of times between renders of a component. If a hook needs to not apply its logic if some condition is true or false, that logic should live within the hook itself (and not above it.) Class Components are not compatible with Hooks, and will cause a runtime error.
      type: checkbox
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
    - description: True or False - You can update state (with a function returned from useState) within a useEffect hook.
      choices:
      - value: 'True'
      - value: 'False'
      correctChoices: 
      - 1
      explanation: You can do this, but remember to specify values in the second argument to useEffect. The hook will then only run when any value in the second argument changes. If you don't, you will enter into an infinite loop (as changing the state triggers a re-render, which calls the useEffect hook.)
      type: radio
    - description: When you return a function from within a useEffect call, when does this function get executed?
      choices:
      - value: When the component mounts
      - value: When the component's children are mounted
      - value: When the component unmounts
      - value: When the component throws an error
      - value: When the component re-renders
      correctChoices: 
      - 2
      - 4
      explanation: The function returned by useEffect is executed when the component unmounts, and when it is re-rendered.
      type: checkbox
---
