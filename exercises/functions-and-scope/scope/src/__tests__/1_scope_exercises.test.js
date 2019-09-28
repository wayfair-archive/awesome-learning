/*eslint-disable no-unused-expressions */
`
⬇️

Welcome to Functions and Scope - Scope!

In the previous section we learned about the 
dynamic context feature of JavaScript functions. 
Today we will explore the static _scope_ and the
differences of scope vs context. We will demonstrate 
how scope _work_ directly by exploring some of 
the lesser known gotchas in JavaScript like "hoisting

⬆️
`;

`📚 Exercise #1a -  Basic Scopes 📚
Let's kick things off with examples of the basic scopes in JavaScript.

💡 Local scope: only accessible within the enclosed function.
💡 Global scope: accessible to ALL functions.

💡 One of the functions below changes the locally scope 
💡 love variable. The other changes a globally scoped love

🛠️ Take a look at the following code and assign 
🛠️ the correct answers to the two VARIABLES 
🛠️ (the ones in all caps) below to pass the exercise
`;

var love = "What is love?";

(function() {
  love = "woah-woah-woah, oh, oh";
})();

(function() {
  var love = "Baby don't hurt me";
})();


`--- What is the globally scope love variable? ---`;
const WHAT_IS_GLOBAL_LOVE = "";

`--- What is the locally scope love variable? ---`;
const WHAT_IS_LOCAL_LOVE = "";


`📚 Exercise #1b - Hoisting 📚

In JavaScript every variable declared in a function is "hoisted" 
to the top of the function no matter where in the function it is defined.

🛠️ Look at the code below and assign the correct value 
🛠️ to WHAT_IS_HOISTED_LOVE

💡 For bonus points, talk to each other about why your answer is correct
`;

function noop() {}

(function(log) {
  log(love);

  var love = "No more";
})(noop);

`--- Assign the value here ---`;
const WHAT_IS_HOISTED_LOVE = "";



`📚 Exercise #1c - Block Scope 📚

ES6 Syntax introduced two new ways to declare variables 
with let and const keywords. let & const also 
introduce a new type of scope, BLOCK SCOPE

Take a look at the code below. Notice that the log callback is called
with the love variable, but what is the value of the love variable?

🛠️ It's your job to answer that question
🛠️ Assign the correct of what the love variable is when called by log
🛠️ to the WHAT_IS_BLOCK_LOVE declaration below. 
`;

(function(log) {
  love = "What is love?";
  if (true) {
    let love = "No more";
  }
  log(love);
})(noop);

`--- Assign the value here ---`;
const WHAT_IS_BLOCK_LOVE = "";

describe("Group exercises", () => {
  it("Global scope answer is correct", () => {
    expect(WHAT_IS_GLOBAL_LOVE === "woah-woah-woah, oh, oh").toBe(true);
  });
  it("Local scope answer is correct", () => {
    expect(WHAT_IS_LOCAL_LOVE === "Baby don't hurt me").toBe(true);
  });
  it("Local variables shadowing the global", () => {
    expect(WHAT_IS_HOISTED_LOVE === undefined).toBe(true);
  });
  it("Block scoped variables", () => {
    expect(WHAT_IS_BLOCK_LOVE === "What is love?").toBe(true);
  });
});


`📚 Exercise #2 - The Scope of Cookie Monster

🛠️ Refactor the variable types and scopes of the following code 
🛠️ block so that whoStoleTheCookies() returns the value 
🛠️ of fingerprints in its original scope.

💡 whoseFingerprintsAreOnItNow() already returns the value 
💡 of fingerprints in the global scope. 
💡 Make sure you don't accidentally change that.
`;


var whoStoleTheCookies;
var whoseFingerprintsAreOnItNow;

{
  var fingerprints = "Cookie Monster";
  whoStoleTheCookies = function() {
    return fingerprints;
  };
}

var fingerprints = "You!"; // Cookie Monster sneakily replaces his fingerprints with yours. Don't actually do this in your day-to-day work!
whoseFingerprintsAreOnItNow = function() {
  return fingerprints;
};

describe("Pair exercise 1", () => {
  it("Make whoStoleTheCookies returns Cookie Monster", () => {
    expect(whoStoleTheCookies()).toBe("Cookie Monster");
  });
  it("Ensure whoseFingerprintsAreOnItNow still returns You!", () => {
    expect(whoseFingerprintsAreOnItNow()).toBe("You!");
  });
});



`📚 Exercise #3 - The Module Pattern

Let's put it all together to see how scope is useful when applied 
to a very common problem in JavaScript, MODULES.

All code is executed in GLOBAL scope in JavaScript, only when we 
define methods is when we create additional scopes.

When we have thousands of JavaScript files in a codebase
eventually we will run into variable collisions as files re-define 
variables with common names like "x" or "i". 

But if we utilize JavaScript scope creatively we can overcome
this problem!

💡 We are mocking the idea of different files below,
💡 note the code comments that denote different files. 

🛠️ Make sure each file  is a module by creating a scope for each one
🛠️ Make sure each file/module has access to it's own "module" object
🛠️ Make sure the result of _require('main') return the number 6!

The goal of this exercise is to scope the two methods 
below to produce the correct result. You can change any of the code 
you see to accomplish these three tasks.
`;

`--- BEGIN SETUP CODE ---`;
var module = {};
var modules = {};

`
💡 Our require method will use this object to map a module 
💡 to it's exports, use this as a clue on how to solve this problem!
`;

// Remove this when writing your solution
function noop() {}

var nameToModule = {
  accumulator_module: noop, // clue
  add2_module: noop, // clue
  main: noop // clue
};

`--- END SETUP CODE ---`;



`--- FILE: accumulator_module.js ---
💡 This module returns a function which accumulates 
💡 values passed into it and returns the result
`;
var result = 0;
module.exports = function(value) {
  return (result += value);
};


`--- FILE: add2_module.js ---
💡 This module returns a function which adds 2 to a value passed in
`;
 
module.exports = function(value) {
  return (value += 2);
};


`--- FILE: main.js ---
💡 Our main module for the page should accumulate some stuff
`;
var accumulator = _require("accumulator_module");
var addTwo = _require("add2_module");

var result = accumulator(2);
result = accumulator(2);

// should be six
module.exports = addTwo(result);

`
💡 Here is our require method we see used above, 
💡 it's mostly complete for our purpose

🛠️ fix it to make sure a new module is created correctly 
🛠️ by creating a correct scope for each module.
`;

function _require(moduleName) {
  if (modules[moduleName]) {
    return modules[moduleName].exports;
  }

  var mod = { exports: noop };
  nameToModule[moduleName](mod);
  modules[moduleName] = mod;

  return modules[moduleName].exports;
}

describe("Pair exercise 2", () => {
  it("_require('main') should result in the number 6", () => {
    expect(_require("main")).toBe(6);
  });
});