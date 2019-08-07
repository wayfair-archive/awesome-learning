---
title: Context and Arrows
template: lesson
draft: false
slug: /courses/Functions-and-Scope/context-and-arrows
course: Functions-and-Scope
tags:
  - A Tag
description: "
Our introduction to the world of JavaScript functions. We all use functions
every day, they are the backbone of our Applications. Find out about context,
`this` keyword and how can regular functions become _methods_ in JavaScript
classes. Once we understand these topics we will see how ES6 arrow functions
bend the rules."
timeToCompletion: ~1 hour
videoLinks: 
  - https://www.youtube.com/embed/PIkA60I0dKU
preReadQuizLink: https://docs.google.com/forms/d/e/1FAIpQLScunMrpaxWtE1xFEtCA4gIhphnOkadhOSOnPL0LEppsKjaMNg/viewform
readingLinks: 
  - link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
    description: The MDN docs on the reserved `this` keyword in JS
    title:  MDN `this` keyword

  - link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    description: Learn about the ES6 arrow function by our good friends over at MDN
    title:  MDN `arrow` functions

  - link: https://gist.github.com/zcaceres/2a4ac91f9f42ec0ef9cd0d18e4e71262
    description: Take a deep dive on what context is in JS
    title: Deep-dive into context
preReadQuiz:
  questions:
    - description: Which statement best describes what a "context" is in JavaScript?
      choices:
      - value: The environment in which values, variables and expressions are "visible" and can be referenced.
      - value: The value of "this" during function execution or the object to which the function belongs.
      - value: The environment in which values and expressions can be defined.
      correctChoices:
      - 1
      type: radio
    - description: How does an arrow function differ from a traditional function declaration? 
      choices:
      - value: Arrow functions create a closure of their enclosing lexical scope at the time they are created.
      - value: Arrow functions retain the execution context of the function where they were declared.
      - value: Arrow functions can be assigned to variables at runtime.
      correctChoices:
      - 1
      type: radio
---
