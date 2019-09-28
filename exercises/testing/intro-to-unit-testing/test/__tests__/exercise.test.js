import { test1, test2, test3, test4 } from "../../src/1-unit-tests-with-jest";
// import { test1, test2, test3, test4 } from "../src/solution";

describe("Testing tests", () => {
  const toBeSpy = jest.fn();
  const toEqualSpy = jest.fn();
  const itSpy = jest.fn();
  const expectObj = {
    toBe: toBeSpy,
    toEqual: toEqualSpy
  };
  const expectSpy = jest.fn().mockReturnValue(expectObj);

  afterEach(() => {
    jest.clearAllMocks();
  });

  const runTestsOnTests = dataType => {
    expect(itSpy).toBeCalledWith(expect.any(String), expect.any(Function));

    // Call function argument that should call expect():
    itSpy.mock.calls[0][1]();
    if (toBeSpy.mock.calls.length) {
      expect(toBeSpy).toBeCalledWith(expect.any(dataType));
      expect(expectSpy.mock.calls[0][0]).toBe(toBeSpy.mock.calls[0][0]);
    } else if (toEqualSpy.mock.calls.length) {
      expect(toEqualSpy).toBeCalledWith(expect.any(dataType));
      expect(expectSpy.mock.calls[0][0]).toEqual(toEqualSpy.mock.calls[0][0]);
    } else {
      throw new Error(
        "expected .toBe or .toEqual to be called, but neither was called"
      );
    }
  };

  it("test1 calls test with description and callback", () => {
    test1(itSpy, expectSpy);

    runTestsOnTests(String);
  });

  it("test2 tests for object deep equality", () => {
    test2(itSpy, expectSpy);

    runTestsOnTests(Object);
  });

  it("test3 tests wishlist total function", () => {
    test3(itSpy, expectSpy);

    runTestsOnTests(Number);

    // Make sure the function works with the wishlistData
    expect(expectSpy.mock.calls[0][0]).toEqual(60);
  });

  it("test4 tests wishlist_v2 total function", () => {
    test4(itSpy, expectSpy);

    runTestsOnTests(Number);

    // Make sure the function works with the wishlistWithSalePrice
    expect(expectSpy.mock.calls[0][0]).toEqual(40);
  });
});
