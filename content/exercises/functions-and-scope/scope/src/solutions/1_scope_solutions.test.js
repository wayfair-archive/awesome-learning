// Exercise 1.a
// What is love? (the global version)
const WHAT_IS_GLOBAL_LOVE = "woah-woah-woah, oh, oh";

// What is love? (the local version)
const WHAT_IS_LOCAL_LOVE = "Baby don't hurt me";

// Exercise 1.b
const WHAT_IS_HOISTED_LOVE = undefined;

// Exercise 1.c
const WHAT_IS_BLOCK_LOVE = "What is love?";


// Exercise 2
var whoStoleTheCookies;
var whoseFingerprintsAreOnItNow;

{
  const fingerprints = "Cookie Monster"; // This is the only change needed. You cant also use "let" instead of "const" here.
  whoStoleTheCookies = function() {
    return fingerprints;
  };
}

var fingerprints = "You!"; // Cookie Monster sneakily replaces his fingerprints with yours. Don't actually do this in your day-to-day work!
whoseFingerprintsAreOnItNow = function() {
  return fingerprints;
};


// Exercise #3 - ADVANCED

// SETUP CODE (IGNORE FOR NOW)
function noop() {}

var module = {};
var modules = {};
// END SETUP

// NOTE TO TEACHER/DRIVER: The "student" version of this exercise does any have any wrappers around the logic which is meant to be
//                         in an individual file(s). This is the main purpose of the exercise, for students to understand that by
//                         wrapping the different file logic in their methods we create an entire module system!

// SEE EXAMPLE BELOW FOR THE "BROKEN" EXAMPLE

// FILE: accumulator_module.js
// This module returns a function which acumulates values passed into it and returns the result
function accumulator_module(module) {
  var result = 0;
  module.exports = function(value) {
    return (result += value);
  };
}

// BROKEN/STUDENT LOGIC
// var result = 0;
// module.exports = function (value) {
//   return result += value;
// }
// The reason it is broken is because it conflicts with other file_*.js code since no individual file has a private scope

// END FILE accumulator_module.js

// FILE: add2_module.js
// This module returns a function which adds 2 to a value passed in
function add2_module(module) {
  module.exports = function(value) {
    return (value += 2);
  };
}
// END FILE add2_module.js

// FILE: main.js
// Our main module for the page should accumulate some stuff
function main_module(module) {
  var accumulator = _require("accumulator_module");
  var addTwo = _require("add2_module");

  var result = accumulator(2);
  result = accumulator(2);

  // should be six
  module.exports = addTwo(result);
}
// END FILE main.js

// Here is our require method we see used above, it's mostly complete for our purpose
// fix it to make sure a new module is created correctly by creating a correct scope
// for each module.

// Our require method will use this object to map a module to it's exports, use this as
// a clue on how to solve this problem!
var nameToModule = {
  accumulator_module: accumulator_module,
  add2_module: add2_module,
  main: main_module
};

function _require(moduleName) {
  if (modules[moduleName]) {
    return modules[moduleName].exports;
  }

  var mod = { exports: noop };
  nameToModule[moduleName](mod);
  modules[moduleName] = mod;

  return modules[moduleName].exports;
}

