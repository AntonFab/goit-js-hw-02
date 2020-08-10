function filterArray(array) {
  "use strict";
  const numbers = [];
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    // if (isFinite(numbers[i])) {
    //   numbers.push(array[i]);
    // }
    const trueNumber = Number.isFinite(array[i])
      ? numbers.push(array[i])
      : false;
  }
  return numbers;
}

console.log(filterArray([0, -0, 100, "100"]));
