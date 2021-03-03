// 20. Write a JavaScript program to check from two given integers, whether
// one is positive and another one is negative.

function checkNumbers(x, y) {
  if (x > 0 && y < 0) {
    return true;
  } else if (x < 0 && y > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkNumbers(2, 5));

console.log(checkNumbers(-2, 5));

console.log(checkNumbers(2, -5));
