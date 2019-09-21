---
title: Types and Equality in JavaScript
template: lesson
draft: false
slug: /courses/Data-Types/types-and-equality
course: Data-Types
defaultTab: tests
tags:
  - Types
  - Coercion
  - Equality
  - Comparisons
  - Debugging
  - Refactoring
description: "By the end of this session you will learn about all of the available 'Types' in
the language and the differences between == (loose equality) and === (strict equality) operators. 
We will also learn the important differences between
_Primitive_ and _Object_ types and how type coercion works."
timeToCompletion: 1-3 hours
videoLinks: 
  - https://www.youtube.com/embed/808eYu9B9Yw
  - https://www.youtube.com/embed/kVOmc7NK1M0
preReadQuizLink: https://docs.google.com/forms/d/e/1FAIpQLSc2kysfdkDnQzzn-wipQ79-HTt65TSLlroq6s83AyF3hlWbUg/viewform
readingLinks: 
  - link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types"
    description: 'The _dry_ but to the point MDN documentation is always our go-to reading
    material! See the links below if you prefer a something with more "flair".'
    title: JavaScript Data Types MDN
  - link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"
    description: 'Excellent set of material on Equality from MDN, as always. The "Loose
    Equality" and "Strict Equality" sections are important for our session, the
    rest is useful but not necessary. Some interesting links to the JavaScript
    specification if you are up for a more academic explanation!'
    title: Equality comparisons and sameness, MDN
  - link: "http://2ality.com/2011/03/javascript-values-not-everything-is.html"
    description: 'Dr. Alex always has good in-depth content for JavaScript, this blog post on
    types is no different, it is quick and to the point. Some of the later parts
    of this blog will be helpful in the following sessions as well. Checkout the
    "Related Content" section if you would like to explore further.'
    title: 'JavaScript values: not everything is an object - Dr. Alex, R. Phd'
  - link: "https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md"
    description: "An entire chapter on Types from 'You Don't Know JavaScript' (a book worth
    reading). You can skim through it, but it might be worth reading through it
    once in a while. This is also a great reference."
    title: "Chapter 1: Types, Types & Grammar - YDKJ"
  - link: "https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch4.md#implicit-coercion"
    description: One section from an excellent chapter in You Don't Know JS. This section describes the mechanisms behind implicit coercion. 
    title: Implicit coercion by YDKJS
preReadQuiz:
  description: Take this quiz to test your understanding of JavaScript Types and Equality!
  questions: 
    - description: What operator should you use to find the type of a value in JavaScript?
      choices:
      - value: typeof
      - value: gettype
      - value: is
      - value: instanceof
      correctChoices: 
      - 0
      explanation: The 'typeof' operator is used to determine the type of a variable. 'gettype' and 'is' are not valid operators, and 'instanceof' tests whether a provided object has the same prototype constructor as a provided argument. 
      type: radio
    - description: As of ES2015, how many built-in types are defined by JavaScript?
      choices:
      - value: '7'
      - value: '4'
      - value: '6'
      - value: '5'
      - value: '3'
      correctChoices: 
      - 0
      explanation: As of ES2015, the seven types are 'number', 'boolean', 'string', 'null', 'object', 'undefined', and 'Symbol'.
      type: radio
    - description: True or false? In JavaScript, _variables_ do not have types, only _values_ have types.
      choices:
      - value: 'True'
      - value: 'False'
      correctChoices: 
      - 0
      explanation: In JavaScript, values have types, but variables (which refer to values) do not.
      type: radio   
---
