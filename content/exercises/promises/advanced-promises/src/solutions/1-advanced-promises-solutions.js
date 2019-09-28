/*eslint-disable no-unused-expressions */
import { fetchProduct } from "../../api/fetch_product";

`📚 Exercise One - Handling multiple promises in parallel 📚`;

function requestProducts(arrayOfPromises) {
  // Your solution here
  return Promise.all(arrayOfPromises);
}

`📚 Exercise Two - More Error handling in Promises 📚`;
function requestSalePrice(sku) {
  // Your solution here
  return fetchProduct(sku)
    .then(response => {
      if (!response) {
        throw new Error("Your response did not include a product");
      }
      if (response.salePrice) {
        return response.salePrice;
      } else {
        throw new Error("Your product is not on sale");
      }
    })
    .catch();
}

`📚 Exercise Three - Handle individual errors in a parallel request 📚`;

export function ehancedRequestAllFiles(arrayOfPromises) {
  // Your Code Here
  return Promise.all(
    arrayOfPromises.map(promise =>
      promise
        .then(response => ({ data: response, error: null }))
        .catch(error => ({ data: null, error }))
    )
  );
}
