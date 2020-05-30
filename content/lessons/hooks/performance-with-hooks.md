---
title: Performance with Hooks
template: lesson
draft: false
slug: /courses/React-Hooks/performance-with-hooks
course: React-Hooks
defaultTab: browser
tags:
  - React
description: |
  Hooks have a lot of powerful functionality to improve the performance of React applications and components. They can save a lot of headaches in rendering behavior, and come in handy to make code more understandable. In this lesson, we'll focus on how to use React Hooks to identify performance opportunities for your React code.
timeToCompletion: ~1.5 - 2 hours
videoLinks: 
  - https://www.youtube.com/embed/FRAL4bP4V3o
  - https://www.youtube.com/embed/ScT4ElKd6eo
readingLinks: 
  - link: https://kentcdodds.com/blog/usememo-and-usecallback
    title: Kent C. Dodds - When to useMemo and useCallback
    description: Kent C. Dodds kicks us off with an insightful read on useMemo and useCallback, and the drawbacks of over-optimizing. Yes, there is such a thing, and yes, you should read what he has to say about it!
  - link: https://alligator.io/react/usememo/
    title: Alligator.io - A Look at the React useMemo Hook
    description: Dive into some code with our first performance hook, useMemo. Where might you want to use it? When do you want to avoid it?
  - link: https://blog.logrocket.com/a-guide-to-react-refs/
    title: LogRocket - A guide to React refs- useRef and createRef
    description: The engineers at LogRocket take us through React refs and useRef, and how they can come in handy when working with DOM elements in a React application.
preReadQuiz:
  description: Take this quiz to test your understanding of React Hooks for Performance!
  questions: 
    - description: What is the expected output of useCallback?
      choices:
      - value: A boolean
      - value: The output of the function passed to useCallback
      - value: A memoized version of the function passed to useCallback
      - value: An object describing the output of the function passed to useCallback
      correctChoices: 
      - 2
      explanation: useCallback returns a memoized version of the function that it is passed. The function would only be regenerated if any value of its dependency array changes.
      type: radio
    - description: What, if anything, is incorrect about the following implementation of useMemo? Select all that apply.
      codeSnippet: |
        import React, {useMemo} from 'react';

        const MyComponent = ({firstName}) => {
          useMemo(() => {
            // arrayOfNames is an array of strings containing first names 
            return arrayOfNames
              .filter(element => element !== firstName)
              .map(element => element.toUpperCase())
          }, [arrayOfNames]);
        };
      choices:
      - value: The output of useMemo is not set to anything
      - value: You cannot return anything from within useMemo
      - value: The second argument to useMemo should be an object
      - value: The second argument to useMemo is missing a variable
      - value: Nothing is wrong with this snippet
      correctChoices: 
      - 0
      - 3
      explanation: |
        useMemo returns the output of the function that it is provided, so the first choice is correct. As a result, the second choice must not be correct, as there must be a return from within the function for useMemo to output something. The second argument to useMemo is always an array, so the third choice is correct. Lastly, it is missing "firstName" as a member of the dependency array.
      type: checkbox
    - description: True or False - useRef can only store references to HTML elements.
      choices:
      - value: 'True'
      - value: 'False'
      correctChoices: 
      - 1
      explanation: When setting the value of a variable output from useRef, you can set its "current" property to _any_ value, not just an HTML element.
      type: radio
---
