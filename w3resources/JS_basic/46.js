// 46. Write a JavaScript program to check two given non-negative integers that
// whether one of the number (not both) is multiple of 7 or 11.

function funCheck(x, y) {
  if (x % 7 === 0 && x > 0) {
    return "X is multiple of 7";
  } else if (x % 11 === 0 && x > 0) {
    return "X is multiple of 11";
  } else if (y % 7 === 0 && y > 0) {
    return "Y is multiple of 11";
  } else if (y % 11 === 0 && y > 0) {
    return "Y is multiple of 11";
  } else {
    return "Computer says nooooo";
  }
}

console.log(funCheck(76, 11));
