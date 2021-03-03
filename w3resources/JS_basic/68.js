// 68. Write a JavaScript program to create a new string using the first and
// last n characters from a given sting. The string length must be greater
//  or equal to n.

function program(str, n) {
  if (str.length >= n) {
    let first = str.substring(0, n);
    let last = str.substring(str.length - n);

    let newStr = first + last;

    return newStr;
  } else {
    return "String is too short!";
  }
}

console.log(program("python", 2));
