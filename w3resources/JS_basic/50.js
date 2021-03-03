// Write a JavaScript program to capitalize the first letter
// of each word of a given string.

function capitalize(string) {
  let splitString = string.split(" ");
  console.log(splitString);
  for (let i = 0; i < splitString.length; i++) {
    let rest = splitString[i].substring(1);
    let first = splitString[i].substring(0, 1);
    first = first.toUpperCase();

    rest = first + rest;

    splitString[i] = rest;
  }
  return splitString.join(" ");
}

console.log(capitalize("this is big problem in our community"));
