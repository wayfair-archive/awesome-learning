/*eslint-disable no-unused-expressions, no-unused-vars */
import { fetchProduct, errorLogger } from "../../api/fetch_product";

` 
📚 Exercise One - Answer 📚

Notice the difference here - we removed the reject handler 
from the .then method, and added a catch to the promise. 
We had to do this, because when using the 
then(resolveHandler, rejectHandler) format, 
the rejectHandler won't actually catch an error 
if it's thrown by the resolveHandler itself.
In this case, the resolve handler was accessing 
a property on a response that wasn't always there
and throwing an error out of the resolve handler.
`;

function getRelatedItems(sku) {
  return fetchProduct(sku)
    .then(response => {
      return response.relatedItems;
    })
    .catch(errorLogger); // Notice the catch used here
}

`
📚 Exercise Two - But You Promised 📚

Lets look again at the broken implementation:

return fetchProduct("SEHO2194")
  .then(res => (responseCache = res.relatedItems[0]))
  .then(fetchProduct(responseCache))

If we look at the solution, we see we've solved 
it just by adding in an inline function!
But why? When you pass then() a non-function 
(such as a promise), it actually interprets 
it as then(null), which causes the previous promise's 
result to dissapear. Try this in your console

Promise.resolve('foo').then(Promise.resolve('bar')).then(function (result) {
  console.log(result);
});

Spoiler alert: this doesn't print out bar. 

So you can pass a promise directly into a then() method, 
but it won't do what you think it's doing. 

Just remember: always pass a function into then()!
`;
const fetchFirstRelatedItem = sku => {
  let responseCache;
  return fetchProduct("SEHO2194")
    .then(res => (responseCache = res.relatedItems[0]))
    .then(() => fetchProduct(responseCache)) // The .then() handler requires a function
    .catch(errorLogger);
};
