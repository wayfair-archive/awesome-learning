---
title: Content and Semantics
template: lesson
draft: false
slug: /courses/Accessibility/content-and-semantics
course: Accessibility
defaultTab: browser
tags:
  - React
description: |
  The first lesson of the Awesome Learning Accessibility course will teach students about how to make their code, and the contents of their pages, more accessibile and usable to assistive technology.
timeToCompletion: ~1.5 - 2 hours
videoLinks: 
  - https://www.youtube.com/embed/HE2R86EZPMA
  - https://www.youtube.com/embed/dEbl5jvLKGQ
readingLinks: 
  - link: https://a11yproject.com/posts/getting-started-aria/
    title: Monika Piotrowicz - Getting started with ARIA
    description: This helpful article from The A11y Project (A11y = Accessibility) dives into the meaning of ARIA roles, their importance in websites, and how you can start implementing them.
  - link: https://html.com/semantic-markup/
    title: Jon Penland - Semantic Markup
    description: HTML.com discusses Semantic Markup in the context of HTML. You've probably seen it quite a bit while engineering, but might not have known about the unseen but very important meaning that Semantic Markup has.
  - link: https://www.w3.org/WAI/tutorials/page-structure/content/
    title: W3 - Page Structure & Content
    description: W3.org discusses the meaning of page structure - not just what goes into a page, but how to organize the elements of a page in code and visually, so that everyone can fully use and explore a page. 
  - link: https://geon.github.io/programming/2016/03/03/dsxyliea
    title: Geon - Dyslexia
    description: This page emulates what it is like for someone with dyslexia to browse the web.
  - link: https://www.youtube.com/watch?v=fpbIsN31hLM&
    title: ChromeOS Screen Reader Setup Tutorial
    description: For exercise 2, it is recommended that you watch these screen reader tutorial videos in advance. Each screen reader is a little different based on the OS. This tutorial video is specifically for ChromeOS.
  - link: https://www.youtube.com/watch?v=5R-6WvAihms
    title: macOS Screen Reader Setup Tutorial
    description: For exercise 2, it is recommended that you watch these screen reader tutorial videos in advance. Each screen reader is a little different based on the OS. This tutorial video is specifically for macOS.
  - link: https://www.youtube.com/watch?v=EiQ8NwdsZCY
    title: Windows Screen Reader Setup Tutorial
    description: For exercise 2, it is recommended that you watch these screen reader tutorial videos in advance. Each screen reader is a little different based on the OS. This tutorial video is specifically for Windows. 
preReadQuiz:
  description: Take this quiz to test your understanding of Accessibility - Content and Semantics!
  questions: 
    - description: What is a landmark ARIA role?
      choices:
      - value: It's a role at the top of the page that describes, to assistive technology, what the page is about
      - value: It's a role that provides meaning and context to sections of a page
      - value: It is used on decorative, non-interactive media (images or videos) to describe their meaning to assitive technology
      - value: An object describing the output of the function passed to useCallback
      correctChoices:
      - 1
      explanation: Landmark roles allow assistive technology to understand the differences between sections of a page, and navigate between them. Examples of landmark roles include a header, primary content section, sidebar, and footer.
      type: radio
    - description: True or False - Engineers should use semantic HTML elements over a 'div' HTML element, when possible.
      choices:
      - value: 'True'
      - value: 'False'
      correctChoices: 
      - 0
      explanation: Semantic elements have built-in functionality, including ARIA roles, that inherently make websites more accessible. 'div' elements are generic elements with no ARIA roles, outside of ones you manually provide it.
      type: radio
---
