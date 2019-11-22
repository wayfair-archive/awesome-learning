---
title: Component Testing with React Testing Library
template: lesson
draft: false
slug: /courses/Testing/component-testing-rtl
course: Testing
defaultTab: tests
tags:
  - Jest
  - React Testing Library
description: "This lesson covers testing React components, using Jest and React Testing
Library to run tests, and how to make assertions on mounted React elements. We'll go into
the difference between React Components and Elements, understand the purpose of the React
Testing Library, and mount React elements in order to make assertions about them."
timeToCompletion: ~1 - 2.5 hours
videoLinks:
  - https://www.youtube.com/embed/BUXJIg2Wve4?start=339
preReadQuizLink: TODO
readingLinks:
  - link: https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
    description: This great blog post by Dan Abramov covers the difference between React components, elements, and component instances.
    title: Components, elements, and instances
  - link: https://testing-library.com/docs/react-testing-library/intro
    description: We will be using the React Testing Library docs throughout the session, so it would be helpful to get familiar with this resource.
    title: React Testing Library Docs
  - link: https://testing-library.com/docs/react-testing-library/cheatsheet
    description: React Testing Library also provides a cheatsheet for quick reference to queries and events. This will come in handy during the lesson!
    title: React Testing Library Cheatsheet
  - link: https://kentcdodds.com/blog/introducing-the-react-testing-library
    description: The blog post introducing React Testing Library to the world.
    title: Introducing React Testing Library
preReadQuiz:
  description: Take this quiz to test your understanding of React Testing Library!
  questions:
    - description: Which of these should be used for testing asynchronous behavior?
      choices:
      - value: getByText()
      - value: queryAllByRole()
      - value: findByDisplayValue()
      - value: queryByLabelText()
      - value: findAllByAltText()
      correctChoices:
      - 2
      - 4
      explanation: When testing async behavior, always use the findBy* queries, which return a promise that resolves to the value of the element or elements you're querying for.
      type: checkbox
    - description: "True or false: If you want to inspect an element in the console, console.log is the best method."
      choices:
      - value: 'true'
      - value: 'false'
      correctChoices:
      - 1
      explanation: React Testing Library provides a debug() method in the object returned by render(), which will print the mounted component's DOM to the console. You can pass individual nodes to debug() to print them individually, e.g. debug(getByText('Submit'))
      type: radio
    - description: "Which of the following queries will return the button element in this code snippet?"
      codeSnippet: |
        <form>
          <input placeholder="Name" />
          <button type="submit">Submit</button>
        </form>
      choices:
      - value: queryByText('Submit')
      - value: queryByText(/submit/i)
      - value: queryByText('submit')
      - value: queryByText(/submit/)
      - value: "queryByText('submit', {exact: false})"
      - value: queryByRole('button')
      correctChoices:
      - 0
      - 1
      - 4
      - 5
      explanation: "queryByText accepts either a string or regex. If you pass a string, it needs to be exact, unless you pass {exact: false} as the second argument. If you pass regex, you need to use the `i` flag to ignore case."
      type: checkbox
    - description: Given the input `<input value="Hello" />` - Which of the following is the correct way to simulate a change event on the input?
      choices:
      - value: "queryByDisplayValue('Hello').fireEvent(change, {target: {value: 'Goodbye'}})"
      - value: "fireEvent.change(queryByDisplayValue('Hello'), {target: {value: 'Goodbye'}})"
      - value: "queryByText('Hello').fireEvent(change, {target: {value: 'Goodbye'}})"
      - value: "fireEvent.onChange(queryByDisplayValue('Hello'), {target: {value: 'Goodbye'}})"
      - value: "fireEvent.change(queryByText('Hello'), {target: {value: 'Goodbye'}})"
      correctChoices:
      - value: 1
      explanation: `fireEvent` has methods for all HTML events, without the 'on' prefix. The methods each take the element you're firing the event on as the first parameter, and a mock event as an optional 2nd parameter. When selecting an input, `queryByText` will not work - use `queryByDisplayValue` or `queryByPlaceholder` instead.
      type: radio
---
