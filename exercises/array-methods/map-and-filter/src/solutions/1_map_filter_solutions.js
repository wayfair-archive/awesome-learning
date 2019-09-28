`📚 Exercise #1 - Write a vanilla JS implementation of map 📚`

const vanillaMap = (numArray, callback) => {
  let results = [];
  numArray.forEach(itemInArray => {
    results.push(callback(itemInArray));
  });
  return results;
};

`📚 Exercise #2 - Write a vanilla JS implementation of filter 📚`

const vanillaFilter = (numArray, callBack) => {
  // Your code goes here!
  let results = [];
  numArray.forEach(itemInArray => {
    if (callBack(itemInArray)) {
      results.push(itemInArray);
    }
  });
  return results;
};

`📚 Exercise #3 - New Product Objects via Map 📚`

const getProductMetaData = productsArray => {
  return productsArray.map(product => ({
    productName: product.name,
    productId: product.id
  }));
};


`📚 Exercise #4 - Filtering Customers 📚`

const filterByTotalOver150 = customersArray => {
  return customersArray.filter(customer => {
    const total = customer.cart * customer.quantity;
    return total > 150;
  });
};

`📚 Exercise #5 - Lets Chain! 📚`

const getPopularProducts = productsArray => {
  return productsArray
    .filter(product => product.rating > 4)
    .map(product => product.id);
};

`📚 Exercise #6 -  Out of Stock! 📚`

const getOutOfStockProducts = productsArray => {
  return productsArray
    .filter(product => product.outOfStock)
    .map(product => ({
      productId: product.id,
      inStockDate: product.inStockDate
    }));
};

`📚 Exercise #7 -  Use All of the Knowledge! 📚`

const alertOutOfStock = (customersArray, productsArray, callback) => {
  const outOfStockItemIds = productsArray
    .filter(product => product.outOfStock)
    .map(item => item.id);

  customersArray.map(customer => {
    if (!customer.savedItems) {
      return;
    }
    customer.savedItems.filter(id => {
      if (outOfStockItemIds.includes(id)) {
        callback(customer.email, id);
      }
    });
  });
};

