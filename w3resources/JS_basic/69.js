// 69. Write a JavaScript program to compute the sum of three elements of a given
// array of integers of length 3.

function sum(int) {
  if (int.length === 3) {
    let sumNumbers = int.reduce((a, b) => a + b, 0);
    return sumNumbers;
  } else {
    return "Aray length should be 3!";
  }
}

console.log(sum([2, 5, 4]));
