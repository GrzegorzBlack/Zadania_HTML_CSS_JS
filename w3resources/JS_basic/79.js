// 78. Write a JavaScript program to test whether an array of integers of
// length 2 does not contain 1 or a 3.

function test(array) {
  if (array.includes(1) === true || array.includes(3) === true) {
    return true;
  } else {
    return false;
  }
}

console.log(test([2, 8]));
