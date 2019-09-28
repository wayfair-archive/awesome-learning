/*eslint-disable no-unused-expressions */
import { customers } from "../mockData";

`
⬇️

Welcome to Array Methods - Reduce! 

Reduce is the culmination of all the previous sessions. It combines all the
properties of the previous iterative methods, but it flips the script by
making one simple but powerful change:

In reduce, unlike all other methods, the transformations and choices you
make about the values are completely optional. Consider the following:

1. You may change the number of elements in the 
   final collection like filter, but it's optional.
2. You may change the TYPE of object returned, but it's optional.
3. You may change the shape of elements like map, but it's optional.

The property of reduce which allows for this flexibility is the
accumulator argument. The accumulator allows us to reason about the final
result value.

⬆️
`;

`📚 Exercise #1 - Write a vanilla JS implementation of reduce 📚

In order to better understand reduce, we want you to write 
a bare bones vanilla JS version of it. This will by no means 
be an exhaustive version of reduce, it's meant as a instructional 
tool to understand how the real prototype method works. 

🛠️ Implement vanillaReduce below.
🛠️ It should take three parameters: 
🛠️ 1. An array
🛠️ 2. A callback function 
🛠️   - (This callback should take the accumulator value, current element, index, and original array)
🛠️ 3. An initial value
🛠️ vanillaReduce should return an element that is the result 
🛠️ of calling the callback function with an accumulator value
🛠️ and the next value in the input array. 

💡 Here's how it works:
💡 The function has an "accumulator value" which starts 
💡 as the initialValue and accumulates the output of each loop.
💡 The array is iterated over, passing the accumulator and 
💡 the next array element as arguments to the callback.
💡 The callback's return value becomes the new accumulator value. 
💡 The next loop executes with this new accumulator value.
💡 This occurs until there are no more elements, 
💡 at which point the accumulator is returned.
`

const vanillaReduce = (array, callback, initialValue) => {
  // Your solution here
};

describe("exercise 1", () => {
  it("vanillaReduce sums an array of values the same as native .reduce()", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const nativeReduceTotal = nums.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    const vanillaReduceTotal = vanillaReduce(
      nums,
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );

    expect(nativeReduceTotal).toEqual(vanillaReduceTotal);
  });
});

`
📚 Exercise #2 - Accumulate Saved Items

We need to to know how many saved items all of our customers have. 

🛠️ Implement totalSavedItems below.
🛠️ This function takes an array of customer objects and 
🛠️ should return the total number of saved itemIds
🛠️ across all customers. 

💡 We are using mock customer data. The mock customer array 
💡 is populated with customer objects of the following shape: 
💡{
💡  first: "Rodrick",
💡  last: "Rutledge",
💡  cart: 79,
💡  quantity: 1,
💡  email: "rodrut@gmail.com",
💡  savedItemIds: [2335, 1120]
💡}
`

const totalSavedItems = customers => {
  // Your solution here
};

describe("exercise 2", () => {
  it("returns the total number of saved item ids from all customers", () => {
    const totalIds = totalSavedItems(customers);
    expect(totalIds).toBe(16);
  });
});


`📚 Exercise #3 - Saved Item Ids 📚

We need an array of all savedItemIds from our current customers. 

🛠️ Implement the getSavedItems functions below.
🛠️ This function takes an array of customers objects and returns 
🛠️ an array of unique savedItemIds across all customers. 

🚨 No duplicate savedItemIds allowed!
`

const getSavedItems = customers => {
  // Your solution here
};

describe("exercise 3", () => {
  it("returns an array of unique savedItemIds from all customers", () => {
    const uniqueIds = getSavedItems(customers);
    expect(uniqueIds).toEqual([
      2335,
      1120,
      4231,
      7732,
      1098,
      2233,
      3322,
      9203,
      1325,
      9090,
      1213
    ]);
  });
});

`
📚 Exercise #4 - Most Popular Items📚

We want to know what the most popular saved items are with our customers.

🛠️ Implement getSavedItemFrequency below. 
🛠️ This function takes an array of customers and
🛠️ returns an object where the keys are savedItemIds 
🛠️ and the values are how many times they occurred across all customers. 

💡 For example, if two customers had savedItemIds of 
💡 [134, 234, 131] and [134, 111],
💡 getSavedItemFrequency should return 
💡 {134: 2, 234: 1, 131: 1, 111: 1}.
`

const getSavedItemFrequency = customers => {
  // Your solution here
};

describe("exercise 4", () => {
  it("returns an object of saved items, where the keys are item ids and the values are their frequency", () => {
    const result = getSavedItemFrequency(customers);
    expect(result).toEqual({
      1098: 1,
      1120: 2,
      1213: 1,
      1325: 1,
      2233: 1,
      2335: 4,
      3322: 1,
      4231: 2,
      7732: 1,
      9090: 1,
      9203: 1
    });
  });
});
