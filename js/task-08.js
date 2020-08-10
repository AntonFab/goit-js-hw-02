function reduceArray(array) {
  "use strict";
  let total = 0;
  // Write code under this line
  for (const value of array) {
    total += value;
  }
  return total;
}

console.log(reduceArray([1, 2, 3]));
