/**
 * Exercise 1:
 */

const reverse = str =>
  str.split("").reduce((reversed, letter) => letter + reversed, "");

export const test1 = (it, expect) => {
  it("reverses strings", () => {
    expect(reverse("hey")).toBe("yeh");
  });
};

/**
 * Exercise 2:
 */

const makeUser = (name, hobbies = []) => {
  return {
    name,
    hobbies
  };
};

export const test2 = (it, expect) => {
  // Write a test for makeUser, which takes in `name` and `hobbies` arguments, and returns an
  // object with those properties.
  it("creates a user object", () => {
    const user = makeUser("Melissa", ["Engineering", "AI"]);
    expect(user).toEqual({
      name: "Melissa",
      hobbies: ["Engineering", "AI"]
    });
  });
};

/**
 * Exercise 3:
 */

const getCartTotal = wishlist => {
  return wishlist.reduce((total, item) => {
    if (item.addedToCart) {
      return total + (item.salePrice || item.price);
    }
    return total;
  }, 0);
};

const wishlistData = [
  { id: "4027", addedToCart: true, price: 20.0 },
  { id: "5301", addedToCart: false, price: 20.0 },
  { id: "6711", addedToCart: true, price: 20.0 },
  { id: "1244", addedToCart: false, price: 20.0 },
  { id: "4765", addedToCart: true, price: 20.0 }
];

export const test3 = (it, expect) => {
  // Write your test here
  it("getCartTotal returns the right cart total", () => {
    expect(getCartTotal(wishlistData)).toBe(60);
  });
};

// While you were writing that test, we got a new requirement... The data was updated
// to include a `salePrice`, so now it needs to handle both types of data.

const wishlistWithSalePrice = [
  { id: "4027", addedToCart: true, price: 20.0, salePrice: 10.0 },
  { id: "5301", addedToCart: false, price: 20.0, salePrice: 10.0 },
  { id: "6711", addedToCart: true, price: 20.0, salePrice: 10.0 },
  { id: "1244", addedToCart: false, price: 20.0, salePrice: null },
  { id: "4765", addedToCart: true, price: 20.0, salePrice: null }
];

/**
 * Exercise 4: Intro to Test Driven Development
 */

export const test4 = (it, expect) => {
  // Write your test here
  it("getCartTotal returns the right cart total including sale price", () => {
    expect(getCartTotal(wishlistWithSalePrice)).toBe(40);
  });
};

/**
 * Exercise 5
 */

// Note the differences in getCartTotal, it's already refactored!
