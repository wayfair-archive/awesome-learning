/*eslint-disable no-unused-expressions */
import { fetchProduct, data } from "../../api/fetch_product";

`
⬇️

Welcome to Advanced Promises! 

This session will expand your knowledge of the 
Promise API  and hopefully develop your understanding 
of promises through debugging promise anti-patterns.

💡 In order to mimic real world applications, 
💡 we are using a fake API call called fetchProduct.
💡 fetchProduct takes in a sku and returns a promise.
💡 if the call is successful, fetchProduct resolves with
💡 an object of the following shape
💡 {
💡  id: 1325,
💡  name: "Red Bar Stool",
💡  rating: 4.3,
💡  category: "livingroom_stool",
💡  price: 22.99
💡},
💡 Side note: We aren't endorsing this API structure, 
💡 it's just a teaching tool. 

We have provided solutions to all exercises in the solutions
folder, please check them out! 

⬆️
`;

`
📚 Exercise One - Handling multiple promises 📚

Sometimes you need to make multiple async requests. 
Promise has a solution for that. 

🛠️ Implement the requestProducts function below. This function
🛠 ️should take in an array of promises and return a promise that 
🛠 ️resolves to an array
`;

function requestProducts(arrayOfPromises) {
  // Your solution here
}

describe("exercise 1", () => {
  it("Calls all promises and returns the responses of all completed promises", () => {
    const promises = [fetchProduct("TETO1100"), fetchProduct("RIGH2345")];
    return requestProducts(promises).then(response => {
      expect(response).toEqual([
        {
          category: "livingroom_stool",
          id: 1325,
          name: "Red Bar Stool",
          price: 22.99,
          rating: 4.3
        },
        {
          category: "kitchen_table",
          id: 2134,
          name: "Red Table",
          price: 22.99,
          rating: 3.9
        }
      ]);
    });
  });
});

`
📚 Exercise Two - More Error handling in Promises 📚

🛠️ Implement the requestSalePrice function below
🛠️ requestSalePrice takes a sku. 
🛠️ call fetchProduct with the sku argument 
🛠️ and handle the following cases:
🛠️ 1. If requestSalePrice responds with a product object
🛠️     that contains a salePrice field, return the sale price.
🛠️  2. If requestSalePrice doesn't respond with a 
🛠️     product object that contains a salePrice field, 
🛠️     throw a new Error with the string 
🛠️     "Your product is not on sale"
🛠️  2. If requestSalePrice doesn't respond with 
🛠️     a product at all (response is null) throw a new Error 
🛠️     with the string "Your request didn't return a product"
🛠️  3. Catch and return any errors 
🛠️     (one of the test cases mocks a 500 response)
`;
function requestSalePrice(sku) {
  // Your solution here
}

describe("exercise 2", () => {
  it("Calls requestSalePrice and returns products", () => {
    return requestSalePrice("SEHO2194").then(response => {
      expect(response).toEqual(data["SEHO2194"].salePrice);
    });
  });

  it("Calls requestSalePrice with an endpoint that responds with no sale price and throws the error 'Your request didn't return a product'", () => {
    const err = new Error("Your product is not on sale");
    expect.assertions(1);
    return expect(requestSalePrice("RIGH2345")).resolves.toEqual(err);
  });

  it("Calls requestSalePrice with an endpoint that fails to return at all and catches the error", () => {
    const err = new Error("Error loading file");
    expect.assertions(1);
    return expect(requestSalePrice("DRTG1100")).resolves.toEqual(err);
  });

  it("Null response", () => {
    const err = new Error("Your request didn't return a product");
    expect.assertions(1);
    return expect(requestSalePrice("NOPR0000")).resolves.toEqual(err);
  });

  it("Errors on the server", () => {
    const err = new Error("Error loading file");
    expect.assertions(1);
    return expect(requestSalePrice("DRTG1100")).resolves.toEqual(err);
  });
});

`
📚 Exercise Three - Handle individual errors in a parallel request 📚

Promise.all() is a powerful tool, with a few drawbacks

If Promise.all encounters an uncaught error, 
it will reject no matter how many of it's passed 
promises resovled properly. 

Imagine if you are hydrating your app 
with a series of calls to different APIs. 
You wrap your array of fetch requests in a Promise.all() and
pass the response as properties to your app.

From time to time, your app is crashing. 
Your error reports indicate a different 
API is erroring in each different
crash report. What's the problem?

🛠️ Fill in the enhancedRequestAllFiles function below
🛠️ enhancedRequestAllFiles will take an array of promises.
🛠️ This function should return the results of all the promises, 
🛠️ regardless of success or failure.
🛠️ If the promise is successful, it should 
🛠️ resolve with this object shape
🛠️   { data: <response from api>, error: null}
🛠️ If the promise rejects, it should reject with this object shape
🛠️   { data: null, error: <thrown error from api>} ️
`;

export function enhancedRequestAllFiles(arrayOfPromises) {
  // Your Code Here
}

describe("exercise 3", () => {
  it("Handles individual errors in a Promise.all", () => {
    const responseError = new Error("Error loading file");
    const promises = [
      fetchProduct("INIT0000"),
      fetchProduct("DRTG1100"),
      fetchProduct("INIT0002")
    ];
    return enhancedRequestAllFiles(promises).then(response => {
      expect(response).toEqual([
        { data: { name: "Custom Sectional" }, error: null },
        { data: null, error: responseError },
        { data: { name: "King Size Blanket" }, error: null }
      ]);
    });
  });
});

`
✅
  You made it!

  The next part of this lesson is all about 
  debugging issues with promises. Head on over to 
  "2-promise-debugging.test.js" to continue the lesson.
✅

`;
