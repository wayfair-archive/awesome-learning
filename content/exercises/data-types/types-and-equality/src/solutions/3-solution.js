// BEGIN HELPER DATA
const ITEMS = [
  { sku: "ABC123", name: "Acme Office Chair", price: "49.50" },
  { sku: "DEF456", name: "Acme 12-Piece Dinnerware Set", price: "39" },
  { sku: "GHI789", name: "Acme Patio Lantern", price: "24.99" }
];
const TAX_RATES = {
  zone1: "0.0275",
  zone2: "0.035",
  zone3: "0.065"
};
// END HELPER DATA

// Fix the following functions!
const getTaxRate = zone => {
  return TAX_RATES[zone];
};

const getItemBySku = sku => {
  return ITEMS.find(item => item.sku === sku);
};

const applyTax = (cost, zone) => {
  // fix #2: coerce the string into a number, otherwise `cost + cost` does string concatenation
  const costNumber = Number(cost);
  // fix #4 - provide a default value for taxRate in casethe api returns undefined
  const taxRate = getTaxRate(zone) || 0.0;
  // fix #5 - make sure taxRate is a number
  const withTax = costNumber + costNumber * Number(taxRate);
  return Math.round(withTax * 100) / 100;
};

const getTotalPriceBySku = (sku, zone) => {
  const item = getItemBySku(sku);
  // fix #3: return `null` if the SKU doesn't match anything to avoid TypeError
  if (item == null) {
    return null;
  }
  return applyTax(item.price, zone); // fix #1: `item.price` instead of `item` so `applyTax()` doesn't get an object
};
