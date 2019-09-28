/*eslint-disable no-unused-expressions */
import { userData } from "../userData";

`
⬇️

Welcome to Array Methods - forEach 

This session is designed to introduce you to functional array methods through the forEach method.
Array methods like forEach provide us with new ways 
to operate on lists, largely replacing the for loops we are familiar with. 

💡 We will be importing some mock user data to test your 
💡 functions. Feel free to check it out in the userData.js file
💡 The approximate shape of the data is:
💡[
💡 {
💡   name: "Hal Smith",
💡   email: "hal@gmail.com",
💡   emailOptout: true,
💡   newCustomer: true,
💡   orderHistory: [{ orderNumber: 1, orderDate: "8/19" }]
💡  }
💡]

⬆️
`;

`📚 Exercise 1 - simple forEach 📚

In this exercise, you will be building a simple version of forEach. 
This is by no means an exhaustive forEach. 
The actual forEach spec handles objects, arrays, and sparse
arrays but this will help understand the inner-workings of forEach.

🛠️ Implement a function called forEach that takes in
🛠️ an array and a callback, and will apply the  
🛠️ callback to every element in an array. 

💡 You will need to use a for-loop for this.
`;

const forEach = (array, callBack) => {
  // Your solution here
};

describe("Exercise 1", () => {
  it("Calls the callback with all the words in exerciseOneArray", () => {
    const exerciseOneArray = ["this", "is", "working"];
    const callback = jest.fn();
    forEach(exerciseOneArray, callback);
    expect(callback.mock.calls).toEqual([["this"], ["is"], ["working"]]);
  });
});

`
📚 Exercise 2 - Save new Users! 📚

🛠️ Implement the saveNewUsers function.
🛠️ It should take an array of users and and a callback. 
🛠️ For each user, if the "newCustomer" property is true,
🛠️ execute the callback with the user.name and user.email.
`;
const saveNewUsers = (array, callBack) => {
  // Your solution here
};

describe("Exercise 2", () => {
  it("Calls the saveUser callback on every user with a newCustomer property of true", () => {
    const saveUser = jest.fn();
    saveNewUsers(userData, saveUser);
    expect(saveUser.mock.calls).toEqual([
      ["Hal Smith", "hal@gmail.com"],
      ["Elizabeth Chandler", "elizabeth@gmail.com"],
      ["James Yertz", "james@gmail.com"]
    ]);
  });
});

`📚 Exercise 3 - Save new Users! 📚

🛠️ Implement the createLibraVariations function
🛠️ This function takes two inputs:
🛠️ an array of users and a callback. Iterate through all users. 
🛠️ For the the first half of users, call the callback with 
🛠️ an object consisting of the user's email address, and 'libraGroup: "A"'.
🛠️ For the second half of users, call the callback with 
🛠️ an object consisting of the user's email address, and libraGroup: "B".

💡 The parameter to the callback should look something 
💡 like this: callback({email: user.email, libraGroup: "A"})
`;

export const createLibraVariations = (array, callback) => {
  // Your solution here
};

describe("Exercise 3", () => {
  it("calls the callback with {userEmail, libraGroup: 'A'} for the first half of users and {userEmail, libraGroup: 'B'} for the second half of users", () => {
    const saveLibraVariation = jest.fn();
    createLibraVariations(userData, saveLibraVariation);
    expect(saveLibraVariation.mock.calls).toEqual([
      [{ email: "hal@gmail.com", libraGroup: "A" }],
      [{ email: "roger@gmail.com", libraGroup: "A" }],
      [{ email: "elizabeth@gmail.com", libraGroup: "A" }],
      [{ email: "roger@gmail.com", libraGroup: "B" }],
      [{ email: "james@gmail.com", libraGroup: "B" }]
    ]);
  });
});

`📚 Exercise 4 - Log Those Users! 📚

🛠️ Implement the logUserGroup function.
🛠️ This function takes an array of users and a callback
🛠️ Call the callback with each key/value
🛠️ pair on the user object in the format "{key}: {value}",
🛠️ EXCLUDING the orderHistory field.

💡 For Example, the following user
💡 {
💡   name: "Roger Branch",
💡   newCustomer: false,
💡   orderHistory: [
💡     { orderNumber: 1, orderDate: "8/19" },
💡     { orderNumber: 2, orderDate: "4/27" }
💡   ],
💡 }
💡 would result in the callback being called with:
💡 '"name: Roger Branch"'
💡 '"newCustomer: false"'
`;

const logUserInformation = (array, callBack) => {
  // Your solution here
};

describe("Exercise 4", () => {
  it("Calls the callback with every key/value pair on each user object EXCEPT orderHistory", () => {
    const logUserCallBack = jest.fn();
    logUserInformation(userData, logUserCallBack);
    expect(logUserCallBack.mock.calls).toEqual([
      ["name: Hal Smith"],
      ["email: hal@gmail.com"],
      ["emailOptout: true"],
      ["newCustomer: true"],
      ["name: Roger Branch"],
      ["email: roger@gmail.com"],
      ["newCustomer: false"],
      ["name: Elizabeth Chandler"],
      ["email: elizabeth@gmail.com"],
      ["newCustomer: true"],
      ["name: Roger Trot"],
      ["email: roger@gmail.com"],
      ["newCustomer: false"],
      ["name: James Yertz"],
      ["email: james@gmail.com"],
      ["newCustomer: true"]
    ]);
  });
});
