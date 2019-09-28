const ERROR_MESSAGE = "Error loading file";

const data = {
  INIT0000: {
    name: "Custom Sectional"
  },
  INIT0001: {
    name: "Down Pillow"
  },
  INIT0002: {
    name: "King Size Blanket"
  },
  SEHO2194: {
    id: 2335,
    name: "Darby Sectional",
    rating: 3.2,
    outOfStock: true,
    inStockDate: "12/25/2020",
    category: "livingroom_furniture",
    price: 19.99,
    salePrice: 17.99,
    relatedItems: ["TETO1100", "RIGH2345"]
  },
  TETO1100: {
    id: 1325,
    name: "Red Bar Stool",
    rating: 4.3,
    category: "livingroom_stool",
    price: 22.99
  },
  RIGH2345: {
    id: 2134,
    name: "Red Table",
    rating: 3.9,
    category: "kitchen_table",
    price: 22.99
  },
  NOPR0000: null,
  DRTG1100: "ERROR"
};

function fetchProduct(sku) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      try {
        const response = data[sku];
        if (response === "ERROR") {
          throw new Error(ERROR_MESSAGE);
        }
        resolve(response);
      } catch (err) {
        reject(err);
      }
    }, 1);
  });
}

let errorLogger = jest.fn();

export { data, errorLogger, fetchProduct };
