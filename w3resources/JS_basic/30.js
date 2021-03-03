// 30. Write a JavaScript program to check whether a string "Script" presents
// at 5th (index 4) position in a given string, if "Script" presents in the
// string return the string without "Script" otherwise return the original one.

function checkString(string) {
  if (string.substring(4, 10) === "Script") {
    let newString = string.substring(0, 4) + string.substring(10);
    return newString;
  } else {
    return string;
  }
}

const ifExist = checkString("JavaScript");

console.log(ifExist);
