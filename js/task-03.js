function findLongestWord(string = "") {
  const splitedString = string.split(" ");
  let longestWord = splitedString[0];
  for (const word of splitedString) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(findLongestWord("Google do a roll"));
