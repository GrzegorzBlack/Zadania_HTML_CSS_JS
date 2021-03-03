//40. Write a JavaScript program to check from two given integers whether one of them is 8
// or their sum or difference is 8.

function check(x, y) {
  if (x + y === 8) {
    return "Sum of integers is 8";
  } else if (x == 8 || y == 8) {
    return "One of integers is 8";
  } else if (Math.abs(x - y) === 8) {
    return "Difference between integers is 8";
  } else {
    return "No 8 at all";
  }
}

console.log(check(16, 8));
