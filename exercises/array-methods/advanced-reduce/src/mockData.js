export const customers = [
  {
    first: "Rodrick",
    last: "Rutledge",
    cart: 79,
    quantity: 1,
    email: "rodrut@gmail.com",
    savedItems: [1992, 1120, 2335, 1429]
  },
  {
    first: "Michael",
    last: "Compton",
    cart: 143,
    quantity: 1,
    email: "michaelc@gmail.com",
    savedItems: [1111, 2335, 2222]
  },
  {
    first: "Otis",
    last: "Smith",
    cart: 67,
    quantity: 2,
    email: "otissmith@gmail.com",
    savedItems: [9013, 1120, 2335]
  },
  {
    first: "David",
    last: "Patten",
    cart: 71,
    quantity: 3,
    email: "dpat@gmail.com",
    savedItems: [1939, 9203, 1325, 2335]
  },
  {
    first: "Anthony",
    last: "Pleasant",
    cart: 49,
    quantity: 2,
    email: "anthonypleasant@gmail.com",
    savedItems: [8090, 7998, 4563, 2335]
  }
];

export const products = [
  {
    id: 2335,
    name: "Darby Sectional",
    rating: 3.2,
    outOfStock: true,
    inStockDate: "12/25/2020",
    category: "livingroom_furniture"
  },
  {
    id: 1325,
    name: "Red Bar Stool",
    rating: 4.3,
    category: "livingroom_stool"
  },
  {
    id: 9203,
    name: "Lamp",
    rating: 4.7,
    outOfStock: true,
    inStockDate: "1/1/2021",
    category: "lighting_small"
  },
  {
    id: 1120,
    name: "Quilted Head Board",
    rating: 2.4,
    category: "bedroom_furniture"
  },
  {
    id: 4435,
    name: "Rusty Barn Door",
    rating: 4.2,
    category: "livingroom_doors"
  },
  {
    id: 4195,
    name: "Darby Love Seat",
    rating: 3.5,
    category: "livingroom_furniture"
  },
  {
    id: 3113,
    name: "Super Plush Nora Mattress",
    rating: 4.8,
    category: "bedroom_bed"
  }
];

export const malformedProductData = {
  bedroom_bed: "category",
  livingroom_furniture: "category",
  "super plush mattress": "name",
  bedroom_furniture: "category",
  lighting_small: "category",
  "red stool": "name"
};
