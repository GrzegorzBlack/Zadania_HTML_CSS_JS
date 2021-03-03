// 24. Write a JavaScript program to create a new string from a given string
// with the first character of the given string added at the front and back.

function change(str) {
  let letter = str.charAt(str[0]);

  let newString = letter + str + letter;
  return newString;
}

console.log(change("letters"));
