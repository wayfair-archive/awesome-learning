import { fetchUser, newFetchUser } from "../api/users";
import fetchBasket from "../api/baskets";
/**
 * Exercise 1 - Let's write a promise
 */

const exerciseOne = () => {
  // Your code here
  return new Promise(resolve =>
    setTimeout(() => resolve("promise complete!"), 100)
  );
};

test('the promise resolves with a string of "promise complete!"', () => {
  return expect(exerciseOne()).resolves.toBe("promise complete!");
});

/**
 * Exercise 2 - Rejected!
 */

const exerciseTwo = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("promise rejected!"), 100)
  );
};

test('the promise rejects with a string of "promise rejected!"', () => {
  expect.assertions(1);
  return expect(exerciseTwo()).rejects.toMatch("promise rejected!");
});

/**
 * Exercise 3 - Converting to a promise
 */

const getUserById = id => {
  // Your code here
  return new Promise(response => fetchUser(id, response));
};

test("getUserId is a promise that returns users when called with ids", () => {
  return getUserById("14356").then(res => {
    expect(res).toEqual({
      userId: "14356",
      basketId: "19456",
      isPreferredCustomer: false,
      name: "Hal Smith"
    });
  });
});

/**
 * Exercise 4 - Getting values from a promise
 */

const getBasketId = userId => {
  // Your code here
  return newFetchUser(userId).then(userObject =>
    userObject ? userObject.basketId : ""
  );
};

test("getBasketId returns a basket ID when one exists", () => {
  return expect(getBasketId("14356")).resolves.toBe("19456");
});
test("getBasketId returns empty string when no basket id exists", () => {
  return expect(getBasketId("14357")).resolves.toEqual("");
});

/**
 * Exercise 5 - Implement getBasketItems
 */

const getBasketItems = basketId => {
  // Your code here
  return fetchBasket(basketId).then(basketObject => {
    if (basketObject && basketObject.items.length > 0) {
      return basketObject.items;
    } else {
      return [];
    }
  });
};

test("getBasketItems returns an array of basket Items when one exists", () => {
  return expect(getBasketItems("19456")).resolves.toEqual([
    "SETO12945, HRTI4567"
  ]);
});
test("getBasketItems returns an empty array when the id does not match a basket", () => {
  return expect(getBasketItems("")).resolves.toEqual([]);
});
test("getBasketItems catches an error in getBasketId when invalid basketId is passed", () => {
  return expect(getBasketItems("this is invalid")).rejects.toBe(
    "Invalid basket ID passed"
  );
});

/**
 * Exercise 6 - Putting it all together
 */


/** ************************** OK SOLUTION ***************************************** */
const getUserBasket = userId => {
  return getBasketId(userId)
    .then(basketId => {
      return getBasketItems(basketId)
    })
    .catch();
};

/** ************************** BETTER(?) SOLUTION ***************************************** */
const getUserBasket = userId => {
  return getBasketId(userId)
    .then(getBasketItems)
    .catch();
};

/**
 * If you are curious how the above works, check out  
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#Parameters
 */

test("getUserBasket returns basket items when they exist", () => {
  return expect(getUserBasket("14356")).resolves.toEqual([
    "SETO12945, HRTI4567"
  ]);
});
test("getUserBasket returns empty array when a user has no basket ID", () => {
  return expect(getUserBasket("14357")).resolves.toEqual([]);
});
test("getUserBasket throws an error when an invalid user id is passed", () => {
  return expect(getUserBasket("invalid id")).rejects.toBe("Invalid user ID passed");
});
test("getUserBasket throws an error when an invalid basket id is passed", () => {
  // This should throw an error on the basket call because the user returns
  // a null basket id which isn't a valid parameter for the basket endpoint.
  return expect(getUserBasket("14358")).rejects.toBe("Invalid basket ID passed");
});
