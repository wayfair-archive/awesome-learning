// Challenge #2
// Implement a function, sortByDateAndOrderQuantity, that sorts orders by oldest date AND highest total quantity.
const sortByDateAndOrderQuantity = orders => {
  return orders.sort((a, b) => {
    // If the date of A is large than B, sort B higher than A
    if (new Date(a.date) >= new Date(b.date)) {
      // Total quantity of b is higher than a, sort B higher than A
      if (a.totalQuantity < b.totalQuantity) {
        return 1;
      } else if (a.totalQuantity > b.totalQuantity) {
        return -1;
      }
    } else {
      return -1;
    }
  });
};

export { sortByDateAndOrderQuantity };
