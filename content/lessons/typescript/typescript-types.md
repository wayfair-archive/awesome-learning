---
title: TypeScript Types
template: lesson
draft: false
slug: /courses/TypeScript/typescript-types
course: TypeScript
tags:
  - Pass by Reference
  - Pass by caller
  - JS Fundamentals
description: "The goal of this lesson is for you to understand why it’s important to pare down the amount of possible types a class can be represented by, and to exhaustively check all the types a variable can have so there are no holes for input into your code. Understanding how types can be constructed and leveraged in different situations will start to show how useful TypeScript can be. "
timeToCompletion: ~45 minutes
videoLinks: 
  - https://www.youtube.com/embed/ahCwqrYpIuM
  - https://youtube.com/embed/i43W0XSiuIE
  - https://youtube.com/embed/nePDL5lQSE4
readingLinks: 
  - link: "https://jcemer.com/types-in-javascript-what-you-should-care.html"
    description: 'Jean Emer, a software engineer, takes an agnostic approach as to why types might be helpful to JS (by going over Flow & Elm).'
    title: "Types in JavaScript: Why you should care"
  - link: "https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html"
    description: 'The TypeScript official documentation introduces TS to JS programmers by explaining how to define types in JS code using TS. These Types are compiled into JS for the browser to understand by the TypeScript compiler.'
    title: TypeScript for JavaScript Programmers
  - link: "https://www.typescriptlang.org/docs/handbook/generics.html"
    description: "Bonus question information on how generics are implemented in TS."
    title: "TypeScript Generics"
preReadQuiz:
  questions: 
    - choices:
      - value: "True"
      - value: "False"
      correctChoices: 
      - 0
      description: Existing JavaScript code is syntactically valid TypeScript code
      explanation: TypeScript is a super set of JavaScript, meaning all JavaScript is valid TypeScript. In this case, the types get inferred to be any. 
      type: radio
    - choices:
      - value: When you run the code in the browser
      - value: When you deploy the code to production
      - value: When you run the TypeScript compiler
      - value: When you run a unit test on that section of the code
      correctChoices: 
      - 2
      description: When does TypeScript validate & return errors based on the defined types in your code?
      explanation: It happens when you run the TypeScript compiler, allowing you to see any bugs before your code even hits the browser.
      type: radio
    - choices:
      - value: string
      - value: number
      - value: boolean
      - value: any
      correctChoices: 
      - 3
      description: What type would foo be defined as? ` let foo; foo = ‘bar’`
      explanation: foo would be defined as any as the default value, unless specifically limited to a string by the developer.
      type: radio
    - choices:
      - value: Make the type definition more strict
      - value: Extend a function to be more reusable by work with multiple types
      correctChoices: 
      - 1
      description: What do TypeScript Generics allow you to do with a function?
      explanation: Generics allow for TS functions to be more generic, where the developer can use the function to perform operations on the type of their choosing.
      type: radio   
---
