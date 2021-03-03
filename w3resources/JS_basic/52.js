// 52. Write a JavaScript program to convert the letters of a
// given string in alphabetical order

function convertion(string) {
  let newString = string.split("");
  newString.sort();
  return newString;
}

console.log(convertion("zaptiv"));
