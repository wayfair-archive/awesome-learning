/*eslint-disable no-unused-expressions */
import { products, customers } from "../mockData";
`
⬇️

Welcome to Array Methods - Map and Filter! 

In the following exercises, we will utilize map, 
filter, and forEach to manipulate collections of data.

💡 We import a mock data object used for testing your functions.
💡 If you are interested in the shape of the data, please 
💡 feel free to look at the mockData.js file. 

⬆️
`;


`📚 Exercise #1 - Write a vanilla JS implementation of map 📚

In order to better understand map, we want you to write a
bare bones vanilla JS version of it. This will by no means 
be an exhaustive version of map; it's meant as a instructional 
tool to understand how the real prototype method works. 

🛠️ Implement vanillaMap below.
🛠️ It should take two inputs: 
🛠️ An array and a 'callback' function.
🛠️ vanillaMap should return a new array populated with the results of calling the 
🛠️ provided callback on every element of the input array.
`

const vanillaMap = (numArray, callback) => {
  // Your solution here
};

describe("Exercise 1", () => {
  it("calls vanillaMap with an array of numbers and a callback 'addTwo' and returns a new array with the result of calling addTwo on each item in the array", () => {
    const addTwo = item => item + 2;
    const numbersArray = [1, 2, 3, 4, 5, 6, 7]
    expect(vanillaMap(numbersArray, addTwo)).toEqual([
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);
  });
});

`📚 Exercise #2 - Write a vanilla JS implementation of filter 📚

In order to better understand filter, we want you to write 
a bare bones vanilla JS version of it. This will by no means be 
an exhaustive version of filter, it's meant as a instructional
tool to understand how the real prototype method works. 

🛠️ Implement vanillaFilter below.
🛠️ It should take two inputs: 
🛠️ An array and a callback.
🛠️ vanillaFilter should return a new array populated 
🛠️ with all elements from the input array that return true
🛠️ when passed to the callback function.

💡 The callback passed to filter is always a predicate function.
💡 A predicate is a function that returns true or false based on it's arguments
💡 and is often named something like "isX", such as "isEven" or "isOdd"
`
const vanillaFilter = (numArray, callBack) => {
  // Your solution here
};

describe("Exercise 2", () => {
  it("calls vanillaFilter with an array of numbers and a callback lessThanFive and returns a new array with numbers less than five", () => {
    const lessThanFive = item => (item < 5 ? true : false);
    const numbersArray = [1, 2, 3, 4, 5, 6, 7]
    expect(vanillaFilter(numbersArray, lessThanFive)).toEqual([
      1,
      2,
      3,
      4
    ]);
  });
});


`📚 Exercise #3 - New Product Objects via Map 📚

🛠️ Implement getProductMetaData below.
🛠️ This function takes an array of product objects with many 
🛠️ properties, and returns a new array of new product objects with 
🛠️ only 'productName' and 'productId' as properties. 

💡 The return array should be populated with objects of the shape
💡 {'productName': product.name, 'productId': product.id}
`

const getProductMetaData = productsArray => {
  // Your solution here
};

describe("Exercise 3", () => {
  it("calls getProductMetaData with products and returns an array of objects that each have the id and name properties", () => {
    expect(getProductMetaData(products)).toEqual([
      { productName: "Darby Sectional", productId: 2335 },
      { productName: "Red Bar Stool", productId: 1325 },
      { productName: "Lamp", productId: 9203 },
      { productName: "Quilted Head Board", productId: 1120 },
      { productName: "Rusty Barn Door", productId: 4435 }
    ]);
  });
});



`📚 Exercise #4 - Filtering Customers 📚

🛠️ Implement filterByTotalOver150 below.
🛠️ This function takes an array of customer objects and 
🛠️ returns an array of customer objects 
🛠️ whose total (cart * quantity) exceeded $150
`
const filterByTotalOver150 = customersArray => {
  // Note: The popular name for the callback argument is a "predicate"
  // Your solution here
};

describe("Exercise 4", () => {
  it("calls filterByTotalOver150 with customers and returns an array of customers whose cart * quantity exceeds 150", () => {
    expect(filterByTotalOver150(customers)).toEqual([
      {
        first: "David",
        last: "Patten",
        cart: 71,
        quantity: 3,
        email: "dpat@gmail.com",
        savedItems: [2335, 9203, 1325]
      }
    ]);
  });
});

`📚 Exercise #5 -  Lets Chain! 📚

🛠️ Implement getPopularProducts below.
🛠️ This function takes an array of products and 
🛠️ returns an array of product ids of every item with a rating over 4.
`

const getPopularProducts = productsArray => {
  // Your solution here
};

describe("exercise 5", () => {
  it("calls getPopularProducts with products, filters out all products with a rating below 4, and returns an array of the remaining product ids", () => {
    expect(getPopularProducts(products)).toEqual([1325, 9203]);
  });
});


`📚 Exercise #6 -  Out of Stock! 📚

🛠️ Implement getPopularProducts below. 
🛠️ This function takes an array of products and 
🛠️ filters out products with an outOfStock value of true, 
🛠️ and return an array of objects with 
🛠️ only 'productId' and 'inStockDate' as properties. 

💡 The return array should be populated with objects of the shape 
💡 { productId: <item.productId>, inStockDate: <item.inStockDate> }
`

const getOutOfStockProducts = productsArray => {
  // Your solution here
};

describe("exercise 6", () => {
  it("calls getOutOfStockProducts with products, and returns an array of objects that look like this { productId: 9203, inStockDate: '1/1/2021' } for any product with an outOfStock value of true", () => {
    expect(getOutOfStockProducts(products)).toEqual([
      { productId: 2335, inStockDate: "12/25/2020" },
      { productId: 9203, inStockDate: "1/1/2021" }
    ]);
  });
});


`📚 Exercise #7 -  Use All of the Knowledge! 📚

This exercise will require some complex map and filter chaining, so get ready!
Of note, this function will be a bit different in that it won't return a new array.

🛠️ Implement alertOutOfStock below. 
🛠️ This function takes 3 parameters:
🛠️ an array of products, an array of customers, and a callback function.
🛠️ For each customer with a savedItems field, check if any of productIds 
🛠️ within the savedItems field are out of stock. If they are, 
🛠️ call the callback with the customer email and productId.
🛠️ Do this for every out of stock item in their savedItems array.

🚨 Not all customers will have saved items.

💡 Note: each product in the product array passed in will have 
💡 both an 'id' field and an 'outOfStock' field.

*/
`
const alertOutOfStock = (customersArray, productsArray, callback) => {
  // Your solution here
};

describe("exercise 7", () => {
  it("calls the callback with the customer email and product id for any product in the customers savedItems array that has an outOfStock value of true", () => {
    const callBack = jest.fn();

    alertOutOfStock(customers, products, callBack);

    expect(callBack.mock.calls).toEqual([
      ["rodrut@gmail.com", 2335],
      ["dpat@gmail.com", 2335],
      ["dpat@gmail.com", 9203]
    ]);
  });
});
