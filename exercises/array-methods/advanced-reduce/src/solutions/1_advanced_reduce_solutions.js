/*eslint-disable no-unused-expressions */
`📚 Exercise #1 - Averaging Numbers `;

const averageCategoryRating = (products, key) => {
  // Your solution here
  return products
    .filter(product => product.category.split("_").includes(key))
    .reduce((acc, curr, index, array) => {
      return index === array.length - 1
        ? Math.round(((acc += curr.rating) / array.length) * 10) / 10
        : (acc += curr.rating);
    }, 0);
};

`📚 Exercise #2: Normalizing Data 📚 `;

const groupByKeys = malformedData => {
  // Your solution here
  return Object.keys(malformedData).reduce((grouped, newKey) => {
    const newType = malformedData[newKey];
    return {
      ...grouped,
      [newType]: grouped[newType] ? [...grouped[newType], newKey] : [newKey]
    };
  }, {});
};

`📚 Exercise #3 - Array Intersection 📚 `

const savedItemsIntersection = customers => {
  // Your solution here
  return customers
    .reduce((acc, curr) => {
      return [...acc, curr.savedItems];
    }, [])
    .reduce((accumulator, currentArray) => {
      // build an array using the matching values from arrays[n] and arrays[n+1] and do the same for all arrays.
      return accumulator.filter(value => currentArray.includes(value));
    });
};

