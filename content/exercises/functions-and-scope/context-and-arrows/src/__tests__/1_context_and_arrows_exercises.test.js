/*eslint-disable no-unused-expressions */
`
⬇️

Welcome to Functions and Scope - Context and Arrows! 

In the following exercises we will work with the concept 
of context, the "this" keyword, and how we leverage these 
concepts in our daily JS use. 

💡 To do this exercise have the MDN docs for 
💡 .bind .call and .apply handy!

⬆️
`;

`
🚨 BEGIN EXERCISE SETUP

🚨 The following code is setup for the exercises. Please familiarize
🚨 yourself with it before starting exercise 1.
`;

// The robot constructor function. Each robot will be 
// called with a name arguments which belongs to the Robot instance
function Robot(name) {
  // Use the name function argument to attach the name 
  // property to the context/this object of each Robot
  this.name;

  // Each robot has it's own quote method which 
  // should return the quote from the list below
  this.quote = function() {
    return "";
  };
}

// Here we have all of our robots
const voltron = new Robot("Voltron");
const bender = new Robot("Bender");
const optimus = new Robot("Optimus Prime");

// ...and their quotes
const quotes = {
  voltron: "Defenders of the Universe.",
  bender:
    "Blackmail's such an ugly word. I prefer extortion. The X makes it sound cool.",
  optimus: "There's a thin line between being a hero and being a memory."
};

`
🚨 END EXERCISE SETUP
`;

`📚 Exercise #1 - Explicit Bindings 📚

🛠️ Given the three robot objects above, attach the speak() 
🛠️ function found below to each different robot object such that
🛠️   * speak function MUST BE USED
🛠️   * when robot.quote() is called, each one utters the correct quote
🛠️   * robot.quote() does not require any arguments
🛠️   * each robot uses a different form of explicit binding.

💡 Notice the use of the "this" object inside of the speak function.

🚨 Please use either bind, call, or apply as directed by the code comments
🚨 above each <robot>.quote found below
`

function speak(message) {
  return this.name + " says: " + message;
}

// Use the .bind method to attach the correct quote 
// to voltron by using speak function
voltron.quote = () => {};

// Use the .call method to attach the correct quote 
// to bender by using speak function
bender.quote = () => {};

// Use the .apply method to attach the correct quote 
// to optimus by using speak function
optimus.quote = () => {};


describe("Exercise one", () => {
  it("can quote Voltron", () => {
    expect(voltron.quote()).toEqual("Voltron says: " + quotes.voltron);
  });

  it("can quote Bender", () => {
    expect(bender.quote()).toEqual("Bender says: " + quotes.bender);
  });

  it("can quote Optimus Prime", () => {
    expect(optimus.quote()).toEqual("Optimus Prime says: " + quotes.optimus);
  });
});


`💡 README: A Note on Arrow Functions 💡

The arrow functions on their own are not very interesting.
They are not necessary to write JavaScript, traditional functions
are just fine. On their own the arrow functions would not be a very
interesting topic, but when contrasted with the semantics of traditional
context binding we can show _how_ they are different and why we use them.

1) Arrow functions have their context bound lexically! 
   What does that mean? It means that the context, which 
   before arrow functions was dynamic now becomes
   a static concept when we are discussing arrows. 
   An arrow function always inherits
   the context of the function it was defined in (or global)

3) Arrow _may_ have concise bodies, or a body without 
   { } curly braces. This is only valid when a function 
   only contains a single expression. 
   for example: const foo = x => x > 2 ? x : 0;

2) Arrow functions introduce the concept of implicit 
   returns with concise bodies 
   for example: const implicit = x => x // this returns "x"
`;




`📚 Exercise 2 - Notifier 

Notifier is a factory which returns an Object 
with a .on and a .trigger methods It allows for 
setting up listeners to events with .on and triggering 
of them with .trigger. 

The way it's implemented isn't ideal, it makes 
heavy use of context internally. The challenge
of this exercise is to re-write this logic to use 
arrow functions to simplify a lot of the internal 
logic which uses .bind to keep track of events and callbacks.

🛠️ Rewrite the Notifier code so that .on and .trigger no 
🛠️ longer use .bind() methods by using arrow functions.
`;

function Notifier() {
  this.callbacks = {};
  this.data = null;

  // Trigger an event with a string(event) and a data object
  const trigger = function(event, data) {
    if (!this.callbacks[event]) {
      return;
    }

    this.data = data;

    // This is an old trick of ES5 of saving the current context(this) into a different variable
    // and then referencing it later.
    const self = this;
    this.callbacks[event].forEach(function(cb) {
      setTimeout(cb.bind(self));
    });
  }.bind(this);

  const on = function(eventName, callback) {
    if (!this.callbacks[eventName]) {
      this.callbacks[eventName] = [];
    }
    this.callbacks[eventName].push(callback);
  }.bind(this);

  return { trigger, on };
}

describe("Pair exercise", () => {
  it("Notifier, notifies callbacks of triggered events", done => {
    // We are using the new keyword to create a new context for the Notifier
    // This isn't part of the session, but feel free to look up the "new" keyword on MDN
    const note = new Notifier();

    note.on("tada!", function() {
      try {
        expect(this.data).toEqual({ foo: "baz" });
        done();
      } catch (err) {
        done(err);
      }
    });
    note.trigger("tada!", { foo: "baz" });
  });
});
