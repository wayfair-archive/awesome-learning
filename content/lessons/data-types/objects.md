---
title: Objects
template: lesson
draft: false
slug: /courses/Data-Types/objects
course: Data-Types
defaultTab: tests
tags:
  - Pass by Reference
  - Pass by caller
  - JS Fundamentals
description: "By the end of this session we will learn about the most useful data type in
JavaScript, the Object. You will understand how the phrase 'almost
everything in JavaScript is an object' and how to use this knowledge to your
advantage. We will closely examine POJOs (Plain Old JavaScript Objects) and
Functions in particular."
timeToCompletion: ~1 hour
videoLinks: 
  - https://www.youtube.com/embed/1YFss_4B_o4
preReadQuizLink: https://docs.google.com/forms/d/e/1FAIpQLSd47ESeuwYoYbc_R-i33ilaPwoEY7D5OMUUOVUwk1hiLvZ3mQ/viewform
readingLinks: 
  - link: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics"
    description: 'A great introduction to the very basics of Objects in JavaScript from MDN.'
    title: Objects Basics, MDN
  - link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects"
    description: 'Good stuff, pretty much covers all the basics of JavaScript objects and how
    to use them. More or less a "practical guide" from MDN, highly recommend
    bookmarking this as a reference.'
    title: Working with Objects, MDN
  - link: "https://medium.com/@wlodarczyk_j/object-freeze-vs-object-seal-ba6d7553a436"
    description: "We will be dealing with objects and their properties throughout the session.
    A quick read-through of preventing mutations in object."
    title: "Preventing Object Mutation"
preReadQuiz:
  questions: 
    - choices:
      - value: It's a compound value by default, composed of other primitives.
      - value: It's an immutable value by default, which cannot be modified.
      - value: It's a mutable value by default, which can be modified.
      correctChoices: 
      - 2
      description: Objects in JavaScript are "non-primitive" values. What does that mean?
      explanation: The term 'compound' value does not apply to JavaScript. Objects are not immutable by default, and can be modified.
      type: radio
    - choices:
      - value: erase object.foo;
      - value: omit object['foo'];
      - value: delete object.foo;
      - value: remove 'foo' from object;
      correctChoices: 
      - 2
      description: How can you delete a property from an object?
      explanation: The 'erase', 'omit', and 'remove' operators do not exist in JavaScript
      type: radio
    - choices:
      - value: new RegExp('ab+c')
      - value: '[1, 2, 3, 4, 5]'
      - value: Symbol('im an ES6 symbol')
      - value: '42'
      - value: '`Hello ${name}!`'
      - value: '{ x: 0, y: 0, z: -1 }'
      - value: function add(a, b) { return a + b; }
      correctChoices: 
      - 0
      - 1
      - 5
      - 6
      description: Select all valid Objects from the list of expressions below.
      explanation: The seven types are 'number', 'boolean', 'string', 'function', 'object', 'Symbol', and 'undefined'.
      type: checkbox
    - choices:
      - value: The reference points to the value's location in memory; the variable doesn't contain the value.
      - value: The reference is a copy of the original; the variable holds a copy of the value.
      - value: The reference is an abstract inlined cached representation of the original non-primitive.
      correctChoices: 
      - 0
      description: In JavaScript, a non-primitive value is one which can be mutated or modified. When a non-primitive value is assigned to a variable, it is said to be a "reference" to the value. What does a "reference" mean?
      explanation: The first choice is the best answer;
      type: radio   
---
