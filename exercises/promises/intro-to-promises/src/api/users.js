const users = {
  "14356": {
    userId: "14356",
    name: "Hal Smith",
    isPreferredCustomer: false,
    basketId: "19456"
  },
  "14357": {
    userId: "14357",
    name: "Sarah James",
    isPreferredCustomer: true,
    basketId: ""
  },
  "14358": {
    userId: "14358",
    name: "Mal FormedData",
    isPreferredCustomer: false,
    basketId: 1234
  }
};

const randomDelay = () => Math.round(Math.random() * 1e3) + 100;

export const fetchUser = (id, cb) => {
  setTimeout(() => {
    cb(users[id]);
  }, randomDelay());
};

export const newFetchUser = id => {
  return new Promise((resolve, reject) => {
    if (typeof id != "string" || isNaN(Number(id))) {
      return reject("Invalid user ID passed");
    }
    setTimeout(() => {
      return resolve(users[id]);
    }, randomDelay());
  });
};
