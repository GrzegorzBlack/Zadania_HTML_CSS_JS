// 58. Write a JavaScript program to create a new string
// of 4 copies of the last 3 characters of a given original string.
// The length of the given string must be 3 and above.

function createStr(string) {
  if (string.length >= 3) {
    let newStr = string.substr(-3, 3);
    newStr = newStr.repeat(4);
    return newStr;
  } else {
    return "String too short!";
  }
}

console.log(createStr("dyskoteka"));
