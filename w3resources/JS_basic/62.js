// 62. Write a JavaScript program to move last three character to the start of
// a given string. The string length must be greater or equal to three.

function move(str) {
  let three = str.slice(str.length - 3, str.length);
  let clip = str.substring(0, str.length - 3);
  let newStr = three + clip;
  return newStr;
}

console.log(move("javascript"));
