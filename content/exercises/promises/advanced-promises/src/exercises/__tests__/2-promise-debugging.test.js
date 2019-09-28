/*eslint-disable no-unused-expressions */
import { fetchProduct, errorLogger } from "../../api/fetch_product";

`
⬇️

Welcome to Advanced Promises - Debugging!

This portion of the lesson will test your ability 
to recognize issues with promise implementations, 
and stretch your understanding of the nuance
within the promise API.

These broken implementations below will 
closely resemble production issues faced 
by many developers working with asynchronous JS.

💡 We are introducing a function called errorLogger 
💡 here for teaching purposes. Teams often use an error 
💡 logging function in production to send error messages to
💡 data/error visualization tools. This implementation is a simple
💡 jest mock. Notice we are calling errorLogger with all errors here.

 ⬆️
`;

`
📚 Exercise One - Uncaught Error 📚

The Problem: 
Despite our reject handler, fetchRelatedItemSkus is still 
leaking errors. In a production React app without 
a good error boundary, an error like this could crash the app.

🛠️ Fix the fetchRelatedItemSkus function below so it handles all errors

`;

function fetchRelatedItemSkus(sku) {
  return fetchProduct(sku).then(
    response => {
      if (!response) {
        throw new Error("Error loading file");
      }
      return response.relatedItems;
    },
    error => {
      errorLogger(error);
    }
  );
}

describe("broken promises", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  it("should return related item skus", () => {
    // SEHO2194 returns a product with a related items field
    return fetchRelatedItemSkus("SEHO2194").then(response => {
      expect(response).toEqual(["TETO1100", "RIGH2345"]);
    });
  });
  it("should handle errors", () => {
    const err = new Error("Error loading file");
    // NOPR0000 returns null
    return fetchRelatedItemSkus("NOPR0000").then(response => {
      expect(errorLogger).toHaveBeenCalledWith(err);
    });
  });
});

`
📚 Exercise Two - But You Promised 📚

The Problem: 
The function below takes in a sku, and returns
the product information from the first related 
item of that sku. This requires two separate 
calls to the fetchProduct API. 

The first call returns a product with a relatedItems field:
for example - 

response.relatedItems = ['TRT1100','SEHO2194']

The function takes the first sku from this array and 
then calls fetchProduct with that sku as an argument, 
returning an object of product data.

There's an issue though, for some reason the 
function is only returning the result of the 
first fetchProduct call, and we seem to be losing 
the result of the second call.

💡 HINT: It has nothing to do with the 
💡 responseCache implementation.

🚨 We aren't worried about error handling specifically 
🚨 in this problem, but feel free to add more robust 
🚨 error handling and some test cases for it if your team wants to.

🛠️ Fix the fetchFirstRelatedItem function below 
🛠️ so it returns the product information

`;
const fetchFirstRelatedItem = sku => {
  let responseCache;
  return fetchProduct(sku)
    .then(res => (responseCache = res.relatedItems[0]))
    .then(fetchProduct(responseCache))
    .catch(errorLogger);
};

describe("missing promises", () => {
  it("should return the related item product information", () => {
    // SEHO2194 returns a product with a related items field
    return fetchFirstRelatedItem("SEHO2194").then(response => {
      expect(response).toEqual({
        category: "livingroom_stool",
        id: 1325,
        name: "Red Bar Stool",
        price: 22.99,
        rating: 4.3
      });
    });
  });
});
