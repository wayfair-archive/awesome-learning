// Challenge #1
// Implement a function, sortIds, that sorts orders by order ID from lowest number to highest number.
const sortIds = orders => {
  return orders.sort((a, b) => (a.id > b.id ? 1 : -1));
};

export { sortIds };
