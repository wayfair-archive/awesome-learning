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
    - description: True or false? Promise.all is rejected if any of the elements are rejected.
      choices:
      - value: 'true'
      - value: 'false'
      correctChoices: 
      - 0
      explanation: If any promise provided to Promise.all rejects, the promise it returns will also be rejected.
      type: radio
    - description: What gets logged to the console in the Promise.race function?
      codeSnippet: |
        var p1 = new Promise(function (resolve, reject) {
          setTimeout(resolve, 500, 'one');
        }); 
        var p2 = new Promise(function (resolve, reject) {
          setTimeout(resolve, 100, 'two');
        }); 
        Promise.race([p1, p2]).then(function (value) {
          console.log(value);
        });
      choices:
      - value: 'one'
      - value: 'two'
      correctChoices: 
      - 1
      explanation: As 'p2' resolves first with a value of 'two', that is what Promise.race will resolve with.
      type: radio
---
