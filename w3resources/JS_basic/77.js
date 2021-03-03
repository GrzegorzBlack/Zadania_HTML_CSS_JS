// 77. Write a JavaScript program to test whether an array of integers of
// length 2 contains 1 or a 3.

function check(array) {
  const found = array.find((el) => el == array[0] || el === array[1]);
  if (found) {
    return true;
  } else {
    return true;
  }
}

console.log(check([2, 8]));
