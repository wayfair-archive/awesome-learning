/* eslint-disable no-unused-expressions */
`
⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

Practical Types and Equality
 
  getTotalPriceBySku() is supposed to return an item's total price (price plus tax)
  when given an item's SKU and geographical zone, but it currently doesn't work properly:
  it always returns the value NaN.
 
  🛠️ Debug the following functions until every test case either returns 
  🛠️ the correct total price or null if the sku doesn't exist.

  💡 This is a freeform exercise - rely on your knowledge of types 
  💡 and coercion to figure out what's going wrong with this function. 

  🚨 If you get stuck, check out the solution

  ⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️
`;

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
  const taxRate = getTaxRate(zone);
  const withTax = cost + cost * taxRate;
  return Math.round(withTax * 100) / 100;
};

const getTotalPriceBySku = (sku, zone) => {
  const item = getItemBySku(sku);
  return applyTax(item, zone);
};

describe("getToalPriceBySku", () => {
  describe("getTotalPriceBySku with zones", () => {
    it('should return 49.50 when given "ABC123" and zone1', () => {
      expect(getTotalPriceBySku("ABC123", "zone1")).toBe(50.86);
    });
    it('should return 39 when given "DEF456" and zone2', () => {
      expect(getTotalPriceBySku("DEF456", "zone2")).toBe(40.37);
    });
    it('should return 24.99 when given "GHI789" and zone3', () => {
      expect(getTotalPriceBySku("GHI789", "zone3")).toBe(26.61);
    });
    it('should return original price when given "FOO999" and a zone without a tax rate', () => {
      expect(getTotalPriceBySku("GHI789", "zone4")).toBe(24.99);
    });
  });

  describe("getTotalPriceBySku", () => {
    it('should return 52.59 when given "ABC123" and zone1', () => {
      expect(getTotalPriceBySku("ABC123")).toBe(49.5);
    });
    it('should return 41.44 when given "DEF456"', () => {
      expect(getTotalPriceBySku("DEF456")).toBe(39);
    });
    it('should return 26.55 when given "GHI789"', () => {
      expect(getTotalPriceBySku("GHI789")).toBe(24.99);
    });
    it('should return null when given "FOO999"', () => {
      expect(getTotalPriceBySku("FOO999")).toBeNull();
    });
  });
});
