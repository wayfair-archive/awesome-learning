// The robot constructor function. Each robot will be called with a name arguments which belongs to the Robot instance
function Robot(name) {
  // Use the name function argument to attach the name property to the context/this object of each Robot
  this.name = name; // this will be deleted in the example

  // Each robot has it's own quote method which should return the quote from the list below
  this.quote = function() {
    return "";
  };
}

// Use this helper method to help each Robot quote itself
// Notice the use of the "this" object inside the method.
// "this" is the DYNAMIC portion of the function, other than the arguments. (We will constrast this with scope in the next session)
function speak(message) {
  // This is where JavaScript can get _weird_ we have a method defined outside any class or context but it can use "this" all the same!
  // This is surprising and strange to see coming from traditional OOP languages!
  return this.name + " says: " + message;
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

`Exercise 1 Solution`;

// Use the .bind method to attach the correct quote to voltron
// Solution
voltron.quote = speak.bind(voltron, quotes.voltron);

// Use the .call method to attach the correct quote to bender
// Solution
bender.quote = function() {
  return speak.call(this, quotes.bender);
};

// Use the .apply method to attach the correct quote to optimus
// Solution
optimus.quote = function() {
  return speak.apply(this, [quotes.optimus]);
};


`Exercise 2 Solution`
function Notifier() {
  const callbacks = {};
  this.data = null;

  const trigger = (event, data) => {
    if (!callbacks[event]) {
      return;
    }
    this.data = data;
    callbacks[event].forEach(cb => {
      // We still use .call for each callback but notice how this works with arrow functions!
      // We are able to drop all the .bind calls from our methods because arrow functions have *lexical context binding
      // They bind to the correct this object by simply beind _defined_ in a specific function. NEAT!
      setTimeout(() => {
        cb.call(this);
      });
    });
  };

  const on = (event, callback) => {
    if (!callbacks[event]) {
      callbacks[event] = [];
    }
    callbacks[event].push(callback);
  };

  return { trigger, on };
}

export const ENABLE_BONUS_EXERCISE = false;
