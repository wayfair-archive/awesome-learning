---
title: Layout Basics
template: lesson
slug: /courses/Layouts/layout-basics
course: Layouts
defaultTab: tests
tags:
  - Refactoring
description: In this lesson you will be introduced to concepts such as the box model, positioning, and floats.
timeToCompletion: ~1 hour
videoLinks: 
 - https://www.youtube.com/embed/rIO5326FgPE
 - https://www.youtube.com/embed/jx5jmI0UlXU
 - https://www.youtube.com/embed/VwxGKpvW8Zk
preReadQuiz:
  description: Take this quiz to test your understanding of CSS layouts!
  questions: 
    # Question 1
    - description: Which of these is not affected by the box-sizing property? 
      choices:
      - value: margin
      - value: padding
      - value: width
      - value: border
      correctChoices: 
      - 0
      explanation: Margin is the space around or between elements. Regardless of how the elements width or height is calculated, the margin remains the same. 
      type: radio
    # Question 2
    - description: When this box is rendered, what width will it be? 
      codeSnippet: |
        .box {
          width: 200px;
          height: 100px;
          padding: 5px;
          border: 1px solid limegreen;
          background-color: hotpink;
        }
      choices:
      - value: 202px;
      - value: 200px
      - value: 210px
      - value: 212px
      - value: Depends on the content
      correctChoices: 
      - 3
      explanation: Since the box-sizing was not specified, we can assume it's "content-box" and therefore the padding, border, and width are added together when computing the final size.
      type: radio
      # Question 3
    - description: True or False - static positioned elements are removed from the normal flow of the page
      choices:
      - value: 'True'
      - value: 'False'
      correctChoices: 
      - 2
      explanation: Static positioned elements are always positioned according to the flow of the page. Absolute, fixed, and sticky positioned elements are removed from the normal flow. 
      type: radio
    # Question 4
    - description: In the example below, what would be the total margin (gap) in between the header and the first item in the list? 
      codeSnippet: |
        .title {
          font-size: 20px;
          margin: 10px 0 20px;
        }
        .list {
          background: grey;
          padding-left: 20px;
        }
        .item {
          margin: 10px 0;
          list-style-type: square;
        }

        // HTML
        <section>
          <h2 class="title">Groceries</h2>
          <ul class="list">
            <li class="item">Milk</li>
            <li class="item">Eggs</li>
            <li class="item">Butter</li>
          </ul>
        </section>

      choices:
      - value: 10px
      - value: 20px
      - value: 30px
      correctChoices: 
      - 1
      explanation: Margins collapse when they're applied to the first or last child. This rule does not apply if there is a non-zero top padding or border value on that parent. 
      type: radio
    # Question 5
    - description: True or False - Buttons are block level elements
      choices:
      - value: 'True'
      - value: 'False'
      correctChoices: 
      - 1
      explanation: Buttons are inline-level elements, like spans
      type: radio
readingLinks: 
  - link: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow
    description: The MDN docs on how inline and block level elemnents behave
    title: Block and inline layout in normal flow
  - link: https://developer.mozilla.org/en-US/docs/Web/CSS/background
    description: MDN is a great resource for learning more about visual display properties like color and background-color
    title: CSS background properties
---
