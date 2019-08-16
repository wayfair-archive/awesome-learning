---
title: Advanced Promises
template: lesson
draft: false
slug: /courses/Promises/advanced-promises
course: Promises
tags:
  - Async JS
  - Promises
  - Debugging
  - Error handling
description: "In this session we will take our new found knowledge of Promises beyond the
basics. You will implement complex async actions, and debug advanced promise errors similar to those
found in production application code."
timeToCompletion: ~1 hour
videoLinks: 
  - https://www.youtube.com/embed/g90irqWEqd8
preReadQuizLink: https://docs.google.com/forms/d/e/1FAIpQLSfq0mvCgI1RyVObn6KM0Zij8GdR8YjPuLit5D8xfWGJ1KalrA/viewform
readingLinks: 
  - link: "http://taoofcode.net/promise-anti-patterns/"
    description: "This one article can clear up many misconceptions about how to utilize patterns for common tasks. It's a quick read and it's packed with practical advice. I would bookmark this."
    title: "The Tao of Code  - Promise Anti-Patterns"
  - link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all"
    description: 'The MDN resource on the "all" API'
    title: "MDN: Promise.all"
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
