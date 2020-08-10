function checkForSpam(str) {
  "use strict";
  // Write code under this line
  const string = str.toLowerCase();
  const checkedString =
    string.includes("spam") || string.includes("sale") ? true : false;

  return checkedString;
}

console.log(checkForSpam(""));
