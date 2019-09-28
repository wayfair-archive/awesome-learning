// Exercise 1 
function addByX(x) {
  return y => {
    return x + y;
  };
}

// Exercise 2 
function once(func) {
  let hasRun = false;
  let memoizedFunc;
  return (...args) => {
    if (hasRun) {
      return memoizedFunc;
    }
    memoizedFunc = func(...args);
    hasRun = true;
    func = null;
    return memoizedFunc;
  };
}


// Exercise 3
export function counterFunc() {
  let current = 0;
  return {
    getCurrent: () => {
      return current;
    },
    incrementCurrent: () => {
      current++;
    },
    decrementCurrent: () => {
      current--;
    }
  };
}
