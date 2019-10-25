---
title: Layout Basics
template: lesson
draft: false
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

        // JSX
        <section>
          <h2 className="title">Groceries</h2>
          <ul className="list">
            <li className="item">Milk</li>
            <li className="item">Eggs</li>
            <li className="item">Butter</li>
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
    # Question 4
    - description: True or False - Buttons are block level elements
      choices:
      - value: 'True'
      - value: 'False'
      correctChoices: 
      - 1
      explanation: Doop
      type: radio
readingLinks: 
  - link: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
    description: MDN is a great resource for learning more about order priority for elements.
    title: The MDN docs on CSS stacking context
---
