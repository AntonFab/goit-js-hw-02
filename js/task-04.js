function formatString(string, maxLength = 40) {
  // Write code under this line

  const slicedString = string.slice(0, maxLength);

  if (string.length <= maxLength) {
    return string;
  }
  return slicedString.concat("...");
}

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
