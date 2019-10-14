# Awesome Learning
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/awesome-learning)

Awesome Learning is a Front-end focused learning platform created by current and former members of Wayfair Engineering.

[Check out the site](https://wayfair.github.io/awesome-learning/)

## Quick Start

#### Working With Our Repo
1. Fork the Awesome Learning Repo
2. Clone your fork to your local directory
3. Navigate into the local directory
4. Install dependencies
```sh
npm install
```

#### Starting Awesome Learning

Navigate into your new site’s directory and start it up.
```sh
npm run develop
```

#### Open the source code and start editing!

Your site is now running at `http://localhost:8000`!

Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

#### Running Tests

While you are developing, we recommend watching the test suite. Open up another terminal in the site directory and run 
```
npm run test-watch
```

### Running storybook locally

```
npm # install dependencies
npm run storybook
```

Then open `http://localhost:6006` on your browser. For more information visit [React Storybook](https://github.com/storybooks/storybook) repo.

## Project Structure
Awesome Learning is powered by two repositories, this one and our [exercises repo](https://github.com/wayfair/awesome-learning-exercises).

#### This Repo
This is a Gatsby.js powered static site. We use GraphQL as our data layer (see [Gatsby GraphQL](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)), React for our components, co-located SCSS for our styling, and Jest/React Testing Library for our automated tests.

#### The Exercises Repo
The exercises repo holds the courses and lessons that power the exercise portions of each lesson. You do not need to pull down the exercises repo in order to contribute to Awesome Learning. The exercises repo acts as a target for a CodeSandbox.io API which pulls down the files and creates an exercise CodeSandbox on the fly. For more information on how that works, check out [importing from git](https://codesandbox.io/docs/importing#import-from-github) and the exercises repo readme.

If you are interested in fixing exercise content, and/or contributing content, please checkout the [exercises repo](https://github.com/wayfair/awesome-learning-exercises) and we help you out from there.


# What is Awesome Learning?
 This platform features a series of courses designed to help you thoroughly learn technical topics. Some of our courses include Frontend Testing, JavaScript Data Types, and JavaScript Array Methods. Each course contains multiple lessons designed to teach one aspect of the course topic. A lesson has pre-read materials, learning materials, pre-read quizzes, and hands-on exercises.

## How Does it Work?
Small groups of like-minded engineers gather together in a room or virtually,typically once a week, and run through Awesome Learning lessons. Learning materials and pre-read quizzes are done before starting the lesson so everyone is on the same page and held accountable. 


The group then works through the exercises in a group-programming format, discusses issues and patterns that arise from the exercises, and researches solutions together. The group continues meeting until all lessons are complete, then picks their next course to start.


Because pre-reads, learning materials, and quizzes are done before the start of the in-person group session, the group session should typically take about an hour to get through the exercises. 

## Why Awesome Learning?
There are countless learning platforms out there. Just type "learn javascript" into google and you will find a bunch of platforms. Many of them follow similar patterns, and all of them are done solo. In fact, our entire industry tends to favor individuals watching videos, reading docs, and doing exercises by themselves to learn new technology.


There's one small problem - software development is a team effort.


A huge part of our jobs is communication, working together, and being able to explain complex problems in a simple way. Awesome Learning provides the same level of technical education, but does so in a group setting.  Over the almost 2 years we have been running Awesome Learning and sitting in on lessons, we've seen much stronger growth and longer lasting results because of the small group environment. 


Groups experience higher levels of camaraderie, build expert mental models around subject matter, and learn how to communicate better via group programming. Some folks use their Awesome Learning sessions as a way to practice their soft skills without the pressure of tickets and deadlines. 


## Credits
Credit to the original author of this fork - the Gastby Lumen Starter.
https://github.com/alxshelepenok/gatsby-starter-lumen
