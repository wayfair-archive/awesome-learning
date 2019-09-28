const baskets = {
  "19456": {
    customerId: "14356",
    name: "Hal Smith",
    items: ["SETO12945, HRTI4567"]
  },
  "12345": {}
};

const randomDelay = () => Math.round(Math.random() * 1e3) + 100;

const fetchBasket = id => {
  return new Promise((resolve, reject) => {
    if (typeof id != "string" || isNaN(Number(id))) {
      return reject("Invalid basket ID passed");
    }
    setTimeout(() => {
      if (baskets[id]) {
        resolve(baskets[id]);
      } else {
        resolve(null);
      }
    }, randomDelay());
  });
};

export default fetchBasket;
