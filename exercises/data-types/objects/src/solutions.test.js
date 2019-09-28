/* eslint-disable no-unused-expressions */
`
Data Types Session 2 - Objects & References Solutions!

Please keep in mind that these are only one possible way of many to achieve the correct results!
If you find an issue in the solutions, please reach out to #awesome-learning!
`;

`
Exercise 1 - Object Reference

🛠️ Implement the empty() method below to:
      empty an object if passed an object or
      empty an array if passed array

💡 This function should modify its arguments, not return a new object.
💡 The expected result is either an object with no keys {} or an array with no elements []
`;
function empty(input) {
  if (Array.isArray(input)) {
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    input.splice(0, input.length);
    // could also do this: input.length = 0
  } else {
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    Object.keys(input).forEach(key => {
      delete input[key];
    });
  }
}

`
Exercise 2
Part 1 - Cloning An Object

🛠️ Implement the method clone() below to create a copy of both arrays and objects 

💡 This function should return an object such that original !== clone(original); 
`;
function clone(input) {
  return Array.isArray(input) ? [...input] : { ...input };
}

`
Exercise 2
Part 2 - Deep Cloning an Object

🛠️ Implement the method deepClone() below to create a copy of both arrays and objects,
      whose properties or elements may also be arrays or objects. 

💡 As in Part 1, this function should return an object such that original !== clone(original);
`;
function deepClone(input) {
  // recursive solution
  if (Array.isArray(input)) {
    // remember .map() takes a callback!
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    // create a deep clone of each array element
    return input.map(deepClone);
  } else if (typeof input === "object") {
    const retVal = {};
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    // For each key,value pair in the input object, deepClone the value!
    Object.entries(input).forEach(([key, value]) => {
      retVal[key] = deepClone(value);
    });
    return retVal;
  }
  // otherwise this is a scalar, return itself (nothing to clone)
  return input;

  /**
   * Could also do:
   *  JSON.parse(JSON.stringify(input));
   */
}
`
Exercise 3 - Reference Types & JavaScript Evaluation Strategy

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

const fooFizz = 3;
const fooBuzz = "Lorem Ipsum";
const fooFruits = ["apple", "pineapple", "banana"];
const fooDog = {
  name: "Marley",
  breed: "Lab",
  age: 2
};

const barFizz = 3;
const barBuzz = "Lorem Ipsum";
const barFruits = ["apple", "orange", "banana"];
const barDog = {
  name: "Balto",
  breed: "Lab",
  age: 2
};

`
Exercise 4 - Avoiding Mutation

Part 1 - Removing an object property without mutation

One of our customers would like to remove a billing address from their account!

🛠️ Implement the withoutBillingAddress() method below to return an account 
      without the billingAddress property, without mutating the input account object
    
💡 You may assume the parameter passed is a object
💡 The test will fail if the input object is mutated, or if any other properties are removed
`;
function withoutBillingAddress(customerAccount) {
  const { billingAddress, ...others } = customerAccount;
  return { ...others };

  /**
   * Could also do:
   * const copyOfCustomer = {...customerAccount};
   * delete copyOfCustomer.billingAddress;
   * return copyOfCustomer;
   *
   */
}

`
Part 2 - Updating a nested value without mutation


🛠️ Implement the updatePackageTruckId() method below to update any packages in the input array 
    which are on truck B to now be assigned to truck E without loosing any of their other properties

💡 You may assume the input to this function is an array of packages with a string 'truck' property like so:
    [ { packageId: 1, truck: 'A', customerName: 'Jane Doe' },
     { packageId: 2, truck: 'E', companyName: 'Company LLC' } ]
💡 The test will fail if the input array or any of its elements are mutated
`;
function updatePackageTruckId(packages) {
  return packages.map(pkg => {
    if (pkg.truck === "B") {
      return {
        ...pkg,
        truck: "E"
      };
    }
    return pkg;
  });
}

// End of session

/**
 * Tests
 *
 * Try to complete the exercises without looking at the tests!
 */
describe.skip("Exercise 1 - Object Reference", () => {
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

describe.skip("Exercise 2: Part 1 - Cloning An Object", () => {
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

describe.skip("Exercise 2: Part 2 - Deep Cloning An Object", () => {
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

describe.skip("Exercise 3 - Reference Types & JavaScript Evaluation Strategy", () => {
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

describe.skip("Exercise 4: Part 1 - Removing an object property without mutation", () => {
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

describe.skip("Exercise 4: Part 2 - Updating a nested value without mutation", () => {
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
