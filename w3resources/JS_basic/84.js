// Write a JavaScript to replace each character of a given string by the next
// one in the English alphabet.
//Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

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
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function replaceString(str) {
  strArray = str.split("");

  let newStr = [];
  for (let i = 0; i < strArray.length; i++) {
    console.log(strArray[i]);

    function aLetter(el) {
      return el === strArray[i];
    }

    let index = alphabet.findIndex(aLetter);
    newStr.push(alphabet[index + 1]);
  }

  return newStr.join("");
}

console.log(replaceString("javascript"));
