// 65. Write a JavaScript program to test whether a string end with "Script".
// The string length must be greater or equal to 6.

function test(str) {
  if (str.length >= 6) {
    let newStr = str.substring(str.length - 6);
    if (newStr == "Script") {
      return true;
    } else {
      return false;
    }
  } else {
    return "String is too short!";
  }
}

console.log(test("JavaScript"));
