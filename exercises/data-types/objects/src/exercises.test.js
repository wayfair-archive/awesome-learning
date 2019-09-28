/* eslint-disable no-unused-expressions */
`
Welcome to Data Types Session 2 - Objects & References!
  
This session should expand your knowledge of Objects and JavaScript reference types.

By the end of this session, you should feel comfortable with the difference 
between scalar (primitive) types and reference types in JavaScript, as well as
gain some tools to understand how to work with reference types.

Let's get started. 
`;

`
Exercise 1 - Object Reference

🛠️ Implement the empty() method below to:
      empty an object if passed an object or
      empty an array if passed array

💡 This function should modify its arguments, not return a new object.
💡 The expected result is either an object with no keys {} or an array with no elements []
`;
function empty(obj) {
  // Your code here!
}

`
Exercise 2
Part 1 - Cloning An Object

🛠️ Implement the method clone() below to create a copy of both arrays and objects 

💡 This function should return an object/array such that original !== clone(original); 
`;
function clone(input) {
  // Your code here!
}

`
Exercise 2
Part 2 - Deep Cloning an Object

🛠️ Implement the method deepClone() below to create a copy of both arrays and objects,
      whose properties or elements may also be arrays or objects. 

💡 As in Part 1, this function should return an object such that original !== clone(original);
`;
function deepClone(input) {
  // Your code here!
}

`
Exercise 3 - Reference Types & JavaScript Evaluation Strategy

In the pre-read for this session, we learned the difference between
primitive and reference types in JavaScript. 

JavaScript's evaluation strategy is technically "call by sharing", 
but this term is not commonly used. We will refer to this as the more commonly 
used "pass by value", where the "value" differs based on the type of the argument. 
For primitive types, the "value" passed is the primitive value. For reference types, 
the "value" passed is a reference. 

Because the value of a reference type is a reference, folks sometimes refer to 
JavaScript as using "pass by reference". This is only true for reference types.

In this exercise, we will explore the difference between passing primitive and 
reference types to a function. We provide two functions: foo() and bar(), which
perform various assignment and mutations on the arguments passed. 

🛠️ Given various inputs to these functions (fizz, buzz, fruits, and dog), 
      determine what the value of each input will be after the execution of each function (foo and bar). 

💡 The goal of this exercise is to understand how functions can modify their
      arguments, based on if the argument is a primitive or reference type.
`;

// Starting values!
var fizz = 3;
var buzz = "Lorem Ipsum";
var fruits = ["apple", "orange", "banana"];
var dog = {
  name: "Marley",
  breed: "Lab",
  age: 2
};

function foo(fizz, buzz, fruits, dog) {
  fizz = 2;
  buzz = "The quick, brown fox jumps over a lazy dog";
  fruits[1] = "pineapple";
  dog = {
    name: "Lassie",
    breed: "Collie",
    age: 6
  };
}

function bar(fizz, buzz, fruits, dog) {
  fizz += 1;
  buzz[0] = "J";
  fruits = ["grape", "blueberry", "raspberry"];
  dog.name = "Balto";
}

/**
 * Below, update the values you expect each variable to
 * contain after the execution of `foo(fizz, buzz, fruits, dog)`
 */
const fooFizz = null;
const fooBuzz = null;
const fooFruits = null;
const fooDog = null;

/**
 * Below, update the values you expect each variable to
 * contain after the execution of `bar(fizz, buzz, fruits, dog)`
 *
 * The functions are not called in succession,
 * assume fresh input to bar()
 */
const barFizz = null;
const barBuzz = null;
const barFruits = null;
const barDog = null;

`
Exercise 4 - Avoiding Mutation

As we demonstrated above, objects are a reference type in JavaScript. 
This allows us as developers to change properties of an object without 
creating a new object. We refer to this pattern as "mutation".

Avoiding mutation is a common theme of declarative programming paradigms, 
in which mutation within a function is called a side effect. In these paradigms,
functions should be 'pure', which means to be free from mutation or other side affects (i.e. a network request).
Mutations are avoided by having functions return new values to the caller instead
of allowing the function to have an effect besides returning a value.

But why should you care? 

Declarative programming practices have become more common in popular JavaScript libraries and frameworks. 
For example, both React.js and Redux have strict guidelines on how to update state. In React.js, the
state object should never be directly mutated, and should only be updated by calling setState(). 
In Redux, the reducer functions which return a new state object must also be pure.

In both of these examples, mutating state breaks the contract of using these libraries,
which means the behavior of the library is now undefined and will not work as expected.

There are libraries which exist to prevent mutation, such as Immutable.js and Seamless-Immutable.js,
but these are not strictly necessary - and luckily it's easy to avoid mutation using native JavaScript features!

Please see the session bonus materials for more on programming paradigms and the React and Redux Libraries!
`;

`
Part 1 - Removing an object property without mutation

One of our customers would like to remove a billing address from their account!

🛠️ Implement the withoutBillingAddress() method below to return an account 
      without the 'billingAddress' key, without mutating the input account object
    
💡 You may assume the parameter passed is a object of the shape:
    {
      customerName: 'Jane Doe',
      billingAddress: '42 Wallaby Way, Sydney',    // this is the property to omit!
      shippingAddress: '12 Grimmauld Place, London'
    }
💡 The test will fail if the input object is mutated, or if any other properties are removed
`;
function withoutBillingAddress(customerAccount) {
  // Your code here!
}

`
Part 2 - Updating a nested value without mutation

There was a big storm on one of the shipping routes!

All packages which were originally on truck B must be updated 
  to be on truck E to avoid late deliveries.

🛠️ Implement the updatePackageTruckId() method below to update any packages in the input array 
    which are on truck B to now be assigned to truck E without losing any of their other properties

💡 You may assume the input to this function is an array of packages with a string 'truck' property like so:
    [ { packageId: 1, truck: 'A', customerName: 'Jane Doe' },
     { packageId: 2, truck: 'E', companyName: 'Company LLC' } ]
💡 The test will fail if the input array or any of its elements are mutated
`;
function updatePackageTruckId(packages) {
  // Your code here!
}

// End of session

/**
 * Tests
 *
 * Try to complete the exercises without looking at the tests!
 */
describe("Exercise 1 - Object Reference", () => {
  it("correctly empties objects by reference", () => {
    const o = { a: "a", b: "b", c: "c" };
    empty(o);
    expect(Object.keys(o).length).toBe(0);
  });
  it("correctly empties arrays by reference", () => {
    const a = [1, 2, 3, 4, 5, 6];
    empty(a);
    expect(a.length).toBe(0);
  });
});

describe("Exercise 2: Part 1 - Cloning An Object", () => {
  it("can clone objects correctly", () => {
    const o = {};
    expect(clone(o) !== o).toBe(true);
    const j = {
      foo: 1,
      bar: 2
    };
    const cloneJ = clone(j);
    expect(j !== cloneJ).toBe(true);
    expect(Object.keys(cloneJ)).toEqual(["foo", "bar"]);
  });

  it("can clone arrays correctly", () => {
    const a = [];
    expect(Array.isArray(clone(a)) && clone(a) !== a).toBe(true);

    const b = ["foo", "bar"];
    const cloneB = clone(b);
    expect(Array.isArray(cloneB) && clone(a) !== a).toBe(true);
    expect(cloneB).toEqual(["foo", "bar"]);
  });
});

describe("Exercise 2: Part 2 - Deep Cloning An Object", () => {
  it("Can deep clone an object with array properties", () => {
    const obj = {
      b: 1,
      d: ["foo", "bar", { foo: "bar" }]
    };
    const clonedObj = deepClone(obj);
    expect(clonedObj !== obj).toBe(true);
    expect(clonedObj).toEqual(obj);
  });
  it("Can deep clone an array with object properties", () => {
    const arr = [
      "a",
      {
        foo: "bar",
        buzz: [1, 2, 3]
      }
    ];
    const clonedArr = deepClone(arr);
    expect(clonedArr !== arr).toBe(true);
    expect(clonedArr).toEqual(arr);
  });
});

describe("Exercise 3 - Reference Types & JavaScript Evaluation Strategy", () => {
  it("Correct value of fooFizz", () => {
    expect(fooFizz === 3).toBe(true);
  });
  it("Correct value of fooBuzz", () => {
    expect(fooBuzz === "Lorem Ipsum").toBe(true);
  });
  it("Correct value of fooFruits", () => {
    expect(fooFruits[0] === "apple").toBe(true);
    expect(fooFruits[1] === "pineapple").toBe(true);
    expect(fooFruits[2] === "banana").toBe(true);
  });
  it("Correct value of fooDog", () => {
    expect(fooDog.name === "Marley").toBe(true);
    expect(fooDog.breed === "Lab").toBe(true);
    expect(fooDog.age === 2).toBe(true);
  });
  it("Correct value of barFizz", () => {
    expect(barFizz === 3).toBe(true);
  });
  it("Correct value of barBuzz", () => {
    expect(barBuzz === "Lorem Ipsum").toBe(true);
  });
  it("Correct value of barFruits", () => {
    expect(barFruits[0] === "apple").toBe(true);
    expect(barFruits[1] === "orange").toBe(true);
    expect(barFruits[2] === "banana").toBe(true);
  });

  it("Correct value of barDog", () => {
    expect(barDog.name === "Balto").toBe(true);
    expect(barDog.breed === "Lab").toBe(true);
    expect(barDog.age === 2).toBe(true);
  });
});

describe("Exercise 4: Part 1 - Removing an object property without mutation", () => {
  it("Does not mutate the original object", () => {
    const account = {
      billingAddress: "x",
      customerName: "Jane Doe"
    };
    Object.freeze(account);
    expect(() => withoutBillingAddress(account)).not.toThrow();
  });

  it("Removes billing address", () => {
    const account = {
      billingAddress: "x",
      customerName: "Jane Doe"
    };

    const withoutAddress = withoutBillingAddress(account);
    expect(withoutAddress.billingAddress === undefined).toBe(true);
  });

  it("Does not remove other object properties", () => {
    const account = {
      billingAddress: "x",
      customerName: "Jane Doe"
    };

    const withoutAddress = withoutBillingAddress(account);
    expect(withoutAddress.customerName === "Jane Doe").toBe(true);
  });
});

describe("Exercise 4: Part 2 - Updating a nested value without mutation", () => {
  it("Does not mutate the package object", () => {
    const packages = [
      { packageId: 1, truck: "A", customerName: "Jane Doe" },
      { packageId: 2, truck: "B", companyName: "Company LLC" },
      { packageId: 3, truck: "A", companyName: "Company LLC2" },
      { packageId: 4, truck: "B", companyName: "Company LLC3" }
    ];
    packages.forEach(pkg => Object.freeze(pkg));
    Object.freeze(packages);
    expect(() => updatePackageTruckId(packages)).not.toThrow();
  });

  it("Updates packages on truck A to be on truck E", () => {
    const packages = [
      { packageId: 1, truck: "A", customerName: "Jane Doe" },
      { packageId: 2, truck: "B", companyName: "Company LLC" },
      { packageId: 3, truck: "A", companyName: "Company LLC2" },
      { packageId: 4, truck: "B", companyName: "Company LLC3" }
    ];
    const updatedPackages = updatePackageTruckId(packages);
    expect(
      updatedPackages[1].truck === "E" && updatedPackages[1].packageId === 2
    ).toBe(true);
    expect(
      updatedPackages[3].truck === "E" && updatedPackages[3].packageId === 4
    ).toBe(true);
  });
});
