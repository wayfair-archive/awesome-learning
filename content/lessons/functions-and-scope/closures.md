---
title: Closures
template: lesson
draft: false
slug: /courses/Functions-and-Scope/closures
course: Functions-and-Scope
defaultTab: tests
tags:
  - Closure
description: "Closures are a powerful tool in _any_ language. In this session let's spend the
time on the hands-on exercises to build the closure muscle memory we will need
to tackle even the toughest of problems in JavaScript."
timeToCompletion: ~1 hour
videoLinks: 
  - https://www.youtube.com/embed/CQqwU2Ixu-U
preReadQuizLink: https://docs.google.com/forms/d/e/1FAIpQLSd15K7SqbtuKOMb8SXQKniNHzwdnFTVBkAWn6ie8ReezcmGqA/viewform
readingLinks: 
  - link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
    description: MDN has an excellent description of closure.
    title: "MDN: closure"
preReadQuiz:
  questions:
    - description: How would you define a scope?
      choices:
      - value: Information about a function and its variables.
      - value: Execution information about a function, and where it was called from.
      - value: The combination of a function and references to its surrounding environment.  
      - value: A function and objects it can return.
      correctChoices:
      - 2
      type: radio
    - description: Select all valid "scopes" which a closure has access to.
      choices:
      - value: Class scope
      - value: Outer function's scope
      - value: Global scope
      - value: Dynamic scope
      - value: Local scope (own scope)
      correctChoices:
      - 1
      - 2
      - 4
      type: checkbox
    - description: What will be the result of the below code snippet?
      codeSnippet: |
        function foo() {
          var a = 2;
          function bar() {
            console.log(a);
          }
          return bar;
        }
        var baz = foo();
        baz();
      choices:
      - value: It will throw a reference error
      - value: It will log "undefined"
      - value: it will log the function definition of `foo`
      - value: It will log '2'
      correctChoices:
      - 3
      explanation: When 'foo' is executed, the variable 'a' is declared with a value of 2. When the function 'baz' is executed, the function 'bar' (returned by 'foo') remembers that it has the variable 'a' in its scope, and returns its value of 2.
      type: radio
--- 
