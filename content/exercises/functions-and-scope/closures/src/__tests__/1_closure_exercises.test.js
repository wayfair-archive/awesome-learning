/*eslint-disable no-unused-expressions */

`
⬇️

Welcome to Functions and Scope - Closure! 

A closure is the combination of a function 
bundled together (enclosed) with references to 
its surrounding state (the lexical environment).

This is a short definition, but the concept is extremely 
powerful. Let's leverage this language super power in the 
following exercises to help give us the confidence to
use this tool more often.

⬆️
`;

`📚 Exercise #1 - Simple Closure

🛠️ Implement addByX below.
🛠️ It should return a function that will add an 
🛠️ input by x and return the result
`
function addByX(x) {
  // Your code here
  
}

describe("Exercise 1 - addByX", () => {
  it("Returns a function that when called, adds an input by x", () => {
    const addByTwo = addByX(2);
    expect(addByTwo(1)).toBe(3);

    const addByThree = addByX(3);
    expect(addByThree(2)).toBe(5);

    const addByFour = addByX(4);
    expect(addByFour(3)).toBe(7);
  });
});

`📚 Exercise #2 - A Thought Experiment 📚

Carefully examine the following function. 

Think carefully about the variable environment of outer 
and what incrementCounter has access to when outer is executed.

Talk through what you think this function does.

When you have finished discussing what this function does, 
follow the instructions below

🚨 You will not be writing any code for this exercise
`
/*

*/
function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
    return counter;
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();


`
Exercise #2 Instructions 

🛠️ Uncomment each of the following lines one by one.
🛠️ Before your do, guess what will be logged from each function call. 
🛠️ Make sure to talk about why you think your guess is right. 
🛠️ Be careful to use the proper terminology from your pre-read.
`;

// willCounter();
// willCounter();
// willCounter();

// jasCounter(); // really think about this one
// willCounter();

`
🚨 We suggest re-commenting these ^^ when you are done
`;


`📚 Exercise #3 - Only do it Once 📚

🛠️ Implement once below. 
🛠️ Once accepts a callback and should return a function
🛠️ When the returned function is called for the first time
🛠️ it should call the callback and return that output
🛠️ If it is called any additional times, it should not run the callback 
🛠️ instead of calling the callback again it will simply 
🛠️ return the output value from the first time it was called.
`
function once(func) {
  // Your code here
}

describe("Exercise 2 - outer", () => {
  it("Calls the callback once, and returns the first call's result in any subsequent calls", () => {
    const onceFunc = once(addByX(2));

    expect(onceFunc(4)).toBe(6);

    expect(onceFunc(10)).toBe(6);

    expect(onceFunc(9001)).toBe(6);
  });
});


`📚 Exercise #4 - Another Thought Experiment 📚 

Consider the following counter object used in an application. 
This object can be used in multiple functions, right?

Uncomment each of the lines below, one by one.
Before your do, guess what will be logged from each function call. 

Make sure to talk about why you think your guess is right. Also,
discuss if this can be used in multiple functions. 

`

const counterObj = {
  current: 0,
  incrementCurrent() {
    this.current++;
  },
  decrementCurrent() {
    this.current--;
  }
};

`🛠️ Uncomment each of the following lines one by one.`;

// console.log(counterObj.current)
// counterObj.incrementCurrent()
// console.log(counterObj.current)
// counterObj.decrementCurrent()
// console.log(counterObj.current)
// counterObj.current = 45;
// console.log(counterObj.current) // <- not ideal. But Why?
`
🚨 We suggest re-commenting these ^^ when you are done
`;


`📚 Exercise #5 -  Fixing counterObj 📚 

🛠️ Implement counterFunc below 
🛠️ It should that recreates the functionality of rhe counterObj above, 
🛠️ but with private scope. This counter function should restrict access 
🛠️ to it's internals via closure, and expose an incrementCurrent, 
🛠️ decrementCurrent, and getCurrent method. 
`

function counterFunc() {
  // Your code here
}

describe("Exercise 3 - counterFunc", () => {
  it("Increments, decrements, and returns a privately scoped counter and restricts access to its internals", () => {
    // Create two counters to demonstrate if counters are private
    const counterObj = counterFunc();
    const newCounterObj = counterFunc();

    // Test functionality of counterObj
    expect(counterObj.getCurrent()).toBe(0);

    // Testing increment
    counterObj.incrementCurrent();
    counterObj.incrementCurrent();
    expect(counterObj.getCurrent()).toBe(2);

    // Attempt to set value by manipulating internal variable
    counterObj.current = 45;
    // Look! It doesnt work
    expect(counterObj.getCurrent()).toBe(2);

    counterObj.decrementCurrent();
    expect(counterObj.getCurrent()).toBe(1);

    // Test if newCounterObj has been affected by these methods (it shouldn't be)
    expect(newCounterObj.getCurrent()).toBe(0);

    // Increment newCounterObj. Test if it increments properly and that it doesn't affect counterObj
    newCounterObj.incrementCurrent();
    expect(newCounterObj.getCurrent()).toBe(1);
    expect(counterObj.getCurrent()).toBe(1);
  });
});

