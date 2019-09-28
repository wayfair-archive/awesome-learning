/*eslint-disable no-unused-expressions */
import { products, customers, malformedProductData } from "../mockData";

`
⬇️

Welcome to Array Methods - Advanced Reduce! 

In this session, we use reduce to handle some more complex data
manipulation cases. It's worth noting that reduce isn't the only
option for these exercises. In fact, if your team wants to go 
another route with these solutions, please do! We encourage 
exploration and the conversation that comes with it. 

💡 We import a mock data object used for testing your functions.
💡 If you are interested in the shape of the data, please 
💡 feel free to look at the mockData.js file. 

⬆️
`;

`📚 Exercise #1 - Averaging Numbers 📚

We need the average review rating of our living room furniture! 

🛠️ Implement averageCategoryRating below.
🛠️ It should take two inputs: 
🛠️ An array products and a string key.
🛠️ This function should return a floating point number
🛠️ that is the average rating of all products that have 
🛠️ a category field that matches the supplied key.
🛠️ A category is considered to be matching if 
🛠️ any words in the snake-cased category match the key.

💡 For reference, the products in the array are of the following shape: 
💡 {
💡   id: 2335,
💡   name: "Darby Sectional",
💡   rating: 3.2,
💡   outOfStock: true,
💡   inStockDate: "12/25/2020",
💡   category: "livingroom_furniture"
💡 },


🚨 JavaScript has a weird way of doing math. 
🚨 You may need to do something like .toFixed(1) 
🚨 to get the nearest rounded float. 
`;

const averageCategoryRating = (products, key) => {
  // Your solution here
};

describe("Exercise 1", () => {
  it("returns the average rating of all products in products that match the supplied string key", () => {
    // when passed "bedroom", should match ids 1120 and 3113
    expect(averageCategoryRating(products, "bedroom")).toBe(3.6);
    // when passed "livingroom" should match 4195, 4435, 2335, and 1325.
    expect(averageCategoryRating(products, "livingroom")).toBe(3.8);
  });
});

`📚 Exercise #2: Normalizing Data 📚

Oh no! We've received malformed product data. 

Implement a function called groupByKeys that takes an object 
of malformed product data and 
returns a new object where each key is.


🛠️ Implement groupByKeys below.
🛠️ It should take an input object of malformed product data and 
🛠️ return a new object where each key is
🛠️ the unique value of the malformed data and 
🛠️ their values are the former keys.

💡 For example: 
💡  malformedProductData: {
💡    bedroom_bed: "category",
💡    livingroom_furniture: "category",
💡    "red stool": "name"
💡  }
  
💡 should return:
💡  {
💡   category: ["bedroom_bed", "livingroom_furniture"],
💡   name: ["red stool"]
💡  }
`;


const groupByKeys = malformedData => {
  // Your solution here
};

describe("Exercise 2", () => {
  it("returns the properly formed data", () => {
    expect(groupByKeys(malformedProductData)).toEqual({
      category: [
        "bedroom_bed",
        "livingroom_furniture",
        "bedroom_furniture",
        "lighting_small"
      ],
      name: ["super plush mattress", "red stool"]
    });
  });
});


`📚 Exercise #3 - Array Intersection 📚

We need to know what our most popular saved items are. 

🛠️ Implement savedItemsIntersection below.
🛠️ It should take an input array of customers and
🛠️ return an array of only the product ids that are found 
🛠️ in each of the customer's savedItems arrays.

💡 For example, if some of the customers have id 1235,
💡 but not all customers do, do not return that.
💡 If all customers have 1902 and 1345, return [1902, 1345].
`

const savedItemsIntersection = customers => {
  // Your solution here
};

describe("exercise 2", () => {
  it("returns the intersection of all customer's savedItems arrays", () => {
    expect(savedItemsIntersection(customers)).toEqual([2335]);
  });
});
