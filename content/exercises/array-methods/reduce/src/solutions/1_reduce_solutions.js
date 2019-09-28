/*eslint-disable no-unused-expressions */
`📚 Exercise #1 - Write a vanilla JS implementation of reduce 📚`

const vanillaReduce = (array, callback, initialValue) => {
  let accumulator = initialValue;

  array.forEach((value, index) => {
    accumulator = callback(accumulator, value, index, array);
  });

  return accumulator;
};

`📚 Exercise #2 - Accumulate Saved Items`

const totalSavedItems = customers => {
  return customers.reduce((total, currentCustomer) => {
    return total + currentCustomer.savedItemIds.length;
  }, 0);
};

`📚 Exercise #3 - Saved Item Ids 📚`

const getSavedItems = customers => {
  return customers.reduce((accumulator, value) => {
    const nonUniqueIds = [...accumulator, ...value.savedItemIds];
    return [...new Set(nonUniqueIds)];
  }, []);
};

`📚 Exercise #4 - Most Popular Items 📚`

const getSavedItemFrequency = customers => {
  // Your solution here
  return customers
    .reduce((acc, curr) => {
      return [...acc, ...curr.savedItemIds];
    }, [])
    .reduce((accumulator, itemId) => {
      return {
        ...accumulator,
        [itemId]: accumulator[itemId] ? accumulator[itemId] + 1 : 1
      };
    }, {});
};