---
title: Multimedia
template: lesson
draft: false
slug: /courses/Accessibility/multimedia
course: Accessibility
defaultTab: browser
tags:
  - React
description: |
  Our second lesson on Accessibility focuses on multimedia - images, GIFs, videos, icons, and more! Learn more about how to meaningfully present visual media and content to all citizens of the Internet.
timeToCompletion: ~1.5 - 2 hours
videoLinks: 
  - https://www.youtube.com/embed/Ka1qNLalRxM
  - https://www.youtube.com/embed/0hqhAIjE_8I
  - https://www.youtube.com/embed/DcWsUyhBykE
readingLinks: 

  - link: https://www.ashleysheridan.co.uk/blog/Emoji+and+Accessibility
    title: Ashley Sheridan - Emoji and Accessibility
    description: How do people with screen readers view emoji? Ashley Sheridan discusses how to make text and native emoji more accessible in HTML!
  - link: https://developer.mozilla.org/en-US/docs/Web/Guide/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video
    title: Adding captions and subtitles to HTML5 video
    description: Mozilla Developer Network has a great article on how to add multilanguage captions to videos!
  - link: https://www.youtube.com/watch?v=Hfn18nDkyi4
    title: Accessibility is too hard - Developer Edition (A11yTalks - December 2019)
    description: An hour-long panel discussion that dives into the subject of accessibility difficulties. "It's too hard!" you may hear people say. If you've got the time, this video goes into a lot of detail and perspectives on accessibility as part of an engineering and agile environment.
  
preReadQuiz:
  description: Take this quiz to test your understanding of Accessibility - Multimedia!
  questions: 
    - description: What HTML attributes can you use to provide accessible labels for images?
      choices:
      - value: caption
      - value: alt
      - value: aria-label
      - value: text
      correctChoices:
      - 1
      - 2
      explanation: alt and aria-label indicate what an image should be read as when screen readers view it. Captions are the name of an HTML element used for videos, and the Text element is used only in SVGs.
      type: checkbox
    - description: True or False - An image that has accompanying text next to it should be given a meaningfully descriptive alt tag.
      choices:
      - value: 'True'
      - value: 'False'
      correctChoices: 
      - 1
      explanation: If an image has text right after it, that image does NOT need an alt tag. If the text describes the image, or is in some way related to it, the image should be marked as decorative by passing in alt=''. Passing in any text content to the alt attribute will have that text be read out, in addition to the text next to the image.
      type: radio
---
