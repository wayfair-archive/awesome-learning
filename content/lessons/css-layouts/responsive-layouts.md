---
title: Responsive Layouts
template: lesson
slug: /courses/CSS-Layouts/responsive-layouts
course: CSS-Layouts
defaultTab: tests
tags:
description: In this lesson you will be introduced to Flexbox layout module and media queries. The video and reading links below will instruct you on the CSS principles behind the concepts. But for the exercises, you will not be writing out custom CSS classes or properties to apply those principles. Instead, to show how these concepts are more often used in modern web development, you'll be using React layout components that have the functionality built-in via props. 
timeToCompletion: ~1 hour

videoLinks: 
 - https://www.youtube.com/embed/fYq5PXgSsbE
 - https://www.youtube.com/embed/2KL-z9A56SQ
preReadQuiz:
  description: Take this quiz to test your understanding of Responsive Layouts!
  questions: 
    # Question 1
    - description: True or False - Flex items by default are stacked in a column
      choices:
      - value: 'True'
      - value: 'False'
      correctChoices: 
      - 1
      explanation: Row is the default property for flex-direction
      type: radio

    # Question 2
    - description: Which of these media queries would target screens larger than 900px?
      choices:
      - value: "@media screen and (min-width: 900px)"
      - value: "@media screen and (max-width: 899px)"
      - value: "@media print and (min-width: 900px)"
      - value: "@media all and (min-width: 900px)"
      correctChoices: 
      - 0
      - 3
      explanation: Option 2 would apply at less than 900px, not larger. Option 3 targets print, not screen.
      type: checkbox

    # Question 3
    - description: Which of the following values is not valid for setting the "justify-content" property?
      choices:
      - value: "flex-end"
      - value: "space-around"
      - value: "flex-between"
      - value: "center"
      correctChoices: 
      - 2
      explanation: Flex-between is not a valid value for any CSS property.
      type: radio

readingLinks: 
  - link: https://i.imgur.com/XjIQPOK.jpg
    description: A small infographic showing why responsive grid frameworks often use a 12-column system. It provides more flexibility than a base 8 or 10 grid, since it can be divisible by 1, 2, 3, 4, 6, and 12, allowing for 1/3, 1/2, and 1/4 width columns. 
    title: Understanding 12-Column Grids
  - link: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
    description: Mozilla article on media queries, covering the media types of screen, print, and speech and the media features you can specify. It also details how to combine multiple media queries.
    title: Using media queries
  - link: https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/
    description: Article on why, when designing responsive layouts, the best approach is to start from mobile and work your way up to larger sizes.
    title: A Hands-On Guide to Mobile-First Responsive Design

---
