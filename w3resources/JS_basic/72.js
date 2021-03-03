// 72. Write a JavaScript program to check whether the first and last
// elements are equal of a given array of integers length 3.

function program(array) {
  if (array.length === 3) {
    if (array[0] === array[2]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(program([2, 5, 2]));
