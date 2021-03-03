//49. Write a JavaScript program to replace every character in a given string with the
// character following it in the alphabet.

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "u",
  "w",
  "x",
  "y",
  "z",
];

function character(string) {
  let arr = string.split("");
  //console.log(arr);
  let newString = "";
  for (let i = 0; i < arr.length; i++) {
    let index = alphabet.findIndex(function isThis(el) {
      return el === arr[i];
    });
    arr[i] = alphabet[index + 1];
  }
  //console.log(arr);
  return (newString = arr.join(""));
}

console.log(character("wujek"));
