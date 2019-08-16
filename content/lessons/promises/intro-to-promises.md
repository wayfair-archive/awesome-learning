---
title: Intro to Promises
template: lesson
draft: false
slug: /courses/Promises/intro-to-promises
course: Promises
tags:
  - Async JS
  - Promises
  - Error handling
description: "In this session you will move beyond callbacks to using Promises. By the end of
this session you will have a solid grasp on the basics of Promises. What they
represent and how they are to be used."
timeToCompletion: ~1 hour
videoLinks: 
  - https://www.youtube.com/embed/swdWUWtGxR4?rel=0&amp;showinfo=0
preReadQuizLink: https://docs.google.com/forms/d/e/1FAIpQLSd47ESeuwYoYbc_R-i33ilaPwoEY7D5OMUUOVUwk1hiLvZ3mQ/viewform
readingLinks: 
  - link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"
    description: 'A great introduction to the very basics of Promises in JavaScript from MDN.'
    title: "MDN: Promises"
  - link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"
    description: 'Good stuff, pretty much covers all the basics of JavaScript Promises and how
    to use them. More or less a "practical guide" from MDN, highly recommend
    bookmarking this as a reference.'
    title: "MDN: Using Promises"
  - link: "https://ponyfoo.com/articles/es6-promises-in-depth"
    description: "This is deep dive of the Promise API"
    title: " PonyFoo: Promises in Depth"
preReadQuiz:
  description: Take this quiz to test your understanding of JavaScript Promises (Advanced)!
  questions: 
    - description: What are the possible states of a promise?
      choices:
      - value: resolved
      - value: error
      - value: finally
      - value: done
      - value: pending
      - value: rejected
      - value: waiting
      correctChoices: 
      - 0
      - 4
      - 5
      explanation: If 'somethingComplicated()' throws an error, there is no 'catch' statement on its containing promise that will 'catch' the error.
      type: checkbox
    - description: Once a promise is settled, its results can change.
      choices:
      - value: 'true'
      - value: 'false'
      correctChoices: 
      - 1
      explanation: If any promise provided to Promise.all rejects, the promise it returns will also be rejected.
      type: radio
    - description: What does '.then()' return?
      choices:
      - value: A function
      - value: A boolean
      - value: A new promise
      correctChoices: 
      - 2
      explanation: As 'p2' resolves first with a value of 'two', that is what Promise.race will resolve with.
      type: radio
    - description: In the below code example, which variable represents a valid declaration of a Promise?
      codeSnippet: |
        const promise1 = Promise(function () => {});
        const promise2 = new Promise(() => {});
        const promise3 = new Promise();
      choices:
      - value: promise1
      - value: promise2
      - value: promise3
      correctChoices: 
      - 1
      explanation: As 'p2' resolves first with a value of 'two', that is what Promise.race will resolve with.
      type: radio
---
