/*eslint-disable no-unused-expressions */
`📚 Exercise 1 - simple forEach 📚`;
const forEach = (array, callBack) => {
  for (let i = 0; i < array.length; i++) {
    callBack(array[i]);
  }
};

`📚 Exercise 2 - Save new Users! 📚`;
const saveNewUsers = (array, callBack) => {
  array.forEach(user => {
    if (user.newCustomer) {
      callBack(user.name, user.email);
    }
  });
};

`📚 Exercise 3 - Save new Users! 📚`;
export const createLibraVariations = (array, callback) => {
  array.forEach((user, index, array) => {
    index <= array.length / 2
      ? callback({ email: user.email, libraGroup: "A" })
      : callback({ email: user.email, libraGroup: "B" });
  });
};

`📚 Exercise 4 - Log Those Users! 📚`;
const logUserInformation = (array, callBack) => {
  array.forEach(userObject => {
    Object.entries(userObject).forEach(([key, value]) => {
      if (key === "orderHistory") {
        return;
      }
      callBack(`${key}: ${value}`);
    });
  });
};
